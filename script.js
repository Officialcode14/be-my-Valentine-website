// --- script.js - clean version ---

const noBtn = document.getElementById('noBtn');
const yesBtn = document.getElementById('yesBtn');

// Replace with YOUR real direct links
const backgroundImageUrl = "https://i.postimg.cc/dVqX4YL8/Whats-App-Image-2026-02-04-at-6-47-19-AM.jpg";
const couplePhotoUrl = "https://i.postimg.cc/qB35Z292/Whats-App-Image-2026-02-05-at-4-41-24-AM.jpg"; // already in HTML

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
    // Change background to flower image
    document.body.style.backgroundImage = `url('${backgroundImageUrl}')`;
    document.body.style.backgroundSize = "cover";
    document.body.style.backgroundPosition = "center";
    document.body.style.backgroundRepeat = "no-repeat";
    document.body.style.backgroundAttachment = "fixed";
    document.body.style.backgroundColor = "rgba(0, 0, 0, 0.45)"; // keep subtle dark overlay
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

    // Make container completely transparent after "Yes!"
    const container = document.querySelector('.container');
    container.style.background = 'transparent';
    container.style.backdropFilter = 'none';
    container.style.border = 'none';
    container.style.boxShadow = 'none';
    container.style.padding = '20px'; // keep a bit of padding so text doesn't touch edges

    // Celebration message
    alert("Youpi ! Alice a dit OUI ! ❤️\nYay! Alice said YES! ❤️");
});




