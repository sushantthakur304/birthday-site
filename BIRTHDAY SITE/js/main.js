/**
 * ====================================================================
 * 🌸 MAIN APPLICATION CONTROLLER
 * ====================================================================
 * Coordinates the opening screen, scroll animations, future scene,
 * and component initializations.
 */

document.addEventListener('DOMContentLoaded', () => {
    // 1. Initialize Particles Engine
    const particles = new RomanticParticles('romanticParticleCanvas');
    window.romanticParticles = particles;

    // 2. Initialize Audio Controller (before opening screen so it is immediately ready)
    const audioCtrl = new RomanticAudioController();
    window.audioController = audioCtrl;

    // 3. Initialize Opening Screen Story Sequence
    initOpeningScreen();

    // 4. Initialize Countdown & Celebration
    const countdown = new BirthdayCountdown();
    window.birthdayCountdown = countdown;

    // 5. Initialize 10-Year Story Timeline
    const timeline = new StoryTimeline('timelineChaptersContainer');

    // 6. Initialize 10 Things I Love About Toji
    const loveReasons = new LoveReasonsCards('loveReasonsGrid');

    // 7. Initialize Birthday Letter
    const letter = new BirthdayLetter();

    // 8. Initialize Memory Gallery
    const gallery = new MemoryGallery();

    // 9. Initialize Future Dreams Cards
    initFutureDreams();

    // 10. Initialize Final Surprise
    const surprise = new BirthdaySurprise();

    // 11. Render Hero Characters
    renderHeroCharacters();

    // 12. Setup Scroll Animations & Header
    setupScrollEffects();
});

/**
 * Opening Screen Sequential Story
 */
function initOpeningScreen() {
    const openingScreen = document.getElementById('openingScreen');
    const openingText = document.getElementById('openingText');
    const enterBtn = document.getElementById('enterWorldBtn');
    const duoContainer = document.getElementById('openingDuo');

    if (!openingScreen) return;

    // Render characters on opening screen
    if (duoContainer) {
        duoContainer.innerHTML = `
            ${window.Characters.renderGirl('shy', { width: 130, height: 150 })}
            ${window.Characters.renderPanda('hold-heart', { width: 110, height: 130 })}
        `;
    }

    const messages = [
        "Hey Toji... 🩷",
        "Before you scroll...",
        "I made something for you.",
        "This isn't just a birthday website.",
        "It's our little story."
    ];

    let currentMsgIdx = 0;

    const showNextMessage = () => {
        if (currentMsgIdx < messages.length) {
            openingText.style.opacity = '0';
            openingText.style.transform = 'translateY(10px)';

            setTimeout(() => {
                openingText.textContent = messages[currentMsgIdx];
                openingText.style.opacity = '1';
                openingText.style.transform = 'translateY(0)';
                currentMsgIdx++;

                if (currentMsgIdx < messages.length) {
                    setTimeout(showNextMessage, 1800);
                } else {
                    // Show enter button
                    setTimeout(() => {
                        enterBtn.classList.add('visible');
                    }, 800);
                }
            }, 400);
        }
    };

    // Start opening sequence after brief gentle fade
    setTimeout(showNextMessage, 600);

    const triggerEnterAndPlay = () => {
        if (window.audioController) {
            window.audioController.play();
        }

        openingScreen.classList.add('fade-out');
        if (window.romanticParticles) {
            window.romanticParticles.burst(window.innerWidth / 2, window.innerHeight / 2, 70);
        }

        setTimeout(() => {
            openingScreen.style.display = 'none';
            document.body.classList.add('world-entered');
        }, 900);
    };

    // Enter Our World button click
    enterBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        triggerEnterAndPlay();
    });

    // Universal first gesture trigger to ensure background music starts on any touch/click
    const startAudioOnGesture = () => {
        if (window.audioController && (!window.audioController.isPlaying || window.audioController.audio.paused)) {
            window.audioController.play();
        }
    };
    window.addEventListener('click', startAudioOnGesture, { passive: true });
    window.addEventListener('touchstart', startAudioOnGesture, { passive: true });
    window.addEventListener('keydown', startAudioOnGesture, { passive: true });
}

/**
 * Render Characters in Hero Section
 */
function renderHeroCharacters() {
    const girlContainer = document.getElementById('heroGirlContainer');
    const pandaContainer = document.getElementById('heroPandaContainer');

    if (girlContainer) {
        girlContainer.innerHTML = window.Characters.renderGirl('happy', { width: 140, height: 160 });
    }
    if (pandaContainer) {
        pandaContainer.innerHTML = window.Characters.renderPanda('flowers', { width: 120, height: 140 });
    }


    // Future Dream Scene Characters (Sitting on Cloud)
    const futureCloudDuo = document.getElementById('futureCloudDuo');
    if (futureCloudDuo) {
        futureCloudDuo.innerHTML = `
            <div class="cloud-characters-stage">
                ${window.Characters.renderGirl('shy', { width: 120, height: 140 })}
                ${window.Characters.renderPanda('cloud', { width: 120, height: 140 })}
            </div>
        `;
    }
}

/**
 * Future Dreams Cards
 */
function initFutureDreams() {
    const container = document.getElementById('futurePlansGrid');
    if (!container) return;
    container.innerHTML = '';

    window.loveStory.futurePlans.forEach((plan, i) => {
        const card = document.createElement('div');
        card.className = 'future-plan-card';
        card.style.animationDelay = `${(i * 0.1).toFixed(1)}s`;
        card.innerHTML = `
            <div class="future-icon-bubble">${plan.icon}</div>
            <h4 class="future-plan-title">${plan.title}</h4>
            <p class="future-plan-text">${plan.text}</p>
        `;
        container.appendChild(card);
    });
}

/**
 * Smooth Scroll & Sticky Nav Interactions
 */
function setupScrollEffects() {
    // Quick navigation smooth scrolling
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });

    // Reveal elements on scroll
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.reveal-on-scroll').forEach(el => {
        observer.observe(el);
    });
}
