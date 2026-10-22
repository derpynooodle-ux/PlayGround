import * as THREE from 'three';
import { mulberry32, randomRange } from './utils.js';

function canvasTexture(size, draw, repeatX = 1, repeatY = 1) {
  const canvas = document.createElement('canvas');
  canvas.width = size;
  canvas.height = size;
  const ctx = canvas.getContext('2d');
  draw(ctx, size);
  const texture = new THREE.CanvasTexture(canvas);
  texture.colorSpace = THREE.SRGBColorSpace;
  texture.wrapS = THREE.RepeatWrapping;
  texture.wrapT = THREE.RepeatWrapping;
  texture.repeat.set(repeatX, repeatY);
  texture.anisotropy = 4;
  return texture;
}

export function createGrassTexture() {
  const random = mulberry32(451);
  return canvasTexture(512, (ctx, size) => {
    ctx.fillStyle = '#557f3a';
    ctx.fillRect(0, 0, size, size);
    for (let i = 0; i < 5400; i += 1) {
      const x = random() * size;
      const y = random() * size;
      const r = randomRange(random, 0.5, 2.4);
      const lightness = 26 + random() * 20;
      const hue = 84 + random() * 34;
      ctx.fillStyle = `hsla(${hue}, ${28 + random() * 30}%, ${lightness}%, ${0.12 + random() * 0.28})`;
      ctx.beginPath();
      ctx.arc(x, y, r, 0, Math.PI * 2);
      ctx.fill();
    }
    for (let i = 0; i < 260; i += 1) {
      const x = random() * size;
      const y = random() * size;
      const radius = randomRange(random, 8, 40);
      ctx.strokeStyle = `rgba(218, 211, 111, ${0.025 + random() * 0.05})`;
      ctx.lineWidth = randomRange(random, 0.4, 1.5);
      ctx.beginPath();
      ctx.arc(x, y, radius, 0, Math.PI * 2);
      ctx.stroke();
    }
    ctx.lineWidth = 1;
    for (let i = 0; i < 2100; i += 1) {
      const x = random() * size;
      const y = random() * size;
      const length = randomRange(random, 2, 7);
      ctx.strokeStyle = `rgba(${90 + random() * 50}, ${130 + random() * 60}, ${50 + random() * 30}, ${0.1 + random() * 0.32})`;
      ctx.beginPath();
      ctx.moveTo(x, y);
      ctx.lineTo(x + randomRange(random, -2, 2), y - length);
      ctx.stroke();
    }
    for (let i = 0; i < 70; i += 1) {
      const x = random() * size;
      const y = random() * size;
      ctx.fillStyle = random() > 0.45 ? 'rgba(244, 216, 95, .52)' : 'rgba(233, 235, 210, .46)';
      ctx.beginPath();
      ctx.arc(x, y, 1.2, 0, Math.PI * 2);
      ctx.fill();
    }
  }, 52, 52);
}

export function createWoodTexture() {
  const random = mulberry32(992);
  return canvasTexture(512, (ctx, size) => {
    ctx.fillStyle = '#9a6434';
    ctx.fillRect(0, 0, size, size);
    const plankHeight = size / 6;
    for (let row = 0; row < 6; row += 1) {
      const y = row * plankHeight;
      const shade = 0.78 + random() * 0.34;
      ctx.fillStyle = `rgba(${139 * shade}, ${88 * shade}, ${43 * shade}, 1)`;
      ctx.fillRect(0, y + 2, size, plankHeight - 4);
      ctx.fillStyle = 'rgba(55, 27, 9, .34)';
      ctx.fillRect(0, y, size, 2);
      ctx.fillStyle = 'rgba(255, 210, 143, .12)';
      ctx.fillRect(0, y + 3, size, 1);
      for (let grain = 0; grain < 18; grain += 1) {
        const gy = y + 6 + random() * (plankHeight - 12);
        ctx.strokeStyle = `rgba(${62 + random() * 28}, ${33 + random() * 20}, ${10 + random() * 12}, ${0.13 + random() * 0.26})`;
        ctx.lineWidth = randomRange(random, 0.5, 2);
        ctx.beginPath();
        ctx.moveTo(0, gy);
        for (let x = 0; x <= size; x += 28) {
          ctx.lineTo(x, gy + Math.sin(x * 0.042 + row) * 2 + randomRange(random, -1.3, 1.3));
        }
        ctx.stroke();
      }
      const knots = Math.floor(random() * 3);
      for (let k = 0; k < knots; k += 1) {
        const x = random() * size;
        const cy = y + plankHeight * 0.5 + randomRange(random, -8, 8);
        ctx.strokeStyle = 'rgba(57, 28, 8, .28)';
        ctx.lineWidth = 1.4;
        ctx.beginPath();
        ctx.ellipse(x, cy, randomRange(random, 3, 9), randomRange(random, 1.4, 4), 0, 0, Math.PI * 2);
        ctx.stroke();
      }
    }
    ctx.fillStyle = 'rgba(35, 17, 5, .34)';
    for (let i = 0; i < 26; i += 1) {
      const x = random() * size;
      const y = random() * size;
      ctx.fillRect(x, y, 2, 2);
    }
  }, 2, 2);
}

export function createPlankTexture() {
  const texture = createWoodTexture();
  texture.repeat.set(3, 3);
  return texture;
}

export function createStoneTexture() {
  const random = mulberry32(119);
  return canvasTexture(512, (ctx, size) => {
    ctx.fillStyle = '#727b7a';
    ctx.fillRect(0, 0, size, size);
    for (let i = 0; i < 120; i += 1) {
      const x = random() * size;
      const y = random() * size;
      const radius = randomRange(random, 3, 22);
      ctx.fillStyle = `rgba(${45 + random() * 80}, ${52 + random() * 80}, ${53 + random() * 74}, ${0.12 + random() * 0.25})`;
      ctx.beginPath();
      ctx.arc(x, y, radius, 0, Math.PI * 2);
      ctx.fill();
    }
    ctx.strokeStyle = 'rgba(28, 34, 34, .35)';
    for (let i = 0; i < 18; i += 1) {
      const x = random() * size;
      const y = random() * size;
      ctx.lineWidth = randomRange(random, 0.6, 2.3);
      ctx.beginPath();
      ctx.moveTo(x, y);
      let cx = x;
      let cy = y;
      for (let s = 0; s < 5; s += 1) {
        cx += randomRange(random, -25, 25);
        cy += randomRange(random, -18, 18);
        ctx.lineTo(cx, cy);
      }
      ctx.stroke();
    }
    for (let i = 0; i < 700; i += 1) {
      const shade = 70 + random() * 100;
      ctx.fillStyle = `rgba(${shade}, ${shade + 5}, ${shade}, ${0.05 + random() * 0.13})`;
      ctx.fillRect(random() * size, random() * size, 1.2, 1.2);
    }
  }, 2, 2);
}

export function createBarkTexture() {
  const random = mulberry32(223);
  return canvasTexture(256, (ctx, size) => {
    ctx.fillStyle = '#5e3d27';
    ctx.fillRect(0, 0, size, size);
    for (let x = 0; x < size; x += 3) {
      const lightness = 16 + random() * 24;
      ctx.strokeStyle = `hsla(${24 + random() * 12}, 34%, ${lightness}%, ${0.24 + random() * 0.44})`;
      ctx.lineWidth = randomRange(random, 0.7, 3.4);
      ctx.beginPath();
      ctx.moveTo(x, 0);
      for (let y = 0; y <= size; y += 20) {
        ctx.lineTo(x + Math.sin(y * 0.09 + x) * 2.5 + randomRange(random, -1.4, 1.4), y);
      }
      ctx.stroke();
    }
  }, 1, 2);
}

export function createMetalTexture() {
  const random = mulberry32(712);
  return canvasTexture(256, (ctx, size) => {
    ctx.fillStyle = '#4d5961';
    ctx.fillRect(0, 0, size, size);
    for (let i = 0; i < 900; i += 1) {
      const shade = 45 + random() * 105;
      ctx.fillStyle = `rgba(${shade}, ${shade + 6}, ${shade + 8}, ${0.06 + random() * 0.18})`;
      ctx.fillRect(random() * size, random() * size, randomRange(random, 0.5, 3), randomRange(random, 0.5, 2));
    }
    for (let i = 0; i < 16; i += 1) {
      ctx.strokeStyle = `rgba(255, 255, 255, ${0.03 + random() * 0.08})`;
      ctx.lineWidth = 0.7;
      ctx.beginPath();
      const y = random() * size;
      ctx.moveTo(0, y);
      ctx.lineTo(size, y + randomRange(random, -8, 8));
      ctx.stroke();
    }
  }, 2, 2);
}

export function createOfferTexture() {
  const random = mulberry32(88);
  return canvasTexture(512, (ctx, size) => {
    ctx.fillStyle = '#b78a5e';
    ctx.fillRect(0, 0, size, size);
    for (let i = 0; i < 3000; i += 1) {
      const shade = 110 + random() * 110;
      ctx.fillStyle = `rgba(${shade}, ${shade * 0.74}, ${shade * 0.48}, ${0.03 + random() * 0.13})`;
      ctx.fillRect(random() * size, random() * size, randomRange(random, 1, 5), randomRange(random, 1, 5));
    }
    ctx.strokeStyle = 'rgba(72, 45, 22, .25)';
    ctx.lineWidth = 1.4;
    for (let i = 0; i < 54; i += 1) {
      const x = random() * size;
      const y = random() * size;
      ctx.beginPath();
      ctx.moveTo(x, y);
      ctx.lineTo(x + randomRange(random, -18, 18), y + randomRange(random, -5, 5));
      ctx.stroke();
    }
  }, 1, 1);
}

export function createCloudTexture() {
  const random = mulberry32(40);
  return canvasTexture(512, (ctx, size) => {
    ctx.clearRect(0, 0, size, size);
    for (let i = 0; i < 30; i += 1) {
      const x = size * 0.5 + randomRange(random, -size * 0.3, size * 0.3);
      const y = size * 0.55 + randomRange(random, -size * 0.16, size * 0.16);
      const radius = randomRange(random, 28, 95);
      const gradient = ctx.createRadialGradient(x, y, 0, x, y, radius);
      gradient.addColorStop(0, 'rgba(255, 248, 239, .19)');
      gradient.addColorStop(0.45, 'rgba(255, 241, 226, .12)');
      gradient.addColorStop(1, 'rgba(255, 240, 225, 0)');
      ctx.fillStyle = gradient;
      ctx.beginPath();
      ctx.arc(x, y, radius, 0, Math.PI * 2);
      ctx.fill();
    }
  }, 1, 1);
}

export function createGlowTexture() {
  return canvasTexture(128, (ctx, size) => {
    const gradient = ctx.createRadialGradient(size / 2, size / 2, 0, size / 2, size / 2, size / 2);
    gradient.addColorStop(0, 'rgba(255,255,255,1)');
    gradient.addColorStop(0.22, 'rgba(255,244,192,.9)');
    gradient.addColorStop(0.5, 'rgba(255,194,70,.36)');
    gradient.addColorStop(1, 'rgba(255,180,40,0)');
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, size, size);
  });
}

export function createSkinTexture() {
  const random = mulberry32(31);
  return canvasTexture(256, (ctx, size) => {
    ctx.fillStyle = '#cba27e';
    ctx.fillRect(0, 0, size, size);
    for (let i = 0; i < 650; i += 1) {
      ctx.fillStyle = `rgba(${100 + random() * 80}, ${58 + random() * 50}, ${38 + random() * 30}, ${0.04 + random() * 0.08})`;
      ctx.fillRect(random() * size, random() * size, 1, 1);
    }
  });
}
