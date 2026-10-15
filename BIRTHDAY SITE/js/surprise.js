/**
 * ====================================================================
 * 🎁 FINAL SURPRISE & EMOTIONAL REVEAL FINALE ❤️
 * ====================================================================
 * The emotional climax of the experience:
 * 1. Screen dims to starry twilight sky.
 * 2. Girl and Panda carry giant shaking pink gift box.
 * 3. Box opens with fireworks of hearts and confetti.
 * 4. Timed reveal of emotional messages.
 * 5. Full-screen final romantic pledge from Mishtyy.
 */

class BirthdaySurprise {
    constructor() {
        this.triggerBtn = document.getElementById('finalSurpriseTriggerBtn');
        this.modal = document.getElementById('surpriseOverlayModal');
        this.openGiftBtn = document.getElementById('openGiftBtn');
        this.giftBox = document.getElementById('surpriseGiftBox');
        this.revealSeq = document.getElementById('surpriseRevealSequence');
        this.finalScene = document.getElementById('surpriseFinalScene');
        this.closeSurpriseBtn = document.getElementById('closeSurpriseBtn');

        this.init();
    }

    init() {
        if (!this.triggerBtn || !this.modal) return;

        this.triggerBtn.addEventListener('click', () => {
            this.openSurpriseMode();
        });

        if (this.openGiftBtn) {
            this.openGiftBtn.addEventListener('click', () => {
                this.triggerGiftExplosion();
            });
        }

        if (this.closeSurpriseBtn) {
            this.closeSurpriseBtn.addEventListener('click', () => {
                this.modal.classList.remove('active');
                document.body.style.overflow = '';
            });
        }
    }

    openSurpriseMode() {
        this.modal.classList.add('active');
        document.body.style.overflow = 'hidden';

        // Render characters carrying the gift
        const girlCarrier = document.getElementById('giftGirlCarrier');
        const pandaCarrier = document.getElementById('giftPandaCarrier');

        if (girlCarrier) {
            girlCarrier.innerHTML = window.Characters.renderGirl('celebrate', { width: 110, height: 130 });
        }
        if (pandaCarrier) {
            pandaCarrier.innerHTML = window.Characters.renderPanda('dance', { width: 95, height: 115 });
        }

        // Reset states
        if (this.giftBox) {
            this.giftBox.style.display = 'block';
            this.giftBox.classList.remove('opened');
        }
        if (this.openGiftBtn) this.openGiftBtn.style.display = 'inline-flex';
        if (this.revealSeq) this.revealSeq.style.display = 'none';
        if (this.finalScene) this.finalScene.style.display = 'none';

        // Starry night burst
        if (window.romanticParticles) {
            window.romanticParticles.burst(window.innerWidth / 2, window.innerHeight / 2, 40);
        }
    }

    triggerGiftExplosion() {
        if (!this.giftBox) return;

        this.openGiftBtn.style.display = 'none';
        this.giftBox.classList.add('opened');

        // Massive confetti and heart fireworks burst!
        if (window.romanticParticles) {
            window.romanticParticles.burst(window.innerWidth / 2, window.innerHeight * 0.45, 120);
            setTimeout(() => {
                window.romanticParticles.burst(window.innerWidth * 0.3, window.innerHeight * 0.35, 70);
                window.romanticParticles.burst(window.innerWidth * 0.7, window.innerHeight * 0.35, 70);
            }, 350);
        }

        // Begin timed emotional text reveal
        setTimeout(() => {
            if (this.giftBox) this.giftBox.style.display = 'none';
            if (this.revealSeq) {
                this.revealSeq.style.display = 'block';
                this.startStorySequence();
            }
        }, 1200);
    }

    startStorySequence() {
        const steps = [
            { text: "Toji...", delay: 2200 },
            { text: "You are my favorite part of my story.", delay: 2800 },
            { text: "From the little girl I met when we were kids...", delay: 2800 },
            { text: "...to the girl who became my everything.", delay: 3000 },
            { text: "Happy Birthday, My Toji. 🩷", delay: 3500 }
        ];

        const seqContainer = document.getElementById('revealTextContainer');
        if (!seqContainer) return;

        let currentStep = 0;

        const showNext = () => {
            if (currentStep < steps.length) {
                const s = steps[currentStep];
                seqContainer.innerHTML = `<h2 class="seq-animated-text">${s.text}</h2>`;

                if (window.romanticParticles) {
                    window.romanticParticles.burst(window.innerWidth / 2, window.innerHeight * 0.4, 25);
                }

                currentStep++;
                setTimeout(showNext, s.delay);
            } else {
                // Show final hug & permanent message
                if (this.revealSeq) this.revealSeq.style.display = 'none';
                if (this.finalScene) {
                    this.finalScene.style.display = 'block';
                    this.renderFinalHugScene();
                }
            }
        };

        showNext();
    }

    renderFinalHugScene() {
        const hugDuo = document.getElementById('finalHugDuo');
        if (hugDuo) {
            hugDuo.innerHTML = `
                <div class="characters-hugging-wrapper">
                    ${window.Characters.renderGirl('emotional', { width: 130, height: 150 })}
                    ${window.Characters.renderPanda('happy-tears', { width: 110, height: 130 })}
                </div>
            `;
        }

        // Final celebratory burst
        if (window.romanticParticles) {
            window.romanticParticles.burst(window.innerWidth / 2, window.innerHeight * 0.3, 100);
        }
    }
}

window.BirthdaySurprise = BirthdaySurprise;
