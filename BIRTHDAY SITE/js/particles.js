/**
 * ====================================================================
 * ✨ ROMANTIC PARTICLES & FLOATING HEARTS ENGINE 🌸
 * ====================================================================
 * High-performance canvas particle system with floating hearts,
 * cherry blossom petals, sparkles, touch-trails, and confetti bursts.
 */

class RomanticParticles {
    constructor(canvasId) {
        this.canvas = document.getElementById(canvasId);
        if (!this.canvas) return;
        this.ctx = this.canvas.getContext('2d');
        
        this.particles = [];
        this.confetti = [];
        this.touchParticles = [];
        this.maxParticles = 45; // Smooth 60fps on mobile
        this.isRunning = true;

        this.colors = [
            '#ffb3c1', '#ff85a1', '#ff758f', '#ff4d6d', '#f72585', '#ffd1dc', '#fff0f3'
        ];

        this.init();
    }

    init() {
        this.resize();
        window.addEventListener('resize', () => this.resize());

        // Spawn initial ambient particles
        for (let i = 0; i < this.maxParticles; i++) {
            this.particles.push(this.createParticle(true));
        }

        // Interactive touch/mouse trail
        const addTrail = (x, y) => {
            if (this.touchParticles.length > 25) return;
            this.touchParticles.push({
                x,
                y,
                size: Math.random() * 12 + 8,
                color: this.colors[Math.floor(Math.random() * this.colors.length)],
                alpha: 0.9,
                vx: (Math.random() - 0.5) * 1.5,
                vy: -Math.random() * 2 - 1,
                rot: Math.random() * Math.PI,
                vrot: (Math.random() - 0.5) * 0.1
            });
        };

        window.addEventListener('pointermove', (e) => {
            if (Math.random() > 0.4) addTrail(e.clientX, e.clientY);
        });

        // Visibility API pause
        document.addEventListener('visibilitychange', () => {
            this.isRunning = !document.hidden;
            if (this.isRunning) this.loop();
        });

        this.loop();
    }

    resize() {
        this.width = this.canvas.width = window.innerWidth;
        this.height = this.canvas.height = window.innerHeight;
    }

    createParticle(randomY = false) {
        const types = ['heart', 'petal', 'sparkle'];
        const type = types[Math.floor(Math.random() * types.length)];
        return {
            type,
            x: Math.random() * this.width,
            y: randomY ? Math.random() * this.height : this.height + 20,
            size: Math.random() * 14 + 10,
            speedY: Math.random() * 0.9 + 0.4,
            speedX: Math.sin(Math.random() * Math.PI) * 0.5,
            wiggle: Math.random() * Math.PI * 2,
            wiggleSpeed: Math.random() * 0.02 + 0.01,
            color: this.colors[Math.floor(Math.random() * this.colors.length)],
            alpha: Math.random() * 0.5 + 0.35,
            rotation: Math.random() * Math.PI * 2,
            rotSpeed: (Math.random() - 0.5) * 0.02
        };
    }

    drawHeart(ctx, x, y, size, color, alpha, rotation = 0) {
        ctx.save();
        ctx.translate(x, y);
        ctx.rotate(rotation);
        ctx.globalAlpha = alpha;
        ctx.fillStyle = color;
        ctx.beginPath();
        const topCurveHeight = size * 0.3;
        ctx.moveTo(0, topCurveHeight);
        // top left curve
        ctx.bezierCurveTo(-size / 2, -topCurveHeight, -size, topCurveHeight, 0, size);
        // top right curve
        ctx.bezierCurveTo(size, topCurveHeight, size / 2, -topCurveHeight, 0, topCurveHeight);
        ctx.closePath();
        ctx.fill();
        ctx.restore();
    }

    drawPetal(ctx, x, y, size, color, alpha, rotation = 0) {
        ctx.save();
        ctx.translate(x, y);
        ctx.rotate(rotation);
        ctx.globalAlpha = alpha;
        ctx.fillStyle = color;
        ctx.beginPath();
        ctx.ellipse(0, 0, size * 0.4, size * 0.8, 0, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
    }

    drawSparkle(ctx, x, y, size, color, alpha) {
        ctx.save();
        ctx.translate(x, y);
        ctx.globalAlpha = alpha;
        ctx.fillStyle = color;
        ctx.beginPath();
        for (let i = 0; i < 4; i++) {
            ctx.lineTo(Math.cos((i * Math.PI) / 2) * size, Math.sin((i * Math.PI) / 2) * size);
            ctx.lineTo(Math.cos((i * Math.PI) / 2 + Math.PI / 4) * (size * 0.3), Math.sin((i * Math.PI) / 2 + Math.PI / 4) * (size * 0.3));
        }
        ctx.closePath();
        ctx.fill();
        ctx.restore();
    }

    // Trigger celebration burst of hearts & confetti
    burst(x = window.innerWidth / 2, y = window.innerHeight / 2, count = 80) {
        for (let i = 0; i < count; i++) {
            const angle = Math.random() * Math.PI * 2;
            const velocity = Math.random() * 8 + 3;
            this.confetti.push({
                x,
                y,
                vx: Math.cos(angle) * velocity,
                vy: Math.sin(angle) * velocity - 3,
                size: Math.random() * 16 + 8,
                color: this.colors[Math.floor(Math.random() * this.colors.length)],
                alpha: 1,
                decay: Math.random() * 0.015 + 0.008,
                rotation: Math.random() * Math.PI,
                rotSpeed: (Math.random() - 0.5) * 0.2,
                gravity: 0.15
            });
        }
    }

    loop() {
        if (!this.isRunning) return;

        this.ctx.clearRect(0, 0, this.width, this.height);

        // 1. Ambient particles (hearts, petals, sparkles)
        for (let i = 0; i < this.particles.length; i++) {
            const p = this.particles[i];
            p.wiggle += p.wiggleSpeed;
            p.x += Math.sin(p.wiggle) * 0.6 + p.speedX;
            p.y -= p.speedY;
            p.rotation += p.rotSpeed;

            if (p.type === 'heart') {
                this.drawHeart(this.ctx, p.x, p.y, p.size, p.color, p.alpha, p.rotation);
            } else if (p.type === 'petal') {
                this.drawPetal(this.ctx, p.x, p.y, p.size, p.color, p.alpha, p.rotation);
            } else {
                this.drawSparkle(this.ctx, p.x, p.y, p.size * 0.6, '#ffd166', p.alpha);
            }

            // Recycle if particle floats above screen or off sides
            if (p.y < -30 || p.x < -30 || p.x > this.width + 30) {
                this.particles[i] = this.createParticle(false);
            }
        }

        // 2. Interactive touch trail
        for (let i = this.touchParticles.length - 1; i >= 0; i--) {
            const tp = this.touchParticles[i];
            tp.x += tp.vx;
            tp.y += tp.vy;
            tp.rotation += tp.vrot;
            tp.alpha -= 0.025;
            tp.size *= 0.96;

            if (tp.alpha <= 0 || tp.size < 2) {
                this.touchParticles.splice(i, 1);
            } else {
                this.drawHeart(this.ctx, tp.x, tp.y, tp.size, tp.color, tp.alpha, tp.rotation);
            }
        }

        // 3. Confetti / Burst particles
        for (let i = this.confetti.length - 1; i >= 0; i--) {
            const c = this.confetti[i];
            c.x += c.vx;
            c.y += c.vy;
            c.vy += c.gravity;
            c.vx *= 0.98;
            c.rotation += c.rotSpeed;
            c.alpha -= c.decay;

            if (c.alpha <= 0 || c.y > this.height + 50) {
                this.confetti.splice(i, 1);
            } else {
                this.drawHeart(this.ctx, c.x, c.y, c.size, c.color, c.alpha, c.rotation);
            }
        }

        requestAnimationFrame(() => this.loop());
    }
}

window.RomanticParticles = RomanticParticles;
