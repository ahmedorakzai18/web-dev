/* Simon's Game - Vanilla JS
   - Uses WebAudio to generate tones (no external assets)
   - 4 pads: green, red, yellow, blue
   - Start button, Strict mode toggle, round display
   - Win at 20 rounds
*/

document.addEventListener("DOMContentLoaded", () => {
  const game = new SimonGame({
    winRounds: 20,
    displayEl: document.querySelector(".display"),
    pads: Array.from(document.querySelectorAll(".pad")),
    startBtn: document.getElementById("start"),
    strictCheckbox: document.getElementById("strict"),
    messageEl: document.getElementById("message"),
  });

  game.init();
});

class SimonGame {
  constructor({
    winRounds = 20,
    displayEl,
    pads,
    startBtn,
    strictCheckbox,
    messageEl,
  }) {
    this.winRounds = winRounds;
    this.displayEl = displayEl;
    this.pads = pads;
    this.startBtn = startBtn;
    this.strictCheckbox = strictCheckbox;
    this.messageEl = messageEl;

    this.sequence = [];
    this.playerIndex = 0;
    this.isPlayingSequence = false;
    this.started = false;
    this.strict = false;

    // Frequencies for the four pads
    this.frequencies = [329.63, 261.63, 220.0, 392.0]; // E4, C4, A3, G4

    // WebAudio setup
    this.audioCtx = null;
  }

  init() {
    // Bind events
    this.startBtn.addEventListener("click", () => this.start());
    this.strictCheckbox.addEventListener("change", (e) => {
      this.strict = e.target.checked;
    });

    this.pads.forEach((p) => {
      p.addEventListener("click", (e) => this.onPadClick(e));
      // Improve touch responsiveness
      p.addEventListener(
        "touchstart",
        (e) => {
          e.preventDefault();
          this.onPadClick(e);
        },
        { passive: false },
      );
    });

    this.updateDisplay("--");
    this.setMessage("Press Start to play");
  }

  start() {
    this.resetState();
    this.started = true;
    this.setMessage("Good luck!");
    this.nextRound();
  }

  resetState() {
    this.sequence = [];
    this.playerIndex = 0;
    this.isPlayingSequence = false;
    this.started = false;
    this.updateDisplay("--");
    this.setMessage("");
  }

  async nextRound() {
    this.playerIndex = 0;
    // add a random color
    this.sequence.push(this.randomColor());
    this.updateDisplay(this.sequence.length);
    await this.playSequence();
  }

  randomColor() {
    return Math.floor(Math.random() * 4);
  }

  async playSequence() {
    if (!this.audioCtx) this.initAudio();
    this.isPlayingSequence = true;
    this.disablePads();
    await this.sleep(350);
    for (let i = 0; i < this.sequence.length; i++) {
      const color = this.sequence[i];
      await this.flashPad(color, 550);
      await this.sleep(160);
    }
    this.isPlayingSequence = false;
    this.enablePads();
    this.setMessage("Your turn");
  }

  async flashPad(colorIndex, duration = 400) {
    const pad = this.pads[colorIndex];
    if (!pad) return;
    pad.classList.add("active");
    this.playTone(colorIndex, duration);
    await this.sleep(duration);
    pad.classList.remove("active");
  }

  onPadClick(e) {
    if (this.isPlayingSequence) return;
    if (!this.started) return;

    const target = e.currentTarget;
    const colorIndex = Number(target.dataset.color);

    // Visual & audio feedback for user's press
    this.flashPad(colorIndex, 180);

    // Check sequence
    this.handleUserInput(colorIndex);
  }

  handleUserInput(colorIndex) {
    const expected = this.sequence[this.playerIndex];
    if (colorIndex === expected) {
      this.playerIndex++;
      if (this.playerIndex === this.sequence.length) {
        // Completed round
        if (this.sequence.length >= this.winRounds) {
          this.win();
        } else {
          this.setMessage("Round passed!");
          setTimeout(() => this.nextRound(), 700);
        }
      } else {
        // waiting for next input
      }
    } else {
      // Wrong input
      this.errorFeedback();
    }
  }

  async errorFeedback() {
    this.setMessage("Wrong!");
    this.disablePads();
    this.playErrorTone();
    await this.sleep(800);

    if (this.strict) {
      this.setMessage("Strict mode: restarting");
      await this.sleep(400);
      this.start();
    } else {
      this.setMessage("Try again");
      this.playerIndex = 0;
      await this.playSequence();
    }
  }

  win() {
    this.setMessage("You win! 🎉");
    this.updateDisplay("WIN");
    this.disablePads();
    this.started = false;
  }

  disablePads() {
    this.pads.forEach((p) => (p.disabled = true));
  }
  enablePads() {
    this.pads.forEach((p) => (p.disabled = false));
  }

  updateDisplay(text) {
    this.displayEl.textContent = String(text).padStart(2, "0");
  }

  setMessage(msg) {
    this.messageEl.textContent = msg;
  }

  sleep(ms) {
    return new Promise((res) => setTimeout(res, ms));
  }

  initAudio() {
    try {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      this.audioCtx = new AudioContext();
    } catch (e) {
      console.warn("WebAudio not supported:", e);
      this.audioCtx = null;
    }
  }

  playTone(index, duration = 400) {
    if (!this.audioCtx) return;
    const now = this.audioCtx.currentTime;
    const o = this.audioCtx.createOscillator();
    const g = this.audioCtx.createGain();
    o.frequency.value = this.frequencies[index] || 300;
    o.type = "sine";
    g.gain.setValueAtTime(0, now);
    g.gain.linearRampToValueAtTime(0.18, now + 0.01);
    g.gain.exponentialRampToValueAtTime(0.0001, now + duration / 1000);
    o.connect(g);
    g.connect(this.audioCtx.destination);
    o.start(now);
    o.stop(now + duration / 1000 + 0.02);
  }

  playErrorTone() {
    if (!this.audioCtx) return;
    const now = this.audioCtx.currentTime;
    const o = this.audioCtx.createOscillator();
    const g = this.audioCtx.createGain();
    o.frequency.value = 120;
    o.type = "sawtooth";
    g.gain.setValueAtTime(0.0001, now);
    g.gain.exponentialRampToValueAtTime(0.2, now + 0.005);
    g.gain.exponentialRampToValueAtTime(0.0001, now + 0.4);
    o.connect(g);
    g.connect(this.audioCtx.destination);
    o.start(now);
    o.stop(now + 0.45);
  }
}
