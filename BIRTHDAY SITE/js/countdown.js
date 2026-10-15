/**
 * ====================================================================
 * 🎂 BIRTHDAY COUNTDOWN & CELEBRATION ENGINE
 * ====================================================================
 * Calculates real-time countdown to October 17.
 * When it's October 17 (or when previewed):
 * - Displays "IT'S TOJI'S DAY!!! 🎂🩷"
 * - Triggers celebration confetti bursts
 * - Character poses switch to celebratory party mode
 */

class BirthdayCountdown {
    constructor() {
        this.targetMonth = window.loveStory.birthdayMonth || 10; // October
        this.targetDay = window.loveStory.birthdayDay || 17;
        this.previewCelebration = false;
        this.interval = null;

        this.init();
    }

    init() {
        this.updateCountdown();
        this.interval = setInterval(() => this.updateCountdown(), 1000);

        // Preview celebration toggle button
        const toggleBtn = document.getElementById('previewCelebrationBtn');
        if (toggleBtn) {
            toggleBtn.addEventListener('click', () => {
                this.previewCelebration = !this.previewCelebration;
                toggleBtn.textContent = this.previewCelebration ? 
                    "⏰ Switch Back to Live Countdown" : 
                    "✨ Preview Birthday Day Celebration Mode 🎂";
                this.updateCountdown();
                if (this.previewCelebration && window.romanticParticles) {
                    window.romanticParticles.burst(window.innerWidth / 2, window.innerHeight * 0.4, 120);
                }
            });
        }
    }

    getNextBirthdayDate() {
        const now = new Date();
        const currentYear = now.getFullYear();
        let target = new Date(currentYear, this.targetMonth - 1, this.targetDay, 0, 0, 0);

        // If today is past October 17, target next year
        if (now > target && (now.getMonth() !== (this.targetMonth - 1) || now.getDate() !== this.targetDay)) {
            // Target is already past this year
            target = new Date(currentYear + 1, this.targetMonth - 1, this.targetDay, 0, 0, 0);
        }
        return target;
    }

    isTodayBirthday() {
        const now = new Date();
        return (now.getMonth() === (this.targetMonth - 1) && now.getDate() === this.targetDay);
    }

    updateCountdown() {
        const countdownWrapper = document.getElementById('countdownWrapper');
        const celebrationWrapper = document.getElementById('celebrationWrapper');
        const daysEl = document.getElementById('countDays');
        const hoursEl = document.getElementById('countHours');
        const minsEl = document.getElementById('countMins');
        const secsEl = document.getElementById('countSecs');

        const isBirthday = this.isTodayBirthday() || this.previewCelebration;

        if (isBirthday) {
            if (countdownWrapper) countdownWrapper.style.display = 'none';
            if (celebrationWrapper) celebrationWrapper.style.display = 'block';

            // Switch hero character poses
            const heroGirlContainer = document.getElementById('heroGirlContainer');
            const heroPandaContainer = document.getElementById('heroPandaContainer');
            if (heroGirlContainer && !heroGirlContainer.dataset.celebrating) {
                heroGirlContainer.innerHTML = window.Characters.renderGirl('celebrate', { width: 140, height: 160 });
                heroGirlContainer.dataset.celebrating = 'true';
            }
            if (heroPandaContainer && !heroPandaContainer.dataset.celebrating) {
                heroPandaContainer.innerHTML = window.Characters.renderPanda('cake', { width: 130, height: 150 });
                heroPandaContainer.dataset.celebrating = 'true';
            }
            return;
        }

        // Active countdown mode
        if (celebrationWrapper) celebrationWrapper.style.display = 'none';
        if (countdownWrapper) countdownWrapper.style.display = 'flex';

        const now = new Date().getTime();
        const targetDate = this.getNextBirthdayDate().getTime();
        const distance = targetDate - now;

        if (distance < 0) {
            // Re-check
            return;
        }

        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        if (daysEl) daysEl.textContent = String(days).padStart(2, '0');
        if (hoursEl) hoursEl.textContent = String(hours).padStart(2, '0');
        if (minsEl) minsEl.textContent = String(minutes).padStart(2, '0');
        if (secsEl) secsEl.textContent = String(seconds).padStart(2, '0');
    }
}

window.BirthdayCountdown = BirthdayCountdown;
