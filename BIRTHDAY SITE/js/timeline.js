/**
 * ====================================================================
 * 📖 OUR STORY TIMELINE — ALMOST 10 YEARS OF US ❤️
 * ====================================================================
 * Renders the 5 illustrated storybook chapters from school days
 * to college and the romantic bike rides!
 */

class StoryTimeline {
    constructor(containerId) {
        this.container = document.getElementById(containerId);
        if (!this.container) return;
        this.init();
    }

    init() {
        const chapters = window.loveStory.timeline;
        this.container.innerHTML = '';

        chapters.forEach((chap, idx) => {
            const card = document.createElement('article');
            card.className = `timeline-card chapter-${idx + 1}`;
            card.id = `chapter-${idx + 1}`;

            // Character graphic based on chapter
            let characterHtml = '';
            if (idx === 0) {
                // School days
                characterHtml = `
                    <div class="timeline-character-duo">
                        ${window.Characters.renderGirl('school', { width: 120, height: 140 })}
                        ${window.Characters.renderPanda('flowers', { width: 100, height: 120 })}
                    </div>
                `;
            } else if (idx === 1) {
                // Something changed (10th & 9th standard - blushing, getting closer)
                characterHtml = `
                    <div class="timeline-character-duo blush-duo">
                        ${window.Characters.renderGirl('shy', { width: 120, height: 140 })}
                        ${window.Characters.renderPanda('hold-heart', { width: 100, height: 120 })}
                    </div>
                `;
            } else if (idx === 2) {
                // Growing together
                characterHtml = `
                    <div class="timeline-character-duo">
                        ${window.Characters.renderGirl('happy', { width: 120, height: 140 })}
                        ${window.Characters.renderPanda('dance', { width: 100, height: 120 })}
                    </div>
                `;
            } else if (idx === 3) {
                // College days
                characterHtml = `
                    <div class="timeline-character-duo">
                        ${window.Characters.renderGirl('college', { width: 120, height: 140 })}
                        ${window.Characters.renderPanda('cake', { width: 100, height: 120 })}
                    </div>
                `;
            } else if (idx === 4) {
                // Chapter 5: Our Bike Rides (Motorcycle Scene)
                characterHtml = window.Characters.renderBikeScene();
            }

            card.innerHTML = `
                <div class="timeline-badge">
                    <span class="badge-icon">${chap.icon}</span>
                    <span class="badge-number">${chap.chapter}</span>
                </div>
                <div class="timeline-content-box">
                    <div class="chapter-header">
                        <span class="chapter-period-tag">${chap.yearTag}</span>
                        <h3 class="chapter-title">${chap.title}</h3>
                        <p class="chapter-subtitle">${chap.period}</p>
                    </div>

                    <div class="chapter-illustration">
                        ${characterHtml}
                    </div>

                    <div class="chapter-body">
                        <p class="chapter-text">${chap.story.replace(/\n\n/g, '</p><p class="chapter-text">')}</p>
                    </div>

                    <div class="chapter-quote-box">
                        <span class="quote-mark">“</span>
                        <p class="quote-text">${chap.quote}</p>
                    </div>
                </div>
            `;

            this.container.appendChild(card);
        });

        // Initialize bike ride interactive button
        const honkBtn = document.getElementById('bikeHonkBtn');
        if (honkBtn) {
            honkBtn.addEventListener('click', (e) => {
                // Spawn floating hearts from bike exhaust
                if (window.romanticParticles) {
                    const rect = honkBtn.getBoundingClientRect();
                    window.romanticParticles.burst(rect.left + rect.width / 2, rect.top, 25);
                }

                // Temporary visual bounce
                honkBtn.classList.add('honked');
                setTimeout(() => honkBtn.classList.remove('honked'), 600);
            });
        }
    }
}

window.StoryTimeline = StoryTimeline;
