import * as THREE from 'three';
import { World } from './world.js';
import { PlayerController } from './player.js';
import { BuildSystem } from './build.js';
import { WeaponSystem } from './weapons.js';
import { BotManager } from './bots.js';
import { Storm } from './storm.js';
import { LootSystem } from './loot.js';
import { EffectsSystem } from './effects.js';
import { AudioSystem } from './audio.js';
import { UI } from './ui.js';

class Game {
  constructor() {
    this.canvas = document.getElementById('game-canvas');

    try {
      this.renderer = new THREE.WebGLRenderer({
        canvas: this.canvas,
        antialias: true,
        powerPreference: 'high-performance',
      });
    } catch (error) {
      document.body.innerHTML = '<div style="color:white;font:16px sans-serif;padding:40px">Stormfall Royale requires WebGL to run.</div>';
      throw error;
    }

    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.65));
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    this.renderer.outputColorSpace = THREE.SRGBColorSpace;
    this.renderer.toneMapping = THREE.ACESFilmicToneMapping;
    this.renderer.toneMappingExposure = 1.0;
    this.renderer.shadowMap.enabled = true;
    this.renderer.shadowMap.type = THREE.PCFShadowMap;
    this.renderer.autoClear = false;

    this.scene = new THREE.Scene();
    this.camera = new THREE.PerspectiveCamera(72, window.innerWidth / window.innerHeight, 0.055, 480);
    this.camera.rotation.order = 'YXZ';

    this.lastFrame = performance.now();
    this.state = 'menu';
    this.started = false;
    this.matchOver = false;
    this.matchTime = 0;
    this.elapsed = 0;
    this.menuTime = 0;
    this.stormTick = 0;
    this.botStormTick = 0;
    this.pointerLockPending = false;

    this.world = new World(this.scene, this.renderer);
    this.audio = new AudioSystem();
    this.effects = new EffectsSystem(this.scene);
    this.build = new BuildSystem(this.scene, this.world, this.camera, this.effects, this.audio);
    this.player = new PlayerController(this.camera, this.world, this.build, this.audio);
    this.weapons = new WeaponSystem(this.world, this.camera, this.effects, this.audio);
    this.bots = new BotManager(this.scene, this.world, this.effects, this.audio);
    this.storm = new Storm(this.scene, this.world, this.audio);
    this.loot = new LootSystem(this.scene, this.world, this.effects, this.audio, this.player, this.weapons);
    this.ui = new UI(this.world);

    this.bots.setPlayer(this.player);
    this.weapons.onGetBotTargets = () => this.bots.getHitTargets();
    this.weapons.onGetMovement = () => this.player.speed;
    this.weapons.onBotHit = (bot, damage, isHead, point, weapon) => this.handleBotHit(bot, damage, isHead, point, weapon);

    this.bots.onDamage = (bot, damage, source) => {
      if (source !== 'STORM') this.player.damageDealt += damage;
    };
    this.bots.onDeath = (bot, source) => this.handleBotDeath(bot, source);
    this.bots.onPlayerHit = (bot, damage) => {
      this.ui.flashDamage();
      this.audio.damage();
      if (!this.player.alive) this.endMatch(false, this.player.lastDamageSource);
    };

    this.player.onDamage = (amount, source) => {
      if (source !== 'STORM') this.ui.flashDamage();
    };

    this.loot.onChestOpen = (chest) => {
      this.ui.toast('CACHE OPENED', `${chest.spot.poi} · supplies incoming`, '#ffc94d', '▣');
    };
    this.loot.onLoot = (loot) => {
      const icon = loot.id === 'shield' ? '◈' : loot.id === 'health' ? '+' : loot.id === 'rare' ? '✦' : '▸';
      this.ui.toast(loot.name, loot.detail, `#${loot.color.toString(16).padStart(6, '0')}`, icon);
      this.ui.flashHeal();
      this.audio.pickup();
    };

    this.setupEvents();
    this.resize();
    window.addEventListener('resize', () => this.resize());
    this.ui.bindStart(
      () => this.startMatch(),
      () => this.requestPointerLock(),
      () => window.location.reload(),
    );

    this.camera.position.set(-20, 12, 31);
    this.camera.lookAt(0, 2, 0);
    this.weapons.setSuppressed(true);
    this.updateMenuCamera(0);
    this.animate();

    window.__STORMFALL__ = this.createDebugApi();

    const params = new URLSearchParams(window.location.search);
    if (params.has('autostart')) {
      window.setTimeout(() => this.startMatch(false), 120);
    }
  }

  setupEvents() {
    document.addEventListener('pointerlockchange', () => this.handlePointerLockChange());
    document.addEventListener('pointerlockerror', () => {
      if (this.state === 'playing' || this.state === 'paused') this.showPaused();
    });
    this.canvas.addEventListener('mousedown', (event) => this.handleMouseDown(event));
    window.addEventListener('mouseup', (event) => {
      if (event.button === 0) this.weapons.stopFire();
    });
    this.canvas.addEventListener('contextmenu', (event) => event.preventDefault());
    window.addEventListener('keydown', (event) => this.handleKeyDown(event));
    window.addEventListener('blur', () => {
      this.weapons.stopFire();
    });
  }

  handleKeyDown(event) {
    if (this.state !== 'playing') return;
    if (event.code === 'KeyQ') {
      event.preventDefault();
      this.toggleBuild();
      return;
    }
    if (this.build.active) {
      if (event.code === 'Digit1') this.build.setSelected(0);
      if (event.code === 'Digit2') this.build.setSelected(1);
      if (event.code === 'Digit3') this.build.setSelected(2);
      if (event.code === 'KeyR') this.weapons.reload();
      return;
    }
    if (event.code === 'Digit1') this.weapons.setWeapon('pickaxe');
    if (event.code === 'Digit2') this.weapons.setWeapon('ar');
    if (event.code === 'KeyR') this.weapons.reload();
    if (event.code === 'KeyE') this.tryInteract();
    if (event.code === 'Escape') this.weapons.stopFire();
  }

  handleMouseDown(event) {
    if (event.button !== 0 || this.state !== 'playing') return;
    if (!document.pointerLockElement) this.requestPointerLock();
    if (this.loot.tryOpenFromAim(this.camera, 4.4)) return;
    if (this.build.active) {
      this.build.place();
      return;
    }
    this.weapons.startFire();
    this.weapons.fireNow();
  }

  tryInteract() {
    if (this.loot.tryOpenNearest(3.5)) {
      this.weapons.stopFire();
    }
  }

  toggleBuild() {
    const active = !this.build.active;
    this.build.setActive(active);
    this.weapons.setSuppressed(active);
    this.weapons.stopFire();
    if (active) this.build.setSelected(0);
    this.ui.hidePause();
  }

  requestPointerLock() {
    if (document.pointerLockElement === this.canvas) return;
    if (this.pointerLockPending) return;
    this.pointerLockPending = true;
    window.clearTimeout(this.pointerLockTimeout);
    try {
      const result = this.canvas.requestPointerLock();
      if (result && typeof result.catch === 'function') result.catch(() => this.showPaused());
    } catch {
      this.showPaused();
    }
    this.pointerLockTimeout = window.setTimeout(() => {
      this.pointerLockPending = false;
      if (document.pointerLockElement !== this.canvas && this.started && !this.matchOver) this.showPaused();
    }, 650);
  }

  handlePointerLockChange() {
    const locked = document.pointerLockElement === this.canvas;
    this.pointerLockPending = false;
    if (locked) {
      window.clearTimeout(this.pointerLockTimeout);
      if (this.state === 'paused') {
        this.state = 'playing';
        this.player.enabled = true;
        this.ui.hidePause();
      }
      this.weapons.setSuppressed(this.build.active);
      return;
    }
    if (this.state === 'playing') this.showPaused();
  }

  showPaused() {
    if (!this.started || this.matchOver) return;
    this.state = 'paused';
    this.player.enabled = false;
    this.weapons.stopFire();
    this.weapons.setSuppressed(true);
    this.ui.showPause(true);
    this.ui.setInteract(null);
  }

  startMatch(lock = true) {
    if (this.started) return;
    this.started = true;
    this.state = 'playing';
    this.audio.init();
    this.player.reset();
    this.player.enabled = true;
    this.ui.enterGame();
    this.ui.hidePause();
    this.weapons.setSuppressed(false);
    this.weapons.setWeapon('ar', true);
    this.build.setActive(false);
    this.storm.reset();
    this.audio.startStormAmbience();
    this.ui.toast('DROP IN', 'Eliminate 6 rivals. Outlast the storm.', '#63f2e2', '⌖');
    if (lock) {
      this.requestPointerLock();
    } else {
      this.state = 'playing';
    }
    this.lastFrame = performance.now();
  }

  handleBotHit(bot, damage, isHead, point, weapon) {
    if (!bot.alive) return;
    bot.takeDamage(damage, isHead, weapon);
    this.ui.hitmarker(!bot.alive);
    this.ui.setAlive(this.bots.getAliveCount() + (this.player.alive ? 1 : 0));
  }

  handleBotDeath(bot, source) {
    this.bots.rebuildTargets();
    if (source === 'STORM') {
      this.ui.killFeed('THE STORM', bot.name, 'STORM');
    } else {
      this.player.eliminations += 1;
      this.ui.killFeed('YOU', bot.name, source === 'TRAILBLAZER' ? 'PICKAXE' : 'RANGER AR');
      this.ui.toast('ELIMINATED', `${bot.name} · ${source}`, '#ff8f7a', '✦');
    }
    this.ui.setAlive(this.bots.getAliveCount() + (this.player.alive ? 1 : 0));
    if (this.bots.getAliveCount() === 0 && !this.matchOver) this.endMatch(true);
  }

  applyStormDamage(dt) {
    const outside = this.storm.isOutside(this.player.position.x, this.player.position.z);
    this.stormTick += dt;
    this.botStormTick += dt;
    if (this.stormTick >= 0.6) {
      this.stormTick = 0;
      if (outside && this.player.alive) {
        this.player.takeDamage(4.2, 'STORM');
        this.ui.flashDamage();
        this.audio.stormHit();
      }
    }
    if (this.botStormTick >= 0.6) {
      this.botStormTick = 0;
      this.bots.damageAll(4.2, 'STORM', this.storm);
    }
  }

  checkPlayerDeath() {
    if (!this.matchOver && this.player.health <= 0) {
      this.player.alive = false;
      this.endMatch(false, this.player.lastDamageSource);
    }
  }

  endMatch(victory, cause = 'STORM') {
    if (this.matchOver) return;
    this.matchOver = true;
    this.state = 'over';
    this.player.enabled = false;
    this.weapons.stopFire();
    this.weapons.setSuppressed(true);
    this.build.setActive(false);
    this.audio.stopStormAmbience();
    if (victory) this.audio.kill();
    this.ui.showEnd(victory, {
      eliminations: this.player.eliminations,
      damage: this.player.damageDealt,
      time: this.matchTime,
      builds: this.build.pieces.length,
      cause,
    });
    if (document.pointerLockElement === this.canvas) document.exitPointerLock();
  }

  updateMenuCamera(dt) {
    this.menuTime += dt;
    const angle = this.menuTime * 0.045 + 2.2;
    const radius = 31;
    this.camera.position.set(Math.cos(angle) * radius, 10.5 + Math.sin(this.menuTime * 0.2) * 0.8, Math.sin(angle) * radius + 7);
    this.camera.lookAt(0, 1.5, -2);
  }

  updatePlaying(dt) {
    this.elapsed += dt;
    this.matchTime += dt;
    this.player.update(dt, this.elapsed);
    this.build.updateGhost(this.player, dt);
    this.weapons.update(dt, this.player);
    this.bots.update(dt, this.player, this.storm);
    this.storm.update(dt, true);
    this.loot.update(dt, this.player);
    this.applyStormDamage(dt);
    this.effects.update(dt);
    this.world.update(dt, this.player.position);

    if (this.loot.nearestChest && this.loot.nearestDistance <= 3.5) {
      this.interactLabel = 'OPEN CACHE';
    } else {
      this.interactLabel = null;
    }

    this.ui.update(this, dt);
    this.checkPlayerDeath();
    if (!this.matchOver && this.bots.getAliveCount() === 0) this.endMatch(true);
  }

  updateAmbient(dt) {
    this.world.update(dt, this.camera.position);
    this.effects.update(dt);
    this.storm.update(dt, false);
  }

  animate() {
    requestAnimationFrame(() => this.animate());
    const now = performance.now();
    const dt = Math.min((now - this.lastFrame) / 1000, 0.05);
    this.lastFrame = now;
    if (this.state === 'menu') {
      this.updateMenuCamera(dt);
      this.updateAmbient(dt);
    } else if (this.state === 'playing') {
      this.updatePlaying(dt);
    } else {
      this.updateAmbient(dt);
    }
    this.render();
  }

  render() {
    this.renderer.clear();
    this.renderer.render(this.scene, this.camera);
    if (this.started && !this.matchOver && this.state !== 'menu') {
      this.weapons.render(this.renderer);
    }
  }

  resize() {
    const width = window.innerWidth;
    const height = window.innerHeight;
    this.camera.aspect = width / height;
    this.camera.updateProjectionMatrix();
    this.weapons.resize(width / height);
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.65));
    this.renderer.setSize(width, height);
  }

  createDebugApi() {
    return {
      game: this,
      start: (lock = false) => this.startMatch(lock),
      toggleBuild: () => this.toggleBuild(),
      selectBuild: (index) => this.build.setSelected(index),
      place: () => this.build.place(),
      fire: () => this.weapons.fireNow(),
      setWeapon: (id) => this.weapons.setWeapon(id),
      look: (yaw, pitch = 0) => {
        this.player.yaw = yaw;
        this.player.pitch = pitch;
        this.player.applyCameraRotation(0);
      },
      teleport: (x, z) => {
        this.player.position.set(x, this.world.heightAt(x, z), z);
        this.player.velocity.set(0, 0, 0);
        this.player.applyCameraRotation(0);
      },
      openChest: (index) => this.loot.openChestByIndex(index),
      damageBot: (index, amount = 100) => {
        const bot = this.bots.bots[index];
        if (bot) this.bots.bots[index].takeDamage(amount, false, 'DEBUG');
      },
      killAllBots: () => {
        for (const bot of this.bots.bots) if (bot.alive) bot.takeDamage(999, false, 'DEBUG');
      },
      setStormRadius: (radius) => {
        this.storm.radius = Math.max(this.storm.minRadius, radius);
        this.storm.lastRadiusUpdate = -1;
        this.storm.updateVisuals();
      },
      finish: (victory = true) => this.endMatch(victory),
      getState: () => ({
        state: this.state,
        started: this.started,
        health: this.player.health,
        shield: this.player.shield,
        position: { x: this.player.position.x, y: this.player.position.y, z: this.player.position.z },
        yaw: this.player.yaw,
        pitch: this.player.pitch,
        aliveBots: this.bots.getAliveCount(),
        weapon: this.weapons.current,
        ammo: this.weapons.getState(),
        build: this.build.getGhostState(),
        storm: this.storm.getState(),
        chests: this.loot.chests.map((chest) => ({ opened: chest.opened, poi: chest.spot.poi })),
        pieces: this.build.pieces.length,
        eliminations: this.player.eliminations,
        damageDealt: this.player.damageDealt,
        matchTime: this.matchTime,
      }),
    };
  }
}

window.addEventListener('DOMContentLoaded', () => {
  new Game();
});
