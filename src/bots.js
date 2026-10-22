import * as THREE from 'three';
import { randomRange } from './utils.js';

const BOT_NAMES = ['VEX', 'NOMAD', 'EMBER', 'KODA', 'RIFT', 'SABLE'];
const OUTFITS = [
  { body: 0x485f76, accent: 0x69e0d2, skin: 0xc89a70 },
  { body: 0x6f4d5c, accent: 0xffb55e, skin: 0x9b6b48 },
  { body: 0x3e6656, accent: 0xd9ed72, skin: 0xd2a37d },
  { body: 0x5e587c, accent: 0xc49bff, skin: 0xb77f57 },
  { body: 0x72513b, accent: 0xff8368, skin: 0xe0b48c },
  { body: 0x345b65, accent: 0x68d7ff, skin: 0x8f5e42 },
];

export class BotManager {
  constructor(scene, world, effects, audio) {
    this.scene = scene;
    this.world = world;
    this.effects = effects;
    this.audio = audio;
    this.bots = [];
    this.onDeath = null;
    this.onDamage = null;
    this.onPlayerHit = null;
    this.player = null;
    this.elapsed = 0;
    this.botTargets = [];
    this.raycaster = new THREE.Raycaster();

    this.spawnPoints = [
      [-11, -9, 0.6],
      [17, -16, 2.2],
      [-26, 6, 4.3],
      [10, 27, 1.4],
      [36, 8, 5.1],
      [-14, -35, 3.3],
    ];
    this.createBots();
  }

  createBots() {
    this.spawnPoints.forEach(([x, z, rotation], index) => {
      const bot = new Bot(this.scene, this.world, this.effects, this.audio, {
        name: BOT_NAMES[index % BOT_NAMES.length],
        outfit: OUTFITS[index % OUTFITS.length],
        position: new THREE.Vector3(x, this.world.heightAt(x, z), z),
        rotation,
        index,
      });
      bot.onDeath = (source) => this.handleDeath(bot, source);
      bot.onDamaged = (damage) => this.onDamage?.(bot, damage);
      bot.onPlayerHit = (target, damage) => this.onPlayerHit?.(target, damage);
      this.bots.push(bot);
    });
    this.rebuildTargets();
  }

  setPlayer(player) {
    this.player = player;
    for (const bot of this.bots) bot.player = player;
  }

  handleDeath(bot, source) {
    this.rebuildTargets();
    this.onDeath?.(bot, source);
  }

  rebuildTargets() {
    this.botTargets = [];
    for (const bot of this.bots) {
      if (bot.alive) this.botTargets.push(...bot.hitMeshes);
    }
  }

  getHitTargets() {
    return this.botTargets;
  }

  getAliveCount() {
    return this.bots.filter((bot) => bot.alive).length;
  }

  update(dt, player, storm) {
    this.elapsed += dt;
    for (const bot of this.bots) {
      bot.update(dt, this.elapsed, player, storm);
    }
    this.botTargets = this.botTargets.filter((mesh) => mesh.userData.bot?.alive);
  }

  damageAll(amount, source = 'STORM', storm = null) {
    for (const bot of this.bots) {
      if (!bot.alive) continue;
      if (storm && !storm.isOutside(bot.group.position.x, bot.group.position.z)) continue;
      bot.takeDamage(amount, false, source, false);
    }
  }

  dispose() {
    for (const bot of this.bots) bot.dispose();
    this.bots.length = 0;
  }
}

class Bot {
  constructor(scene, world, effects, audio, options) {
    this.scene = scene;
    this.world = world;
    this.effects = effects;
    this.audio = audio;
    this.name = options.name;
    this.worldPosition = options.position.clone();
    this.player = null;
    this.alive = true;
    this.health = 100;
    this.maxHealth = 100;
    this.hitMeshes = [];
    this.materials = [];
    this.shootTimer = randomRange(Math.random, 2.8, 4.6);
    this.wanderTimer = randomRange(Math.random, 1.5, 4);
    this.moveTarget = this.worldPosition.clone();
    this.deathTimer = 0;
    this.flash = 0;
    this.stepTime = Math.random() * 4;
    this.stormTick = 0;
    this.damageTick = 0;
    this.velocity = new THREE.Vector3();
    this.temp = new THREE.Vector3();
    this.idlePhase = Math.random() * 10;
    this.raycaster = new THREE.Raycaster();

    this.group = new THREE.Group();
    this.group.position.copy(this.worldPosition);
    this.group.rotation.y = options.rotation;
    scene.add(this.group);

    const outfit = options.outfit;
    const bodyMaterial = new THREE.MeshStandardMaterial({ color: outfit.body, roughness: 0.78, metalness: 0.04 });
    const accentMaterial = new THREE.MeshStandardMaterial({
      color: outfit.accent,
      emissive: outfit.accent,
      emissiveIntensity: 0.38,
      roughness: 0.55,
    });
    const skinMaterial = new THREE.MeshStandardMaterial({ color: outfit.skin, roughness: 0.82 });
    const darkMaterial = new THREE.MeshStandardMaterial({ color: 0x202a32, roughness: 0.68, metalness: 0.2 });
    const bootMaterial = new THREE.MeshStandardMaterial({ color: 0x24201c, roughness: 0.94 });
    this.materials.push(bodyMaterial, accentMaterial, skinMaterial, darkMaterial, bootMaterial);

    const addPart = (geometry, material, x, y, z, part) => {
      const mesh = new THREE.Mesh(geometry, material);
      mesh.position.set(x, y, z);
      mesh.castShadow = true;
      mesh.receiveShadow = true;
      mesh.userData.bot = this;
      mesh.userData.part = part;
      this.group.add(mesh);
      if (part !== 'accessory') this.hitMeshes.push(mesh);
      return mesh;
    };

    addPart(new THREE.BoxGeometry(0.24, 0.72, 0.27), darkMaterial, -0.18, 0.58, 0, 'leg');
    addPart(new THREE.BoxGeometry(0.24, 0.72, 0.27), darkMaterial, 0.18, 0.58, 0, 'leg');
    addPart(new THREE.BoxGeometry(0.28, 0.18, 0.38), bootMaterial, -0.18, 0.13, 0.05, 'leg');
    addPart(new THREE.BoxGeometry(0.28, 0.18, 0.38), bootMaterial, 0.18, 0.13, 0.05, 'leg');
    addPart(new THREE.BoxGeometry(0.35, 0.22, 0.36), darkMaterial, 0, 0.98, 0, 'body');
    addPart(new THREE.BoxGeometry(0.68, 0.78, 0.38), bodyMaterial, 0, 1.38, 0, 'body');
    addPart(new THREE.BoxGeometry(0.26, 0.08, 0.4), accentMaterial, 0, 1.4, 0, 'accessory');
    addPart(new THREE.BoxGeometry(0.22, 0.64, 0.24), bodyMaterial, -0.46, 1.39, 0, 'arm');
    addPart(new THREE.BoxGeometry(0.22, 0.64, 0.24), bodyMaterial, 0.46, 1.39, 0, 'arm');
    addPart(new THREE.BoxGeometry(0.2, 0.18, 0.24), skinMaterial, -0.47, 1.05, 0.02, 'arm');
    addPart(new THREE.BoxGeometry(0.2, 0.18, 0.24), skinMaterial, 0.47, 1.05, 0.02, 'arm');
    addPart(new THREE.BoxGeometry(0.38, 0.39, 0.38), skinMaterial, 0, 1.98, 0, 'head');
    addPart(new THREE.BoxGeometry(0.42, 0.15, 0.4), darkMaterial, 0, 2.18, 0, 'head');
    const visor = addPart(new THREE.BoxGeometry(0.3, 0.075, 0.03), accentMaterial, 0, 2.01, 0.205, 'head');
    visor.rotation.x = 0;

    const backpack = addPart(new THREE.BoxGeometry(0.42, 0.52, 0.22), darkMaterial, 0, 1.46, -0.29, 'accessory');
    backpack.rotation.x = 0.04;
    addPart(new THREE.BoxGeometry(0.28, 0.08, 0.3), accentMaterial, 0, 1.69, -0.28, 'accessory');

    const weapon = new THREE.Group();
    const gunBody = new THREE.Mesh(new THREE.BoxGeometry(0.1, 0.11, 0.65), darkMaterial);
    gunBody.position.z = 0.24;
    weapon.add(gunBody);
    const gunBarrel = new THREE.Mesh(new THREE.CylinderGeometry(0.02, 0.022, 0.38, 6), new THREE.MeshStandardMaterial({ color: 0x4b555b, metalness: 0.7, roughness: 0.4 }));
    gunBarrel.rotation.x = Math.PI / 2;
    gunBarrel.position.set(0, 0.02, 0.62);
    weapon.add(gunBarrel);
    weapon.position.set(0.27, 1.2, 0.22);
    weapon.rotation.x = -0.04;
    weapon.rotation.y = -0.08;
    this.group.add(weapon);
    this.weapon = weapon;
    this.muzzle = new THREE.Object3D();
    this.muzzle.position.set(0, 0.02, 0.84);
    weapon.add(this.muzzle);

    const legMeshes = [];
    const armMeshes = [];
    this.group.children.forEach((child) => {
      if (child.userData.part === 'leg' && child.position.y > 0.2) legMeshes.push(child);
      if (child.userData.part === 'arm' && child.position.y > 1.2) armMeshes.push(child);
    });
    this.legs = legMeshes;
    this.arms = armMeshes;

    this.healthCanvas = document.createElement('canvas');
    this.healthCanvas.width = 256;
    this.healthCanvas.height = 72;
    this.healthTexture = new THREE.CanvasTexture(this.healthCanvas);
    this.healthTexture.colorSpace = THREE.SRGBColorSpace;
    this.healthSprite = new THREE.Sprite(new THREE.SpriteMaterial({
      map: this.healthTexture,
      transparent: true,
      depthWrite: false,
      depthTest: true,
    }));
    this.healthSprite.position.set(0, 2.72, 0);
    this.healthSprite.scale.set(1.55, 0.435, 1);
    this.group.add(this.healthSprite);
    this.drawHealthBar();

    this.group.traverse((child) => {
      if (child.isMesh) child.frustumCulled = true;
    });
  }

  drawHealthBar() {
    const ctx = this.healthCanvas.getContext('2d');
    const width = this.healthCanvas.width;
    ctx.clearRect(0, 0, width, 72);
    ctx.font = '900 19px Trebuchet MS';
    ctx.textAlign = 'center';
    ctx.fillStyle = 'rgba(8, 13, 22, .76)';
    ctx.fillRect(16, 8, width - 32, 25);
    ctx.fillStyle = '#eefcff';
    ctx.fillText(this.name, width / 2, 26);
    ctx.fillStyle = 'rgba(9, 15, 25, .9)';
    ctx.fillRect(16, 39, width - 32, 15);
    const gradient = ctx.createLinearGradient(16, 0, width - 16, 0);
    if (this.health > 55) {
      gradient.addColorStop(0, '#46cd5f');
      gradient.addColorStop(1, '#b5ff8b');
    } else if (this.health > 25) {
      gradient.addColorStop(0, '#e7aa35');
      gradient.addColorStop(1, '#ffe47b');
    } else {
      gradient.addColorStop(0, '#e33e55');
      gradient.addColorStop(1, '#ff9b8b');
    }
    ctx.fillStyle = gradient;
    ctx.fillRect(18, 41, (width - 36) * Math.max(0, this.health / this.maxHealth), 11);
    ctx.strokeStyle = 'rgba(255, 255, 255, .28)';
    ctx.lineWidth = 1;
    ctx.strokeRect(16.5, 39.5, width - 33, 14);
    this.healthTexture.needsUpdate = true;
  }

  update(dt, elapsed, player, storm) {
    if (!this.alive) {
      if (this.deathTimer > 0) {
        this.deathTimer -= dt;
        this.group.rotation.z += dt * 3.3;
        this.group.position.y -= dt * 0.42;
        this.group.scale.multiplyScalar(Math.max(0.92, 1 - dt * 1.3));
        this.healthSprite.visible = false;
        if (this.deathTimer <= 0) this.scene.remove(this.group);
      }
      return;
    }

    this.player = player;
    this.flash = Math.max(0, this.flash - dt);
    for (const material of this.materials) {
      if (material.emissive) {
        material.emissiveIntensity = material === this.materials[1] ? 0.38 + this.flash * 0.9 : 0.18;
      }
    }

    const distanceToPlayer = player.alive ? this.group.position.distanceTo(player.position) : Infinity;
    const stormRadius = storm?.radius ?? 72;
    const distanceToCenter = Math.hypot(this.group.position.x, this.group.position.z);
    const outside = distanceToCenter > stormRadius - 1;

    this.wanderTimer -= dt;
    if (outside) {
      const angle = Math.atan2(this.group.position.z, this.group.position.x);
      const safeRadius = Math.max(3, stormRadius * 0.55);
      this.moveTarget.set(Math.cos(angle) * safeRadius, 0, Math.sin(angle) * safeRadius);
    } else if (this.wanderTimer <= 0) {
      this.wanderTimer = randomRange(Math.random, 2.2, 5.8);
      const angle = Math.random() * Math.PI * 2;
      const radius = randomRange(Math.random, 2, 8);
      this.moveTarget.set(
        this.group.position.x + Math.cos(angle) * radius,
        this.group.position.y,
        this.group.position.z + Math.sin(angle) * radius,
      );
      if (storm && storm.isOutside(this.moveTarget.x, this.moveTarget.z)) {
        const safeRadius = Math.max(4, stormRadius * 0.55);
        const towardCenter = Math.atan2(-this.group.position.z, -this.group.position.x) + randomRange(Math.random, -0.6, 0.6);
        this.moveTarget.set(Math.cos(towardCenter) * safeRadius, 0, Math.sin(towardCenter) * safeRadius);
      }
    }

    let moveDirection = this.temp.set(
      this.moveTarget.x - this.group.position.x,
      0,
      this.moveTarget.z - this.group.position.z,
    );
    let moveSpeed = 1.15;
    if (distanceToPlayer < 19 && player.alive) {
      moveDirection.set(
        this.group.position.x - player.position.x,
        0,
        this.group.position.z - player.position.z,
      );
      moveSpeed = distanceToPlayer < 8 ? -1.35 : 0.5;
    }
    if (moveDirection.lengthSq() > 0.04) {
      moveDirection.normalize();
      this.group.position.x += moveDirection.x * moveSpeed * dt;
      this.group.position.z += moveDirection.z * moveSpeed * dt;
      this.stepTime += dt * (Math.abs(moveSpeed) > 0.8 ? 8 : 4);
    } else {
      this.stepTime += dt * 1.2;
    }
    this.group.position.x = THREE.MathUtils.clamp(this.group.position.x, -94, 94);
    this.group.position.z = THREE.MathUtils.clamp(this.group.position.z, -94, 94);
    this.group.position.y = this.world.heightAt(this.group.position.x, this.group.position.z);
    this.worldPosition.copy(this.group.position);

    if (player.alive) {
      const otherDirection = this.temp.set(player.position.x - this.group.position.x, 0, player.position.z - this.group.position.z);
      if (otherDirection.lengthSq() > 0.001) {
        this.group.lookAt(this.group.position.x + otherDirection.x, this.group.position.y, this.group.position.z + otherDirection.z);
      }
    } else if (moveDirection.lengthSq() > 0.01) {
      this.group.lookAt(this.group.position.x + moveDirection.x, this.group.position.y, this.group.position.z + moveDirection.z);
    }

    const legSwing = Math.sin(this.stepTime) * 0.33;
    this.legs.forEach((leg, index) => {
      leg.rotation.x = legSwing * (index === 0 ? 1 : -1);
    });
    this.arms.forEach((arm, index) => {
      arm.rotation.x = -legSwing * 0.5 * (index === 0 ? 1 : -1) + 0.08;
    });
    this.group.position.y += Math.sin(elapsed * 2.2 + this.idlePhase) * 0.012;

    this.shootTimer -= dt;
    if (player.alive && distanceToPlayer < 27 && this.shootTimer <= 0 && storm && !outside) {
      this.shootTimer = randomRange(Math.random, 2.5, 4.2);
      this.shootAtPlayer(player);
    }
  }

  shootAtPlayer(player) {
    const from = this.muzzle.getWorldPosition(new THREE.Vector3());
    const target = player.getChestPosition(new THREE.Vector3());
    const direction = new THREE.Vector3().subVectors(target, from);
    const distance = direction.length();
    direction.normalize();

    this.raycaster.set(from, direction);
    this.raycaster.far = distance;
    const blockers = [...this.world.raycastTargets];
    const hits = this.raycaster.intersectObjects(blockers, false);
    if (hits.length && hits[0].distance < distance - 0.8) return;

    const missed = Math.random() < 0.26;
    const end = target.clone();
    if (missed) {
      end.x += randomRange(Math.random, -1.2, 1.2);
      end.y += randomRange(Math.random, -0.55, 0.55);
      end.z += randomRange(Math.random, -1.2, 1.2);
    } else if (Math.random() > 0.72) {
      end.x += randomRange(Math.random, -0.35, 0.35);
      end.y += randomRange(Math.random, -0.55, 0.2);
      end.z += randomRange(Math.random, -0.35, 0.35);
    }
    this.effects.tracer(from, end, 0xff6b5a, 0.8);
    this.effects.burst(from, 0xff9c54, 3, 1.7, 0.05, 3);
    this.audio?.botShot();
    if (missed) {
      this.effects.burst(end, 0xff9b73, 3, 2, 0.06, 4);
      return;
    }
    const damage = Math.round(randomRange(Math.random, 3, 6));
    player.takeDamage(damage, this.name);
    this.onPlayerHit?.(this, damage);
    if (player.shield > 0) this.effects.burst(end, 0x6ee7ff, 5, 2.3, 0.07, 3);
    else this.effects.burst(end, 0xff5f58, 5, 2.3, 0.07, 3);
  }

  takeDamage(amount, isHead, source = 'RANGER AR', showNumber = true) {
    if (!this.alive) return;
    this.health = Math.max(0, this.health - amount);
    this.flash = 0.16;
    this.drawHealthBar();
    if (showNumber) {
      const headPos = this.temp.set(this.group.position.x, this.group.position.y + 1.9, this.group.position.z);
      this.effects.damageNumber(headPos, `${Math.round(amount)}`, isHead ? '#ffdf78' : '#f5faff', isHead);
    }
    this.onDamaged?.(amount, source);
    if (this.health <= 0) {
      this.alive = false;
      this.deathTimer = 0.9;
      this.healthSprite.visible = false;
      this.effects.burst(this.group.position.clone().add(new THREE.Vector3(0, 1.1, 0)), 0xffb45e, 24, 6.5, 0.12, 10);
      this.effects.ringBurst(this.group.position.clone(), 0xffd073);
      this.audio?.kill();
      this.onDeath?.(source);
    }
  }

  dispose() {
    this.scene.remove(this.group);
    this.group.traverse((child) => {
      if (child.isMesh) {
        child.geometry.dispose();
        if (Array.isArray(child.material)) child.material.forEach((material) => material.dispose());
        else child.material.dispose();
      }
    });
    this.healthTexture.dispose();
  }
}
