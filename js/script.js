'use strict'

window.addEventListener('scroll', () => {
    // Main page elements
    const productVegs = document.querySelectorAll('.product__vegetable');
    const dumpVegs = document.querySelectorAll('.dump__vegetable');
    const storeVegs = document.querySelectorAll('.store__vegetable');
    const gameVegs = document.querySelectorAll('.game__vegetable');
    const bottomVegs = document.querySelectorAll('.bottom-rucola');
    // Winner page elements
    const winnerGreenLeft = document.querySelectorAll('.winner__greens-left');
    const winnerGreenRight = document.querySelectorAll('.winner__greens-right');
    // Scroll animation for background elements
    function animateElement(vegsArray, min, max, speed) {
        if (scrollY >= min && scrollY <= max) {
            vegsArray.forEach(veg => {
                veg.style = `transform: translateY(${scrollY / -speed}px)`;
            })
        } else {
            vegsArray.forEach(veg => {
                veg.style = 'transform: translateY(0px)';
            })
        }
    }
    // Main page elements
    animateElement(productVegs, 0, 1000, 5);
    animateElement(dumpVegs, 100, 1800, 5);
    animateElement(storeVegs, 1200, 4500, 5);
    animateElement(gameVegs, 1000, 4500, 5);
    animateElement(bottomVegs, 1200, 4500, 7);
    // Winner page elements
    animateElement(winnerGreenLeft, 0, 1000, 5);
    animateElement(winnerGreenRight, 0, 1000, 5);
})




