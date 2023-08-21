document.addEventListener('DOMContentLoaded', function() {
    const emojiCount = 50;
    const emojis = ['🎉', '😄', '🚀', '🌟', '❤️', '😊', '🎈', '🐱', '🍕', '🚲', '🍦', '🌺', '🌞', '🍓', '🎵', '🍭', '🍂', '🎓', '🏄‍♂️', '🎁', '🌍', '🐶', '🏆', '🍔', '🍀', '🎮', '🌹', '⚡️', '🍒', '📚', '🌄', '🚢', '🐰', '🎤', '🚁', '🍎', '🐢', '🎃', '🍒', '🌼', '🎊', '🌴', '🍁', '🍌', '🍂', '🌈', '🏀'];

    for (let i = 0; i < emojiCount; i++) {
        const emoji = document.createElement('span');
        emoji.classList.add('emoji');
        emoji.textContent = emojis[Math.floor(Math.random() * emojis.length)];
        emoji.style.left = `${Math.random() * 100}vw`;
        emoji.style.top = `${Math.random() * 100}vh`;
        document.querySelector('.emojis-container').appendChild(emoji);
    }
});
