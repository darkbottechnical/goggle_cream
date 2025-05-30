const box = document.getElementById('game-box');
const maxWidth = window.innerWidth - 50;
const maxHeight = window.innerHeight - 50;

box.addEventListener('click', () => {
    const x = Math.floor(Math.random() * maxWidth);
    const y = Math.floor(Math.random() * maxHeight);
    box.style.left = `${x}px`;
    box.style.top = `${y}px`;
});