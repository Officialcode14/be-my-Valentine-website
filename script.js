// --- script.js - clean version ---

const noBtn = document.getElementById('noBtn');
const yesBtn = document.getElementById('yesBtn');

// Replace this with YOUR real direct image link
const backgroundImageUrl = "https://i.postimg.cc/ZKVj7BBF/Whats-App-Image-2026-02-04-at-6-47-19-AM.jpg";
// ↑ Paste your link here — keep the quotes! Example: "https://i.ibb.co/abc123xyz/photo.jpg"

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
    // Keep the button inside a safe area (80% of screen width/height)
    const maxX = window.innerWidth * 0.8;
    const maxY = window.innerHeight * 0.8;
    
    const x = Math.random() * maxX;
    const y = Math.random() * maxY;
    
    noBtn.style.position = 'absolute';
    noBtn.style.left = `${x}px`;
    noBtn.style.top = `${y}px`;
    noBtn.style.transform = `scale(${0.8 + Math.random() * 0.4})`;  // makes it slightly smaller sometimes
    
    // Change text to desperate message
    noBtn.textContent = pleas[pleaIndex];
    pleaIndex = (pleaIndex + 1) % pleas.length;
});

yesBtn.addEventListener('click', () => {
    // Set background image
    document.body.style.backgroundImage = `url('${backgroundImageUrl}')`;
    document.body.style.backgroundSize = "cover";
    document.body.style.backgroundPosition = "center";
    document.body.style.backgroundRepeat = "no-repeat";
    document.body.style.backgroundAttachment = "fixed";

    // Dark overlay for readability
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
    // Play her favorite song
const song = document.getElementById('loveSong');
song.volume = 0.4;           // 40% volume – not too loud
song.currentTime = 0;        // start from beginning
song.play().catch(error => {
    console.log("Autoplay prevented:", error);
    // Optional: alert("Click anywhere to play music ❤️");
});

    alert("Youpi ! Alice a dit OUI ! ❤️\nYay! Alice said YES! ❤️");

});


