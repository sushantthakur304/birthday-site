/**
 * ====================================================================
 * ❤️ LOVE STORY CONFIGURATION — MISHTYY & TOJI 🩷
 * ====================================================================
 * You can easily customize any text, photos, audio paths, and memories
 * here without having to touch any complicated HTML or CSS!
 */

const loveStory = {
    // 👫 Couple Details
    boyfriend: "Mishtyy",
    girlfriend: "Toji",
    boyfriendBirthday: "8 March 2004",
    girlfriendBirthday: "17 October 2005",
    
    // Target Birthday Date for Countdown (Month is 1-indexed in human terms: Oct 17)
    // The script will automatically target the current or upcoming October 17th.
    birthdayMonth: 10, // October
    birthdayDay: 17,

    yearsKnown: "almost 10 years",

    // 🎵 Dedicated Music
    music: {
        title: "Alfaz",
        artist: "Hamza Malik",
        quote: "Some feelings are better said through a song...",
        // Location of the song file (place alfaz.mp3 in assets/audio/)
        audioSrc: "assets/audio/alfaz.mp3",
        fallbackSrc: "assets/audio/alfaz.mp3.mp3",
        // Lyrics snippet or sweet meaning
        note: "Every lyric reminds me of how you became the most important part of my world."
    },

    // 📖 The 5 Timeline Chapters (Almost 10 Years of Us)
    timeline: [
        {
            chapter: "Chapter 1",
            title: "The School Days",
            period: "7th Standard & 6th Standard",
            yearTag: "~2016 • Where It All Began",
            icon: "🏫",
            characterPose: "school",
            story: `I was in 7th standard, and you were in 6th.

Neither of us had any idea that the quiet, cute person standing somewhere in our school hallways would eventually become one of the most important people in our lives.

We were just kids back then, wearing school uniforms and carrying heavy backpacks, completely unaware of the beautiful 10-year story that destiny had already started writing for us.`,
            quote: "Two innocent kids who had no idea they'd become each other's forever."
        },
        {
            chapter: "Chapter 2",
            title: "Something Changed",
            period: "10th Standard & 9th Standard",
            yearTag: "The Beginning of Us ❤️",
            icon: "✨",
            characterPose: "shy-blush",
            story: `I was in 10th standard, and you were in 9th.

Slowly, simple conversations turned into waiting to see each other. Friendly smiles turned into butterflies. The friendship we had blossomed into something so much deeper.

This was the time we officially got into a relationship. Even with all the board exam stress and teenage chaos, having you by my side made everything feel safe and right.`,
            quote: "From just friends to the start of the greatest love story of my life."
        },
        {
            chapter: "Chapter 3",
            title: "Growing Together",
            period: "High School & Beyond",
            yearTag: "Through Every High & Low",
            icon: "🌱",
            characterPose: "growing",
            story: `Years passed, and we grew up together.

We shared countless late-night conversations, silly laughs, small arguments where you would get adorably angry, and quiet moments of supporting each other through every challenge.

You became more than just my girlfriend. You became my comfort, my safe space, my home, and the first person I wanted to tell everything to.`,
            quote: "We didn't just fall in love; we grew up together hand in hand."
        },
        {
            chapter: "Chapter 4",
            title: "This Year — College Days",
            period: "A Brand New Chapter",
            yearTag: "2026 • New Horizons",
            icon: "🎓",
            characterPose: "college",
            story: `This year has been especially meaningful because you took a huge step and joined college!

Watching you step into this new world, carrying your college bag and taking on new responsibilities, made me realize just how much we have both grown.

We created so many fresh, beautiful memories together this year. Seeing you succeed and smile brings me the happiest feeling in the universe.`,
            quote: "Watching you bloom into the incredible girl you are today is my biggest joy."
        },
        {
            chapter: "Chapter 5",
            title: "Our Bike Rides 🏍️",
            period: "Our Favorite Moments",
            yearTag: "The Cool Evening Wind & You",
            icon: "🛵",
            characterPose: "bikeride",
            story: `Some of my absolute favorite moments in life aren't fancy dates or grand celebrations.

They're the simple moments. Just you, me, our bike, the cool breeze blowing, and nowhere important to be.

I love feeling you hold onto me from behind, resting your chin on my shoulder, talking about random things or just enjoying the ride quietly. Even something as ordinary as riding together feels magical when you are with me.`,
            quote: "Any road is beautiful as long as you're sitting behind me holding on tight."
        }
    ],

    // 💕 10 Things I Love About Toji
    reasonsLove: [
        {
            number: "01",
            title: "Your Caring Nature",
            short: "The kindness in your soul",
            desc: "The way you care so deeply about the people in your life. You have a heart that feels everything so purely, and your warmth makes everyone around you feel valued and safe.",
            pandaPose: "hug-heart",
            girlPose: "happy"
        },
        {
            number: "02",
            title: "Your Cute Smile",
            short: "My favorite sight in the world",
            desc: "The way your entire face lights up when you smile or laugh at something silly. One genuine smile from you is enough to wipe away any tiredness or bad day I'm having.",
            pandaPose: "flowers",
            girlPose: "shy"
        },
        {
            number: "03",
            title: "Your Shy Side",
            short: "The sweetest blush",
            desc: "The quiet, timid way you look away when I compliment you, or how you get flustered and hide your face. It's the most adorable thing on this planet.",
            pandaPose: "hold-heart",
            girlPose: "shy"
        },
        {
            number: "04",
            title: "The Way You Care For Me",
            short: "Almost like a mother would",
            desc: "One of the things I cherish most is how you take care of me. Sometimes you care for me almost like a mother would—checking on me, worrying if I ate, making sure I'm okay. I genuinely love that feeling of being so loved and protected by you.",
            pandaPose: "hug-heart",
            girlPose: "happy"
        },
        {
            number: "05",
            title: "Your Emotional Heart",
            short: "Soft, gentle, and deep",
            desc: "You feel things deeply and love with your whole heart. Your emotional sensitivity isn't a weakness; it's what makes you so compassionate, understanding, and rare.",
            pandaPose: "happy-tears",
            girlPose: "emotional"
        },
        {
            number: "06",
            title: "Even Your Cute Anger",
            short: "Irresistibly adorable pouts",
            desc: "When you get mad at me, cross your arms, and try to look serious—you have no idea how cute you look! Even when you're angry, you're the sweetest person to ever exist.",
            pandaPose: "dance",
            girlPose: "angry"
        },
        {
            number: "07",
            title: "The Way You Overthink",
            short: "Because you care so deeply",
            desc: "You overthink so many little things, but I know it's only because your heart cares so much about everything being okay. I promise to always be here to calm your thoughts and remind you that you're safe with me.",
            pandaPose: "cloud",
            girlPose: "shy"
        },
        {
            number: "08",
            title: "Making Ordinary Moments Special",
            short: "Magic in the simplest things",
            desc: "Whether it's sitting quietly, riding on the bike, having a quick snack, or sharing a simple laugh—every ordinary second turns into a cherished memory when I'm with you.",
            pandaPose: "flowers",
            girlPose: "happy"
        },
        {
            number: "09",
            title: "The Memories We've Created",
            short: "Almost 10 years of history",
            desc: "From school days in uniforms to growing up, college steps, bike rides, and all the milestones in between. You have been the brightest chapter of my life.",
            pandaPose: "cake",
            girlPose: "celebrate"
        },
        {
            number: "10",
            title: "Simply... You",
            short: "My favorite person in existence",
            desc: "Not just for any one reason, but for everything you are. My baby, my girl, my girlfriend, my best friend, my future wife, and my entire world. Just you.",
            pandaPose: "hug-girl",
            girlPose: "hug-panda"
        }
    ],

    // 💌 The Handwritten Birthday Letter
    letter: {
        date: "October 17, 2026",
        salutation: "My Dearest Toji, 🩷",
        body: `Happy Birthday, my baby!

I wanted to make something special for you this year—not just something you open once and forget, but a little world that holds everything we've lived through together.

Can you believe it has been almost 10 years since we first met?

I still remember seeing you back in school when I was in 7th standard and you were in 6th. Neither of us had any idea that the quiet girl standing in the hallway would one day become my whole universe. Then came 10th and 9th standard, when everything changed, and we officially became "us".

We grew up together, Toji. We went through board exams, teenage doubts, growing pains, and every little phase of life. And this year has been so special because you stepped into college! Seeing you with your college bag, growing into an independent, strong, beautiful young woman, made me so incredibly proud of you.

Every memory with you is etched into my heart—especially our bike rides. Just the two of us, feeling the evening wind, with your hands holding onto me from behind. Those simple rides mean more to me than any fancy date ever could.

I love everything about you. I love your sweet shy blush. I love your gentle, emotional heart. I even love when you get angry and pout, because you look impossibly cute doing it! I know you tend to overthink things sometimes, but remember that I'm always right here to hold your hand through every worry.

And what I love most is how you care for me. You care for me with such pure tenderness, sometimes almost like a mother would, making sure I'm safe, fed, and happy. That feeling of being cared for by you is the greatest comfort in my life.

Toji, you are not just my girlfriend.
You are my best friend.
My childhood connection.
My safe harbor.
My girl.
My baby.
And my future wife.

On your birthday today, I wish you all the happiness, peace, success, and love in this universe. I promise to keep loving you, protecting you, annoying you, and riding with you through every journey ahead.

Happy Birthday, my Toji. You will always be my favorite part of life.`,
        signature: "Forever & always yours,\nMishtyy ❤️"
    },

    // 🌙 Our Future Plans (Dreamy Night Scene)
    futurePlans: [
        { icon: "🏍️", title: "More Bike Rides", text: "Endless evening roads with the wind in our hair and you holding onto me." },
        { icon: "🌅", title: "More Sunsets", text: "Quiet evenings watching the sky turn pink and orange together." },
        { icon: "📸", title: "More Pictures", text: "Capturing a million more candid, silly, and beautiful moments of you." },
        { icon: "😂", title: "More Stupid Jokes", text: "Laughing until our stomachs hurt over the most ridiculous things." },
        { icon: "🍕", title: "More Food Dates", text: "Stealing each other's snacks and finding cozy little food spots." },
        { icon: "✈️", title: "New Places", text: "Exploring new cities, hills, and quiet corners of the world hand-in-hand." },
        { icon: "🎂", title: "More Birthdays", text: "Celebrating every single October 17th together for the rest of our lives." },
        { icon: "❤️", title: "More Years Together", text: "Adding 10, 20, 50 more years to our 10-year love story." },
        { icon: "🏠", title: "A Future Together", text: "Building a home full of warmth, laughter, peace, and forever love." }
    ],

    // 📸 Photo Gallery Placeholders & Categories
    galleryCategories: [
        { id: "all", label: "All Memories 🌸" },
        { id: "school", label: "School Memories 🏫" },
        { id: "us", label: "❤️ Us" },
        { id: "bikerides", label: "🏍️ Bike Rides" },
        { id: "college", label: "🎓 College" },
        { id: "funny", label: "😂 Funny Moments" },
        { id: "random", label: "🌸 Random Beautiful Days" },
        { id: "special", label: "🎂 Special Days" }
    ],

    // Initial gallery photos (Using romantic illustrated placeholders until Mishtyy uploads real ones)
    photos: [
        {
            id: 1,
            category: "school",
            title: "Where It All Started",
            caption: "7th and 6th standard at school. Little did we know what destiny had planned for us.",
            date: "",
            image: "assets/photos/school-1.jpg",
            tag: "🌸 Beautiful Memories"
        },
        {
            id: 2,
            category: "us",
            title: "When Friendship Turned Into Love",
            caption: "10th and 9th standard—the day we officially became boyfriend and girlfriend.",
            date: "10th & 9th Standard",
            image: "assets/photos/couple-1.jpg",
            tag: "❤️ Our Story"
        },
        {
            id: 3,
            category: "bikerides",
            title: "Evening Wind & You",
            caption: "Just you, me, the bike, and the quiet road. My favorite place in the world is right here.",
            date: "Favorite Rides",
            image: "assets/photos/bikeride-1.jpg",
            tag: "🏍️ Bike Rides"
        },
        {
            id: 4,
            category: "college",
            title: "A Proud New Chapter",
            caption: "Watching you start college this year. So proud of the amazing person you're becoming!",
            date: "College 2026",
            image: "assets/photos/college-1.jpg",
            tag: "🎓 College"
        },
        {
            id: 5,
            category: "funny",
            title: "Even Cute When You're Mad!",
            caption: "That signature little pout whenever I tease you. Irresistibly adorable every single time.",
            date: "Silly Moments",
            image: "assets/photos/funny-1.jpg",
            tag: "😂 Playful"
        },
        {
            id: 6,
            category: "random",
            title: "Ordinary Days Made Magical",
            caption: "Just talking, laughing, and wasting time together. With you, every second is precious.",
            date: "Golden Days",
            image: "assets/photos/random-1.jpg",
            tag: "🌸 Together"
        },
        {
            id: 7,
            category: "special",
            title: "Celebrating You",
            caption: "Every October 17th is a reminder of how lucky the world—and especially I—am to have you.",
            date: "October 17",
            image: "assets/photos/special-1.jpg",
            tag: "🎂 Birthday"
        }
    ]
};

// Expose globally
window.loveStory = loveStory;
