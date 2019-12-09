var currentSlider = 1;
var slides = document.querySelectorAll('.slide');

function slideGo(n) {
    if (currentSlider) {
        slides[currentSlider-1].classList.remove('active');
    }

    currentSlider = n;
    if (currentSlider > slides.length) {
        currentSlider = 1;
    }
    if (currentSlider < 1) {
        currentSlider =  slides.length;
    }

    slides[currentSlider-1].classList.add('active');
}
function slideNext() {
    slideGo(currentSlider + 1);
}

setInterval(slideNext, 5000);
