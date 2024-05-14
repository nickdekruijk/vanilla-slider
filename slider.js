/*

Vanilla JS slider

Usage example:
var slider = new Slider({
    selector: '.slider',
    slideSelector: '.slide',
    interval: 5000,
});

*/

window.Slider = function (options) {

    // Default settings
    this.option = {
        activeClass: 'active',
        buttonNextSelector: '.slider-next',
        buttonPreviousSelector: '.slider-prev',
        dotContainer: '.slider-dots',
        dotSelector: '.slider-dot',
        interval: 5000,
        keyboardEnabled: true,
        selector: '.slider',
        slideSelector: '.slide',
        touchkeys: false,
        touchsensitivity: 5,
        touchwipe: true,
    }

    // Merge defaults and options into settings to use
    this.option = Object.assign(this.option, options);

    // Set _this so we can access it from anywhere
    var _this = this;

    var currentSlider;
    var interval;
    var slider = document.querySelector(_this.option.selector);
    if (!slider) {
        return false;
    }
    var slides = slider.querySelectorAll(_this.option.slideSelector);

    // Add dots to dotContainer if present
    if (_this.option.dotContainer && slider.querySelector(_this.option.dotContainer)) {
        var dots = slider.querySelector(_this.option.dotContainer);
        for (var i = 1; i <= slides.length; i++) {
            var dot = document.createElement('SPAN');
            dot.setAttribute('data-slide', i);
            dot.addEventListener('click', function (e) {
                clearInterval(interval);
                _this.slideGo(this.getAttribute('data-slide'));
            });
            dot.classList.add(_this.option.dotSelector.substr(1));
            dot.appendChild(document.createTextNode(i));
            dots.appendChild(dot);
        }
    }
    var dots = slider.querySelectorAll(_this.option.dotSelector);

    this.slideGo = function (n) {
        if (currentSlider) {
            slides[currentSlider - 1].classList.remove(_this.option.activeClass);
            if (dots.length) {
                dots[currentSlider - 1].classList.remove(_this.option.activeClass);
            }
        }

        currentSlider = n;
        if (currentSlider > slides.length) {
            currentSlider = 1;
        }
        if (currentSlider < 1) {
            currentSlider = slides.length;
        }

        slides[currentSlider - 1].classList.add(_this.option.activeClass);
        if (dots.length) {
            dots[currentSlider - 1].classList.add(_this.option.activeClass);
        }
    }

    this.slidePrevious = function () {
        this.slideGo(currentSlider - 1);
    }
    this.slideNext = function () {
        this.slideGo(currentSlider + 1);
    }

    if (slides.length && this.option.interval > 0) {
        var interval = setInterval(function () {
            _this.slideNext();
        }, this.option.interval);
    }

    this.slideGo(1);
    if (_this.option.buttonPreviousSelector && slider.querySelector(_this.option.buttonPreviousSelector)) {
        slider.querySelector(_this.option.buttonPreviousSelector).addEventListener('click', function () {
            clearInterval(interval);
            _this.slidePrevious();
        });
    }
    if (_this.option.buttonNextSelector && slider.querySelector(_this.option.buttonNextSelector)) {
        slider.querySelector(_this.option.buttonNextSelector).addEventListener('click', function () {
            clearInterval(interval);
            _this.slideNext();
        });
    }
    if (_this.option.keyboardEnabled) {
        window.addEventListener('keydown', function (e) {
            var event = window.event ? window.event : e;
            if (event.keyCode == 37) {
                clearInterval(interval);
                _this.slidePrevious();
            }
            if (event.keyCode == 39) {
                clearInterval(interval);
                _this.slideNext();
            }
        })
    }

    if (_this.option.touchwipe && 'ontouchstart' in window) {
        // Activate touch gestures
        slider.addEventListener('touchstart', function (evt) {
            xDown = evt.touches[0].clientX;
            console.log(xDown);
        }, false);
        slider.addEventListener('touchmove', function (evt) {
            if (!xDown) {
                return;
            }
            var xDiff = xDown - evt.touches[0].clientX;
            if (Math.abs(xDiff) >= _this.option.touchsensitivity) {
                if (xDiff > 0) {
                    clearInterval(interval);
                    _this.slidePrevious();
                } else {
                    clearInterval(interval);
                    _this.slideNext();
                }
            }
            console.log(xDown, xDiff);
            xDown = null;
        }, false);

        // Hide arrow keys on touch devices
        if (!_this.option.touchkeys) {
            if (e = slider.querySelector(_this.option.buttonPreviousSelector)) e.style.display = 'none';
            if (e = slider.querySelector(_this.option.buttonNextSelector)) e.style.display = 'none';
        }
    }
}
