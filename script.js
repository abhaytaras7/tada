document.addEventListener('DOMContentLoaded', function() {
    const emojiCount = 50;
    const emojis = ['🎉', '😄', '🚀', '🌟', '❤️', '😊', '🎈', '🐱', '🍕', '🚲', '🍦', '🌺', '🌞', '🍓', '🎵', '🍭', '🍂', '🎓', '🏄‍♂️', '🎁', '🌍', '🐶', '🏆', '🍔', '🍀', '🎮', '🌹', '⚡️', '🍒', '📚', '🌄', '🚢', '🐰', '🎤', '🚁', '🍎', '🐢', '🎃', '🍒', '🌼', '🎊', '🌴', '🍁', '🍌', '🍂', '🌈', '🏀'];

    const emojisContainer = document.querySelector('.emojis-container');

    for (let i = 0; i < emojiCount; i++) {
        const emoji = document.createElement('span');
        emoji.classList.add('emoji');
        emoji.textContent = emojis[Math.floor(Math.random() * emojis.length)];
        emoji.style.left = `${Math.random() * 100}vw`;
        emoji.style.animationDuration = `${Math.random() * 4 + 2}s`;
        emoji.style.animationDelay = `${Math.random() * 2}s`;
        emojisContainer.appendChild(emoji);
    }
});
