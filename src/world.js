import * as THREE from 'three';
import { createBarkTexture, createCloudTexture, createGlowTexture, createGrassTexture, createStoneTexture, createWoodTexture } from './textures.js';
import { clamp, fbm, lerp, mulberry32, randomRange, smoothstep } from './utils.js';

const MAP_SIZE = 240;

export class World {
  constructor(scene, renderer) {
    this.scene = scene;
    this.renderer = renderer;
    this.random = mulberry32(20261022);
    this.raycastTargets = [];
    this.colliders = [];
    this.surfaces = [];
    this.obstacleCircles = [];
    this.clouds = [];
    this.fireLights = [];
    this.fireEmbers = [];
    this.glowRings = [];
    this.chestSpots = [];
    this.pois = [
      { name: 'RANGER CAMP', x: -27, z: -17 },
      { name: 'STONE CIRCLE', x: 25, z: 18 },
      { name: 'NORTH WATCH', x: 2, z: -38 },
    ];

    this.grassTexture = createGrassTexture();
    this.woodTexture = createWoodTexture();
    this.stoneTexture = createStoneTexture();
    this.barkTexture = createBarkTexture();
    this.cloudTexture = createCloudTexture();
    this.glowTexture = createGlowTexture();

    this.materials = {
      wood: new THREE.MeshStandardMaterial({ map: this.woodTexture, color: 0xdfb084, roughness: 0.82 }),
      darkWood: new THREE.MeshStandardMaterial({ map: this.woodTexture, color: 0x87603c, roughness: 0.9 }),
      stone: new THREE.MeshStandardMaterial({ map: this.stoneTexture, color: 0xa9b5b1, roughness: 0.94, flatShading: true }),
      roof: new THREE.MeshStandardMaterial({ map: this.woodTexture, color: 0x5f4c3b, roughness: 0.9 }),
      canvas: new THREE.MeshStandardMaterial({ color: 0x88806b, roughness: 1, side: THREE.DoubleSide }),
      gold: new THREE.MeshStandardMaterial({ color: 0xffbf45, metalness: 0.6, roughness: 0.34, emissive: 0x5a3200, emissiveIntensity: 0.38 }),
      iron: new THREE.MeshStandardMaterial({ color: 0x7d8b94, metalness: 0.65, roughness: 0.4 }),
    };

    this.setupSky();
    this.setupLighting();
    this.createTerrain();
    this.createMountains();
    this.createTrees();
    this.createGroundDetails();
    this.createRocks();
    this.createRangerCamp();
    this.createStoneCircle();
    this.createNorthWatch();
    this.createClouds();
    this.createAtmosphere();
  }

  heightAt(x, z) {
    const distance = Math.hypot(x, z);
    let height = (fbm(x * 0.018 + 3.7, z * 0.018 + 9.1, 4) - 0.45) * 10;
    height += (fbm(x * 0.058 + 8.2, z * 0.058 - 1.3, 3) - 0.5) * 2.3;
    height += Math.sin(x * 0.033 + 1.1) * 0.58 + Math.cos(z * 0.029 - 0.7) * 0.48;
    height += smoothstep(76, 112, distance) * 14;
    const spawnDist = Math.hypot(x, z - 11);
    const flatten = 1 - smoothstep(2, 15, spawnDist);
    height = lerp(height, 0.65, flatten * 0.62);
    return height;
  }

  setupSky() {
    const skyGeometry = new THREE.SphereGeometry(420, 40, 24);
    const skyMaterial = new THREE.ShaderMaterial({
      side: THREE.BackSide,
      depthWrite: false,
      uniforms: {
        topColor: { value: new THREE.Color(0x254d78) },
        midColor: { value: new THREE.Color(0x87b4ca) },
        horizonColor: { value: new THREE.Color(0xf6c398) },
        groundColor: { value: new THREE.Color(0xd6a383) },
        sunDirection: { value: new THREE.Vector3(0.42, 0.44, -0.79).normalize() },
      },
      vertexShader: `
        varying vec3 vWorldPosition;
        void main() {
          vec4 worldPosition = modelMatrix * vec4(position, 1.0);
          vWorldPosition = worldPosition.xyz;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,
      fragmentShader: `
        uniform vec3 topColor;
        uniform vec3 midColor;
        uniform vec3 horizonColor;
        uniform vec3 groundColor;
        uniform vec3 sunDirection;
        varying vec3 vWorldPosition;
        void main() {
          vec3 direction = normalize(vWorldPosition);
          float h = direction.y;
          vec3 color = mix(horizonColor, midColor, smoothstep(0.0, 0.28, h));
          color = mix(color, topColor, smoothstep(0.28, 0.78, h));
          color = mix(groundColor, color, smoothstep(-0.08, 0.025, h));
          float sunAmount = max(dot(direction, sunDirection), 0.0);
          color += vec3(1.0, 0.53, 0.24) * pow(sunAmount, 18.0) * 0.26;
          color += vec3(1.0, 0.76, 0.5) * pow(sunAmount, 90.0) * 0.7;
          float band = sin((h + 0.14) * 28.0 + direction.x * 5.0) * 0.5 + 0.5;
          color += vec3(0.95, 0.65, 0.48) * band * smoothstep(0.2, -0.02, h) * 0.028;
          gl_FragColor = vec4(color, 1.0);
        }
      `,
    });
    this.sky = new THREE.Mesh(skyGeometry, skyMaterial);
    this.scene.add(this.sky);

    const sun = new THREE.Sprite(new THREE.SpriteMaterial({
      map: createGlowTexture(),
      color: 0xffdda2,
      transparent: true,
      opacity: 0.9,
      depthWrite: false,
      fog: false,
      blending: THREE.AdditiveBlending,
    }));
    sun.position.set(-118, 128, 190);
    sun.scale.set(100, 100, 1);
    this.scene.add(sun);

    this.scene.fog = new THREE.FogExp2(0xbc9a85, 0.0045);
  }

  setupLighting() {
    const hemisphere = new THREE.HemisphereLight(0x9fd2e4, 0x4c4b2f, 1.12);
    this.scene.add(hemisphere);

    const sunLight = new THREE.DirectionalLight(0xffd0a0, 2.6);
    sunLight.position.set(-38, 58, 42);
    sunLight.castShadow = true;
    sunLight.shadow.mapSize.set(2048, 2048);
    sunLight.shadow.camera.near = 1;
    sunLight.shadow.camera.far = 150;
    sunLight.shadow.camera.left = -55;
    sunLight.shadow.camera.right = 55;
    sunLight.shadow.camera.top = 55;
    sunLight.shadow.camera.bottom = -55;
    sunLight.shadow.bias = -0.0006;
    sunLight.shadow.normalBias = 0.025;
    this.scene.add(sunLight);
    this.scene.add(sunLight.target);
    this.sunLight = sunLight;

    const rim = new THREE.DirectionalLight(0x7bb6d9, 0.38);
    rim.position.set(45, 22, -70);
    this.scene.add(rim);
  }

  createTerrain() {
    const geometry = new THREE.PlaneGeometry(MAP_SIZE, MAP_SIZE, 150, 150);
    geometry.rotateX(-Math.PI / 2);
    const position = geometry.attributes.position;
    const colors = [];
    const baseColor = new THREE.Color();
    for (let i = 0; i < position.count; i += 1) {
      const x = position.getX(i);
      const z = position.getZ(i);
      const y = this.heightAt(x, z);
      position.setY(i, y);
      const patch = fbm(x * 0.048 + 12, z * 0.048 - 5, 3);
      const rock = smoothstep(10, 18, y);
      const dry = smoothstep(0.55, 0.72, patch);
      baseColor.setHSL(0.245 + patch * 0.028, 0.33 - rock * 0.16, 0.55 + dry * 0.08 - rock * 0.03);
      baseColor.lerp(new THREE.Color(0x8e9282), rock * 0.55);
      colors.push(baseColor.r, baseColor.g, baseColor.b);
    }
    geometry.setAttribute('color', new THREE.Float32BufferAttribute(colors, 3));
    geometry.computeVertexNormals();

    const material = new THREE.MeshStandardMaterial({
      map: this.grassTexture,
      vertexColors: true,
      roughness: 0.96,
      metalness: 0,
    });
    const terrain = new THREE.Mesh(geometry, material);
    terrain.receiveShadow = true;
    terrain.name = 'terrain';
    this.scene.add(terrain);
    this.terrain = terrain;
    this.raycastTargets.push(terrain);
  }

  createMountains() {
    const geometry = new THREE.ConeGeometry(1, 1, 5);
    const material = new THREE.MeshStandardMaterial({ color: 0x506a68, roughness: 1, flatShading: true, fog: true });
    const instanced = new THREE.InstancedMesh(geometry, material, 18);
    instanced.castShadow = false;
    instanced.receiveShadow = true;
    const dummy = new THREE.Object3D();
    for (let i = 0; i < 18; i += 1) {
      const angle = (i / 18) * Math.PI * 2 + this.random() * 0.2;
      const distance = randomRange(this.random, 115, 152);
      const width = randomRange(this.random, 18, 38);
      const height = randomRange(this.random, 26, 58);
      dummy.position.set(Math.cos(angle) * distance, height * 0.5 - 8, Math.sin(angle) * distance);
      dummy.rotation.y = this.random() * Math.PI;
      dummy.scale.set(width, height, width * randomRange(this.random, 0.75, 1.2));
      dummy.updateMatrix();
      instanced.setMatrixAt(i, dummy.matrix);
    }
    instanced.instanceMatrix.needsUpdate = true;
    this.scene.add(instanced);
  }

  createTrees() {
    const treeCount = 88;
    const pineIndices = [];
    const broadleafIndices = [];
    const positions = [];
    const reserved = [
      { x: 0, z: 11, r: 9 },
      { x: -27, z: -17, r: 11 },
      { x: 25, z: 18, r: 11 },
      { x: 2, z: -38, r: 9 },
    ];

    for (let attempts = 0; attempts < 700 && positions.length < treeCount; attempts += 1) {
      const angle = this.random() * Math.PI * 2;
      const radius = Math.sqrt(this.random()) * 92;
      const x = Math.cos(angle) * radius;
      const z = Math.sin(angle) * radius;
      if (reserved.some((spot) => Math.hypot(x - spot.x, z - spot.z) < spot.r)) continue;
      if (positions.some((spot) => Math.hypot(x - spot.x, z - spot.z) < 3.6)) continue;
      const isPine = this.random() > 0.42;
      const scale = randomRange(this.random, 0.8, 1.65);
      positions.push({ x, z, y: this.heightAt(x, z), scale, isPine, rotation: this.random() * Math.PI * 2 });
      if (isPine) pineIndices.push(positions.length - 1);
      else broadleafIndices.push(positions.length - 1);
      this.obstacleCircles.push({ x, z, radius: 0.48 * scale + 0.22 });
    }

    const trunkGeometry = new THREE.CylinderGeometry(0.22, 0.38, 2.8, 6);
    trunkGeometry.translate(0, 1.4, 0);
    const trunkMaterial = new THREE.MeshStandardMaterial({ map: this.barkTexture, color: 0x9b7859, roughness: 0.95 });
    const trunks = new THREE.InstancedMesh(trunkGeometry, trunkMaterial, positions.length);
    trunks.castShadow = true;
    trunks.receiveShadow = true;
    this.scene.add(trunks);
    this.raycastTargets.push(trunks);

    const dummy = new THREE.Object3D();
    const color = new THREE.Color();
    positions.forEach((tree, index) => {
      dummy.position.set(tree.x, tree.y, tree.z);
      dummy.rotation.set(0, tree.rotation, 0);
      dummy.scale.set(tree.scale, tree.scale, tree.scale);
      dummy.updateMatrix();
      trunks.setMatrixAt(index, dummy.matrix);
    });

    const pineGeometry = new THREE.ConeGeometry(1.82, 3.1, 7);
    pineGeometry.translate(0, 1.55, 0);
    const leafMaterial = new THREE.MeshStandardMaterial({
      color: 0xffffff,
      roughness: 0.92,
      flatShading: true,
    });
    const pineLayers = new THREE.InstancedMesh(pineGeometry, leafMaterial, pineIndices.length * 3);
    pineLayers.castShadow = true;
    pineLayers.receiveShadow = true;
    let pineCursor = 0;
    pineIndices.forEach((treeIndex) => {
      const tree = positions[treeIndex];
      for (let layer = 0; layer < 3; layer += 1) {
        const layerScale = tree.scale * (1 - layer * 0.19);
        dummy.position.set(tree.x, tree.y + 1.85 * tree.scale + layer * 1.08 * tree.scale, tree.z);
        dummy.rotation.set(0, tree.rotation + layer * 0.4, 0);
        dummy.scale.set(layerScale * (1 + layer * 0.04), layerScale, layerScale * (1 + layer * 0.04));
        dummy.updateMatrix();
        pineLayers.setMatrixAt(pineCursor, dummy.matrix);
        color.setHSL(0.285 + this.random() * 0.045, 0.42 + this.random() * 0.15, 0.22 + this.random() * 0.07);
        pineLayers.setColorAt(pineCursor, color);
        pineCursor += 1;
      }
    });
    pineLayers.instanceMatrix.needsUpdate = true;
    pineLayers.instanceColor.needsUpdate = true;
    this.scene.add(pineLayers);
    this.raycastTargets.push(pineLayers);

    const broadGeometry = new THREE.DodecahedronGeometry(1.65, 0);
    const broadMaterial = new THREE.MeshStandardMaterial({ color: 0xffffff, roughness: 0.94, flatShading: true });
    const broadCanopies = new THREE.InstancedMesh(broadGeometry, broadMaterial, broadleafIndices.length * 3);
    broadCanopies.castShadow = true;
    broadCanopies.receiveShadow = true;
    let broadCursor = 0;
    broadleafIndices.forEach((treeIndex) => {
      const tree = positions[treeIndex];
      const clusters = [
        [0, 3.7, 0, 1.2],
        [-0.9, 4.5, 0.4, 0.85],
        [0.8, 4.8, -0.35, 0.9],
      ];
      clusters.forEach((cluster, clusterIndex) => {
        dummy.position.set(tree.x + cluster[0] * tree.scale, tree.y + cluster[1] * tree.scale, tree.z + cluster[2] * tree.scale);
        dummy.rotation.set(clusterIndex * 0.4, tree.rotation + clusterIndex, clusterIndex * 0.3);
        dummy.scale.set(tree.scale * cluster[3], tree.scale * cluster[3] * randomRange(this.random, 0.85, 1.12), tree.scale * cluster[3]);
        dummy.updateMatrix();
        broadCanopies.setMatrixAt(broadCursor, dummy.matrix);
        color.setHSL(0.255 + this.random() * 0.045, 0.44 + this.random() * 0.14, 0.26 + this.random() * 0.07);
        broadCanopies.setColorAt(broadCursor, color);
        broadCursor += 1;
      });
    });
    broadCanopies.instanceMatrix.needsUpdate = true;
    broadCanopies.instanceColor.needsUpdate = true;
    this.scene.add(broadCanopies);
    this.raycastTargets.push(broadCanopies);

    trunks.instanceMatrix.needsUpdate = true;
  }

  createGroundDetails() {
    const dummy = new THREE.Object3D();
    const color = new THREE.Color();

    const bushGeometry = new THREE.DodecahedronGeometry(0.7, 0);
    const bushMaterial = new THREE.MeshStandardMaterial({ color: 0xffffff, roughness: 1, flatShading: true });
    const bushes = new THREE.InstancedMesh(bushGeometry, bushMaterial, 110);
    bushes.castShadow = true;
    for (let i = 0; i < 110; i += 1) {
      const angle = this.random() * Math.PI * 2;
      const radius = Math.sqrt(this.random()) * 86;
      const x = Math.cos(angle) * radius;
      const z = Math.sin(angle) * radius;
      const scale = randomRange(this.random, 0.45, 1.2);
      dummy.position.set(x, this.heightAt(x, z) + scale * 0.15, z);
      dummy.rotation.set(0, this.random() * Math.PI, 0);
      dummy.scale.set(scale, scale * randomRange(this.random, 0.65, 1), scale);
      dummy.updateMatrix();
      bushes.setMatrixAt(i, dummy.matrix);
      color.setHSL(0.27 + this.random() * 0.05, 0.4, 0.25 + this.random() * 0.08);
      bushes.setColorAt(i, color);
    }
    bushes.instanceMatrix.needsUpdate = true;
    bushes.instanceColor.needsUpdate = true;
    this.scene.add(bushes);

    const tuftGeometry = new THREE.ConeGeometry(0.075, 0.5, 3);
    tuftGeometry.translate(0, 0.25, 0);
    const tuftMaterial = new THREE.MeshStandardMaterial({ color: 0xffffff, roughness: 1 });
    const tufts = new THREE.InstancedMesh(tuftGeometry, tuftMaterial, 720);
    tufts.castShadow = false;
    for (let i = 0; i < 720; i += 1) {
      const angle = this.random() * Math.PI * 2;
      const radius = Math.sqrt(this.random()) * 94;
      const x = Math.cos(angle) * radius;
      const z = Math.sin(angle) * radius;
      const scale = randomRange(this.random, 0.55, 1.55);
      dummy.position.set(x, this.heightAt(x, z), z);
      dummy.rotation.set(randomRange(this.random, -0.12, 0.12), this.random() * Math.PI, randomRange(this.random, -0.14, 0.14));
      dummy.scale.set(scale, scale, scale);
      dummy.updateMatrix();
      tufts.setMatrixAt(i, dummy.matrix);
      color.setHSL(0.22 + this.random() * 0.06, 0.4, 0.32 + this.random() * 0.13);
      tufts.setColorAt(i, color);
    }
    tufts.instanceMatrix.needsUpdate = true;
    tufts.instanceColor.needsUpdate = true;
    this.scene.add(tufts);

    const flowerGeometry = new THREE.OctahedronGeometry(0.11, 0);
    const flowerMaterial = new THREE.MeshStandardMaterial({ color: 0xffffff, roughness: 0.8, emissive: 0x221100, emissiveIntensity: 0.15 });
    const flowers = new THREE.InstancedMesh(flowerGeometry, flowerMaterial, 170);
    const flowerColors = [0xffdd7a, 0xffb6c9, 0xe8f0c2, 0xbd9bff, 0xfff4dc];
    for (let i = 0; i < 170; i += 1) {
      const angle = this.random() * Math.PI * 2;
      const radius = Math.sqrt(this.random()) * 80;
      const x = Math.cos(angle) * radius;
      const z = Math.sin(angle) * radius;
      dummy.position.set(x, this.heightAt(x, z) + 0.18, z);
      dummy.rotation.set(0, this.random() * Math.PI, 0);
      dummy.scale.setScalar(randomRange(this.random, 0.65, 1.35));
      dummy.updateMatrix();
      flowers.setMatrixAt(i, dummy.matrix);
      flowers.setColorAt(i, color.setHex(flowerColors[Math.floor(this.random() * flowerColors.length)]));
    }
    flowers.instanceMatrix.needsUpdate = true;
    flowers.instanceColor.needsUpdate = true;
    this.scene.add(flowers);
  }

  createRocks() {
    const geometry = new THREE.DodecahedronGeometry(1, 0);
    const material = new THREE.MeshStandardMaterial({ color: 0xffffff, roughness: 0.98, flatShading: true });
    const rocks = new THREE.InstancedMesh(geometry, material, 44);
    rocks.castShadow = true;
    rocks.receiveShadow = true;
    const dummy = new THREE.Object3D();
    const color = new THREE.Color();
    for (let i = 0; i < 44; i += 1) {
      const angle = this.random() * Math.PI * 2;
      const radius = randomRange(this.random, 12, 92);
      const x = Math.cos(angle) * radius;
      const z = Math.sin(angle) * radius;
      const scale = randomRange(this.random, 0.35, 2.15);
      dummy.position.set(x, this.heightAt(x, z) + scale * 0.16, z);
      dummy.rotation.set(this.random() * 0.6, this.random() * Math.PI, this.random() * 0.5);
      dummy.scale.set(scale * randomRange(this.random, 0.7, 1.2), scale * randomRange(this.random, 0.55, 1.1), scale * randomRange(this.random, 0.7, 1.2));
      dummy.updateMatrix();
      rocks.setMatrixAt(i, dummy.matrix);
      color.setHSL(0.18, 0.05, 0.38 + this.random() * 0.16);
      rocks.setColorAt(i, color);
      if (scale > 1.35) this.obstacleCircles.push({ x, z, radius: scale * 0.8 });
    }
    rocks.instanceMatrix.needsUpdate = true;
    rocks.instanceColor.needsUpdate = true;
    this.scene.add(rocks);
    this.raycastTargets.push(rocks);
  }

  createRangerCamp() {
    const poi = this.pois[0];
    const base = this.heightAt(poi.x, poi.z) + 0.35;
    const group = new THREE.Group();
    group.position.set(poi.x, base, poi.z);
    group.rotation.y = 0.12;
    this.scene.add(group);

    const foundation = new THREE.Mesh(new THREE.BoxGeometry(14, 1.1, 12), this.materials.stone);
    foundation.position.y = -0.55;
    foundation.receiveShadow = true;
    foundation.castShadow = true;
    group.add(foundation);
    this.registerSurfaceBox(foundation, group);

    const wallHeight = 3.3;
    const addWall = (w, h, d, x, y, z, material = this.materials.wood) => {
      const mesh = new THREE.Mesh(new THREE.BoxGeometry(w, h, d), material);
      mesh.position.set(x, y, z);
      mesh.castShadow = true;
      mesh.receiveShadow = true;
      group.add(mesh);
      this.registerCollider(mesh, group);
      this.raycastTargets.push(mesh);
      return mesh;
    };

    addWall(13.2, wallHeight, 0.32, 0, wallHeight / 2, -5.8);
    addWall(0.32, wallHeight, 11.3, -6.5, wallHeight / 2, 0);
    addWall(0.32, wallHeight, 11.3, 6.5, wallHeight / 2, 0);
    addWall(4.2, wallHeight, 0.32, -4.4, wallHeight / 2, 5.8);
    addWall(4.2, wallHeight, 0.32, 4.4, wallHeight / 2, 5.8);
    addWall(4.4, 1.1, 0.32, 0, wallHeight - 0.55, 5.8);

    const windowMaterial = new THREE.MeshStandardMaterial({ color: 0x1c2b31, roughness: 0.3, metalness: 0.2, transparent: true, opacity: 0.5 });
    for (const [x, z, rot] of [[0, -5.62, 0], [-6.32, 1.4, Math.PI / 2], [6.32, -1.2, Math.PI / 2]]) {
      const windowMesh = new THREE.Mesh(new THREE.BoxGeometry(2.1, 1.1, 0.06), windowMaterial);
      windowMesh.position.set(x, 2, z);
      windowMesh.rotation.y = rot;
      group.add(windowMesh);
    }

    const roofLeft = new THREE.Mesh(new THREE.BoxGeometry(7.2, 0.24, 12.6), this.materials.roof);
    roofLeft.position.set(-3.25, wallHeight + 1.25, 0);
    roofLeft.rotation.z = 0.38;
    roofLeft.castShadow = true;
    group.add(roofLeft);
    this.raycastTargets.push(roofLeft);
    const roofRight = new THREE.Mesh(new THREE.BoxGeometry(7.2, 0.24, 12.6), this.materials.roof);
    roofRight.position.set(3.25, wallHeight + 1.25, 0);
    roofRight.rotation.z = -0.38;
    roofRight.castShadow = true;
    group.add(roofRight);
    this.raycastTargets.push(roofRight);

    const chimney = new THREE.Mesh(new THREE.BoxGeometry(1, 2.8, 1), this.materials.stone);
    chimney.position.set(-4.3, wallHeight + 1.5, -3.1);
    chimney.castShadow = true;
    group.add(chimney);
    this.raycastTargets.push(chimney);

    const table = new THREE.Mesh(new THREE.BoxGeometry(2.8, 0.18, 1.2), this.materials.darkWood);
    table.position.set(2.3, 1.05, -2.8);
    table.castShadow = true;
    group.add(table);
    this.raycastTargets.push(table);
    for (const [x, z] of [[1.25, -3.3], [3.35, -3.3], [1.25, -2.3], [3.35, -2.3]]) {
      const leg = new THREE.Mesh(new THREE.BoxGeometry(0.16, 1, 0.16), this.materials.darkWood);
      leg.position.set(x, 0.52, z);
      group.add(leg);
    }

    for (let i = 0; i < 4; i += 1) {
      const crate = new THREE.Mesh(new THREE.BoxGeometry(0.82, 0.82, 0.82), this.materials.wood);
      crate.position.set(-4.7 + (i % 2) * 0.9, 0.44 + Math.floor(i / 2) * 0.82, -4.2);
      crate.rotation.y = (i % 2) * 0.12;
      crate.castShadow = true;
      crate.receiveShadow = true;
      group.add(crate);
      this.raycastTargets.push(crate);
      this.registerCollider(crate, group);
    }

    const rug = new THREE.Mesh(new THREE.PlaneGeometry(5.5, 4.2), new THREE.MeshStandardMaterial({ color: 0x6d3d36, roughness: 1 }));
    rug.rotation.x = -Math.PI / 2;
    rug.position.set(0, 0.011, 0.3);
    rug.receiveShadow = true;
    group.add(rug);

    const fireGroup = new THREE.Group();
    fireGroup.position.set(9.4, 0, 3.5);
    for (let i = 0; i < 9; i += 1) {
      const stone = new THREE.Mesh(new THREE.DodecahedronGeometry(0.26, 0), this.materials.stone);
      const angle = (i / 9) * Math.PI * 2;
      stone.position.set(Math.cos(angle) * 0.9, 0.15, Math.sin(angle) * 0.9);
      stone.scale.y = 0.65;
      stone.castShadow = true;
      fireGroup.add(stone);
    }
    for (let i = 0; i < 4; i += 1) {
      const log = new THREE.Mesh(new THREE.CylinderGeometry(0.11, 0.14, 1.4, 5), this.materials.darkWood);
      log.rotation.z = Math.PI / 2;
      log.rotation.y = (i / 4) * Math.PI;
      log.position.y = 0.22;
      fireGroup.add(log);
    }
    const flame = new THREE.Mesh(
      new THREE.ConeGeometry(0.38, 1.4, 6),
      new THREE.MeshBasicMaterial({ color: 0xffb53d, transparent: true, opacity: 0.92, blending: THREE.AdditiveBlending, depthWrite: false }),
    );
    flame.position.y = 0.9;
    fireGroup.add(flame);
    const fireLight = new THREE.PointLight(0xff8a35, 5, 16, 1.7);
    fireLight.position.y = 1.2;
    fireGroup.add(fireLight);
    this.fireLights.push({ light: fireLight, base: 5, seed: this.random() * 10 });
    group.add(fireGroup);
    this.fireEmbers.push({ group: fireGroup, flame, seed: this.random() * 10 });
    this.raycastTargets.push(...fireGroup.children.filter((child) => child.isMesh));

    const crateLoot = new THREE.Mesh(new THREE.BoxGeometry(0.9, 0.75, 0.9), this.materials.darkWood);
    crateLoot.position.set(5.2, 0.38, 4);
    crateLoot.castShadow = true;
    group.add(crateLoot);
    this.raycastTargets.push(crateLoot);

    this.chestSpots.push({
      x: poi.x + 2.1,
      z: poi.z + 1.8,
      y: base + 0.02,
      rotation: -0.5,
      poi: poi.name,
    });
  }

  createStoneCircle() {
    const poi = this.pois[1];
    const base = this.heightAt(poi.x, poi.z);
    const group = new THREE.Group();
    group.position.set(poi.x, base, poi.z);
    this.scene.add(group);

    const platform = new THREE.Mesh(new THREE.CylinderGeometry(8.2, 8.8, 0.55, 14), this.materials.stone);
    platform.position.y = 0.05;
    platform.receiveShadow = true;
    platform.castShadow = true;
    group.add(platform);
    this.raycastTargets.push(platform);
    this.surfaces.push({ type: 'circle', x: poi.x, z: poi.z, radius: 8.2, y: base + 0.325 });

    for (let i = 0; i < 7; i += 1) {
      const angle = (i / 7) * Math.PI * 2 + 0.2;
      const radius = 6.5;
      const stone = new THREE.Mesh(new THREE.BoxGeometry(randomRange(this.random, 1.2, 2.1), randomRange(this.random, 2.7, 4.5), 0.75), this.materials.stone);
      stone.position.set(Math.cos(angle) * radius, 1.4 + randomRange(this.random, 0, 0.8), Math.sin(angle) * radius);
      stone.rotation.y = -angle + randomRange(this.random, -0.18, 0.18);
      stone.rotation.z = randomRange(this.random, -0.07, 0.07);
      stone.castShadow = true;
      stone.receiveShadow = true;
      group.add(stone);
      this.raycastTargets.push(stone);
    }

    const altar = new THREE.Mesh(new THREE.CylinderGeometry(2.1, 2.5, 0.85, 8), this.materials.stone);
    altar.position.y = 0.7;
    altar.castShadow = true;
    altar.receiveShadow = true;
    group.add(altar);
    this.registerCollider(altar, group);
    this.raycastTargets.push(altar);

    const runeMaterial = new THREE.MeshBasicMaterial({ color: 0x7cf5e0, transparent: true, opacity: 0.75, blending: THREE.AdditiveBlending, depthWrite: false });
    const runes = new THREE.Mesh(new THREE.RingGeometry(3.3, 4.1, 48), runeMaterial);
    runes.rotation.x = -Math.PI / 2;
    runes.position.y = 0.36;
    group.add(runes);
    this.glowRings.push({ mesh: runes, seed: this.random() * 5, speed: 0.5 });

    const glow = new THREE.PointLight(0x63f4de, 2.4, 16, 2);
    glow.position.y = 2;
    group.add(glow);

    this.chestSpots.push({
      x: poi.x,
      z: poi.z,
      y: base + 1.15,
      rotation: 0.15,
      poi: poi.name,
    });
  }

  createNorthWatch() {
    const poi = this.pois[2];
    const base = this.heightAt(poi.x, poi.z);
    const group = new THREE.Group();
    group.position.set(poi.x, base, poi.z);
    group.rotation.y = -0.35;
    this.scene.add(group);

    const platformY = 4.7;
    const legPositions = [[-2.2, -2.2], [2.2, -2.2], [-2.2, 2.2], [2.2, 2.2]];
    legPositions.forEach(([x, z]) => {
      const leg = new THREE.Mesh(new THREE.BoxGeometry(0.46, platformY, 0.46), this.materials.darkWood);
      leg.position.set(x, platformY / 2, z);
      leg.castShadow = true;
      leg.receiveShadow = true;
      group.add(leg);
      this.raycastTargets.push(leg);
      this.obstacleCircles.push({ x: poi.x + x * Math.cos(-0.35) - z * Math.sin(-0.35), z: poi.z + x * Math.sin(-0.35) + z * Math.cos(-0.35), radius: 0.55 });
    });

    const deck = new THREE.Mesh(new THREE.BoxGeometry(6.1, 0.3, 6.1), this.materials.wood);
    deck.position.y = platformY;
    deck.castShadow = true;
    deck.receiveShadow = true;
    group.add(deck);
    this.registerCollider(deck, group);
    this.raycastTargets.push(deck);

    for (let side = 0; side < 4; side += 1) {
      for (let i = -2; i <= 2; i += 1) {
        const post = new THREE.Mesh(new THREE.BoxGeometry(0.12, 1.1, 0.12), this.materials.darkWood);
        if (side < 2) post.position.set(i * 1.15, platformY + 0.68, side === 0 ? -2.9 : 2.9);
        else post.position.set(side === 2 ? -2.9 : 2.9, platformY + 0.68, i * 1.15);
        group.add(post);
      }
      const rail = new THREE.Mesh(new THREE.BoxGeometry(side < 2 ? 5.9 : 0.12, 0.12, side < 2 ? 0.12 : 5.9), this.materials.wood);
      rail.position.set(side === 2 ? -2.9 : side === 3 ? 2.9 : 0, platformY + 1.15, side === 0 ? -2.9 : side === 1 ? 2.9 : 0);
      group.add(rail);
    }

    const supportBeams = [
      [-2.2, 2.2, 0.18],
      [2.2, -2.2, -0.18],
    ];
    supportBeams.forEach(([x, z, angle]) => {
      const beam = new THREE.Mesh(new THREE.BoxGeometry(0.18, 5.5, 0.18), this.materials.darkWood);
      beam.position.set(x * 0.5, 2.2, z * 0.5);
      beam.rotation.z = angle;
      beam.rotation.x = -angle * 1.6;
      group.add(beam);
    });

    const roof = new THREE.Mesh(new THREE.ConeGeometry(4.4, 2.3, 4), new THREE.MeshStandardMaterial({ color: 0x5e4632, roughness: 0.9, flatShading: true }));
    roof.position.y = platformY + 3.1;
    roof.rotation.y = Math.PI / 4;
    roof.castShadow = true;
    group.add(roof);
    this.raycastTargets.push(roof);

    const ladder = new THREE.Group();
    for (const x of [-0.35, 0.35]) {
      const rail = new THREE.Mesh(new THREE.BoxGeometry(0.1, 4.6, 0.1), this.materials.darkWood);
      rail.position.set(x, 2.3, 0);
      ladder.add(rail);
    }
    for (let i = 0; i < 10; i += 1) {
      const rung = new THREE.Mesh(new THREE.BoxGeometry(0.9, 0.09, 0.09), this.materials.wood);
      rung.position.set(0, 0.35 + i * 0.43, 0);
      ladder.add(rung);
    }
    ladder.position.set(0, 0, 3.15);
    group.add(ladder);

    const brazier = new THREE.Mesh(new THREE.CylinderGeometry(0.5, 0.28, 0.45, 7), this.materials.iron);
    brazier.position.set(0, platformY + 1.65, 0);
    group.add(brazier);
    const flame = new THREE.Mesh(new THREE.ConeGeometry(0.35, 1, 6), new THREE.MeshBasicMaterial({ color: 0xffa23b, transparent: true, opacity: 0.8, blending: THREE.AdditiveBlending, depthWrite: false }));
    flame.position.set(0, platformY + 2.2, 0);
    group.add(flame);
    const light = new THREE.PointLight(0xff8c3a, 3.2, 12, 1.8);
    light.position.set(0, platformY + 2.2, 0);
    group.add(light);
    this.fireLights.push({ light, base: 3.2, seed: this.random() * 10 });

    const crate = new THREE.Mesh(new THREE.BoxGeometry(1.05, 1.05, 1.05), this.materials.wood);
    crate.position.set(-2.1, 0.52, -2.1);
    crate.rotation.y = 0.3;
    crate.castShadow = true;
    crate.receiveShadow = true;
    group.add(crate);
    this.registerCollider(crate, group);
    this.raycastTargets.push(crate);

    const signPost = new THREE.Mesh(new THREE.BoxGeometry(0.18, 2.3, 0.18), this.materials.darkWood);
    signPost.position.set(3.4, 1.15, 2.4);
    group.add(signPost);
    const sign = new THREE.Mesh(new THREE.BoxGeometry(1.8, 0.65, 0.12), this.materials.wood);
    sign.position.set(3.4, 2.05, 2.4);
    sign.rotation.y = 0.2;
    group.add(sign);

    this.chestSpots.push({
      x: poi.x + Math.cos(-0.35) * 1.2 - Math.sin(-0.35) * 1.9,
      z: poi.z + Math.sin(-0.35) * 1.2 + Math.cos(-0.35) * 1.9,
      y: base + 0.02,
      rotation: 0.2,
      poi: poi.name,
    });
  }

  createClouds() {
    for (let i = 0; i < 20; i += 1) {
      const material = new THREE.SpriteMaterial({
        map: this.cloudTexture,
        color: i % 3 === 0 ? 0xffe1c5 : 0xedf4f8,
        transparent: true,
        opacity: randomRange(this.random, 0.28, 0.52),
        depthWrite: false,
        fog: false,
      });
      const cloud = new THREE.Sprite(material);
      const angle = this.random() * Math.PI * 2;
      const distance = randomRange(this.random, 80, 240);
      cloud.position.set(Math.cos(angle) * distance, randomRange(this.random, 45, 105), Math.sin(angle) * distance);
      const scale = randomRange(this.random, 45, 110);
      cloud.scale.set(scale, scale * 0.42, 1);
      this.scene.add(cloud);
      this.clouds.push({ sprite: cloud, speed: randomRange(this.random, 0.06, 0.2), startX: cloud.position.x });
    }
  }

  createAtmosphere() {
    const count = 260;
    const positions = new Float32Array(count * 3);
    const phases = new Float32Array(count);
    for (let i = 0; i < count; i += 1) {
      const angle = this.random() * Math.PI * 2;
      const radius = Math.sqrt(this.random()) * 85;
      positions[i * 3] = Math.cos(angle) * radius;
      positions[i * 3 + 1] = this.heightAt(positions[i * 3], Math.sin(angle) * radius) + randomRange(this.random, 0.6, 7);
      positions[i * 3 + 2] = Math.sin(angle) * radius;
      phases[i] = this.random() * Math.PI * 2;
    }
    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    const material = new THREE.PointsMaterial({
      color: 0xffefb8,
      size: 0.09,
      transparent: true,
      opacity: 0.7,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
      map: createGlowTexture(),
    });
    const motes = new THREE.Points(geometry, material);
    this.scene.add(motes);
    this.motes = { points: motes, phases, basePositions: positions.slice() };
  }

  registerCollider(mesh, parent) {
    parent.updateMatrixWorld(true);
    const box = new THREE.Box3().setFromObject(mesh);
    this.colliders.push({
      minX: box.min.x,
      maxX: box.max.x,
      minY: box.min.y,
      maxY: box.max.y,
      minZ: box.min.z,
      maxZ: box.max.z,
    });
  }

  registerSurfaceBox(mesh, parent) {
    parent.updateMatrixWorld(true);
    const box = new THREE.Box3().setFromObject(mesh);
    this.surfaces.push({
      type: 'box',
      minX: box.min.x,
      maxX: box.max.x,
      minZ: box.min.z,
      maxZ: box.max.z,
      y: box.max.y,
    });
  }

  getSurfaceHeight(x, z, maxY = Infinity) {
    let height = -Infinity;
    for (const surface of this.surfaces) {
      if (surface.y > maxY) continue;
      if (surface.type === 'circle') {
        if (Math.hypot(x - surface.x, z - surface.z) <= surface.radius) height = Math.max(height, surface.y);
      } else if (x >= surface.minX && x <= surface.maxX && z >= surface.minZ && z <= surface.maxZ) {
        height = Math.max(height, surface.y);
      }
    }
    return height;
  }

  update(dt, playerPosition) {
    const time = performance.now() * 0.001;
    if (playerPosition) {
      this.sunLight.position.set(playerPosition.x - 38, playerPosition.y + 58, playerPosition.z + 42);
      this.sunLight.target.position.set(playerPosition.x, playerPosition.y, playerPosition.z);
      this.sunLight.target.updateMatrixWorld();
    }
    for (const cloud of this.clouds) {
      cloud.sprite.position.x = cloud.startX + Math.sin(time * cloud.speed + cloud.startX) * 10;
    }
    for (const fire of this.fireLights) {
      fire.light.intensity = fire.base * (0.82 + Math.sin(time * 8 + fire.seed) * 0.12 + Math.sin(time * 17 + fire.seed * 2) * 0.07);
    }
    for (const ember of this.fireEmbers) {
      const flicker = 0.82 + Math.sin(time * 11 + ember.seed) * 0.18;
      ember.flame.scale.set(flicker, 0.82 + Math.sin(time * 14 + ember.seed) * 0.16, flicker);
    }
    for (const ring of this.glowRings) {
      ring.mesh.material.opacity = 0.46 + Math.sin(time * 1.8 + ring.seed) * 0.16;
      ring.mesh.rotation.z += dt * ring.speed;
    }
    if (this.motes) {
      const positions = this.motes.points.geometry.attributes.position.array;
      for (let i = 0; i < this.motes.phases.length; i += 1) {
        const phase = this.motes.phases[i];
        positions[i * 3] = this.motes.basePositions[i * 3] + Math.sin(time * 0.32 + phase) * 1.7;
        positions[i * 3 + 1] = this.motes.basePositions[i * 3 + 1] + Math.sin(time * 0.65 + phase) * 0.55;
        positions[i * 3 + 2] = this.motes.basePositions[i * 3 + 2] + Math.cos(time * 0.27 + phase) * 1.7;
      }
      this.motes.points.geometry.attributes.position.needsUpdate = true;
    }
  }

  getColliders() {
    return this.colliders;
  }

  getObstacleCircles() {
    return this.obstacleCircles;
  }
}
