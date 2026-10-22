import { clamp, formatTime } from './utils.js';

export class UI {
  constructor(world) {
    this.world = world;
    this.el = {
      hud: document.getElementById('hud'),
      start: document.getElementById('start-screen'),
      pause: document.getElementById('pause-screen'),
      end: document.getElementById('end-screen'),
      play: document.getElementById('play-button'),
      resume: document.getElementById('resume-button'),
      restart: document.getElementById('restart-button'),
      healthFill: document.getElementById('health-fill'),
      healthValue: document.getElementById('health-value'),
      shieldFill: document.getElementById('shield-fill'),
      shieldValue: document.getElementById('shield-value'),
      elim: document.getElementById('elim-count'),
      alive: document.getElementById('alive-count'),
      ammoPanel: document.getElementById('ammo-panel'),
      ammoMag: document.getElementById('ammo-mag'),
      ammoReserve: document.getElementById('ammo-reserve'),
      weaponName: document.getElementById('weapon-name'),
      weaponType: document.getElementById('weapon-type'),
      weaponRarity: document.getElementById('weapon-rarity'),
      fireMode: document.getElementById('fire-mode'),
      stormPhase: document.getElementById('storm-phase'),
      stormStatus: document.getElementById('storm-status'),
      stormTimer: document.getElementById('storm-timer'),
      stormProgress: document.getElementById('storm-progress-fill'),
      stormWarning: document.getElementById('storm-warning'),
      stormVignette: document.getElementById('storm-vignette'),
      damageFlash: document.getElementById('damage-flash'),
      healFlash: document.getElementById('heal-flash'),
      crosshair: document.getElementById('crosshair'),
      hitmarker: document.getElementById('hitmarker'),
      interact: document.getElementById('interact-prompt'),
      interactText: document.getElementById('interact-text'),
      buildBanner: document.getElementById('build-banner'),
      weaponSlots: document.getElementById('weapon-slots'),
      buildSlots: document.getElementById('build-slots'),
      loadoutHint: document.getElementById('loadout-hint'),
      arSlotAmmo: document.getElementById('ar-slot-ammo'),
      toastStack: document.getElementById('toast-stack'),
      killFeed: document.getElementById('kill-feed'),
      minimap: document.getElementById('minimap'),
      endKicker: document.getElementById('end-kicker'),
      endTitle: document.getElementById('end-title'),
      endSubtitle: document.getElementById('end-subtitle'),
      statElim: document.getElementById('stat-elim'),
      statDamage: document.getElementById('stat-damage'),
      statTime: document.getElementById('stat-time'),
      statBuild: document.getElementById('stat-build'),
      confetti: document.getElementById('confetti'),
    };
    this.minimapCtx = this.el.minimap.getContext('2d');
    this.staticMap = this.createStaticMap();
    this.minimapAccumulator = 0;
    this.previous = {};
    this.buildStaticMap();
    this.setWeaponSlots('ar');
  }

  createStaticMap() {
    const size = this.el.minimap.width;
    const canvas = document.createElement('canvas');
    canvas.width = size;
    canvas.height = size;
    const ctx = canvas.getContext('2d');
    const scale = (size / 2 - 10) / 100;
    const center = size / 2;
    const step = 3;
    for (let py = 0; py < size; py += step) {
      for (let px = 0; px < size; px += step) {
        const x = (px - center) / scale;
        const z = (py - center) / scale;
        const height = this.world.heightAt(x, z);
        const water = clamp(0.35 - height * 0.03, 0.05, 0.4);
        const normalized = clamp((height + 3) / 18, 0, 1);
        const r = Math.round(37 + normalized * 60 + water * 8);
        const g = Math.round(82 + normalized * 31 - water * 18);
        const b = Math.round(55 + normalized * 15 - water * 8);
        ctx.fillStyle = `rgb(${r}, ${g}, ${b})`;
        ctx.fillRect(px, py, step, step);
      }
    }
    const gradient = ctx.createRadialGradient(center, center, 8, center, center, center);
    gradient.addColorStop(0, 'rgba(255, 255, 220, .08)');
    gradient.addColorStop(0.55, 'rgba(11, 30, 22, .02)');
    gradient.addColorStop(1, 'rgba(4, 13, 18, .42)');
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, size, size);

    const toMap = (x, z) => [center + x * scale, center + z * scale];
    const poiPositions = [
      [-27, -17],
      [25, 18],
      [2, -38],
    ];
    for (const [x, z] of poiPositions) {
      const [mx, my] = toMap(x, z);
      ctx.fillStyle = 'rgba(245, 238, 215, .22)';
      ctx.beginPath();
      ctx.arc(mx, my, 7, 0, Math.PI * 2);
      ctx.fill();
      ctx.strokeStyle = 'rgba(255, 236, 189, .32)';
      ctx.lineWidth = 1;
      ctx.stroke();
    }

    for (let i = 0; i < 22; i += 1) {
      const angle = (i / 22) * Math.PI * 2 + 0.13;
      const radius = Math.sqrt((i * 37) % 100 / 100) * 80;
      const [mx, my] = toMap(Math.cos(angle) * radius, Math.sin(angle) * radius);
      ctx.fillStyle = 'rgba(23, 57, 35, .55)';
      ctx.beginPath();
      ctx.arc(mx, my, 1.5, 0, Math.PI * 2);
      ctx.fill();
    }

    ctx.strokeStyle = 'rgba(206, 232, 216, .12)';
    ctx.lineWidth = 1;
    ctx.strokeRect(0.5, 0.5, size - 1, size - 1);
    return canvas;
  }

  buildStaticMap() {
    const ctx = this.minimapCtx;
    ctx.clearRect(0, 0, 220, 220);
    ctx.drawImage(this.staticMap, 0, 0);
  }

  bindStart(onStart, onResume, onRestart) {
    this.el.play.addEventListener('click', onStart);
    this.el.resume.addEventListener('click', onResume);
    this.el.restart.addEventListener('click', onRestart);
  }

  enterGame() {
    this.el.start.classList.add('leaving');
    window.setTimeout(() => this.el.start.classList.add('hidden'), 520);
    this.el.hud.classList.remove('hidden');
    requestAnimationFrame(() => this.el.hud.classList.add('visible'));
  }

  showPause(show) {
    this.el.pause.classList.toggle('hidden', !show);
  }

  setHealth(health, shield, maxHealth = 100, maxShield = 100) {
    const healthValue = Math.ceil(health);
    const shieldValue = Math.ceil(shield);
    if (this.previous.health !== healthValue) {
      this.el.healthFill.style.width = `${clamp((health / maxHealth) * 100, 0, 100)}%`;
      this.el.healthValue.textContent = healthValue;
      this.previous.health = healthValue;
    }
    if (this.previous.shield !== shieldValue) {
      this.el.shieldFill.style.width = `${clamp((shield / maxShield) * 100, 0, 100)}%`;
      this.el.shieldValue.textContent = shieldValue;
      this.previous.shield = shieldValue;
    }
  }

  setWeapon(state) {
    const key = `${state.id}-${state.mag}-${state.reserve}-${state.reloading}`;
    if (this.previous.weapon === key) return;
    this.previous.weapon = key;
    this.el.weaponName.textContent = state.name;
    this.el.weaponType.textContent = state.type;
    this.el.weaponRarity.textContent = state.rarity;
    this.el.fireMode.textContent = state.id === 'ar' ? (state.reloading ? 'RELOADING' : 'FULL AUTO') : 'MELEE';
    this.el.ammoPanel.classList.toggle('low-ammo', state.id === 'ar' && state.mag <= 8 && state.mag > 0);
    this.el.ammoPanel.classList.toggle('empty', state.id === 'ar' && state.mag === 0);
    if (state.id === 'ar') {
      this.el.ammoMag.textContent = state.mag;
      this.el.ammoReserve.textContent = state.reserve;
      this.el.ammoMag.style.fontSize = '';
      this.el.arSlotAmmo.textContent = `${state.mag} / ${state.reserve}`;
    } else {
      this.el.ammoMag.textContent = '∞';
      this.el.ammoMag.style.fontSize = '31px';
      this.el.ammoReserve.textContent = '';
      this.el.arSlotAmmo.textContent = `${state.ammoLabel}`;
    }
    this.setWeaponSlots(state.id, state.reloading);
  }

  setWeaponSlots(weaponId, reloading = false) {
    document.querySelectorAll('[data-weapon]').forEach((slot) => {
      const isActive = slot.dataset.weapon === (weaponId === 'ar' ? '2' : '1');
      slot.classList.toggle('active', isActive);
      if (isActive && reloading) slot.classList.add('reloading');
      else slot.classList.remove('reloading');
    });
  }

  setMode(buildActive, selectedBuild = 0) {
    if (this.previous.buildActive !== buildActive) {
      this.previous.buildActive = buildActive;
      this.el.crosshair.classList.toggle('build', buildActive);
      this.el.weaponSlots.classList.toggle('hidden', buildActive);
      this.el.buildSlots.classList.toggle('hidden', !buildActive);
      this.el.buildBanner.classList.toggle('hidden', !buildActive);
      this.el.loadoutHint.textContent = buildActive ? '1 — 3 TO SELECT' : '1 — 2 TO SWITCH';
      this.el.ammoPanel.style.opacity = buildActive ? '0.42' : '1';
    }
    if (buildActive) {
      document.querySelectorAll('[data-build]').forEach((slot) => {
        slot.classList.toggle('active', Number(slot.dataset.build) === selectedBuild);
      });
    }
  }

  setEliminations(count) {
    if (this.previous.elim !== count) {
      this.el.elim.textContent = count;
      this.previous.elim = count;
    }
  }

  setAlive(count) {
    if (this.previous.alive !== count) {
      this.el.alive.textContent = count;
      this.previous.alive = count;
    }
  }

  setStorm(state) {
    const phaseKey = `${state.phase}-${state.status}`;
    this.el.stormPhase.textContent = `PHASE ${state.phase}`;
    this.el.stormTimer.textContent = state.timerLabel;
    this.el.stormProgress.style.width = `${clamp((state.timer / 30) * 100, 0, 100)}%`;
    if (this.previous.stormPhase !== phaseKey) {
      this.el.stormStatus.textContent = state.status;
      this.el.stormStatus.classList.toggle('closing', state.shrinking);
      this.previous.stormPhase = phaseKey;
    }
  }

  setStormDanger(outside) {
    if (this.previous.outside === outside) return;
    this.previous.outside = outside;
    this.el.stormVignette.classList.toggle('active', outside);
    this.el.stormWarning.classList.toggle('hidden', !outside);
  }

  flashDamage() {
    this.el.damageFlash.classList.add('active');
    window.clearTimeout(this.damageTimeout);
    this.damageTimeout = window.setTimeout(() => this.el.damageFlash.classList.remove('active'), 140);
  }

  flashHeal() {
    this.el.healFlash.classList.add('active');
    window.clearTimeout(this.healTimeout);
    this.healTimeout = window.setTimeout(() => this.el.healFlash.classList.remove('active'), 190);
  }

  hitmarker(kill = false) {
    const node = this.el.hitmarker;
    node.classList.remove('show', 'kill');
    void node.offsetWidth;
    node.classList.add('show');
    if (kill) node.classList.add('kill');
  }

  setInteract(text) {
    if (!text) {
      this.el.interact.classList.add('hidden');
      return;
    }
    this.el.interact.classList.remove('hidden');
    this.el.interactText.textContent = text;
  }

  toast(name, detail, color = '#ffc94d', icon = '◆') {
    const element = document.createElement('div');
    element.className = 'toast';
    element.style.borderLeftColor = color;
    element.innerHTML = `
      <div class="toast-icon" style="color:${color};border-color:${color}55;background:${color}18">${icon}</div>
      <div class="toast-copy"><b style="color:${color}">${name}</b><span>${detail}</span></div>
    `;
    this.el.toastStack.appendChild(element);
    window.setTimeout(() => {
      element.classList.add('leaving');
      window.setTimeout(() => element.remove(), 420);
    }, 3200);
  }

  killFeed(killer, victim, weapon) {
    const element = document.createElement('div');
    element.className = 'kill-entry';
    element.innerHTML = `<span class="killer">${killer}</span><span>eliminated</span><span class="victim">${victim}</span><span class="weapon">${weapon}</span>`;
    this.el.killFeed.appendChild(element);
    window.setTimeout(() => {
      element.style.transition = 'opacity .35s ease, transform .35s ease';
      element.style.opacity = '0';
      element.style.transform = 'translateX(15px)';
      window.setTimeout(() => element.remove(), 380);
    }, 4200);
  }

  update(game, dt) {
    this.setHealth(game.player.health, game.player.shield);
    this.setWeapon(game.weapons.getState());
    this.setEliminations(game.player.eliminations);
    this.setAlive(game.bots.getAliveCount() + (game.player.alive ? 1 : 0));
    this.setStorm(game.storm.getState());
    const outside = game.storm.isOutside(game.player.position.x, game.player.position.z) && game.player.alive;
    this.setStormDanger(outside);
    this.setMode(game.build.active, game.build.selected);
    if (game.build.active) {
      const slot = document.querySelector(`[data-build="${game.build.selected}"]`);
      if (slot) document.querySelectorAll('[data-build]').forEach((s) => s.classList.toggle('active', s === slot));
    }
    this.setInteract(game.interactLabel || null);
    this.minimapAccumulator += dt;
    if (this.minimapAccumulator > 0.09) {
      this.minimapAccumulator = 0;
      this.drawMinimap(game);
    }
  }

  drawMinimap(game) {
    const ctx = this.minimapCtx;
    const size = this.el.minimap.width;
    const center = size / 2;
    const scale = (size / 2 - 10) / 100;
    this.buildStaticMap();
    const toMap = (x, z) => [center + x * scale, center + z * scale];

    const storm = game.storm;
    const stormRadius = storm.radius * scale;
    ctx.save();
    ctx.beginPath();
    ctx.rect(0, 0, size, size);
    ctx.arc(center, center, stormRadius, 0, Math.PI * 2, true);
    ctx.fillStyle = 'rgba(75, 25, 141, .55)';
    ctx.fill('evenodd');
    ctx.restore();

    ctx.beginPath();
    ctx.arc(center, center, stormRadius, 0, Math.PI * 2);
    ctx.strokeStyle = 'rgba(215, 150, 255, .92)';
    ctx.lineWidth = 2;
    ctx.shadowColor = '#b85cff';
    ctx.shadowBlur = 9;
    ctx.stroke();
    ctx.shadowBlur = 0;

    for (const piece of game.build.pieces) {
      const [mx, my] = toMap(piece.x, piece.z);
      ctx.save();
      ctx.translate(mx, my);
      ctx.rotate(piece.rotation);
      ctx.fillStyle = 'rgba(224, 174, 112, .85)';
      if (piece.type === 'wall') ctx.fillRect(-3, -1, 6, 2);
      else if (piece.type === 'floor') ctx.fillRect(-3, -3, 6, 6);
      else ctx.fillRect(-3, -2, 6, 4);
      ctx.restore();
    }

    for (const chest of game.loot.chests) {
      if (chest.opened) continue;
      const [mx, my] = toMap(chest.group.position.x, chest.group.position.z);
      ctx.save();
      ctx.translate(mx, my);
      ctx.rotate(Math.PI / 4);
      ctx.fillStyle = '#ffd05e';
      ctx.shadowColor = '#ffb637';
      ctx.shadowBlur = 6;
      ctx.fillRect(-2.5, -2.5, 5, 5);
      ctx.restore();
    }

    for (const bot of game.bots.bots) {
      if (!bot.alive) continue;
      const [mx, my] = toMap(bot.group.position.x, bot.group.position.z);
      ctx.fillStyle = '#ff5c6a';
      ctx.shadowColor = '#ff2338';
      ctx.shadowBlur = 5;
      ctx.beginPath();
      ctx.arc(mx, my, 2.7, 0, Math.PI * 2);
      ctx.fill();
      ctx.shadowBlur = 0;
    }

    if (game.player.alive) {
      const [mx, my] = toMap(game.player.position.x, game.player.position.z);
      ctx.save();
      ctx.translate(mx, my);
      ctx.rotate(-game.player.yaw);
      ctx.fillStyle = 'rgba(101, 247, 226, .15)';
      ctx.beginPath();
      ctx.moveTo(0, 0);
      ctx.arc(0, 0, 22, -Math.PI / 2 - 0.46, -Math.PI / 2 + 0.46);
      ctx.closePath();
      ctx.fill();
      ctx.fillStyle = '#eaffff';
      ctx.strokeStyle = '#1e4c57';
      ctx.lineWidth = 1.4;
      ctx.beginPath();
      ctx.moveTo(0, -7);
      ctx.lineTo(5, 5);
      ctx.lineTo(0, 2.5);
      ctx.lineTo(-5, 5);
      ctx.closePath();
      ctx.fill();
      ctx.stroke();
      ctx.restore();
    }
  }

  showEnd(victory, stats) {
    this.el.end.classList.remove('hidden');
    this.el.end.classList.toggle('defeat', !victory);
    this.el.endKicker.textContent = victory ? 'MATCH COMPLETE' : 'ELIMINATED';
    this.el.endTitle.textContent = victory ? 'VICTORY ROYALE' : 'GAME OVER';
    this.el.endSubtitle.textContent = victory
      ? 'You are the last one standing.'
      : stats.cause === 'STORM'
        ? 'The storm claims another. Drop in again.'
        : `${stats.cause || 'A rival'} eliminated you. Drop in again.`;
    this.el.statElim.textContent = stats.eliminations;
    this.el.statDamage.textContent = Math.round(stats.damage);
    this.el.statTime.textContent = formatTime(stats.time);
    this.el.statBuild.textContent = stats.builds;
    this.el.confetti.innerHTML = '';
    if (victory) {
      const colors = ['#ffd45c', '#63f2e2', '#ff8a5d', '#b887ff', '#ffffff', '#7dff9c'];
      for (let i = 0; i < 90; i += 1) {
        const piece = document.createElement('span');
        piece.className = 'confetti-piece';
        piece.style.left = `${Math.random() * 100}%`;
        piece.style.background = colors[Math.floor(Math.random() * colors.length)];
        piece.style.animationDuration = `${2.8 + Math.random() * 3}s`;
        piece.style.animationDelay = `${Math.random() * 1.5}s`;
        piece.style.setProperty('--drift', `${(Math.random() - 0.5) * 240}px`);
        piece.style.width = `${4 + Math.random() * 6}px`;
        piece.style.height = `${8 + Math.random() * 10}px`;
        piece.style.transform = `rotate(${Math.random() * 360}deg)`;
        this.el.confetti.appendChild(piece);
      }
    }
    this.el.hud.classList.remove('visible');
    this.setInteract(null);
  }

  hideEnd() {
    this.el.end.classList.add('hidden');
    this.el.hud.classList.add('visible');
  }

  hidePause() {
    this.el.pause.classList.add('hidden');
  }
}
