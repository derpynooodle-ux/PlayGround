import * as THREE from 'three';
import { createGlowTexture, createWoodTexture } from './textures.js';
import { createMetalTexture } from './textures.js';
import { randomRange } from './utils.js';

const LOOT_TABLE = [
  { id: 'ammo', name: 'RIFLE AMMO', detail: '+75 rounds', color: 0xffc44f, weight: 30 },
  { id: 'shield', name: 'SHIELD FLASK', detail: '+50 shield', color: 0x66d9ff, weight: 27 },
  { id: 'health', name: 'FIELD MEDKIT', detail: '+40 health', color: 0x7dff9c, weight: 25 },
  { id: 'rare', name: 'RARE RANGER AR', detail: '+5 damage · +30 ammo', color: 0xc38cff, weight: 18 },
];

export class LootSystem {
  constructor(scene, world, effects, audio, player, weapons) {
    this.scene = scene;
    this.world = world;
    this.effects = effects;
    this.audio = audio;
    this.player = player;
    this.weapons = weapons;
    this.chests = [];
    this.pickups = [];
    this.onLoot = null;
    this.onChestOpen = null;
    this.raycaster = new THREE.Raycaster();
    this.center = new THREE.Vector2(0, 0);
    this.glowTexture = createGlowTexture();
    this.woodTexture = createWoodTexture();
    this.metalTexture = createMetalTexture();
    this.createChests();
  }

  createChests() {
    this.world.chestSpots.forEach((spot, index) => {
      const chest = new LootChest(this.scene, this.world, this.effects, this.audio, spot, index, this.glowTexture, this.woodTexture, this.metalTexture);
      chest.onOpen = () => {
        this.onChestOpen?.(chest);
        this.spawnItem(chest, chest.loot, 0);
        if (Math.random() < 0.68) this.spawnItem(chest, chest.rollLoot(), 1);
      };
      this.chests.push(chest);
    });
  }

  update(dt, player) {
    let nearest = null;
    let nearestDistance = Infinity;
    for (const chest of this.chests) {
      chest.update(dt);
      if (!chest.opened) {
        const distance = chest.distanceTo(player.position);
        if (distance < nearestDistance) {
          nearest = chest;
          nearestDistance = distance;
        }
        if (distance < 1.45 && player.alive) chest.open();
      }
    }
    this.nearestChest = nearestDistance <= 3.5 ? nearest : null;
    this.nearestDistance = nearestDistance;

    for (let i = this.pickups.length - 1; i >= 0; i -= 1) {
      const pickup = this.pickups[i];
      pickup.update(dt);
      if (pickup.collected) {
        this.pickups.splice(i, 1);
        continue;
      }
      const distance = pickup.group.position.distanceTo(player.position);
      if (distance < 1.65 && pickup.age > 0.35 && player.alive) {
        this.collectPickup(pickup);
        this.pickups.splice(i, 1);
      }
    }
  }

  tryOpenNearest(maxDistance = 3.5) {
    if (!this.nearestChest) return false;
    if (this.nearestDistance > maxDistance) return false;
    return this.nearestChest.open();
  }

  tryOpenFromAim(camera, maxDistance = 4.2) {
    this.raycaster.setFromCamera(this.center, camera);
    this.raycaster.far = maxDistance;
    const meshes = [];
    for (const chest of this.chests) {
      if (!chest.opened) meshes.push(...chest.hitMeshes);
    }
    if (!meshes.length) return false;
    const hits = this.raycaster.intersectObjects(meshes, false);
    if (!hits.length) return false;
    const chest = hits[0].object.userData.chest;
    return chest ? chest.open() : false;
  }

  openChestByIndex(index) {
    const chest = this.chests[index];
    if (!chest || chest.opened) return false;
    chest.open();
    return true;
  }

  collectPickup(pickup) {
    pickup.collected = true;
    const loot = pickup.loot;
    if (loot.id === 'ammo') this.weapons.addAmmo(75);
    else if (loot.id === 'shield') this.player.addShield(50);
    else if (loot.id === 'health') this.player.heal(40);
    else if (loot.id === 'rare') {
      this.weapons.boostDamage(5);
      this.weapons.addAmmo(30);
    }
    this.effects.ringBurst(pickup.group.position.clone(), loot.color);
    this.effects.burst(pickup.group.position.clone(), loot.color, 14, 4.4, 0.1, 5);
    this.audio?.pickup();
    this.onLoot?.(loot);
    pickup.dispose();
  }

  spawnItem(chest, loot, offsetIndex = 0) {
    const angle = chest.spot.rotation + Math.PI * 0.5 + (offsetIndex === 0 ? 0 : Math.PI);
    const radius = 1.28 + offsetIndex * 0.35;
    const x = chest.spot.x + Math.cos(angle) * radius;
    const z = chest.spot.z + Math.sin(angle) * radius;
    const y = Math.max(this.world.heightAt(x, z), chest.spot.y) + 0.72;
    const pickup = new LootPickup(this.scene, loot, new THREE.Vector3(x, y, z), this.glowTexture);
    this.pickups.push(pickup);
  }

  dispose() {
    for (const pickup of this.pickups) pickup.dispose();
    this.pickups.length = 0;
  }
}

class LootChest {
  constructor(scene, world, effects, audio, spot, index, glowTexture, woodTexture, metalTexture) {
    this.scene = scene;
    this.world = world;
    this.effects = effects;
    this.audio = audio;
    this.spot = spot;
    this.index = index;
    this.opened = false;
    this.openProgress = 0;
    this.lidOpen = 0;
    this.time = Math.random() * 10;
    this.hitMeshes = [];
    this.loot = this.rollLoot();

    this.group = new THREE.Group();
    this.group.position.set(spot.x, spot.y, spot.z);
    this.group.rotation.y = spot.rotation;
    scene.add(this.group);

    const wood = new THREE.MeshStandardMaterial({ map: woodTexture, color: 0xc08654, roughness: 0.8, emissive: 0x5c2e12, emissiveIntensity: 0.8 });
    const darkWood = new THREE.MeshStandardMaterial({ map: woodTexture, color: 0x8f5a33, roughness: 0.9, emissive: 0x3a1b08, emissiveIntensity: 0.7 });
    const gold = new THREE.MeshStandardMaterial({ color: 0xffc34f, metalness: 0.75, roughness: 0.28, emissive: 0x5d3200, emissiveIntensity: 0.4 });
    const goldDark = new THREE.MeshStandardMaterial({ map: metalTexture, color: 0x9a702c, metalness: 0.8, roughness: 0.38 });

    const base = new THREE.Mesh(new THREE.BoxGeometry(1.55, 0.82, 1.0), wood);
    base.position.y = 0.42;
    base.castShadow = true;
    base.receiveShadow = true;
    base.userData.chest = this;
    this.group.add(base);
    this.hitMeshes.push(base);

    for (const x of [-0.54, 0.54]) {
      const band = new THREE.Mesh(new THREE.BoxGeometry(0.12, 0.94, 1.06), goldDark);
      band.position.set(x, 0.43, 0);
      band.userData.chest = this;
      this.group.add(band);
      this.hitMeshes.push(band);
    }
    const lowerTrim = new THREE.Mesh(new THREE.BoxGeometry(1.62, 0.1, 1.07), gold);
    lowerTrim.position.y = 0.07;
    this.group.add(lowerTrim);

    this.lidPivot = new THREE.Group();
    this.lidPivot.position.set(0, 0.84, -0.5);
    this.group.add(this.lidPivot);

    const lid = new THREE.Mesh(new THREE.BoxGeometry(1.55, 0.32, 1.0), darkWood);
    lid.position.set(0, 0.15, 0.5);
    lid.castShadow = true;
    lid.userData.chest = this;
    this.lidPivot.add(lid);
    this.hitMeshes.push(lid);

    const lidTrim = new THREE.Mesh(new THREE.BoxGeometry(1.61, 0.08, 1.05), gold);
    lidTrim.position.set(0, 0.29, 0.5);
    this.lidPivot.add(lidTrim);

    for (const x of [-0.54, 0.54]) {
      const lidBand = new THREE.Mesh(new THREE.BoxGeometry(0.12, 0.35, 1.06), goldDark);
      lidBand.position.set(x, 0.15, 0.5);
      this.lidPivot.add(lidBand);
    }

    const lock = new THREE.Mesh(new THREE.BoxGeometry(0.22, 0.28, 0.12), gold);
    lock.position.set(0, 0.02, 1.0);
    lock.userData.chest = this;
    this.group.add(lock);
    this.hitMeshes.push(lock);

    const lockHole = new THREE.Mesh(new THREE.CylinderGeometry(0.038, 0.038, 0.04, 8), new THREE.MeshStandardMaterial({ color: 0x22170b }));
    lockHole.rotation.x = Math.PI / 2;
    lockHole.position.set(0, 0.02, 1.065);
    this.group.add(lockHole);

    this.glow = new THREE.PointLight(0xffb447, 2.2, 8, 2);
    this.glow.position.y = 1.2;
    this.group.add(this.glow);
    const frontGlow = new THREE.PointLight(0xffb447, 2.8, 5.5, 2);
    frontGlow.position.set(0, 0.62, 1.1);
    this.group.add(frontGlow);

    this.glowRing = new THREE.Mesh(
      new THREE.RingGeometry(1.15, 1.36, 36),
      new THREE.MeshBasicMaterial({ color: 0xffc85f, transparent: true, opacity: 0.45, side: THREE.DoubleSide, blending: THREE.AdditiveBlending, depthWrite: false }),
    );
    this.glowRing.rotation.x = -Math.PI / 2;
    this.glowRing.position.y = 0.03;
    this.group.add(this.glowRing);

    this.beacon = new THREE.Sprite(new THREE.SpriteMaterial({
      map: glowTexture,
      color: 0xffbd4b,
      transparent: true,
      opacity: 0.46,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
    }));
    this.beacon.position.y = 1.35;
    this.beacon.scale.set(2.4, 2.4, 1);
    this.group.add(this.beacon);

    this.world.updateMatrixWorld?.(true);
  }

  rollLoot() {
    const total = LOOT_TABLE.reduce((sum, item) => sum + item.weight, 0);
    let roll = Math.random() * total;
    for (const item of LOOT_TABLE) {
      roll -= item.weight;
      if (roll <= 0) return item;
    }
    return LOOT_TABLE[0];
  }

  distanceTo(position) {
    return Math.hypot(this.group.position.x - position.x, this.group.position.z - position.z);
  }

  open() {
    if (this.opened) return false;
    this.opened = true;
    this.openProgress = 0.001;
    this.audio?.chest();
    this.onOpen?.();
    this.effects.burst(new THREE.Vector3(this.group.position.x, this.group.position.y + 1, this.group.position.z), 0xffd564, 22, 5.4, 0.12, 6);
    this.effects.ringBurst(this.group.position.clone(), 0xffca58);
    return true;
  }

  update(dt) {
    this.time += dt;
    if (!this.opened) {
      const pulse = 1 + Math.sin(this.time * 2.4) * 0.08;
      this.glow.intensity = 1.8 + Math.sin(this.time * 2.4) * 0.5;
      this.beacon.material.opacity = 0.36 + Math.sin(this.time * 2) * 0.1;
      this.beacon.position.y = 1.35 + Math.sin(this.time * 1.6) * 0.16;
      this.beacon.scale.setScalar(2.35 * pulse);
      this.glowRing.material.opacity = 0.33 + Math.sin(this.time * 2.6) * 0.12;
      this.glowRing.rotation.z += dt * 0.3;
    } else {
      this.openProgress = Math.min(1, this.openProgress + dt * 2.2);
      this.lidOpen = this.openProgress;
      this.lidPivot.rotation.x = -1.24 * this.openProgress;
      this.glow.intensity = 2.8 - this.openProgress * 1.8;
      this.beacon.material.opacity = Math.max(0, 0.46 - this.openProgress * 0.46);
      this.glowRing.material.opacity = Math.max(0, 0.45 - this.openProgress * 0.6);
    }
  }

  dispose() {
    this.scene.remove(this.group);
    this.group.traverse((child) => {
      if (child.isMesh) {
        child.geometry.dispose();
        child.material.dispose();
      }
    });
  }
}

class LootPickup {
  constructor(scene, loot, position, glowTexture) {
    this.scene = scene;
    this.loot = loot;
    this.age = 0;
    this.collected = false;
    this.baseY = position.y;
    this.group = new THREE.Group();
    this.group.position.copy(position);
    scene.add(this.group);

    const material = new THREE.MeshStandardMaterial({
      color: loot.color,
      emissive: loot.color,
      emissiveIntensity: 0.45,
      metalness: 0.3,
      roughness: 0.4,
    });
    const dark = new THREE.MeshStandardMaterial({ color: 0x1b2733, roughness: 0.65, metalness: 0.3 });
    const white = new THREE.MeshStandardMaterial({ color: 0xf3f7fa, roughness: 0.5 });
    const red = new THREE.MeshStandardMaterial({ color: 0xff475f, emissive: 0x6b101d, emissiveIntensity: 0.7 });

    if (loot.id === 'ammo') {
      const box = new THREE.Mesh(new THREE.BoxGeometry(0.34, 0.22, 0.5), material);
      this.group.add(box);
      for (let i = 0; i < 3; i += 1) {
        const bullet = new THREE.Mesh(new THREE.CylinderGeometry(0.026, 0.026, 0.2, 6), dark);
        bullet.rotation.x = Math.PI / 2;
        bullet.position.set(-0.1 + i * 0.1, 0.17, 0);
        this.group.add(bullet);
      }
    } else if (loot.id === 'shield') {
      const bottle = new THREE.Mesh(new THREE.CylinderGeometry(0.15, 0.19, 0.42, 8), material);
      this.group.add(bottle);
      const neck = new THREE.Mesh(new THREE.CylinderGeometry(0.07, 0.08, 0.15, 8), material);
      neck.position.y = 0.28;
      this.group.add(neck);
      const cap = new THREE.Mesh(new THREE.CylinderGeometry(0.09, 0.09, 0.06, 8), dark);
      cap.position.y = 0.37;
      this.group.add(cap);
    } else if (loot.id === 'health') {
      const box = new THREE.Mesh(new THREE.BoxGeometry(0.48, 0.3, 0.35), white);
      this.group.add(box);
      const crossA = new THREE.Mesh(new THREE.BoxGeometry(0.24, 0.06, 0.36), red);
      crossA.position.y = 0.16;
      this.group.add(crossA);
      const crossB = new THREE.Mesh(new THREE.BoxGeometry(0.08, 0.06, 0.24), red);
      crossB.position.y = 0.16;
      this.group.add(crossB);
    } else {
      const body = new THREE.Mesh(new THREE.BoxGeometry(0.5, 0.1, 0.14), material);
      this.group.add(body);
      const barrel = new THREE.Mesh(new THREE.CylinderGeometry(0.02, 0.02, 0.34, 6), dark);
      barrel.rotation.z = Math.PI / 2;
      barrel.position.x = 0.37;
      this.group.add(barrel);
      const mag = new THREE.Mesh(new THREE.BoxGeometry(0.1, 0.22, 0.09), dark);
      mag.position.set(-0.04, -0.14, 0);
      this.group.add(mag);
    }

    this.beacon = new THREE.Sprite(new THREE.SpriteMaterial({
      map: glowTexture,
      color: loot.color,
      transparent: true,
      opacity: 0.65,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
    }));
    this.beacon.scale.set(1.4, 1.4, 1);
    this.group.add(this.beacon);

    this.light = new THREE.PointLight(loot.color, 1.4, 4, 2);
    this.group.add(this.light);
  }

  update(dt) {
    this.age += dt;
    this.group.rotation.y += dt * 1.5;
    this.group.position.y = this.baseY + Math.sin(this.age * 2.6) * 0.14 + Math.min(0.25, this.age * 0.6);
    this.beacon.material.opacity = 0.45 + Math.sin(this.age * 4) * 0.15;
  }

  dispose() {
    this.scene.remove(this.group);
    this.group.traverse((child) => {
      if (child.isMesh) {
        child.geometry.dispose();
        child.material.dispose();
      }
    });
  }
}
