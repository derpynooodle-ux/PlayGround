import * as THREE from 'three';
import { createGlowTexture } from './textures.js';
import { clamp, formatTime, lerp } from './utils.js';

export class Storm {
  constructor(scene, world, audio) {
    this.scene = scene;
    this.world = world;
    this.audio = audio;
    this.center = new THREE.Vector2(0, 0);
    this.initialRadius = 72;
    this.minRadius = 5;
    this.radius = this.initialRadius;
    this.timer = 30;
    this.phase = 1;
    this.shrinking = false;
    this.shrinkT = 0;
    this.shrinkDuration = 7;
    this.shrinkFrom = this.radius;
    this.shrinkTo = this.radius;
    this.time = 0;
    this.pulseHitTimer = 0;
    this.lastRadiusUpdate = -1;

    this.createWall();
    this.createParticles();
    this.createGroundRing();
  }

  createWall() {
    const geometry = new THREE.CylinderGeometry(1, 1, 1, 160, 1, true);
    this.material = new THREE.ShaderMaterial({
      transparent: true,
      depthWrite: false,
      side: THREE.DoubleSide,
      blending: THREE.AdditiveBlending,
      uniforms: {
        uTime: { value: 0 },
        uOpacity: { value: 0.82 },
        uColorA: { value: new THREE.Color(0x35106b) },
        uColorB: { value: new THREE.Color(0xd98cff) },
      },
      vertexShader: `
        varying vec2 vUv;
        varying vec3 vWorld;
        void main() {
          vUv = uv;
          vec4 world = modelMatrix * vec4(position, 1.0);
          vWorld = world.xyz;
          gl_Position = projectionMatrix * viewMatrix * world;
        }
      `,
      fragmentShader: `
        uniform float uTime;
        uniform float uOpacity;
        uniform vec3 uColorA;
        uniform vec3 uColorB;
        varying vec2 vUv;
        varying vec3 vWorld;
        float hash(vec2 p) {
          return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453);
        }
        void main() {
          float angle = vUv.x;
          float wave = sin(angle * 86.0 + uTime * 1.1 + sin(vUv.y * 14.0 - uTime * 0.7) * 2.4);
          float fine = sin(angle * 212.0 - uTime * 2.9 + vUv.y * 8.0);
          float stripe = smoothstep(0.25, 0.9, wave * 0.5 + 0.5);
          float streak = smoothstep(0.78, 1.0, fine * 0.5 + 0.5);
          float base = smoothstep(0.0, 0.18, vUv.y);
          float top = 1.0 - smoothstep(0.55, 1.0, vUv.y);
          float heightFade = base * top;
          float verticalGlow = pow(1.0 - vUv.y, 1.8);
          vec3 color = mix(uColorA, uColorB, stripe * 0.72 + streak * 0.35 + verticalGlow * 0.3);
          color += vec3(0.42, 0.1, 0.8) * verticalGlow * 0.5;
          float alpha = (0.24 + stripe * 0.22 + streak * 0.12 + verticalGlow * 0.18) * heightFade * uOpacity;
          gl_FragColor = vec4(color, alpha);
        }
      `,
    });
    this.wall = new THREE.Mesh(geometry, this.material);
    this.wall.position.set(this.center.x, 13, this.center.y);
    this.wall.scale.set(this.radius, 38, this.radius);
    this.wall.renderOrder = 3;
    this.scene.add(this.wall);

    this.innerMaterial = this.material.clone();
    this.innerMaterial.uniforms = THREE.UniformsUtils.clone(this.material.uniforms);
    this.innerMaterial.uniforms.uOpacity.value = 0.42;
    this.innerMaterial.uniforms.uColorA.value.setHex(0x7e2dd9);
    this.innerMaterial.uniforms.uColorB.value.setHex(0xe8b4ff);
    this.innerWall = new THREE.Mesh(geometry, this.innerMaterial);
    this.innerWall.position.set(this.center.x, 13, this.center.y);
    this.innerWall.scale.set(this.radius * 0.994, 38, this.radius * 0.994);
    this.innerWall.renderOrder = 4;
    this.scene.add(this.innerWall);
  }

  createParticles() {
    const count = 760;
    this.particleCount = count;
    this.particleAngles = new Float32Array(count);
    this.particleHeights = new Float32Array(count);
    this.particleSpeed = new Float32Array(count);
    const positions = new Float32Array(count * 3);
    for (let i = 0; i < count; i += 1) {
      this.particleAngles[i] = Math.random() * Math.PI * 2;
      this.particleHeights[i] = Math.random() * 22;
      this.particleSpeed[i] = 0.3 + Math.random() * 1.4;
    }
    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    const material = new THREE.PointsMaterial({
      color: 0xdca5ff,
      size: 0.32,
      map: createGlowTexture(),
      transparent: true,
      opacity: 0.72,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
      sizeAttenuation: true,
    });
    this.particles = new THREE.Points(geometry, material);
    this.particles.frustumCulled = false;
    this.scene.add(this.particles);
  }

  createGroundRing() {
    const segments = 180;
    this.ringSegments = segments;
    const geometry = new THREE.BufferGeometry();
    const positions = new Float32Array((segments + 1) * 3);
    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    const material = new THREE.LineBasicMaterial({
      color: 0xd98cff,
      transparent: true,
      opacity: 0.8,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });
    this.ring = new THREE.Line(geometry, material);
    this.scene.add(this.ring);
    this.ringHeightVersion = -1;
  }

  beginShrink() {
    if (this.radius <= this.minRadius + 0.05) return;
    this.shrinkFrom = this.radius;
    const scale = this.phase === 1 ? 0.78 : 0.72;
    this.shrinkTo = Math.max(this.minRadius, this.radius * scale);
    this.shrinking = true;
    this.shrinkT = 0;
    this.phase += 1;
    this.timer = 30;
    this.audio?.stormHit();
  }

  reset() {
    this.radius = this.initialRadius;
    this.timer = 30;
    this.phase = 1;
    this.shrinking = false;
    this.shrinkT = 0;
    this.shrinkFrom = this.radius;
    this.shrinkTo = this.radius;
    this.updateVisuals();
  }

  update(dt, running) {
    this.time += dt;
    if (running) {
      this.timer -= dt;
      if (this.timer <= 0) this.beginShrink();
      if (this.shrinking) {
        this.shrinkT += dt;
        const t = clamp(this.shrinkT / this.shrinkDuration, 0, 1);
        const eased = t * t * (3 - 2 * t);
        this.radius = lerp(this.shrinkFrom, this.shrinkTo, eased);
        if (t >= 1) {
          this.shrinking = false;
          this.radius = this.shrinkTo;
        }
      }
    }
    this.updateVisuals();
  }

  updateVisuals() {
    this.material.uniforms.uTime.value = this.time;
    this.innerMaterial.uniforms.uTime.value = this.time * -1.4;
    this.wall.scale.set(this.radius, 38, this.radius);
    this.innerWall.scale.set(this.radius * 0.994, 38, this.radius * 0.994);

    const positions = this.particles.geometry.attributes.position.array;
    for (let i = 0; i < this.particleCount; i += 1) {
      const angle = this.particleAngles[i] + this.time * 0.008 * this.particleSpeed[i];
      this.particleHeights[i] += this.particleSpeed[i] * 0.14 * (1 / 60);
      if (this.particleHeights[i] > 23) this.particleHeights[i] = 0.2;
      const radius = this.radius * (0.997 + Math.sin(this.time * 0.7 + i) * 0.006);
      positions[i * 3] = Math.cos(angle) * radius;
      positions[i * 3 + 1] = 2 + this.particleHeights[i];
      positions[i * 3 + 2] = Math.sin(angle) * radius;
    }
    this.particles.geometry.attributes.position.needsUpdate = true;

    if (Math.abs(this.radius - this.lastRadiusUpdate) > 0.07) {
      this.lastRadiusUpdate = this.radius;
      const ringPositions = this.ring.geometry.attributes.position.array;
      for (let i = 0; i <= this.ringSegments; i += 1) {
        const angle = (i / this.ringSegments) * Math.PI * 2;
        const x = Math.cos(angle) * this.radius;
        const z = Math.sin(angle) * this.radius;
        ringPositions[i * 3] = x;
        ringPositions[i * 3 + 1] = this.world.heightAt(x, z) + 0.16;
        ringPositions[i * 3 + 2] = z;
      }
      this.ring.geometry.attributes.position.needsUpdate = true;
    }
    this.ring.material.opacity = 0.52 + Math.sin(this.time * 3.2) * 0.2;
  }

  isOutside(x, z) {
    return Math.hypot(x - this.center.x, z - this.center.y) > this.radius;
  }

  getState() {
    return {
      radius: this.radius,
      phase: this.phase,
      timer: this.timer,
      timerLabel: formatTime(this.timer),
      shrinking: this.shrinking,
      status: this.shrinking ? 'CLOSING' : this.radius <= this.minRadius + 0.1 ? 'FINAL' : 'STABLE',
    };
  }
}
