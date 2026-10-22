export class AudioSystem {
  constructor() {
    this.context = null;
    this.master = null;
    this.enabled = false;
    this.stormNodes = null;
  }

  init() {
    if (this.context) {
      if (this.context.state === 'suspended') this.context.resume().catch(() => {});
      return;
    }
    const Context = window.AudioContext || window.webkitAudioContext;
    if (!Context) return;
    this.context = new Context();
    this.master = this.context.createGain();
    this.master.gain.value = 0.34;
    this.master.connect(this.context.destination);
    this.noiseBuffer = this.context.createBuffer(1, this.context.sampleRate * 1.2, this.context.sampleRate);
    const data = this.noiseBuffer.getChannelData(0);
    for (let i = 0; i < data.length; i += 1) data[i] = Math.random() * 2 - 1;
    this.enabled = true;
    this.context.resume().catch(() => {});
  }

  now() {
    return this.context ? this.context.currentTime : 0;
  }

  envelope(gain, attack, decay, peak = 1) {
    const t = this.now();
    gain.gain.cancelScheduledValues(t);
    gain.gain.setValueAtTime(0.0001, t);
    gain.gain.exponentialRampToValueAtTime(Math.max(0.0001, peak), t + attack);
    gain.gain.exponentialRampToValueAtTime(0.0001, t + attack + decay);
  }

  noise(duration, filterFrequency, volume, type = 'lowpass') {
    if (!this.enabled) return;
    const source = this.context.createBufferSource();
    source.buffer = this.noiseBuffer;
    const filter = this.context.createBiquadFilter();
    filter.type = type;
    filter.frequency.value = filterFrequency;
    const gain = this.context.createGain();
    this.envelope(gain, 0.002, duration, volume);
    source.connect(filter);
    filter.connect(gain);
    gain.connect(this.master);
    source.start();
    source.stop(this.now() + duration + 0.05);
  }

  tone(frequency, duration, volume, type = 'sine', slideTo = null) {
    if (!this.enabled) return;
    const oscillator = this.context.createOscillator();
    const gain = this.context.createGain();
    oscillator.type = type;
    oscillator.frequency.setValueAtTime(frequency, this.now());
    if (slideTo) oscillator.frequency.exponentialRampToValueAtTime(slideTo, this.now() + duration);
    this.envelope(gain, 0.005, duration, volume);
    oscillator.connect(gain);
    gain.connect(this.master);
    oscillator.start();
    oscillator.stop(this.now() + duration + 0.05);
  }

  shot() {
    this.noise(0.12, 2200, 0.8, 'bandpass');
    this.noise(0.24, 280, 0.5, 'lowpass');
    this.tone(118, 0.09, 0.28, 'square', 46);
  }

  botShot() {
    this.noise(0.1, 1400, 0.2, 'bandpass');
    this.tone(160, 0.08, 0.06, 'square', 60);
  }

  pickaxe() {
    this.noise(0.16, 900, 0.26, 'bandpass');
    this.tone(180, 0.12, 0.05, 'sine', 90);
  }

  hit() {
    this.tone(980, 0.035, 0.11, 'square', 720);
    this.tone(1450, 0.04, 0.06, 'sine');
  }

  kill() {
    this.tone(620, 0.08, 0.16, 'triangle', 980);
    this.tone(930, 0.12, 0.1, 'sine', 1380);
  }

  reload() {
    this.noise(0.04, 3000, 0.18, 'highpass');
    window.setTimeout(() => this.noise(0.05, 1600, 0.17, 'bandpass'), 130);
    window.setTimeout(() => this.tone(280, 0.04, 0.08, 'square'), 260);
  }

  empty() {
    this.tone(320, 0.03, 0.09, 'square');
  }

  pickup() {
    [660, 880, 1320].forEach((frequency, index) => {
      window.setTimeout(() => this.tone(frequency, 0.18, 0.1, 'sine'), index * 65);
    });
  }

  chest() {
    this.noise(0.14, 600, 0.22, 'lowpass');
    [330, 495, 660, 990].forEach((frequency, index) => {
      window.setTimeout(() => this.tone(frequency, 0.28, 0.09, 'triangle'), 40 + index * 80);
    });
  }

  build() {
    this.noise(0.1, 700, 0.32, 'lowpass');
    this.tone(150, 0.12, 0.18, 'triangle', 90);
    window.setTimeout(() => this.noise(0.07, 2400, 0.17, 'bandpass'), 40);
  }

  jump() {
    this.tone(210, 0.1, 0.035, 'sine', 330);
  }

  land() {
    this.noise(0.09, 420, 0.2, 'lowpass');
  }

  footstep() {
    this.noise(0.07, 520, 0.11, 'lowpass');
  }

  damage() {
    this.tone(95, 0.2, 0.13, 'sawtooth', 58);
    this.noise(0.15, 700, 0.13, 'lowpass');
  }

  stormHit() {
    this.tone(60, 0.22, 0.06, 'sine', 45);
  }

  startStormAmbience() {
    if (!this.enabled || this.stormNodes) return;
    const t = this.now();
    const low = this.context.createOscillator();
    low.type = 'sine';
    low.frequency.value = 41;
    const shimmer = this.context.createOscillator();
    shimmer.type = 'sine';
    shimmer.frequency.value = 82;
    const gain = this.context.createGain();
    gain.gain.setValueAtTime(0.0001, t);
    gain.gain.linearRampToValueAtTime(0.024, t + 3);
    const lowGain = this.context.createGain();
    lowGain.gain.value = 0.8;
    low.connect(lowGain).connect(gain);
    shimmer.connect(gain);
    gain.connect(this.master);
    low.start();
    shimmer.start();
    this.stormNodes = { low, shimmer, gain };
  }

  stopStormAmbience() {
    if (!this.stormNodes) return;
    const { low, shimmer, gain } = this.stormNodes;
    const t = this.now();
    gain.gain.cancelScheduledValues(t);
    gain.gain.setValueAtTime(gain.gain.value, t);
    gain.gain.linearRampToValueAtTime(0.0001, t + 0.4);
    low.stop(t + 0.5);
    shimmer.stop(t + 0.5);
    this.stormNodes = null;
  }

  dispose() {
    this.stopStormAmbience();
    this.context?.close();
    this.context = null;
    this.enabled = false;
  }
}
