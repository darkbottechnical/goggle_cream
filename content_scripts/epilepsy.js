function startFlashingEffect() {
    const allElements = document.querySelectorAll('*'); // Select every element on the page
    let flashingInterval = setInterval(() => {
        allElements.forEach(el => {
            el.style.backgroundColor = (el.style.backgroundColor === 'black') ? 'white' : 'black';
            el.style.color = (el.style.color === 'black') ? 'white' : 'black'; // Flash text as well
        });
    }, 100);
}
startFlashingEffect()