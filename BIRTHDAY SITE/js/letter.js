/**
 * ====================================================================
 * 💌 THE BIRTHDAY LETTER — "A LETTER FOR MY TOJI"
 * ====================================================================
 * Animated 3D wax-sealed pink envelope that unfolds to reveal
 * the handwritten-style emotional letter from Mishtyy.
 */

class BirthdayLetter {
    constructor() {
        this.openBtn = document.getElementById('openLetterBtn');
        this.closeBtn = document.getElementById('closeLetterBtn');
        this.envelope = document.getElementById('letterEnvelope');
        this.paper = document.getElementById('letterPaper');
        this.container = document.getElementById('letterSectionWrapper');

        this.init();
    }

    init() {
        if (!this.openBtn || !this.envelope || !this.paper) return;

        // Render letter text from config
        const letterData = window.loveStory.letter;
        const letterContentEl = document.getElementById('letterBodyContent');
        const letterDateEl = document.getElementById('letterDate');
        const letterSalutationEl = document.getElementById('letterSalutation');
        const letterSignatureEl = document.getElementById('letterSignature');

        if (letterDateEl) letterDateEl.textContent = letterData.date;
        if (letterSalutationEl) letterSalutationEl.textContent = letterData.salutation;
        if (letterSignatureEl) letterSignatureEl.innerHTML = letterData.signature.replace(/\n/g, '<br>');

        if (letterContentEl) {
            const paragraphs = letterData.body.split('\n\n');
            letterContentEl.innerHTML = paragraphs.map(p => `<p>${p}</p>`).join('');
        }

        // Open letter action
        this.openBtn.addEventListener('click', () => {
            this.envelope.classList.add('opened');
            this.paper.classList.add('revealed');
            this.openBtn.style.display = 'none';
            if (this.closeBtn) this.closeBtn.style.display = 'inline-flex';

            // Sparkle confetti burst
            if (window.romanticParticles) {
                const rect = this.envelope.getBoundingClientRect();
                window.romanticParticles.burst(rect.left + rect.width / 2, rect.top + rect.height / 2, 60);
            }

            // Smooth scroll into letter readability
            setTimeout(() => {
                this.paper.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
            }, 600);
        });

        // Close letter action
        if (this.closeBtn) {
            this.closeBtn.addEventListener('click', () => {
                this.paper.classList.remove('revealed');
                this.envelope.classList.remove('opened');
                this.openBtn.style.display = 'inline-flex';
                this.closeBtn.style.display = 'none';

                this.container.scrollIntoView({ behavior: 'smooth', block: 'start' });
            });
        }
    }
}

window.BirthdayLetter = BirthdayLetter;
