import * as THREE from 'three';
import { createMetalTexture, createWoodTexture } from './textures.js';
import { clamp, damp } from './utils.js';

const CENTER = new THREE.Vector2(0, 0);

function viewMaterial(color, metalness = 0.2, roughness = 0.55, emissive = 0x000000) {
  return new THREE.MeshStandardMaterial({
    color,
    metalness,
    roughness,
    emissive,
    emissiveIntensity: 0.18,
  });
}

function addMesh(parent, geometry, material, position = [0, 0, 0], rotation = [0, 0, 0]) {
  const mesh = new THREE.Mesh(geometry, material);
  mesh.position.set(...position);
  mesh.rotation.set(...rotation);
  mesh.castShadow = false;
  mesh.receiveShadow = false;
  parent.add(mesh);
  return mesh;
}

export class WeaponSystem {
  constructor(world, camera, effects, audio) {
    this.world = world;
    this.camera = camera;
    this.effects = effects;
    this.audio = audio;
    this.raycaster = new THREE.Raycaster();

    this.current = 'ar';
    this.triggerHeld = false;
    this.cooldown = 0;
    this.suppressed = false;
    this.muzzleFlashTime = 0;
    this.switchOffset = 0;
    this.time = 0;
    this.onBotHit = null;
    this.onShoot = null;

    this.weapons = {
      ar: {
        id: 'ar',
        name: 'RANGER AR',
        type: 'ASSAULT',
        mag: 30,
        maxMag: 30,
        reserve: 120,
        damage: 19,
        fireRate: 0.095,
        reloadTime: 1.72,
        reloading: false,
        reloadTimer: 0,
        rarity: 'COMMON',
        recoil: 0.017,
      },
      pickaxe: {
        id: 'pickaxe',
        name: 'TRAILBLAZER',
        type: 'TOOL',
        damage: 48,
        fireRate: 0.56,
        cooldown: 0,
        rarity: 'STARTER',
      },
    };

    this.metalTexture = createMetalTexture();
    this.woodTexture = createWoodTexture();
    this.buildViewScene();
    this.buildRifle();
    this.buildPickaxe();
    this.setWeapon('ar', true);
  }

  buildViewScene() {
    this.viewScene = new THREE.Scene();
    this.viewCamera = new THREE.PerspectiveCamera(64, 1, 0.01, 20);
    this.viewCamera.position.set(0, 0, 0);

    const hemisphere = new THREE.HemisphereLight(0xdff7ff, 0x453528, 2.8);
    this.viewScene.add(hemisphere);
    const key = new THREE.DirectionalLight(0xffe0b5, 4.6);
    key.position.set(-1.4, 2.2, 1.5);
    this.viewScene.add(key);
    const rim = new THREE.DirectionalLight(0x8cdcff, 2.2);
    rim.position.set(2, -0.5, -1.5);
    this.viewScene.add(rim);
    const warm = new THREE.PointLight(0xffb05e, 3.4, 4, 2);
    warm.position.set(-0.8, 0.2, -0.4);
    this.viewScene.add(warm);
  }

  buildRifle() {
    const group = new THREE.Group();
    group.position.set(0.44, -0.35, -0.62);
    group.rotation.set(0.015, -0.03, -0.012);
    group.userData.basePosition = group.position.clone();
    group.userData.baseRotation = group.rotation.clone();

    const metal = viewMaterial(0x697d8c, 0.72, 0.34);
    const darkMetal = viewMaterial(0x313c47, 0.66, 0.42);
    const polymer = viewMaterial(0x56646c, 0.22, 0.62);
    const accent = viewMaterial(0xffb552, 0.3, 0.4, 0x5a2a00);
    const grip = viewMaterial(0x303b43, 0.08, 0.82);
    const lens = new THREE.MeshStandardMaterial({ color: 0x1c8f88, emissive: 0x2fbcb0, emissiveIntensity: 1.25, metalness: 0.45, roughness: 0.2 });
    const scopeBody = viewMaterial(0x202a32, 0.8, 0.32);

    addMesh(group, new THREE.BoxGeometry(0.14, 0.15, 0.52), metal, [0, 0.015, -0.19]);
    addMesh(group, new THREE.BoxGeometry(0.17, 0.08, 0.16), polymer, [0, 0.045, 0.065]);
    addMesh(group, new THREE.BoxGeometry(0.11, 0.08, 0.32), polymer, [0, -0.005, -0.52]);
    addMesh(group, new THREE.BoxGeometry(0.065, 0.032, 0.14), accent, [0, 0.105, -0.24]);
    addMesh(group, new THREE.BoxGeometry(0.145, 0.025, 0.035), darkMetal, [0, 0.12, -0.11]);

    addMesh(group, new THREE.CylinderGeometry(0.021, 0.024, 0.42, 10), darkMetal, [0, 0.02, -0.88], [Math.PI / 2, 0, 0]);
    addMesh(group, new THREE.CylinderGeometry(0.037, 0.032, 0.12, 8), metal, [0, 0.02, -1.09], [Math.PI / 2, 0, 0]);
    addMesh(group, new THREE.CylinderGeometry(0.026, 0.026, 0.045, 8), darkMetal, [0, 0.02, -1.16], [Math.PI / 2, 0, 0]);
    addMesh(group, new THREE.BoxGeometry(0.075, 0.095, 0.25), metal, [0, -0.004, -0.55]);

    const mag = addMesh(group, new THREE.BoxGeometry(0.078, 0.25, 0.13), darkMetal, [0, -0.17, -0.15], [0.19, 0, 0]);
    mag.rotation.x = 0.16;
    addMesh(group, new THREE.BoxGeometry(0.085, 0.03, 0.14), accent, [0, -0.295, -0.175]);
    addMesh(group, new THREE.BoxGeometry(0.075, 0.17, 0.1), grip, [0, -0.12, 0.04], [0.32, 0, 0]);
    addMesh(group, new THREE.BoxGeometry(0.1, 0.13, 0.31), polymer, [0, 0.005, 0.31]);
    addMesh(group, new THREE.BoxGeometry(0.095, 0.15, 0.04), darkMetal, [0, -0.015, 0.48]);

    addMesh(group, new THREE.CylinderGeometry(0.047, 0.047, 0.2, 10), scopeBody, [0, 0.14, -0.12], [Math.PI / 2, 0, 0]);
    addMesh(group, new THREE.CylinderGeometry(0.052, 0.052, 0.025, 10), darkMetal, [0, 0.14, -0.01], [Math.PI / 2, 0, 0]);
    addMesh(group, new THREE.CircleGeometry(0.033, 14), lens, [0, 0.14, 0.003]);
    addMesh(group, new THREE.BoxGeometry(0.03, 0.07, 0.06), darkMetal, [0, 0.09, -0.09]);
    addMesh(group, new THREE.BoxGeometry(0.025, 0.045, 0.035), darkMetal, [0.025, 0.165, -0.15]);

    const glove = viewMaterial(0x415866, 0.05, 0.88);
    const gloveAccent = viewMaterial(0x7697a1, 0.1, 0.78);
    addMesh(group, new THREE.BoxGeometry(0.13, 0.115, 0.16), glove, [0.015, -0.155, 0.035], [0.24, 0, 0.12]);
    addMesh(group, new THREE.BoxGeometry(0.04, 0.035, 0.11), gloveAccent, [0.02, -0.105, 0.055]);
    addMesh(group, new THREE.BoxGeometry(0.13, 0.11, 0.16), glove, [-0.035, -0.115, -0.5], [0.1, 0, -0.08]);
    addMesh(group, new THREE.BoxGeometry(0.035, 0.035, 0.1), gloveAccent, [-0.06, -0.065, -0.49]);

    const flash = new THREE.Group();
    const flashMaterial = new THREE.MeshBasicMaterial({ color: 0xffe1a0, transparent: true, opacity: 0, blending: THREE.AdditiveBlending, depthWrite: false, toneMapped: false });
    const flashCore = new THREE.Mesh(new THREE.ConeGeometry(0.075, 0.28, 5, 1, true), flashMaterial);
    flashCore.rotation.x = -Math.PI / 2;
    flashCore.position.z = -0.09;
    flash.add(flashCore);
    const flashCross = new THREE.Mesh(new THREE.PlaneGeometry(0.24, 0.24), flashMaterial.clone());
    flashCross.position.z = -0.035;
    flash.add(flashCross);
    flash.position.set(0, 0.02, -1.22);
    flash.visible = false;
    group.add(flash);

    const muzzle = new THREE.Object3D();
    muzzle.position.set(0, 0.02, -1.23);
    group.add(muzzle);

    group.scale.setScalar(0.82);
    this.rifle = group;
    this.rifleFlash = flash;
    this.rifleFlashMaterial = flashMaterial;
    this.rifleMuzzle = muzzle;
    this.viewScene.add(group);
  }

  buildPickaxe() {
    const group = new THREE.Group();
    group.position.set(0.46, -0.42, -0.72);
    group.rotation.set(0.22, -0.28, -0.32);
    group.userData.basePosition = group.position.clone();
    group.userData.baseRotation = group.rotation.clone();

    const wood = new THREE.MeshStandardMaterial({ map: this.woodTexture, color: 0xd6a064, roughness: 0.8 });
    const metal = viewMaterial(0x8c9aa3, 0.8, 0.3);
    const darkMetal = viewMaterial(0x3c474f, 0.75, 0.4);
    const leather = viewMaterial(0x4d3322, 0.1, 0.9);
    const glove = viewMaterial(0x415866, 0.05, 0.88);

    addMesh(group, new THREE.CylinderGeometry(0.035, 0.045, 1.0, 8), wood, [0, 0.14, 0]);
    addMesh(group, new THREE.CylinderGeometry(0.048, 0.052, 0.22, 8), leather, [0, -0.19, 0]);
    addMesh(group, new THREE.BoxGeometry(0.36, 0.11, 0.12), metal, [0, 0.66, 0]);
    const tipLeft = addMesh(group, new THREE.ConeGeometry(0.065, 0.24, 4), metal, [-0.23, 0.66, 0], [0, 0, Math.PI / 2]);
    tipLeft.rotation.z = -Math.PI / 2;
    tipLeft.position.x = -0.26;
    const tipRight = addMesh(group, new THREE.ConeGeometry(0.065, 0.22, 4), metal, [0.25, 0.65, 0], [0, 0, Math.PI / 2]);
    tipRight.rotation.z = Math.PI / 2;
    addMesh(group, new THREE.BoxGeometry(0.14, 0.18, 0.16), darkMetal, [0, 0.66, 0]);
    addMesh(group, new THREE.BoxGeometry(0.13, 0.13, 0.16), glove, [0.01, -0.14, 0.01]);
    addMesh(group, new THREE.BoxGeometry(0.12, 0.13, 0.15), glove, [-0.04, 0.27, 0.01], [0.15, 0, 0]);

    this.pickaxe = group;
    this.pickaxeMuzzle = new THREE.Object3D();
    this.pickaxeMuzzle.position.set(0, 0.68, 0);
    group.add(this.pickaxeMuzzle);
    this.viewScene.add(group);
  }

  setWeapon(id, immediate = false) {
    if (!this.weapons[id]) return;
    if (this.weapons.ar.reloading) this.cancelReload();
    this.current = id;
    this.triggerHeld = false;
    this.switchOffset = immediate ? 0 : 1;
    this.rifle.visible = id === 'ar' && !this.suppressed;
    this.pickaxe.visible = id === 'pickaxe' && !this.suppressed;
    this.rifleFlash.visible = false;
  }

  setSuppressed(suppressed) {
    this.suppressed = suppressed;
    const visible = !suppressed;
    this.rifle.visible = visible && this.current === 'ar';
    this.pickaxe.visible = visible && this.current === 'pickaxe';
    if (suppressed) this.triggerHeld = false;
  }

  startFire() {
    this.triggerHeld = true;
  }

  stopFire() {
    this.triggerHeld = false;
  }

  fireNow() {
    if (this.suppressed) return;
    if (this.current === 'ar') this.fireRifle();
    else this.swingPickaxe();
  }

  fireRifle() {
    const weapon = this.weapons.ar;
    if (weapon.reloading || this.cooldown > 0) return;
    if (weapon.mag <= 0) {
      this.audio?.empty();
      this.reload();
      return;
    }
    weapon.mag -= 1;
    this.cooldown = weapon.fireRate;
    this.muzzleFlashTime = 0.055;
    this.audio?.shot();
    const spread = this.getSpread();
    this.raycaster.setFromCamera(CENTER, this.camera);
    this.raycaster.far = 160;
    if (spread > 0) {
      const direction = this.raycaster.ray.direction.clone();
      const right = new THREE.Vector3().crossVectors(direction, this.camera.up).normalize();
      const up = new THREE.Vector3().crossVectors(right, direction).normalize();
      direction.addScaledVector(right, (Math.random() - 0.5) * spread);
      direction.addScaledVector(up, (Math.random() - 0.5) * spread);
      this.raycaster.ray.direction.copy(direction.normalize());
    }
    const targets = this.world.raycastTargets;
    const hits = this.raycaster.intersectObjects(targets, false);
    const botTargets = this.onGetBotTargets ? this.onGetBotTargets() : [];
    if (botTargets.length) {
      const botHits = this.raycaster.intersectObjects(botTargets, false);
      if (botHits.length) hits.push(...botHits);
    }
    hits.sort((a, b) => a.distance - b.distance);
    const hit = hits[0];
    const end = hit ? hit.point.clone() : this.raycaster.ray.origin.clone().addScaledVector(this.raycaster.ray.direction, 140);
    const localMuzzle = this.rifleMuzzle.getWorldPosition(new THREE.Vector3());
    const muzzleWorld = this.camera.localToWorld(localMuzzle.clone());
    this.effects.tracer(muzzleWorld, end, 0xffdc8e, 1.1);
    this.effects.burst(muzzleWorld, 0xffca66, 4, 2.4, 0.07, 4);

    if (hit) {
      const object = hit.object;
      const bot = object.userData.bot;
      if (bot && bot.alive) {
        const isHead = object.userData.part === 'head';
        const damage = Math.round(weapon.damage * (isHead ? 2.05 : 1));
        this.onBotHit?.(bot, damage, isHead, hit.point, 'RANGER AR');
        this.effects.burst(hit.point, isHead ? 0xffd66c : 0xff7d68, isHead ? 14 : 8, 4.2, 0.09, 8);
        this.audio?.hit();
      } else {
        this.effects.burst(hit.point, object.userData.buildPiece ? 0xd8aa78 : 0xffc879, 6, 3.4, 0.07, 9);
      }
    }
    this.onShoot?.();
  }

  swingPickaxe() {
    if (this.cooldown > 0) return;
    this.cooldown = this.weapons.pickaxe.fireRate;
    this.swingTime = 0.38;
    this.audio?.pickaxe();
    this.raycaster.setFromCamera(CENTER, this.camera);
    this.raycaster.far = 3.4;
    const hits = this.raycaster.intersectObjects(this.world.raycastTargets, false);
    const botTargets = this.onGetBotTargets ? this.onGetBotTargets() : [];
    if (botTargets.length) {
      const botHits = this.raycaster.intersectObjects(botTargets, false);
      if (botHits.length) hits.push(...botHits);
    }
    hits.sort((a, b) => a.distance - b.distance);
    const hit = hits[0];
    if (hit) {
      const bot = hit.object.userData.bot;
      if (bot && bot.alive) {
        const isHead = hit.object.userData.part === 'head';
        this.onBotHit?.(bot, this.weapons.pickaxe.damage * (isHead ? 1.5 : 1), isHead, hit.point, 'TRAILBLAZER');
        this.effects.burst(hit.point, 0xffc861, 11, 4, 0.09, 9);
        this.audio?.hit();
      } else {
        this.effects.burst(hit.point, 0xe2b276, 9, 4.1, 0.08, 8);
      }
    }
    this.onShoot?.();
  }

  getSpread() {
    const moving = this.onGetMovement ? this.onGetMovement() : 0;
    return 0.006 + Math.min(0.028, moving * 0.0032);
  }

  reload() {
    const weapon = this.weapons.ar;
    if (weapon.reloading || weapon.mag >= weapon.maxMag || weapon.reserve <= 0 || this.current !== 'ar') return;
    weapon.reloading = true;
    weapon.reloadTimer = weapon.reloadTime;
    this.audio?.reload();
  }

  cancelReload() {
    const weapon = this.weapons.ar;
    weapon.reloading = false;
    weapon.reloadTimer = 0;
  }

  addAmmo(amount) {
    this.weapons.ar.reserve += amount;
  }

  boostDamage(amount) {
    this.weapons.ar.damage += amount;
    this.weapons.ar.rarity = 'RARE';
  }

  update(dt, player) {
    this.time += dt;
    this.cooldown = Math.max(0, this.cooldown - dt);
    this.muzzleFlashTime = Math.max(0, this.muzzleFlashTime - dt);
    this.switchOffset = damp(this.switchOffset, 0, 15, dt);

    const ar = this.weapons.ar;
    if (ar.reloading) {
      ar.reloadTimer -= dt;
      if (ar.reloadTimer <= 0) {
        const missing = ar.maxMag - ar.mag;
        const moved = Math.min(missing, ar.reserve);
        ar.mag += moved;
        ar.reserve -= moved;
        ar.reloading = false;
      }
    }

    if (!this.suppressed && player.enabled) {
      if (this.current === 'ar' && this.triggerHeld && this.cooldown <= 0) this.fireRifle();
      if (this.current === 'pickaxe' && this.triggerHeld && this.cooldown <= 0) this.swingPickaxe();
    }

    this.rifleFlash.visible = this.muzzleFlashTime > 0;
    if (this.muzzleFlashTime > 0) {
      const strength = this.muzzleFlashTime / 0.055;
      this.rifleFlash.scale.setScalar(0.75 + Math.random() * 0.65);
      this.rifleFlash.rotation.z += dt * 28;
      for (const child of this.rifleFlash.children) child.material.opacity = strength * 0.92;
    }

    const moveAmount = clamp(player.speed / 9, 0, 1);
    const bobX = Math.sin(player.walkTime) * (0.008 + moveAmount * 0.013);
    const bobY = Math.abs(Math.cos(player.walkTime)) * (0.006 + moveAmount * 0.012);
    const idle = Math.sin(this.time * 1.6) * 0.0035;
    const reloadProgress = ar.reloading ? Math.sin((1 - ar.reloadTimer / ar.reloadTime) * Math.PI) : 0;
    const switchDip = this.switchOffset * 0.25;

    this.rifle.position.set(
      this.rifle.userData.basePosition.x + bobX,
      this.rifle.userData.basePosition.y - bobY - switchDip - reloadProgress * 0.16 + idle,
      this.rifle.userData.basePosition.z,
    );
    this.rifle.rotation.set(
      this.rifle.userData.baseRotation.x + bobY * 0.7 - reloadProgress * 0.24,
      this.rifle.userData.baseRotation.y + bobX * 0.8,
      this.rifle.userData.baseRotation.z + bobX * 0.6 + reloadProgress * 0.3,
    );

    this.swingTime = Math.max(0, (this.swingTime || 0) - dt);
    const swing = this.swingTime > 0 ? Math.sin((1 - this.swingTime / 0.38) * Math.PI) : 0;
    this.pickaxe.position.set(
      this.pickaxe.userData.basePosition.x + bobX - swing * 0.09,
      this.pickaxe.userData.basePosition.y - bobY + idle - switchDip + swing * 0.1,
      this.pickaxe.userData.basePosition.z + Math.sin(this.time * 1.2) * 0.002,
    );
    this.pickaxe.rotation.set(
      this.pickaxe.userData.baseRotation.x + bobY * 0.8 - swing * 1.9,
      this.pickaxe.userData.baseRotation.y + bobX * 0.7 + swing * 0.5,
      this.pickaxe.userData.baseRotation.z + bobX * 0.8 + swing * 0.65,
    );
  }

  getMuzzleWorldPosition(target = new THREE.Vector3()) {
    const source = this.current === 'ar' ? this.rifleMuzzle : this.pickaxeMuzzle;
    const local = source.getWorldPosition(new THREE.Vector3());
    return this.camera.localToWorld(local, target);
  }

  getState() {
    const weapon = this.weapons[this.current];
    if (this.current === 'ar') {
      return {
        id: 'ar',
        name: weapon.name,
        type: 'ASSAULT RIFLE',
        rarity: weapon.rarity,
        mag: weapon.mag,
        reserve: weapon.reserve,
        maxMag: weapon.maxMag,
        reloading: weapon.reloading,
        ammoLabel: `${weapon.mag} / ${weapon.reserve}`,
        fireMode: 'FULL AUTO',
      };
    }
    return {
      id: 'pickaxe',
      name: weapon.name,
      type: 'HARVESTING TOOL',
      rarity: weapon.rarity,
      mag: null,
      reserve: null,
      reloading: false,
      ammoLabel: '∞',
      fireMode: 'MELEE',
    };
  }

  render(renderer) {
    renderer.clearDepth();
    renderer.render(this.viewScene, this.viewCamera);
  }

  resize(aspect) {
    this.viewCamera.aspect = aspect;
    this.viewCamera.updateProjectionMatrix();
  }
}
