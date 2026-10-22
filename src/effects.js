import * as THREE from 'three';
import { createGlowTexture } from './textures.js';

const UP = new THREE.Vector3(0, 1, 0);

export class EffectsSystem {
  constructor(scene) {
    this.scene = scene;
    this.effects = [];
    this.tracerGeometry = new THREE.CylinderGeometry(0.012, 0.012, 1, 5, 1, true);
    this.tracerGeometry.translate(0, 0.5, 0);
    this.particleGeometry = new THREE.BufferGeometry();
    this.glowTexture = createGlowTexture();
  }

  tracer(from, to, color = 0xffd37a, width = 1) {
    const direction = new THREE.Vector3().subVectors(to, from);
    const length = direction.length();
    if (length < 0.05) return;
    const material = new THREE.MeshBasicMaterial({
      color,
      transparent: true,
      opacity: 0.94,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });
    const mesh = new THREE.Mesh(this.tracerGeometry, material);
    mesh.position.copy(from);
    mesh.scale.set(width, length, width);
    mesh.quaternion.setFromUnitVectors(UP, direction.normalize());
    mesh.renderOrder = 4;
    this.scene.add(mesh);
    this.effects.push({ type: 'tracer', object: mesh, life: 0.085, maxLife: 0.085 });
  }

  burst(position, color = 0xffd27d, count = 10, speed = 5, size = 0.09, gravity = 12) {
    const positions = new Float32Array(count * 3);
    const velocities = [];
    for (let i = 0; i < count; i += 1) {
      positions[i * 3] = position.x;
      positions[i * 3 + 1] = position.y;
      positions[i * 3 + 2] = position.z;
      const direction = new THREE.Vector3(Math.random() - 0.5, Math.random() * 0.9 + 0.1, Math.random() - 0.5).normalize();
      velocities.push(direction.multiplyScalar(speed * (0.35 + Math.random() * 0.8)));
    }
    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    const material = new THREE.PointsMaterial({
      color,
      size,
      map: this.glowTexture,
      transparent: true,
      opacity: 1,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
      sizeAttenuation: true,
    });
    const points = new THREE.Points(geometry, material);
    points.frustumCulled = false;
    this.scene.add(points);
    this.effects.push({ type: 'particles', object: points, velocities, life: 0.7, maxLife: 0.7, gravity });
  }

  ringBurst(position, color = 0xffd26e) {
    const material = new THREE.MeshBasicMaterial({
      color,
      transparent: true,
      opacity: 0.8,
      side: THREE.DoubleSide,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });
    const ring = new THREE.Mesh(new THREE.RingGeometry(0.55, 0.72, 32), material);
    ring.rotation.x = -Math.PI / 2;
    ring.position.copy(position);
    ring.position.y += 0.3;
    this.scene.add(ring);
    this.effects.push({ type: 'ring', object: ring, life: 0.6, maxLife: 0.6 });
  }

  damageNumber(position, text, color = '#ffe6a3', critical = false) {
    const canvas = document.createElement('canvas');
    canvas.width = 256;
    canvas.height = 128;
    const ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, 256, 128);
    ctx.font = critical ? '900 78px Trebuchet MS' : '900 64px Trebuchet MS';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.lineWidth = 9;
    ctx.strokeStyle = 'rgba(8, 12, 22, .82)';
    ctx.strokeText(text, 128, 66);
    if (critical) {
      const gradient = ctx.createLinearGradient(0, 20, 0, 108);
      gradient.addColorStop(0, '#fff4a8');
      gradient.addColorStop(1, '#ff9d2e');
      ctx.fillStyle = gradient;
    } else {
      ctx.fillStyle = color;
    }
    ctx.fillText(text, 128, 66);
    if (critical) {
      ctx.font = '900 20px Trebuchet MS';
      ctx.fillStyle = '#ffd56a';
      ctx.strokeStyle = 'rgba(8, 12, 22, .8)';
      ctx.lineWidth = 5;
      ctx.strokeText('CRITICAL', 128, 113);
      ctx.fillText('CRITICAL', 128, 113);
    }
    const texture = new THREE.CanvasTexture(canvas);
    texture.colorSpace = THREE.SRGBColorSpace;
    const material = new THREE.SpriteMaterial({ map: texture, transparent: true, depthWrite: false, depthTest: false });
    const sprite = new THREE.Sprite(material);
    sprite.position.copy(position);
    sprite.scale.set(1.15, 0.575, 1);
    sprite.renderOrder = 12;
    this.scene.add(sprite);
    this.effects.push({ type: 'sprite', object: sprite, life: 0.9, maxLife: 0.9, velocity: 1.3, texture });
  }

  update(dt) {
    for (let i = this.effects.length - 1; i >= 0; i -= 1) {
      const effect = this.effects[i];
      effect.life -= dt;
      const progress = 1 - Math.max(0, effect.life) / effect.maxLife;
      if (effect.type === 'tracer') {
        effect.object.material.opacity = (1 - progress) * 0.94;
        effect.object.scale.x = 1 - progress * 0.65;
        effect.object.scale.z = 1 - progress * 0.65;
      } else if (effect.type === 'particles') {
        const positions = effect.object.geometry.attributes.position.array;
        for (let p = 0; p < effect.velocities.length; p += 1) {
          const velocity = effect.velocities[p];
          positions[p * 3] += velocity.x * dt;
          positions[p * 3 + 1] += velocity.y * dt;
          positions[p * 3 + 2] += velocity.z * dt;
          velocity.y -= effect.gravity * dt;
          velocity.multiplyScalar(1 - dt * 1.4);
        }
        effect.object.geometry.attributes.position.needsUpdate = true;
        effect.object.material.opacity = 1 - progress;
      } else if (effect.type === 'ring') {
        const scale = 1 + progress * 5.5;
        effect.object.scale.set(scale, scale, scale);
        effect.object.material.opacity = (1 - progress) * 0.8;
      } else if (effect.type === 'sprite') {
        effect.object.position.y += effect.velocity * dt;
        effect.object.material.opacity = 1 - progress * progress;
        const scale = 1.15 + progress * 0.25;
        effect.object.scale.set(scale, scale * 0.5, 1);
      }
      if (effect.life <= 0) {
        this.scene.remove(effect.object);
        if (effect.type === 'particles') {
          effect.object.geometry.dispose();
          effect.object.material.dispose();
        } else if (effect.type === 'ring') {
          effect.object.geometry.dispose();
          effect.object.material.dispose();
        } else if (effect.type === 'sprite') {
          effect.texture.dispose();
          effect.object.material.dispose();
        } else {
          effect.object.material.dispose();
        }
        this.effects.splice(i, 1);
      }
    }
  }
}
