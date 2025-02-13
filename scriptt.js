const loveAudio = document.getElementById('love-audio');
const flyingLoves = document.getElementById('flying-loves');

let loveInterval;
loveAudio.addEventListener('play', () => {
    loveInterval = setInterval(() => {
        const love = document.createElement('div');
        love.innerHTML = '💋'; // Kiss emoji
        love.style.position = 'absolute';
        love.style.left = Math.random() * 100 + 'vw'; // Random horizontal position
        love.style.top = '100vh'; // Start at the bottom of the screen
        love.style.fontSize = '24px';
        love.style.animation = 'flyLove 5s linear forwards'; // Use the flyLove animation
        flyingLoves.appendChild(love);

        // Remove the kiss element after the animation ends
        setTimeout(() => {
            love.remove();
        }, 5000);
    }, 500); // Create a new kiss every 500ms
});

loveAudio.addEventListener('pause', () => clearInterval(loveInterval));
loveAudio.addEventListener('ended', () => {
    clearInterval(loveInterval);
    flyingLoves.innerHTML = ''; // Clear all flying kisses when audio ends
});