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

// disabled context menu
oncontextmenu = e => {
    e.preventDefault();
    e.stopPropagation();
    return false;
}

function touchStart(i) {
    return function(e) {
        currentIndex = i;
        startPosition = getPositionX(e);
        console.log(startPosition);
        isDragging = true;

        animationID = requestAnimationFrame(animation)
    }
}

function touchEnd() {
    isDragging = false;
}

function touchMove(e) {
    if(isDragging) {
        const currentPosition = getPositionX(e);
        currentTranslate = prevTranslate + currentPosition - startPosition;
    }
}

function getPositionX(e) {
    return e.type.includes('mouse') ? e.pageX : e.touches[0].clientX;
}

function animation() {
    setSliderPos()
    if(isDragging) {
        requestAnimationFrame(animation)
    }
}

function setSliderPos() {
    slider.style.transform = `translateX(${currentTranslate}px)`
}