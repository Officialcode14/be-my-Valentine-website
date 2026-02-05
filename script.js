// --- script.js - clean version ---

const noBtn = document.getElementById('noBtn');
const yesBtn = document.getElementById('yesBtn');

// Replace with YOUR real direct links
const backgroundImageUrl = "https://i.postimg.cc/YOUR_FLOWER_BACKGROUND_ID.jpg";
const couplePhotoUrl = "https://i.postimg.cc/YOUR_COUPLE_PHOTO_ID.jpg"; // already in HTML

const pleas = [
    "S'il te plaît ? / Please?",
    "Je vais être triste... / I'll be sad...",
    "Tu me brises le cœur ! / You're breaking my heart!",
    "Réfléchis encore ! / Think again!",
    "Pretty please ? 🥺 / S'il te plaît ?",
    "Allez, dis oui... / Come on, say yes...",
    "Je t'en supplie ! / I'm begging you!"
];
let pleaIndex = 0;

noBtn.addEventListener('mouseover', () => {
    const maxX = window.innerWidth * 0.8;
    const maxY = window.innerHeight * 0.8;
    
    const x = Math.random() * maxX;
    const y = Math.random() * maxY;
    
    noBtn.style.position = 'absolute';
    noBtn.style.left = `${x}px`;
    noBtn.style.top = `${y}px`;
    
    noBtn.textContent = pleas[pleaIndex];
    pleaIndex = (pleaIndex + 1) % pleas.length;
});

yesBtn.addEventListener('click', () => {
    // Change background
    document.body.style.backgroundImage = `url('${backgroundImageUrl}')`;
    document.body.style.backgroundSize = "cover";
    document.body.style.backgroundPosition = "center";
    document.body.style.backgroundRepeat = "no-repeat";
    document.body.style.backgroundAttachment = "fixed";
    document.body.style.backgroundColor = "rgba(0, 0, 0, 0.45)";
    document.body.style.backgroundBlendMode = "multiply";

    // Floating hearts
    for (let i = 0; i < 40; i++) {
        const heart = document.createElement('div');
        heart.classList.add('floating-heart');
        heart.textContent = ['❤️', '💖', '💕', '💗'][Math.floor(Math.random() * 4)];
        heart.style.left = `${Math.random() * 100}vw`;
        heart.style.animationDelay = `${Math.random() * 3}s`;
        heart.style.animationDuration = `${3 + Math.random() * 3}s`;
        document.body.appendChild(heart);
        setTimeout(() => heart.remove(), 7000);
    }

    // Play music
    const song = document.getElementById('loveSong');
    song.volume = 0.4;
    song.currentTime = 0;
    song.play().catch(error => {
        console.log("Autoplay prevented:", error);
    });

    // Apply frosted glass / glassmorphism effect
    const container = document.querySelector('.container');
    container.style.background = 'rgba(255, 255, 255, 0.12)';
    container.style.backdropFilter = 'blur(12px)';
    container.style.border = '1px solid rgba(255, 255, 255, 0.25)';
    container.style.boxShadow = '0 8px 32px rgba(0, 0, 0, 0.25)';

    // Celebration message
    alert("Youpi ! Alice a dit OUI ! ❤️\nYay! Alice said YES! ❤️");
});



