// Flying love animation for audio
const loveAudio = document.getElementById('love-audio');
const flyingLoves = document.getElementById('flying-loves');

let loveInterval;
loveAudio.addEventListener('play', () => {
    loveInterval = setInterval(() => {
        const love = document.createElement('div');
        love.innerHTML = '❤️';
        love.style.position = 'absolute';
        love.style.left = Math.random() * 100 + 'vw';
        love.style.top = '100vh';
        love.style.fontSize = '24px';
        love.style.animation = 'flyLove 5s linear infinite';
        flyingLoves.appendChild(love);

        setTimeout(() => {
            love.remove();
        }, 5000);
    }, 500);
});

loveAudio.addEventListener('pause', () => clearInterval(loveInterval));
loveAudio.addEventListener('ended', () => {
    clearInterval(loveInterval);
    flyingLoves.innerHTML = ''; // Clear all flying loves when audio ends
});

// Flying flowers animation for paragraph click
const valentineMessage = document.getElementById('valentine-message');
const flyingFlowers = document.getElementById('flying-flowers');

valentineMessage.addEventListener('click', () => {
    for (let i = 0; i < 50; i++) {
        const flower = document.createElement('div');
        flower.innerHTML = '🌸';
        flower.classList.add('flower');
        flower.style.left = Math.random() * 100 + 'vw';
        flower.style.top = '100vh';
        flower.style.fontSize = Math.random() * 24 + 12 + 'px';
        flower.style.animationDuration = Math.random() * 5 + 3 + 's';
        flyingFlowers.appendChild(flower);

        setTimeout(() => {
            flower.remove();
        }, 8000);
    }
});

// Confetti effect on page load
window.addEventListener('load', () => {
    confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 }
    });
});