import * as THREE from 'three';
import { clamp, damp } from './utils.js';

const MOVE_KEYS = new Set(['KeyW', 'KeyA', 'KeyS', 'KeyD', 'ShiftLeft', 'ShiftRight']);

export class PlayerController {
  constructor(camera, world, buildSystem, audio) {
    this.camera = camera;
    this.camera.rotation.order = 'YXZ';
    this.world = world;
    this.buildSystem = buildSystem;
    this.audio = audio;

    this.position = new THREE.Vector3(0, world.heightAt(0, 13), 13);
    this.velocity = new THREE.Vector3();
    this.radius = 0.38;
    this.height = 1.75;
    this.eyeHeight = 1.64;
    this.yaw = 0;
    this.pitch = -0.035;
    this.sensitivity = 0.0019;
    this.grounded = true;
    this.enabled = false;
    this.alive = true;

    this.health = 100;
    this.maxHealth = 100;
    this.shield = 0;
    this.maxShield = 100;
    this.eliminations = 0;
    this.damageDealt = 0;
    this.lastDamageAt = -10;

    this.keys = new Set();
    this.jumpQueued = false;
    this.walkTime = 0;
    this.bob = 0;
    this.bobRoll = 0;
    this.recoil = 0;
    this.recoilYaw = 0;
    this.landKick = 0;
    this.moving = false;
    this.speed = 0;
    this.sprinting = false;
    this.stepTimer = 0;
    this.enabledAt = 0;

    this.camera.position.set(this.position.x, this.position.y + this.eyeHeight, this.position.z);
    this.applyCameraRotation(0);

    this.onKeyDown = this.onKeyDown.bind(this);
    this.onKeyUp = this.onKeyUp.bind(this);
    this.onMouseMove = this.onMouseMove.bind(this);
    this.onBlur = this.onBlur.bind(this);

    window.addEventListener('keydown', this.onKeyDown);
    window.addEventListener('keyup', this.onKeyUp);
    window.addEventListener('mousemove', this.onMouseMove);
    window.addEventListener('blur', this.onBlur);
  }

  reset() {
    this.position.set(0, this.world.heightAt(0, 13), 13);
    this.velocity.set(0, 0, 0);
    this.yaw = 0;
    this.pitch = -0.035;
    this.health = this.maxHealth;
    this.shield = 0;
    this.alive = true;
    this.eliminations = 0;
    this.damageDealt = 0;
    this.grounded = true;
    this.jumpQueued = false;
    this.recoil = 0;
    this.applyCameraRotation(0);
  }

  onKeyDown(event) {
    if (!this.enabled) return;
    if (MOVE_KEYS.has(event.code)) {
      this.keys.add(event.code);
      if (event.code.startsWith('Shift')) this.sprinting = true;
    }
    if (event.code === 'Space' && !event.repeat) {
      event.preventDefault();
      this.jumpQueued = true;
    }
  }

  onKeyUp(event) {
    this.keys.delete(event.code);
    if (event.code === 'ShiftLeft' || event.code === 'ShiftRight') this.sprinting = false;
  }

  onMouseMove(event) {
    if (!this.enabled || document.pointerLockElement === null) return;
    this.yaw -= event.movementX * this.sensitivity;
    this.pitch -= event.movementY * this.sensitivity;
    this.pitch = clamp(this.pitch, -1.35, 1.32);
  }

  onBlur() {
    this.keys.clear();
    this.sprinting = false;
  }

  applyCameraRotation(delta) {
    this.camera.rotation.set(this.pitch + this.recoil + this.landKick, this.yaw + this.recoilYaw, this.bobRoll);
    this.camera.position.set(this.position.x, this.position.y + this.eyeHeight + this.bob, this.position.z);
  }

  update(dt, elapsed) {
    if (!this.enabled || !this.alive) return;

    const forwardInput = (this.keys.has('KeyW') ? 1 : 0) - (this.keys.has('KeyS') ? 1 : 0);
    const rightInput = (this.keys.has('KeyD') ? 1 : 0) - (this.keys.has('KeyA') ? 1 : 0);
    const sprinting = this.sprinting && forwardInput > 0 && this.grounded;
    const baseSpeed = sprinting ? 9.1 : 6.05;
    const targetSpeed = Math.hypot(forwardInput, rightInput) > 0 ? baseSpeed : 0;

    const sin = Math.sin(this.yaw);
    const cos = Math.cos(this.yaw);
    let dx = (-sin * forwardInput + cos * rightInput);
    let dz = (-cos * forwardInput - sin * rightInput);
    const length = Math.hypot(dx, dz);
    if (length > 0) {
      dx /= length;
      dz /= length;
    }

    const acceleration = this.grounded ? 13 : 4.2;
    this.velocity.x = damp(this.velocity.x, dx * targetSpeed, acceleration, dt);
    this.velocity.z = damp(this.velocity.z, dz * targetSpeed, acceleration, dt);

    if (this.jumpQueued) {
      this.jumpQueued = false;
      if (this.grounded) {
        this.velocity.y = 8.3;
        this.grounded = false;
        this.audio?.jump();
      }
    }

    this.velocity.y -= 23.5 * dt;
    this.velocity.y = Math.max(this.velocity.y, -32);

    this.position.x += this.velocity.x * dt;
    this.position.z += this.velocity.z * dt;
    this.resolveHorizontalCollisions();

    this.position.x = clamp(this.position.x, -96, 96);
    this.position.z = clamp(this.position.z, -96, 96);
    const wasGrounded = this.grounded;
    this.position.y += this.velocity.y * dt;

    const terrainHeight = this.world.heightAt(this.position.x, this.position.z);
    const buildHeight = this.buildSystem.getSupportHeight(this.position.x, this.position.z, this.position.y);
    const stepTolerance = 0.7;
    const worldSurface = this.world.getSurfaceHeight(this.position.x, this.position.z, this.position.y + stepTolerance);
    const supportHeight = Math.max(terrainHeight, buildHeight, worldSurface);

    if (this.velocity.y <= 0 && this.position.y <= supportHeight + 0.035) {
      if (!wasGrounded && this.velocity.y < -8) {
        this.landKick = clamp(this.velocity.y * 0.0028, -0.035, -0.008);
        this.audio?.land();
      }
      this.position.y = supportHeight;
      this.velocity.y = 0;
      this.grounded = true;
    } else if (wasGrounded && supportHeight > this.position.y && supportHeight - this.position.y <= stepTolerance) {
      this.position.y = supportHeight;
      this.velocity.y = 0;
      this.grounded = true;
    } else {
      this.grounded = false;
    }

    const horizontalSpeed = Math.hypot(this.velocity.x, this.velocity.z);
    this.speed = horizontalSpeed;
    this.moving = horizontalSpeed > 0.4;
    if (this.grounded && horizontalSpeed > 0.5) {
      this.walkTime += dt * (sprinting ? 11.5 : 8.4);
      this.bob = Math.sin(this.walkTime) * (sprinting ? 0.045 : 0.028) * Math.min(1, horizontalSpeed / 6);
      this.bobRoll = Math.sin(this.walkTime * 0.5) * 0.007;
      this.stepTimer -= dt * (sprinting ? 2 : 1.4);
      if (this.stepTimer <= 0) {
        this.stepTimer = 0.48;
        this.audio?.footstep();
      }
    } else {
      this.bob = damp(this.bob, 0, 8, dt);
      this.bobRoll = damp(this.bobRoll, 0, 8, dt);
    }

    this.landKick = damp(this.landKick, 0, 9, dt);
    this.recoil = damp(this.recoil, 0, 12, dt);
    this.recoilYaw = damp(this.recoilYaw, 0, 12, dt);
    this.applyCameraRotation(dt);
    this.lastDamageAt += 0;
  }

  resolveHorizontalCollisions() {
    const radius = this.radius;
    const minimumClearance = this.position.y + 0.58;
    const head = this.position.y + this.height;

    const testBox = (box) => {
      if (box.maxY <= minimumClearance || box.minY >= head) return;
      const px = this.position.x;
      const pz = this.position.z;
      const closestX = clamp(px, box.minX, box.maxX);
      const closestZ = clamp(pz, box.minZ, box.maxZ);
      let dx = px - closestX;
      let dz = pz - closestZ;
      const distanceSq = dx * dx + dz * dz;
      if (distanceSq >= radius * radius) return;
      if (distanceSq > 0.000001) {
        const distance = Math.sqrt(distanceSq);
        const push = radius - distance;
        this.position.x += (dx / distance) * push;
        this.position.z += (dz / distance) * push;
      } else {
        const toLeft = px - box.minX;
        const toRight = box.maxX - px;
        const toFront = pz - box.minZ;
        const toBack = box.maxZ - pz;
        const min = Math.min(toLeft, toRight, toFront, toBack);
        if (min === toLeft) this.position.x = box.minX - radius;
        else if (min === toRight) this.position.x = box.maxX + radius;
        else if (min === toFront) this.position.z = box.minZ - radius;
        else this.position.z = box.maxZ + radius;
      }
    };

    for (const collider of this.world.getColliders()) testBox(collider);
    for (const collider of this.buildSystem.getWallColliders()) testBox(collider);

    for (const obstacle of this.world.getObstacleCircles()) {
      const dx = this.position.x - obstacle.x;
      const dz = this.position.z - obstacle.z;
      const minDistance = obstacle.radius + radius;
      const distanceSq = dx * dx + dz * dz;
      if (distanceSq < minDistance * minDistance && distanceSq > 0.0001) {
        const distance = Math.sqrt(distanceSq);
        this.position.x = obstacle.x + (dx / distance) * minDistance;
        this.position.z = obstacle.z + (dz / distance) * minDistance;
      }
    }
  }

  addRecoil(pitch, yaw = 0) {
    this.recoil += pitch;
    this.recoilYaw += yaw;
  }

  takeDamage(amount, source = 'ENEMY') {
    if (!this.alive) return 0;
    const previousHealth = this.health;
    let remaining = amount;
    if (this.shield > 0) {
      const absorbed = Math.min(this.shield, remaining);
      this.shield -= absorbed;
      remaining -= absorbed;
    }
    this.health = Math.max(0, this.health - remaining);
    this.lastDamageAt = 0;
    this.lastDamageSource = source;
    const dealt = previousHealth - this.health;
    if (this.health <= 0) {
      this.alive = false;
      this.health = 0;
    }
    this.onDamage?.(dealt, source);
    return dealt;
  }

  heal(amount) {
    this.health = Math.min(this.maxHealth, this.health + amount);
  }

  addShield(amount) {
    this.shield = Math.min(this.maxShield, this.shield + amount);
  }

  getAimDirection(target = new THREE.Vector3()) {
    return this.camera.getWorldDirection(target);
  }

  getHeadPosition(target = new THREE.Vector3()) {
    return target.set(this.position.x, this.position.y + this.eyeHeight, this.position.z);
  }

  getChestPosition(target = new THREE.Vector3()) {
    return target.set(this.position.x, this.position.y + 1.1, this.position.z);
  }

  dispose() {
    window.removeEventListener('keydown', this.onKeyDown);
    window.removeEventListener('keyup', this.onKeyUp);
    window.removeEventListener('mousemove', this.onMouseMove);
    window.removeEventListener('blur', this.onBlur);
  }
}
