const slider = document.querySelector('.slider-container');
const slides = document.querySelectorAll('.slide');

let isDragging = false;
let startPosition = 0;
let currentTranslate = 0;
let prevTranslate = 0;
let animationID = 0;
let currentIndex = 0;

slides.forEach((slide, i) => {
    const slideImg = slide.querySelector('img');
    slideImg.addEventListener('dragstart', e => {
        e.preventDefault();
    });

    // Touch events
    slide.addEventListener('touchstart', touchStart(i));
    slide.addEventListener('touchend', touchEnd);
    slide.addEventListener('touchmove', touchMove);



    // Mouse events
    slide.addEventListener('mousedown', touchStart(i));
    slide.addEventListener('mouseup', touchEnd);
    slide.addEventListener('mouseleave', touchEnd);
    slide.addEventListener('mousemove', touchMove);

});

function touchStart(i) {
    return function(e) {
        isDragging = true;
    }
}

function touchEnd() {
    isDragging = false;
}

function touchMove() {
    if(isDragging) {
        console.log('move');
    }
}