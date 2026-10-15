/**
 * ====================================================================
 * 🎵 ROMANTIC AUDIO PLAYER & BACKGROUND SOUND ENGINE
 * ====================================================================
 * Manages background playback for "Alfaz" by Hamza Malik
 */

class RomanticAudioController {
    constructor() {
        this.audio = document.getElementById('bgMusic');
        if (!this.audio) {
            this.audio = new Audio('assets/audio/alfaz.mp3');
            this.audio.id = 'bgMusic';
            document.body.appendChild(this.audio);
        }

        this.audio.loop = true;
        this.audio.volume = 0.85;
        this.isPlaying = false;
        this.triedFallback = false;

        this.audio.addEventListener('error', () => {
            if (!this.triedFallback) {
                this.triedFallback = true;
                this.audio.src = 'assets/audio/alfaz.mp3.mp3';
                this.audio.load();
            }
        });

        this.init();
    }

    init() {
        this.setupEventListeners();
        this.setupVisualizer();
    }

    async play() {
        if (!this.audio) return false;
        try {
            await this.audio.play();
            this.isPlaying = true;
            this.updateUI(true);
            return true;
        } catch (err) {
            console.log("Audio play waiting for user gesture:", err.message);
            this.isPlaying = false;
            this.updateUI(false);
            return false;
        }
    }

    pause() {
        if (!this.audio) return;
        this.audio.pause();
        this.isPlaying = false;
        this.updateUI(false);
    }

    toggle() {
        if (this.audio && !this.audio.paused) {
            this.pause();
        } else {
            this.play();
        }
    }

    updateUI(playing) {
        // 1. Floating Corner Controller Widget
        const floatBtn = document.getElementById('floatingMusicBtn');
        const floatText = document.getElementById('floatingMusicText');
        if (floatBtn) {
            floatBtn.classList.toggle('playing', playing);
            floatBtn.classList.toggle('paused', !playing);
            if (floatText) {
                floatText.textContent = playing ? 'Alfaz 🎵' : 'Play Music ▶️';
            }
        }

        // 2. Section Play/Pause Button
        const playBtn = document.getElementById('songPlayBtn');
        if (playBtn) {
            playBtn.innerHTML = playing ?
                `<svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"/></svg> <span>Pause</span>` :
                `<svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg> <span>Play Alfaz 🎵</span>`;
        }

        // 3. Animated Section Equalizer Wave
        const visualizer = document.getElementById('songVisualizer');
        if (visualizer) {
            visualizer.classList.toggle('active', playing);
        }
    }

    setupEventListeners() {
        // Floating button click
        const floatBtn = document.getElementById('floatingMusicBtn');
        if (floatBtn) {
            floatBtn.addEventListener('click', (e) => {
                e.stopPropagation();
                this.toggle();
            });
        }

        // Section button click
        const songPlayBtn = document.getElementById('songPlayBtn');
        if (songPlayBtn) {
            songPlayBtn.addEventListener('click', (e) => {
                e.stopPropagation();
                this.toggle();
            });
        }

        // Native audio element events
        this.audio.addEventListener('play', () => {
            this.isPlaying = true;
            this.updateUI(true);
        });

        this.audio.addEventListener('pause', () => {
            this.isPlaying = false;
            this.updateUI(false);
        });

        // Time tracking & progress scrubber
        const progressFill = document.getElementById('songProgressFill');
        const currentTimeEl = document.getElementById('songCurrentTime');
        const durationEl = document.getElementById('songDuration');
        const progressBar = document.getElementById('songProgress');

        const formatTime = (secs) => {
            if (isNaN(secs) || !isFinite(secs)) return '0:00';
            const m = Math.floor(secs / 60);
            const s = Math.floor(secs % 60);
            return `${m}:${s < 10 ? '0' : ''}${s}`;
        };

        this.audio.addEventListener('timeupdate', () => {
            if (!this.audio.duration) return;
            const pct = (this.audio.currentTime / this.audio.duration) * 100;
            if (progressFill) progressFill.style.width = `${pct}%`;
            if (currentTimeEl) currentTimeEl.textContent = formatTime(this.audio.currentTime);
        });

        this.audio.addEventListener('loadedmetadata', () => {
            if (durationEl) durationEl.textContent = formatTime(this.audio.duration);
        });

        if (progressBar) {
            progressBar.addEventListener('click', (e) => {
                if (!this.audio.duration) return;
                const rect = progressBar.getBoundingClientRect();
                const clickX = e.clientX - rect.left;
                const pct = Math.max(0, Math.min(1, clickX / rect.width));
                this.audio.currentTime = pct * this.audio.duration;
            });
        }
    }

    setupVisualizer() {
        const container = document.getElementById('songVisualizer');
        if (!container) return;
        container.innerHTML = '';
        for (let i = 0; i < 24; i++) {
            const bar = document.createElement('div');
            bar.className = 'visualizer-bar';
            bar.style.animationDelay = `${(i * 0.08).toFixed(2)}s`;
            container.appendChild(bar);
        }
    }
}

window.RomanticAudioController = RomanticAudioController;
