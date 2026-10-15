/**
 * ====================================================================
 * 🧸 RECURRING CHARACTERS: CUTE GIRL (TOJI) & ADORABLE PANDA 🐼
 * ====================================================================
 * Handcrafted vector SVG characters with rich expressions & poses.
 * High-resolution, zero pixelation, touch-interactive, and ultra-cute!
 */

const Characters = {
    /**
     * Render the Cute Cartoon Girl representing Toji
     * @param {string} pose - 'shy', 'happy', 'angry', 'school', 'college', 'bikeride', 'celebrate', 'emotional', 'hug-panda'
     * @param {object} options - width, height, className
     */
    renderGirl(pose = 'happy', options = {}) {
        const width = options.width || 140;
        const height = options.height || 160;
        const className = options.className || '';

        // Dynamic elements based on pose
        let eyeExpression = '';
        let mouthExpression = '';
        let blushIntensity = '0.55';
        let accessories = '';
        let armPose = '';
        let extraProps = '';

        switch (pose) {
            case 'shy':
                // Eyes looking down/away, intense blush, shy cute posture
                eyeExpression = `
                    <ellipse cx="58" cy="74" rx="5.5" ry="7" fill="#2d1b2d"/>
                    <circle cx="56" cy="71" r="2.2" fill="#ffffff"/>
                    <ellipse cx="82" cy="74" rx="5.5" ry="7" fill="#2d1b2d"/>
                    <circle cx="80" cy="71" r="2.2" fill="#ffffff"/>
                `;
                mouthExpression = `<path d="M 68 83 Q 70 85 72 83" stroke="#e05780" stroke-width="2.5" fill="none" stroke-linecap="round"/>`;
                blushIntensity = '0.85';
                armPose = `
                    <!-- Hands clasped shyly behind or in front -->
                    <path d="M 52 108 C 55 118, 65 122, 70 120" stroke="#fcd5ce" stroke-width="6.5" stroke-linecap="round" fill="none"/>
                    <path d="M 88 108 C 85 118, 75 122, 70 120" stroke="#fcd5ce" stroke-width="6.5" stroke-linecap="round" fill="none"/>
                `;
                extraProps = `
                    <!-- Shy sparkles -->
                    <circle cx="44" cy="65" r="2" fill="#ff758f" opacity="0.8"/>
                    <circle cx="96" cy="65" r="2" fill="#ff758f" opacity="0.8"/>
                `;
                break;

            case 'angry':
                // Cute pouty angry expression (｀ε´) with puffed cheeks and cute steam
                eyeExpression = `
                    <path d="M 52 69 Q 58 74 63 71" stroke="#2d1b2d" stroke-width="3" fill="none" stroke-linecap="round"/>
                    <circle cx="58" cy="74" r="3" fill="#2d1b2d"/>
                    <path d="M 88 69 Q 82 74 77 71" stroke="#2d1b2d" stroke-width="3" fill="none" stroke-linecap="round"/>
                    <circle cx="82" cy="74" r="3" fill="#2d1b2d"/>
                `;
                mouthExpression = `
                    <!-- Cute triangle pout mouth -->
                    <path d="M 66 84 Q 70 81 74 84" stroke="#d90429" stroke-width="3" fill="none" stroke-linecap="round"/>
                `;
                blushIntensity = '0.9';
                armPose = `
                    <!-- Hands on hips -->
                    <path d="M 52 105 C 40 112, 42 120, 48 124" stroke="#fcd5ce" stroke-width="6.5" stroke-linecap="round" fill="none"/>
                    <path d="M 88 105 C 100 112, 98 120, 92 124" stroke="#fcd5ce" stroke-width="6.5" stroke-linecap="round" fill="none"/>
                `;
                extraProps = `
                    <!-- Adorable cute steam puff above head -->
                    <g class="steam-puff" transform="translate(94, 25)">
                        <path d="M 0 10 Q 6 0 12 8 Q 18 16 22 6" stroke="#ff758f" stroke-width="2.5" fill="none" stroke-linecap="round"/>
                        <circle cx="16" cy="18" r="2.5" fill="#ff85a1"/>
                    </g>
                    <!-- Anger pulse mark (cute chibi style) -->
                    <path d="M 36 34 L 42 34 M 39 31 L 39 37" stroke="#ff4d6d" stroke-width="2.5" stroke-linecap="round"/>
                `;
                break;

            case 'emotional':
                // Sparkling emotional happy tears of gratitude
                eyeExpression = `
                    <ellipse cx="58" cy="72" rx="6.5" ry="8" fill="#2d1b2d"/>
                    <circle cx="56" cy="69" r="2.8" fill="#ffffff"/>
                    <circle cx="61" cy="74" r="1.5" fill="#ffffff"/>
                    <ellipse cx="82" cy="72" rx="6.5" ry="8" fill="#2d1b2d"/>
                    <circle cx="80" cy="69" r="2.8" fill="#ffffff"/>
                    <circle cx="85" cy="74" r="1.5" fill="#ffffff"/>
                    <!-- Sparkling tear drops -->
                    <circle cx="52" cy="79" r="2.2" fill="#70d6ff"/>
                    <circle cx="88" cy="79" r="2.2" fill="#70d6ff"/>
                `;
                mouthExpression = `<path d="M 66 82 Q 70 86 74 82" stroke="#e05780" stroke-width="2.5" fill="none" stroke-linecap="round"/>`;
                blushIntensity = '0.8';
                armPose = `
                    <!-- Hand on chest/heart -->
                    <path d="M 54 106 C 60 114, 68 116, 72 112" stroke="#fcd5ce" stroke-width="6.5" stroke-linecap="round" fill="none"/>
                    <path d="M 86 106 C 80 114, 76 116, 72 112" stroke="#fcd5ce" stroke-width="6.5" stroke-linecap="round" fill="none"/>
                `;
                break;

            case 'school':
                // Cute school uniform style with ribbon tie
                eyeExpression = `
                    <ellipse cx="58" cy="72" rx="6" ry="7.5" fill="#2d1b2d"/>
                    <circle cx="56" cy="69" r="2.5" fill="#ffffff"/>
                    <ellipse cx="82" cy="72" rx="6" ry="7.5" fill="#2d1b2d"/>
                    <circle cx="80" cy="69" r="2.5" fill="#ffffff"/>
                `;
                mouthExpression = `<path d="M 66 82 Q 70 86 74 82" stroke="#e05780" stroke-width="2.5" fill="none" stroke-linecap="round"/>`;
                accessories = `
                    <!-- School uniform sailor collar & pink ribbon tie -->
                    <path d="M 56 95 L 70 108 L 84 95 L 80 94 L 70 100 L 60 94 Z" fill="#ffffff"/>
                    <!-- Red/Pink ribbon bow tie -->
                    <path d="M 70 101 L 65 106 L 68 112 L 70 106 L 72 112 L 75 106 Z" fill="#ff4d6d"/>
                    <circle cx="70" cy="103" r="3" fill="#c9184a"/>
                `;
                extraProps = `
                    <!-- Cute school bag strap -->
                    <path d="M 52 96 C 45 105, 44 120, 48 132" stroke="#7b2cbf" stroke-width="3" fill="none" stroke-linecap="round"/>
                `;
                armPose = `
                    <path d="M 52 105 C 48 115, 52 125, 58 128" stroke="#fcd5ce" stroke-width="6.5" stroke-linecap="round" fill="none"/>
                    <path d="M 88 105 C 92 115, 88 125, 82 128" stroke="#fcd5ce" stroke-width="6.5" stroke-linecap="round" fill="none"/>
                `;
                break;

            case 'college':
                // Modern college girl look with college tote / backpack and cute notepad
                eyeExpression = `
                    <ellipse cx="58" cy="72" rx="6" ry="7.5" fill="#2d1b2d"/>
                    <circle cx="56" cy="69" r="2.5" fill="#ffffff"/>
                    <ellipse cx="82" cy="72" rx="6" ry="7.5" fill="#2d1b2d"/>
                    <circle cx="80" cy="69" r="2.5" fill="#ffffff"/>
                `;
                mouthExpression = `<path d="M 65 82 Q 70 87 75 82" stroke="#e05780" stroke-width="2.5" fill="none" stroke-linecap="round"/>`;
                accessories = `
                    <!-- Trendy pastel sweater collar -->
                    <path d="M 60 95 Q 70 102 80 95" stroke="#ffffff" stroke-width="3" fill="none"/>
                `;
                extraProps = `
                    <!-- College bag strap & cute notebook with heart -->
                    <path d="M 52 95 C 46 108, 48 126, 44 135" stroke="#c9184a" stroke-width="3.5" fill="none"/>
                    <g transform="translate(86, 108) rotate(12)">
                        <!-- Notebook -->
                        <rect x="0" y="0" width="22" height="28" rx="3" fill="#ffccd5" stroke="#ff758f" stroke-width="1.5"/>
                        <path d="M 4 8 L 18 8 M 4 14 L 18 14 M 4 20 L 14 20" stroke="#ffb3c1" stroke-width="1.5"/>
                        <path d="M 11 11 C 9 9, 6 12, 11 16 C 16 12, 13 9, 11 11 Z" fill="#ff4d6d" transform="translate(2, 6) scale(0.6)"/>
                    </g>
                `;
                armPose = `
                    <path d="M 52 105 C 50 116, 56 122, 62 124" stroke="#fcd5ce" stroke-width="6.5" stroke-linecap="round" fill="none"/>
                    <path d="M 88 105 C 92 114, 94 122, 90 126" stroke="#fcd5ce" stroke-width="6.5" stroke-linecap="round" fill="none"/>
                `;
                break;

            case 'bikeride':
                // Cute biker pose with wind in hair and happy expression
                eyeExpression = `
                    <!-- Happy curved eyes squinting with joy from the breeze -->
                    <path d="M 53 73 Q 58 67 63 73" stroke="#2d1b2d" stroke-width="3" fill="none" stroke-linecap="round"/>
                    <path d="M 77 73 Q 82 67 87 73" stroke="#2d1b2d" stroke-width="3" fill="none" stroke-linecap="round"/>
                `;
                mouthExpression = `<path d="M 65 82 Q 70 88 75 82" stroke="#e05780" stroke-width="2.5" fill="none" stroke-linecap="round"/>`;
                blushIntensity = '0.7';
                accessories = `
                    <!-- Wind blowing cute pink scarf -->
                    <path d="M 56 94 Q 70 100 84 94 Q 92 98 106 92 Q 102 102 90 100" fill="#ff758f"/>
                `;
                armPose = `
                    <!-- Reaching forward to hold Mishtyy tight -->
                    <path d="M 52 105 C 44 112, 36 114, 28 115" stroke="#fcd5ce" stroke-width="6.5" stroke-linecap="round" fill="none"/>
                    <path d="M 88 105 C 80 114, 70 118, 60 119" stroke="#fcd5ce" stroke-width="6.5" stroke-linecap="round" fill="none"/>
                `;
                break;

            case 'celebrate':
                // Birthday celebration with birthday hat and sparkling confetti
                eyeExpression = `
                    <path d="M 52 72 Q 58 66 64 72" stroke="#2d1b2d" stroke-width="3" fill="none" stroke-linecap="round"/>
                    <path d="M 76 72 Q 82 66 88 72" stroke="#2d1b2d" stroke-width="3" fill="none" stroke-linecap="round"/>
                `;
                mouthExpression = `
                    <!-- Big happy open smile -->
                    <path d="M 64 81 Q 70 90 76 81 Z" fill="#d90429"/>
                `;
                accessories = `
                    <!-- Cute birthday party hat with stars and pompom -->
                    <g transform="translate(62, 5) rotate(8)">
                        <polygon points="8,0 0,32 18,30" fill="#ff85a1"/>
                        <polygon points="8,0 4,31 12,31" fill="#ffe4e9"/>
                        <!-- Gold stars on party hat -->
                        <circle cx="8" cy="14" r="2" fill="#ffd166"/>
                        <circle cx="12" cy="22" r="1.8" fill="#ffd166"/>
                        <!-- Pompom on top -->
                        <circle cx="8" cy="0" r="4" fill="#ffffff" stroke="#ffccd5" stroke-width="1"/>
                    </g>
                `;
                extraProps = `
                    <!-- Sparkler / confetti wand in hand -->
                    <g transform="translate(94, 90)">
                        <line x1="0" y1="20" x2="16" y2="2" stroke="#ffd166" stroke-width="2.5" stroke-linecap="round"/>
                        <circle cx="16" cy="2" r="4" fill="#ff4d6d"/>
                        <line x1="16" y1="-4" x2="16" y2="8" stroke="#ffb703" stroke-width="1.5"/>
                        <line x1="10" y1="2" x2="22" y2="2" stroke="#ffb703" stroke-width="1.5"/>
                    </g>
                `;
                armPose = `
                    <!-- One hand cheering up -->
                    <path d="M 52 105 C 48 115, 52 122, 58 126" stroke="#fcd5ce" stroke-width="6.5" stroke-linecap="round" fill="none"/>
                    <path d="M 88 105 C 96 100, 102 96, 100 90" stroke="#fcd5ce" stroke-width="6.5" stroke-linecap="round" fill="none"/>
                `;
                break;

            default: // 'happy'
                eyeExpression = `
                    <ellipse cx="58" cy="72" rx="6" ry="7.5" fill="#2d1b2d"/>
                    <circle cx="56" cy="69" r="2.5" fill="#ffffff"/>
                    <circle cx="60" cy="74" r="1.2" fill="#ffffff"/>
                    <ellipse cx="82" cy="72" rx="6" ry="7.5" fill="#2d1b2d"/>
                    <circle cx="80" cy="69" r="2.5" fill="#ffffff"/>
                    <circle cx="84" cy="74" r="1.2" fill="#ffffff"/>
                `;
                mouthExpression = `<path d="M 65 82 Q 70 87 75 82" stroke="#e05780" stroke-width="2.5" fill="none" stroke-linecap="round"/>`;
                armPose = `
                    <path d="M 52 105 C 46 114, 50 124, 56 128" stroke="#fcd5ce" stroke-width="6.5" stroke-linecap="round" fill="none"/>
                    <path d="M 88 105 C 94 114, 90 124, 84 128" stroke="#fcd5ce" stroke-width="6.5" stroke-linecap="round" fill="none"/>
                `;
                extraProps = `
                    <!-- Tiny pink flower held in hand -->
                    <g transform="translate(85, 122)">
                        <circle cx="0" cy="0" r="3.5" fill="#ff758f"/>
                        <circle cx="-3" cy="-2" r="2.5" fill="#ffccd5"/>
                        <circle cx="3" cy="-2" r="2.5" fill="#ffccd5"/>
                        <circle cx="0" cy="3" r="2.5" fill="#ffccd5"/>
                        <circle cx="0" cy="0" r="1.5" fill="#ffd166"/>
                    </g>
                `;
                break;
        }

        return `
        <svg class="character-girl ${className}" width="${width}" height="${height}" viewBox="0 0 140 160" xmlns="http://www.w3.org/2000/svg">
            <defs>
                <!-- Skin gradient -->
                <radialGradient id="girlSkin" cx="50%" cy="40%" r="60%">
                    <stop offset="0%" stop-color="#fff5f5"/>
                    <stop offset="100%" stop-color="#fcd5ce"/>
                </radialGradient>
                <!-- Hair gradient -->
                <linearGradient id="girlHair" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stop-color="#4a3038"/>
                    <stop offset="50%" stop-color="#362028"/>
                    <stop offset="100%" stop-color="#24141a"/>
                </linearGradient>
                <!-- Dress gradient -->
                <linearGradient id="girlDress" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stop-color="#ffb3c1"/>
                    <stop offset="60%" stop-color="#ff85a1"/>
                    <stop offset="100%" stop-color="#ff758f"/>
                </linearGradient>
                <!-- Soft shadow -->
                <filter id="softGlow" x="-20%" y="-20%" width="140%" height="140%">
                    <feDropShadow dx="0" dy="4" stdDeviation="3" flood-color="#ff85a1" flood-opacity="0.3"/>
                </filter>
            </defs>

            <!-- Ground shadow -->
            <ellipse cx="70" cy="154" rx="34" ry="5" fill="#ffd1dc" opacity="0.6"/>

            <!-- Back Hair Flow -->
            <g class="hair-back">
                <path d="M 42 60 C 26 80, 24 118, 38 132 C 42 122, 45 105, 48 85 Z" fill="url(#girlHair)"/>
                <path d="M 98 60 C 114 80, 116 118, 102 132 C 98 122, 95 105, 92 85 Z" fill="url(#girlHair)"/>
            </g>

            <!-- Body / Dress -->
            <g class="body-girl" filter="url(#softGlow)">
                <!-- Legs -->
                <rect x="60" y="132" width="7" height="18" rx="3.5" fill="#fcd5ce"/>
                <rect x="73" y="132" width="7" height="18" rx="3.5" fill="#fcd5ce"/>
                <!-- Cute Mary Jane Shoes -->
                <ellipse cx="63.5" cy="150" rx="6" ry="4" fill="#ff4d6d"/>
                <ellipse cx="76.5" cy="150" rx="6" ry="4" fill="#ff4d6d"/>

                <!-- Pastel Dress / Cozy Sweater -->
                <path d="M 52 94 C 52 94, 70 98, 88 94 C 94 106, 96 122, 98 134 C 80 138, 60 138, 42 134 C 44 122, 46 106, 52 94 Z" fill="url(#girlDress)"/>
                
                <!-- Sweater Texture / Buttons -->
                <line x1="70" y1="96" x2="70" y2="135" stroke="#ffffff" stroke-width="1.5" stroke-dasharray="2 3" opacity="0.6"/>
                <circle cx="70" cy="105" r="2" fill="#ffffff" opacity="0.9"/>
                <circle cx="70" cy="116" r="2" fill="#ffffff" opacity="0.9"/>
                <circle cx="70" cy="127" r="2" fill="#ffffff" opacity="0.9"/>

                <!-- Collar -->
                <path d="M 58 94 Q 70 102 82 94" fill="#ffffff" opacity="0.95"/>
            </g>

            <!-- Arms -->
            <g class="arms-girl">
                ${armPose}
            </g>

            <!-- Head & Face -->
            <g class="head-girl">
                <!-- Neck -->
                <rect x="66" y="85" width="8" height="12" fill="#fcd5ce"/>
                <!-- Face -->
                <circle cx="70" cy="68" r="25" fill="url(#girlSkin)"/>

                <!-- Rosy Blush on cheeks -->
                <ellipse cx="51" cy="76" rx="6.5" ry="3.5" fill="#ff4d6d" opacity="${blushIntensity}"/>
                <ellipse cx="89" cy="76" rx="6.5" ry="3.5" fill="#ff4d6d" opacity="${blushIntensity}"/>

                <!-- Eyes -->
                <g class="eyes-girl">
                    ${eyeExpression}
                </g>

                <!-- Mouth -->
                <g class="mouth-girl">
                    ${mouthExpression}
                </g>

                <!-- Front Hair & Bangs -->
                <path d="M 45 64 C 45 42, 95 42, 95 64 C 95 62, 90 52, 70 52 C 50 52, 45 62, 45 64 Z" fill="url(#girlHair)"/>
                <!-- Cute Fringe / Bangs -->
                <path d="M 45 58 C 50 64, 55 68, 60 63 C 65 69, 72 69, 76 62 C 81 68, 88 66, 95 58 C 96 48, 44 48, 45 58 Z" fill="url(#girlHair)"/>

                <!-- Hair Bow / Ribbon on Left Ear -->
                <g class="hair-bow" transform="translate(44, 46) rotate(-15)">
                    <!-- Left loop -->
                    <ellipse cx="-7" cy="0" rx="7" ry="4.5" fill="#ff4d6d"/>
                    <!-- Right loop -->
                    <ellipse cx="7" cy="0" rx="7" ry="4.5" fill="#ff4d6d"/>
                    <!-- Center knot -->
                    <circle cx="0" cy="0" r="3.5" fill="#c9184a"/>
                    <!-- Ribbon tails -->
                    <path d="M -2 2 L -6 12 L -1 9 L 2 12 Z" fill="#ff4d6d"/>
                </g>
            </g>

            <!-- Accessories & Props -->
            ${accessories}
            ${extraProps}
        </svg>
        `;
    },

    /**
     * Render the Adorable Little Panda
     * @param {string} pose - 'hold-heart', 'hug-heart', 'flowers', 'cloud', 'cake', 'mic', 'dance', 'happy-tears', 'hug-girl'
     * @param {object} options - width, height, className
     */
    renderPanda(pose = 'hold-heart', options = {}) {
        const width = options.width || 120;
        const height = options.height || 140;
        const className = options.className || '';

        let extraProp = '';
        let armPath = '';
        let eyeExpression = '';
        let faceOffset = 0;

        switch (pose) {
            case 'hug-heart':
                // Panda squeezing a giant soft pink heart with cheeks squished against it
                eyeExpression = `
                    <!-- Closed happy curved eyes (^_^) -->
                    <path d="M 44 54 Q 48 48 52 54" stroke="#ffffff" stroke-width="2.5" fill="none" stroke-linecap="round"/>
                    <path d="M 68 54 Q 72 48 76 54" stroke="#ffffff" stroke-width="2.5" fill="none" stroke-linecap="round"/>
                `;
                extraProp = `
                    <!-- Giant glowing pink heart in paws -->
                    <g class="giant-heart" transform="translate(60, 82) scale(1.15)">
                        <path d="M 0 5 C -12 -12, -26 2, 0 25 C 26 2, 12 -12, 0 5 Z" fill="#ff4d6d" filter="url(#pandaGlow)"/>
                        <circle cx="-6" cy="-2" r="3" fill="#ffffff" opacity="0.6"/>
                    </g>
                `;
                armPath = `
                    <!-- Arms hugging the heart tightly -->
                    <path d="M 38 78 C 44 88, 54 94, 60 90" stroke="#2b2d42" stroke-width="8" stroke-linecap="round" fill="none"/>
                    <path d="M 82 78 C 76 88, 66 94, 60 90" stroke="#2b2d42" stroke-width="8" stroke-linecap="round" fill="none"/>
                `;
                break;

            case 'flowers':
                // Carrying sweet bouquet of pink tulips / flowers
                eyeExpression = `
                    <circle cx="48" cy="54" r="3.2" fill="#ffffff"/>
                    <circle cx="50" cy="53" r="1.2" fill="#2b2d42"/>
                    <circle cx="72" cy="54" r="3.2" fill="#ffffff"/>
                    <circle cx="74" cy="53" r="1.2" fill="#2b2d42"/>
                `;
                extraProp = `
                    <!-- Bouquet of flowers -->
                    <g transform="translate(60, 78)">
                        <!-- Bouquet wrapper -->
                        <polygon points="-10,18 10,18 0,30" fill="#fcd5ce"/>
                        <!-- Ribbon -->
                        <circle cx="0" cy="22" r="2" fill="#ff4d6d"/>
                        <!-- Flower blooms -->
                        <circle cx="-6" cy="10" r="5.5" fill="#ff758f"/>
                        <circle cx="6" cy="10" r="5.5" fill="#ff85a1"/>
                        <circle cx="0" cy="4" r="6" fill="#ff4d6d"/>
                        <circle cx="0" cy="4" r="2" fill="#ffd166"/>
                    </g>
                `;
                armPath = `
                    <path d="M 38 78 C 46 84, 52 86, 56 82" stroke="#2b2d42" stroke-width="8" stroke-linecap="round" fill="none"/>
                    <path d="M 82 78 C 74 84, 68 86, 64 82" stroke="#2b2d42" stroke-width="8" stroke-linecap="round" fill="none"/>
                `;
                break;

            case 'cloud':
                // Sleeping peacefully on a soft puffy cloud
                eyeExpression = `
                    <!-- Peaceful sleeping curved eyes (-_-) -->
                    <path d="M 44 54 Q 48 58 52 54" stroke="#ffffff" stroke-width="2.5" fill="none" stroke-linecap="round"/>
                    <path d="M 68 54 Q 72 58 76 54" stroke="#ffffff" stroke-width="2.5" fill="none" stroke-linecap="round"/>
                `;
                extraProp = `
                    <!-- Fluffy pastel cloud under panda -->
                    <g class="dream-cloud" transform="translate(60, 115)">
                        <path d="M -45 5 Q -50 -15 -25 -15 Q -10 -25 15 -18 Q 45 -22 45 2 Q 55 15 25 18 Q 0 22 -30 15 Z" fill="#ffffff" filter="url(#pandaGlow)"/>
                        <ellipse cx="-15" cy="0" rx="30" ry="12" fill="#fff0f5"/>
                    </g>
                    <!-- Floating 'zZ' letters -->
                    <text x="80" y="32" font-family="'Nunito', sans-serif" font-size="12" font-weight="bold" fill="#ff758f">z</text>
                    <text x="88" y="22" font-family="'Nunito', sans-serif" font-size="16" font-weight="bold" fill="#ff4d6d">Z</text>
                `;
                armPath = `
                    <!-- Paws resting peacefully on tummy -->
                    <path d="M 38 78 C 45 84, 55 86, 60 84" stroke="#2b2d42" stroke-width="8" stroke-linecap="round" fill="none"/>
                    <path d="M 82 78 C 75 84, 65 86, 60 84" stroke="#2b2d42" stroke-width="8" stroke-linecap="round" fill="none"/>
                `;
                break;

            case 'cake':
                // Panda holding a mini birthday cake with lit candles!
                eyeExpression = `
                    <circle cx="48" cy="54" r="3.2" fill="#ffffff"/>
                    <circle cx="50" cy="53" r="1.2" fill="#2b2d42"/>
                    <circle cx="72" cy="54" r="3.2" fill="#ffffff"/>
                    <circle cx="74" cy="53" r="1.2" fill="#2b2d42"/>
                `;
                extraProp = `
                    <!-- Birthday Cake with lit candles -->
                    <g transform="translate(60, 85)">
                        <!-- Cake plate -->
                        <ellipse cx="0" cy="20" rx="22" ry="4" fill="#e9ecef"/>
                        <!-- Cake body -->
                        <rect x="-18" y="4" width="36" height="15" rx="3" fill="#ffd1dc"/>
                        <path d="M -18 7 Q -12 12 -6 7 Q 0 12 6 7 Q 12 12 18 7" fill="#ff758f"/>
                        <!-- Candles -->
                        <rect x="-8" y="-6" width="3" height="10" fill="#ffffff"/>
                        <rect x="5" y="-6" width="3" height="10" fill="#ffffff"/>
                        <!-- Glowing flame -->
                        <path d="M -6.5 -12 C -9 -7, -4 -7, -6.5 -12 Z" fill="#ffd166"/>
                        <path d="M 6.5 -12 C 4 -7, 9 -7, 6.5 -12 Z" fill="#ffd166"/>
                        <circle cx="-6.5" cy="-8" r="1.5" fill="#ff4d6d"/>
                        <circle cx="6.5" cy="-8" r="1.5" fill="#ff4d6d"/>
                    </g>
                `;
                armPath = `
                    <path d="M 38 78 C 42 86, 46 94, 50 94" stroke="#2b2d42" stroke-width="8" stroke-linecap="round" fill="none"/>
                    <path d="M 82 78 C 78 86, 74 94, 70 94" stroke="#2b2d42" stroke-width="8" stroke-linecap="round" fill="none"/>
                `;
                break;

            case 'mic':
                // Panda holding a tiny microphone ready for the voice note
                eyeExpression = `
                    <circle cx="48" cy="54" r="3.2" fill="#ffffff"/>
                    <circle cx="50" cy="53" r="1.2" fill="#2b2d42"/>
                    <circle cx="72" cy="54" r="3.2" fill="#ffffff"/>
                    <circle cx="74" cy="53" r="1.2" fill="#2b2d42"/>
                `;
                extraProp = `
                    <!-- Tiny silver & pink microphone -->
                    <g transform="translate(70, 72) rotate(-15)">
                        <rect x="-2" y="8" width="4" height="16" rx="2" fill="#495057"/>
                        <circle cx="0" cy="4" r="6" fill="#adb5bd" stroke="#ff758f" stroke-width="1.5"/>
                        <line x1="-4" y1="4" x2="4" y2="4" stroke="#6c757d"/>
                        <!-- Sparkles from mic -->
                        <circle cx="6" cy="-4" r="1.5" fill="#ffd166"/>
                        <circle cx="-6" cy="-2" r="1" fill="#ff85a1"/>
                    </g>
                `;
                armPath = `
                    <path d="M 38 78 C 44 85, 52 88, 56 86" stroke="#2b2d42" stroke-width="8" stroke-linecap="round" fill="none"/>
                    <path d="M 82 78 C 78 72, 74 70, 68 76" stroke="#2b2d42" stroke-width="8" stroke-linecap="round" fill="none"/>
                `;
                break;

            case 'happy-tears':
                // Crying happy sparkling tears of joy and cheering
                eyeExpression = `
                    <ellipse cx="48" cy="54" rx="4" ry="5" fill="#ffffff"/>
                    <circle cx="48" cy="53" r="2" fill="#2b2d42"/>
                    <ellipse cx="72" cy="54" rx="4" ry="5" fill="#ffffff"/>
                    <circle cx="72" cy="53" r="2" fill="#2b2d42"/>
                    <!-- Sparkling tear streams -->
                    <path d="M 46 60 Q 42 66 45 72" stroke="#70d6ff" stroke-width="2.5" fill="none" stroke-linecap="round"/>
                    <path d="M 74 60 Q 78 66 75 72" stroke="#70d6ff" stroke-width="2.5" fill="none" stroke-linecap="round"/>
                `;
                extraProp = `
                    <!-- Tiny handkerchief -->
                    <rect x="68" y="72" width="10" height="10" rx="2" fill="#ffffff" stroke="#ffccd5" transform="rotate(20 68 72)"/>
                `;
                armPath = `
                    <path d="M 38 78 C 44 84, 52 86, 56 84" stroke="#2b2d42" stroke-width="8" stroke-linecap="round" fill="none"/>
                    <path d="M 82 78 C 80 72, 76 68, 72 72" stroke="#2b2d42" stroke-width="8" stroke-linecap="round" fill="none"/>
                `;
                break;

            case 'dance':
                // Cheerful waddling dance with musical notes
                eyeExpression = `
                    <path d="M 44 54 Q 48 48 52 54" stroke="#ffffff" stroke-width="2.5" fill="none" stroke-linecap="round"/>
                    <path d="M 68 54 Q 72 48 76 54" stroke="#ffffff" stroke-width="2.5" fill="none" stroke-linecap="round"/>
                `;
                armPath = `
                    <!-- Arms waving happily in the air -->
                    <path d="M 38 74 C 32 66, 30 58, 26 54" stroke="#2b2d42" stroke-width="8" stroke-linecap="round" fill="none"/>
                    <path d="M 82 74 C 88 66, 92 60, 96 56" stroke="#2b2d42" stroke-width="8" stroke-linecap="round" fill="none"/>
                `;
                extraProp = `
                    <!-- Floating musical notes -->
                    <text x="20" y="45" font-size="14" fill="#ff4d6d">♪</text>
                    <text x="94" y="42" font-size="16" fill="#ff758f">♫</text>
                `;
                break;

            default: // 'hold-heart'
                eyeExpression = `
                    <circle cx="48" cy="54" r="3.2" fill="#ffffff"/>
                    <circle cx="50" cy="53" r="1.2" fill="#2b2d42"/>
                    <circle cx="72" cy="54" r="3.2" fill="#ffffff"/>
                    <circle cx="74" cy="53" r="1.2" fill="#2b2d42"/>
                `;
                extraProp = `
                    <!-- Medium glowing pink heart in paws -->
                    <g class="held-heart" transform="translate(60, 84)">
                        <path d="M 0 3 C -8 -9, -18 1, 0 17 C 18 1, 8 -9, 0 3 Z" fill="#ff4d6d" filter="url(#pandaGlow)"/>
                        <circle cx="-4" cy="-2" r="1.8" fill="#ffffff" opacity="0.7"/>
                    </g>
                `;
                armPath = `
                    <path d="M 38 78 C 45 84, 52 86, 56 84" stroke="#2b2d42" stroke-width="8" stroke-linecap="round" fill="none"/>
                    <path d="M 82 78 C 75 84, 68 86, 64 84" stroke="#2b2d42" stroke-width="8" stroke-linecap="round" fill="none"/>
                `;
                break;
        }

        return `
        <svg class="character-panda ${className}" width="${width}" height="${height}" viewBox="0 0 120 140" xmlns="http://www.w3.org/2000/svg">
            <defs>
                <filter id="pandaGlow" x="-20%" y="-20%" width="140%" height="140%">
                    <feDropShadow dx="0" dy="3" stdDeviation="3" flood-color="#ff4d6d" flood-opacity="0.35"/>
                </filter>
            </defs>

            <!-- Shadow -->
            <ellipse cx="60" cy="132" rx="30" ry="5" fill="#ffd1dc" opacity="0.6"/>

            <!-- Fluffy Black Ears -->
            <circle cx="34" cy="34" r="13" fill="#2b2d42"/>
            <circle cx="34" cy="34" r="7" fill="#4a4e69" opacity="0.4"/>
            <circle cx="86" cy="34" r="13" fill="#2b2d42"/>
            <circle cx="86" cy="34" r="7" fill="#4a4e69" opacity="0.4"/>

            <!-- Chubby Body -->
            <ellipse cx="60" cy="95" rx="32" ry="28" fill="#ffffff" stroke="#f1f3f5" stroke-width="1.5"/>
            <!-- Cute feet / paws -->
            <ellipse cx="44" cy="122" rx="10" ry="7" fill="#2b2d42"/>
            <ellipse cx="44" cy="121" rx="4" ry="3" fill="#ffccd5" opacity="0.8"/>
            <ellipse cx="76" cy="122" rx="10" ry="7" fill="#2b2d42"/>
            <ellipse cx="76" cy="121" rx="4" ry="3" fill="#ffccd5" opacity="0.8"/>

            <!-- Chubby Head -->
            <circle cx="60" cy="58" r="32" fill="#ffffff" stroke="#f1f3f5" stroke-width="1.5"/>

            <!-- Black Eye Patches -->
            <ellipse cx="48" cy="54" rx="9" ry="11" fill="#2b2d42" transform="rotate(-15 48 54)"/>
            <ellipse cx="72" cy="54" rx="9" ry="11" fill="#2b2d42" transform="rotate(15 72 54)"/>

            <!-- Baby Eyes -->
            <g class="panda-eyes">
                ${eyeExpression}
            </g>

            <!-- Cute Button Nose & Mouth -->
            <ellipse cx="60" cy="62" rx="3.5" ry="2.5" fill="#2b2d42"/>
            <path d="M 60 64.5 L 60 67 M 57 67 Q 60 70 63 67" stroke="#2b2d42" stroke-width="1.5" fill="none" stroke-linecap="round"/>

            <!-- Rosy Pink Cheeks -->
            <ellipse cx="38" cy="65" rx="6" ry="3.5" fill="#ff758f" opacity="0.6"/>
            <ellipse cx="82" cy="65" rx="6" ry="3.5" fill="#ff758f" opacity="0.6"/>

            <!-- Arms -->
            <g class="panda-arms">
                ${armPath}
            </g>

            <!-- Props -->
            ${extraProp}
        </svg>
        `;
    },

    /**
     * Render the Special Motorcycle Scene (Boyfriend Mishtyy + Girlfriend Toji + Little Panda in basket)
     */
    renderBikeScene() {
        return `
        <div class="bike-scene-container">
            <!-- Road Horizon & Scenery -->
            <div class="bike-scenery">
                <div class="scenery-clouds"></div>
                <div class="scenery-trees"></div>
                <div class="scenery-road">
                    <div class="road-line"></div>
                </div>
            </div>

            <!-- Couple on Motorcycle SVG -->
            <div class="bike-vehicle-wrapper">
                <svg class="bike-svg" width="320" height="220" viewBox="0 0 320 220" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                        <filter id="bikeGlow" x="-20%" y="-20%" width="140%" height="140%">
                            <feDropShadow dx="0" dy="4" stdDeviation="4" flood-color="#ff85a1" flood-opacity="0.4"/>
                        </filter>
                    </defs>

                    <!-- Ground Shadow -->
                    <ellipse cx="160" cy="205" rx="100" ry="8" fill="#ffd1dc" opacity="0.6"/>

                    <!-- Back Wheel -->
                    <g class="wheel wheel-back" transform="translate(70, 175)">
                        <circle cx="0" cy="0" r="28" fill="#2b2d42"/>
                        <circle cx="0" cy="0" r="20" fill="#e9ecef"/>
                        <circle cx="0" cy="0" r="7" fill="#ff758f"/>
                        <line x1="-20" y1="0" x2="20" y2="0" stroke="#adb5bd" stroke-width="2"/>
                        <line x1="0" y1="-20" x2="0" y2="20" stroke="#adb5bd" stroke-width="2"/>
                    </g>

                    <!-- Front Wheel -->
                    <g class="wheel wheel-front" transform="translate(245, 175)">
                        <circle cx="0" cy="0" r="28" fill="#2b2d42"/>
                        <circle cx="0" cy="0" r="20" fill="#e9ecef"/>
                        <circle cx="0" cy="0" r="7" fill="#ff758f"/>
                        <line x1="-20" y1="0" x2="20" y2="0" stroke="#adb5bd" stroke-width="2"/>
                        <line x1="0" y1="-20" x2="0" y2="20" stroke="#adb5bd" stroke-width="2"/>
                    </g>

                    <!-- Bike Frame / Cute Pastel Scooter Body -->
                    <g class="bike-body" filter="url(#bikeGlow)">
                        <!-- Exhaust pipe with cute heart smoke -->
                        <path d="M 75 180 L 45 180 L 35 170" stroke="#adb5bd" stroke-width="6" fill="none" stroke-linecap="round"/>
                        
                        <!-- Main Chassis -->
                        <path d="M 65 170 Q 110 170 140 155 L 210 155 L 245 170 L 225 110 L 215 110 L 195 150 L 120 150 Z" fill="#ff85a1"/>
                        <path d="M 120 150 L 195 150 L 190 142 L 115 142 Z" fill="#2b2d42" opacity="0.8"/> <!-- Long comfortable Seat -->
                        
                        <!-- Front Shield / Mudguard -->
                        <path d="M 220 120 Q 245 125 240 160 L 225 160 Z" fill="#ff758f"/>
                        <!-- Headlight -->
                        <ellipse cx="242" cy="125" rx="6" ry="9" fill="#fff3b0"/>
                        <polygon points="248,118 310,95 310,155 248,132" fill="#fff3b0" opacity="0.25"/> <!-- Light beam -->

                        <!-- Handlebars -->
                        <path d="M 218 105 L 210 90 L 198 90" stroke="#495057" stroke-width="4.5" stroke-linecap="round" fill="none"/>
                    </g>

                    <!-- TOJI (Girlfriend) Sitting on Pillion Holding Mishtyy -->
                    <g class="rider-toji" transform="translate(118, 55)">
                        <!-- Back Hair blowing in wind -->
                        <path class="wind-hair" d="M 5 25 C -20 28, -35 20, -45 35 C -30 40, -10 38, 5 32 Z" fill="#362028"/>
                        <!-- Body / Pink Sweater -->
                        <path d="M 5 45 C 5 45, 18 45, 26 48 C 24 68, 20 80, 10 85 C 0 85, -2 68, 5 45 Z" fill="#ff758f"/>
                        <!-- Arms wrapped tightly around Mishtyy -->
                        <path d="M 14 55 C 24 58, 38 60, 48 62" stroke="#fcd5ce" stroke-width="6" stroke-linecap="round" fill="none"/>
                        <!-- Head with cute blush -->
                        <circle cx="16" cy="22" r="18" fill="#fcd5ce"/>
                        <!-- Rosy cheek -->
                        <ellipse cx="22" cy="28" rx="4.5" ry="2.5" fill="#ff4d6d" opacity="0.8"/>
                        <!-- Happy closed eyes enjoying the breeze -->
                        <path d="M 18 22 Q 22 17 26 22" stroke="#2b2d42" stroke-width="2.2" fill="none" stroke-linecap="round"/>
                        <path d="M 23 30 Q 25 33 27 30" stroke="#e05780" stroke-width="2" fill="none"/>
                        <!-- Hair Bangs & Cute Pink Bow -->
                        <path d="M 2 12 Q 18 2 28 14 Q 20 18 10 20 Z" fill="#362028"/>
                        <circle cx="8" cy="8" r="4.5" fill="#ff4d6d"/>
                    </g>

                    <!-- MISHTYY (Boyfriend) Driving Responsibly & Gently -->
                    <g class="rider-mishtyy" transform="translate(155, 45)">
                        <!-- Body / Jacket -->
                        <path d="M 10 55 C 10 55, 30 52, 42 60 C 40 80, 36 95, 22 95 C 15 95, 10 80, 10 55 Z" fill="#4361ee"/>
                        <!-- Arms holding handlebars -->
                        <path d="M 32 65 C 44 65, 52 64, 58 55" stroke="#fcd5ce" stroke-width="6.5" stroke-linecap="round" fill="none"/>
                        <!-- Head -->
                        <circle cx="28" cy="24" r="18" fill="#fcd5ce"/>
                        <!-- Short dark hair blowing back -->
                        <path d="M 14 16 Q 26 6 38 12 Q 42 20 38 24 Q 28 12 18 22 Z" fill="#212529"/>
                        <!-- Happy caring smile -->
                        <path d="M 32 23 Q 36 20 40 23" stroke="#212529" stroke-width="2.2" fill="none" stroke-linecap="round"/>
                        <path d="M 34 31 Q 38 35 42 31" stroke="#212529" stroke-width="2" fill="none"/>
                    </g>

                    <!-- Cute Front Basket with BABY PANDA cheering! -->
                    <g class="front-basket" transform="translate(230, 95)">
                        <!-- Basket -->
                        <rect x="-12" y="8" width="24" height="20" rx="4" fill="#ffd166" stroke="#f4a261" stroke-width="1.5"/>
                        <line x1="-10" y1="18" x2="10" y2="18" stroke="#f4a261"/>
                        <!-- Little Panda with mini pilot goggles -->
                        <circle cx="0" cy="4" r="12" fill="#ffffff"/>
                        <circle cx="-10" cy="-2" r="5" fill="#2b2d42"/>
                        <circle cx="10" cy="-2" r="5" fill="#2b2d42"/>
                        <ellipse cx="-4" cy="4" rx="3.5" ry="4" fill="#2b2d42"/>
                        <ellipse cx="4" cy="4" rx="3.5" ry="4" fill="#2b2d42"/>
                        <!-- Goggles headband -->
                        <path d="M -12 2 L 12 2" stroke="#ff4d6d" stroke-width="2.5"/>
                        <circle cx="-5" cy="2" r="3" fill="#70d6ff" stroke="#ff4d6d" stroke-width="1"/>
                        <circle cx="5" cy="2" r="3" fill="#70d6ff" stroke="#ff4d6d" stroke-width="1"/>
                        <!-- Waving tiny paw -->
                        <circle cx="12" cy="-4" r="3" fill="#2b2d42"/>
                    </g>

                    <!-- Animated Exhaust Heart Puffs -->
                    <g class="exhaust-hearts">
                        <path class="puff-heart puff-1" d="M 28 165 C 24 160, 18 165, 28 174 C 38 165, 32 160, 28 165 Z" fill="#ff758f"/>
                        <path class="puff-heart puff-2" d="M 12 155 C 9 152, 4 155, 12 161 C 20 155, 15 152, 12 155 Z" fill="#ff85a1"/>
                    </g>
                </svg>
            </div>

            <!-- Interactive Honk / Love Button -->
            <button class="bike-honk-btn" id="bikeHonkBtn" aria-label="Send Love on the Bike Ride">
                <span>🛵 Beep Beep! Send Love 🩷</span>
            </button>
        </div>
        `;
    }
};

window.Characters = Characters;
