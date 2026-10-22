import * as THREE from 'three';
import { createWoodTexture } from './textures.js';
import { clamp, smoothstep } from './utils.js';

export const BUILD_TYPES = [
  { id: 'wall', name: 'WALL', height: 4.0 },
  { id: 'floor', name: 'FLOOR', height: 0.3 },
  { id: 'ramp', name: 'RAMP', height: 2.4 },
];

const GRID = 4;
const RAMP_HEIGHT = 2.4;
const RAMP_ANGLE = Math.asin(RAMP_HEIGHT / GRID);

export class BuildSystem {
  constructor(scene, world, camera, effects, audio) {
    this.scene = scene;
    this.world = world;
    this.camera = camera;
    this.effects = effects;
    this.audio = audio;
    this.active = false;
    this.selected = 0;
    this.pieces = [];
    this.wallColliders = [];
    this.raycastMeshes = [];
    this.ghostValid = false;
    this.ghostPoint = new THREE.Vector3();
    this.ghostBase = 0;
    this.ghostRotation = 0;
    this.placementCooldown = 0;
    this.raycaster = new THREE.Raycaster();
    this.center = new THREE.Vector2(0, 0);

    this.woodTexture = createWoodTexture();
    this.materials = {
      wall: new THREE.MeshStandardMaterial({ map: this.woodTexture, color: 0xd9a673, roughness: 0.82, metalness: 0.02 }),
      wallDark: new THREE.MeshStandardMaterial({ map: this.woodTexture, color: 0x8d5d36, roughness: 0.9 }),
      floor: new THREE.MeshStandardMaterial({ map: this.woodTexture, color: 0xc99560, roughness: 0.86 }),
      trim: new THREE.MeshStandardMaterial({ color: 0x5a3c25, roughness: 0.92 }),
    };

    this.ghostGroup = new THREE.Group();
    this.ghostGroup.visible = false;
    this.scene.add(this.ghostGroup);
    this.ghostMaterial = new THREE.MeshBasicMaterial({
      color: 0x75ffd8,
      transparent: true,
      opacity: 0.28,
      depthWrite: false,
      side: THREE.DoubleSide,
    });
    this.edgeMaterial = new THREE.LineBasicMaterial({
      color: 0xbaffee,
      transparent: true,
      opacity: 0.9,
      depthWrite: false,
    });

    this.ghosts = {
      wall: this.createGhost(new THREE.BoxGeometry(GRID, BUILD_TYPES[0].height, 0.3), 'wall'),
      floor: this.createGhost(new THREE.BoxGeometry(GRID, 0.3, GRID), 'floor'),
      ramp: this.createGhost(new THREE.BoxGeometry(GRID, 0.28, GRID / Math.cos(RAMP_ANGLE)), 'ramp'),
    };
    this.ghosts.wall.position.y = 2;
    this.ghosts.floor.position.y = 0.15;
    this.ghosts.ramp.position.y = 1.2;
    this.ghosts.ramp.rotation.x = RAMP_ANGLE;
    for (const ghost of Object.values(this.ghosts)) this.ghostGroup.add(ghost);
  }

  createGhost(geometry, type) {
    const mesh = new THREE.Mesh(geometry, this.ghostMaterial.clone());
    mesh.renderOrder = 8;
    const edges = new THREE.LineSegments(new THREE.EdgesGeometry(geometry), this.edgeMaterial.clone());
    edges.renderOrder = 9;
    mesh.add(edges);
    const grid = new THREE.LineSegments(this.createGridGeometry(type), this.edgeMaterial.clone());
    grid.renderOrder = 9;
    mesh.add(grid);
    mesh.userData.edges = edges;
    mesh.userData.grid = grid;
    return mesh;
  }

  createGridGeometry(type) {
    const points = [];
    const line = (a, b) => points.push(a[0], a[1], a[2], b[0], b[1], b[2]);
    if (type === 'floor') {
      for (let i = -2; i <= 2; i += 1) {
        line([i, 0.15, -2], [i, 0.15, 2]);
        line([-2, 0.15, i], [2, 0.15, i]);
      }
    } else if (type === 'ramp') {
      const halfDepth = 2 / Math.cos(RAMP_ANGLE);
      for (let i = -2; i <= 2; i += 1) {
        line([i, 0.15, -halfDepth], [i, 0.15, halfDepth]);
        const z = (i / 2) * halfDepth;
        line([-2, 0.15, z], [2, 0.15, z]);
      }
    } else {
      for (let i = -2; i <= 2; i += 1) {
        line([i, -2, 0.16], [i, 2, 0.16]);
        line([-2, i, 0.16], [2, i, 0.16]);
        line([i, -2, -0.16], [i, 2, -0.16]);
        line([-2, i, -0.16], [2, i, -0.16]);
      }
    }
    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute('position', new THREE.Float32BufferAttribute(points, 3));
    return geometry;
  }

  setActive(active) {
    this.active = active;
    this.ghostGroup.visible = false;
    if (!active) {
      this.ghosts.wall.visible = false;
      this.ghosts.floor.visible = false;
      this.ghosts.ramp.visible = false;
    }
  }

  setSelected(index) {
    this.selected = clamp(index, 0, BUILD_TYPES.length - 1);
    this.updateGhostVisibility();
  }

  updateGhostVisibility() {
    const selectedType = BUILD_TYPES[this.selected].id;
    for (const [id, ghost] of Object.entries(this.ghosts)) ghost.visible = id === selectedType;
  }

  updateGhost(player, dt) {
    this.placementCooldown = Math.max(0, this.placementCooldown - dt);
    if (!this.active) {
      this.ghostGroup.visible = false;
      return;
    }
    this.ghostGroup.visible = true;
    this.updateGhostVisibility();

    this.raycaster.setFromCamera(this.center, this.camera);
    this.raycaster.far = 16;
    const targets = [...this.world.raycastTargets, ...this.raycastMeshes];
    const hits = this.raycaster.intersectObjects(targets, false);
    const hit = hits[0];
    const origin = this.camera.getWorldPosition(new THREE.Vector3());
    const direction = this.camera.getWorldDirection(new THREE.Vector3());
    const hitDistance = hit ? Math.min(hit.distance, 11) : 8;
    const aimPoint = origin.clone().addScaledVector(direction, hitDistance);
    if (hit && hit.distance > 0.4) {
      aimPoint.copy(hit.point);
      if (hitDistance < hit.distance) aimPoint.copy(origin.clone().addScaledVector(direction, hitDistance));
    }
    aimPoint.y = Math.max(aimPoint.y, this.world.heightAt(aimPoint.x, aimPoint.z));

    const snapX = Math.round(aimPoint.x / GRID) * GRID;
    const snapZ = Math.round(aimPoint.z / GRID) * GRID;
    const type = BUILD_TYPES[this.selected].id;
    const targetSurface = this.surfaceHeightAt(snapX, snapZ, aimPoint.y + 0.8);
    const base = Number.isFinite(targetSurface) ? targetSurface : this.world.heightAt(snapX, snapZ);

    let rotation = 0;
    if (type === 'wall' || type === 'ramp') {
      rotation = Math.round(player.yaw / (Math.PI / 2)) * (Math.PI / 2);
    }

    this.ghostPoint.set(snapX, base, snapZ);
    this.ghostBase = base;
    this.ghostRotation = rotation;
    this.ghostGroup.position.set(snapX, base, snapZ);
    this.ghostGroup.rotation.y = rotation;

    const distance = Math.hypot(snapX - player.position.x, snapZ - player.position.z);
    const slope = this.getSlope(snapX, snapZ, type);
    const overlap = this.pieces.some((piece) => {
      if (Math.abs(piece.x - snapX) > 0.2 || Math.abs(piece.z - snapZ) > 0.2) return false;
      if (piece.type !== type) return false;
      return Math.abs(piece.base - base) < 1.05;
    });
    const tooClose = distance < 2.6;
    const withinRange = distance <= 12;
    const slopeValid = slope < (type === 'wall' ? 1.4 : 2.0);
    this.ghostValid = withinRange && !overlap && !tooClose && slopeValid;

    const pulse = 0.25 + Math.sin(performance.now() * 0.005) * 0.055;
    const color = this.ghostValid ? 0x66ffd2 : 0xff526a;
    for (const ghost of Object.values(this.ghosts)) {
      ghost.material.color.setHex(color);
      ghost.material.opacity = pulse;
      ghost.userData.edges.material.color.setHex(this.ghostValid ? 0xb5fff0 : 0xffb0ba);
      ghost.userData.edges.material.opacity = 0.7 + Math.sin(performance.now() * 0.005) * 0.18;
      ghost.userData.grid.material.color.setHex(this.ghostValid ? 0x9dffe2 : 0xffa1ad);
      ghost.userData.grid.material.opacity = 0.42 + Math.sin(performance.now() * 0.004) * 0.08;
    }

    if (hit) {
      this.ghostPoint.y = base;
    }
  }

  surfaceHeightAt(x, z, yLimit = Infinity) {
    let height = this.world.heightAt(x, z);
    for (const piece of this.pieces) {
      const top = this.pieceTopAt(piece, x, z);
      if (top !== null && top <= yLimit && top > height) height = top;
    }
    return height;
  }

  getSlope(x, z, type) {
    if (type === 'wall') return 0;
    const samples = [
      this.world.heightAt(x - 2, z - 2),
      this.world.heightAt(x + 2, z - 2),
      this.world.heightAt(x - 2, z + 2),
      this.world.heightAt(x + 2, z + 2),
    ];
    return Math.max(...samples) - Math.min(...samples);
  }

  place() {
    if (!this.active || !this.ghostValid || this.placementCooldown > 0) return false;
    const type = BUILD_TYPES[this.selected].id;
    const piece = this.createPiece(type, this.ghostPoint.x, this.ghostPoint.z, this.ghostBase, this.ghostRotation);
    this.pieces.push(piece);
    this.placementCooldown = 0.18;
    this.audio?.build();
    this.effects?.burst(
      new THREE.Vector3(piece.x, piece.base + 0.35, piece.z),
      0xd7aa76,
      16,
      4.2,
      0.12,
      10,
    );
    this.rebuildColliders();
    this.ghostValid = false;
    return true;
  }

  createPiece(type, x, z, base, rotation) {
    const group = new THREE.Group();
    group.position.set(x, base, z);
    group.rotation.y = rotation;
    const meshes = [];

    if (type === 'wall') {
      const panel = new THREE.Mesh(new THREE.BoxGeometry(GRID - 0.12, 3.8, 0.28), this.materials.wall);
      panel.position.y = 2.0;
      panel.castShadow = true;
      panel.receiveShadow = true;
      group.add(panel);
      meshes.push(panel);
      for (let i = 0; i < 4; i += 1) {
        const beam = new THREE.Mesh(new THREE.BoxGeometry(GRID, 0.2, 0.36), this.materials.trim);
        beam.position.set(0, 0.22 + i * 1.19, 0);
        beam.castShadow = true;
        group.add(beam);
        meshes.push(beam);
      }
      const diagonal = new THREE.Mesh(new THREE.BoxGeometry(4.55, 0.16, 0.39), this.materials.wallDark);
      diagonal.position.set(0, 2.0, 0);
      diagonal.rotation.z = 0.82;
      group.add(diagonal);
      meshes.push(diagonal);
      for (const side of [-1, 1]) {
        const post = new THREE.Mesh(new THREE.BoxGeometry(0.22, 4.05, 0.42), this.materials.trim);
        post.position.set(side * (GRID / 2 - 0.08), 2.02, 0);
        post.castShadow = true;
        group.add(post);
        meshes.push(post);
      }
    } else if (type === 'floor') {
      const panel = new THREE.Mesh(new THREE.BoxGeometry(GRID, 0.28, GRID), this.materials.floor);
      panel.position.y = 0.14;
      panel.castShadow = true;
      panel.receiveShadow = true;
      group.add(panel);
      meshes.push(panel);
      for (const side of [-1, 1]) {
        const beam = new THREE.Mesh(new THREE.BoxGeometry(GRID, 0.18, 0.24), this.materials.trim);
        beam.position.set(0, 0.03, side * (GRID / 2 - 0.15));
        group.add(beam);
        meshes.push(beam);
      }
    } else {
      const deck = new THREE.Mesh(new THREE.BoxGeometry(GRID, 0.28, GRID / Math.cos(RAMP_ANGLE)), this.materials.floor);
      deck.position.y = 1.2;
      deck.rotation.x = RAMP_ANGLE;
      deck.castShadow = true;
      deck.receiveShadow = true;
      group.add(deck);
      meshes.push(deck);
      for (let i = 0; i < 4; i += 1) {
        const cross = new THREE.Mesh(new THREE.BoxGeometry(GRID, 0.12, 0.16), this.materials.trim);
        cross.position.set(0, 0.35 + i * 0.6, 1.75 - i * 1.16);
        cross.rotation.x = RAMP_ANGLE;
        group.add(cross);
        meshes.push(cross);
      }
    }

    for (const mesh of meshes) {
      mesh.userData.buildPiece = true;
      this.raycastMeshes.push(mesh);
    }
    this.scene.add(group);

    return {
      type,
      x,
      z,
      base,
      rotation,
      group,
      meshes,
      top: type === 'wall' ? base + 4 : type === 'floor' ? base + 0.28 : base + 2.4,
    };
  }

  pieceTopAt(piece, worldX, worldZ) {
    const dx = worldX - piece.x;
    const dz = worldZ - piece.z;
    const cos = Math.cos(-piece.rotation);
    const sin = Math.sin(-piece.rotation);
    const localX = dx * cos - dz * sin;
    const localZ = dx * sin + dz * cos;
    if (piece.type === 'wall') {
      if (Math.abs(localX) > GRID / 2 || Math.abs(localZ) > 0.22) return null;
      return piece.base + 4;
    }
    if (piece.type === 'floor') {
      if (Math.abs(localX) > GRID / 2 || Math.abs(localZ) > GRID / 2) return null;
      return piece.base + 0.28;
    }
    if (Math.abs(localX) > GRID / 2 || Math.abs(localZ) > GRID / 2) return null;
    const t = clamp((GRID / 2 - localZ) / GRID, 0, 1);
    return piece.base + 0.14 + t * RAMP_HEIGHT;
  }

  getSupportHeight(x, z, feetY) {
    const step = 0.56;
    let support = -Infinity;
    for (const piece of this.pieces) {
      const top = this.pieceTopAt(piece, x, z);
      if (top !== null && top <= feetY + step && top > support) support = top;
    }
    return support;
  }

  rebuildColliders() {
    this.wallColliders = [];
    for (const piece of this.pieces) {
      if (piece.type !== 'wall') continue;
      const cos = Math.abs(Math.cos(piece.rotation));
      const sin = Math.abs(Math.sin(piece.rotation));
      const halfX = cos * (GRID / 2) + sin * 0.22;
      const halfZ = sin * (GRID / 2) + cos * 0.22;
      this.wallColliders.push({
        minX: piece.x - halfX,
        maxX: piece.x + halfX,
        minY: piece.base,
        maxY: piece.base + 4,
        minZ: piece.z - halfZ,
        maxZ: piece.z + halfZ,
      });
    }
  }

  getWallColliders() {
    return this.wallColliders;
  }

  getRaycastMeshes() {
    return this.raycastMeshes;
  }

  getGhostState() {
    return {
      active: this.active,
      valid: this.ghostValid,
      type: BUILD_TYPES[this.selected].id,
      x: this.ghostPoint.x,
      y: this.ghostBase,
      z: this.ghostPoint.z,
      rotation: this.ghostRotation,
      count: this.pieces.length,
    };
  }
}
