/**
 * ====================================================================
 * 💕 10 THINGS I LOVE ABOUT TOJI — INTERACTIVE HEART CARDS
 * ====================================================================
 * 10 interactive cards that blossom on tap/click with custom
 * character animations (panda hugging heart, girl blushing, etc.)
 */

class LoveReasonsCards {
    constructor(containerId) {
        this.container = document.getElementById(containerId);
        if (!this.container) return;
        this.reasons = window.loveStory.reasonsLove;
        this.init();
    }

    init() {
        this.container.innerHTML = '';

        this.reasons.forEach((reason, index) => {
            const card = document.createElement('div');
            card.className = 'heart-reason-card';
            card.dataset.index = index;

            // Character reaction preview
            const girlSvg = window.Characters.renderGirl(reason.girlPose, { width: 85, height: 100 });
            const pandaSvg = window.Characters.renderPanda(reason.pandaPose, { width: 75, height: 90 });

            card.innerHTML = `
                <div class="heart-card-inner">
                    <!-- Front View (Heart Shape) -->
                    <div class="heart-card-front">
                        <div class="heart-shape-bg">
                            <svg class="heart-svg-icon" viewBox="0 0 100 90">
                                <path d="M 50 15 C 35 -10, 0 5, 0 38 C 0 65, 35 78, 50 90 C 65 78, 100 65, 100 38 C 100 5, 65 -10, 50 15 Z" fill="currentColor"/>
                            </svg>
                            <span class="heart-number">${reason.number}</span>
                        </div>
                        <h4 class="heart-front-title">${reason.title}</h4>
                        <p class="heart-front-hint">Tap to feel my heart 🩷</p>
                        <div class="front-mini-sparkle">✨</div>
                    </div>

                    <!-- Revealed Content View -->
                    <div class="heart-card-back">
                        <div class="back-character-stage">
                            <div class="back-character-item girl-react">${girlSvg}</div>
                            <div class="back-character-item panda-react">${pandaSvg}</div>
                        </div>
                        <div class="back-header">
                            <span class="back-number">${reason.number} / 10</span>
                            <h4 class="back-title">${reason.title}</h4>
                            <span class="back-tagline">“${reason.short}”</span>
                        </div>
                        <p class="back-description">${reason.desc}</p>
                        <button class="back-close-btn" aria-label="Fold Card">
                            <span>Close with Love 🩷</span>
                        </button>
                    </div>
                </div>
            `;

            // Click to toggle expansion / blossom
            card.addEventListener('click', (e) => {
                const isCloseBtn = e.target.closest('.back-close-btn');
                if (isCloseBtn) {
                    card.classList.remove('revealed');
                    return;
                }

                const wasRevealed = card.classList.contains('revealed');
                // Close other cards for clean mobile view
                document.querySelectorAll('.heart-reason-card.revealed').forEach(c => {
                    if (c !== card) c.classList.remove('revealed');
                });

                if (!wasRevealed) {
                    card.classList.add('revealed');
                    if (window.romanticParticles) {
                        const rect = card.getBoundingClientRect();
                        window.romanticParticles.burst(rect.left + rect.width / 2, rect.top + rect.height / 2, 20);
                    }
                } else {
                    card.classList.remove('revealed');
                }
            });

            this.container.appendChild(card);
        });
    }
}

window.LoveReasonsCards = LoveReasonsCards;
