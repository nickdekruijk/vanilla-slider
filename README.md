# vanilla-slider
A simple slider script with css transitions for effects. It works by applying an active class on the the active slide so you can customize all transitions with css.

## Usage
Add some slider elements to your html for example
```html
<section class="slider" aria-label="Slider" id="slider">
    <div class="slide"role="tabpanel" aria-roledescription="slide"  id="slide-1" aria-label="Slide 1">
        <img src="image1.jpg" alt="First image">
        <h2>An image!</h2>
    </div>
    <div class="slide" role="tabpanel" aria-roledescription="slide" id="slide-2" aria-label="Slide 2">
        <img src="image2.jpg" alt="Second image">
        <h2>Another image</h2>
    </div>
    <div class="slide" role="tabpanel" aria-roledescription="slide" id="slide-3" aria-label="Slide 3">
        <img src="image3.jpg" alt="Third image">
    </div>
    <span class="slider-prev" aria-label="Previous slide">></span>
    <span class="slider-next" aria-label="Next slide">></span>
    <span class="slider-dots" role="tablist" aria-label="Slides"></span>
</section>
```
Include the main script
```js
<script src="/vanilla-slider/slider.js"></script>
```
Add the following javascript to your project and change where needed
```js
var slider = new Slider({
    selector: '.slider',
    slideSelector: '.slide',
    interval: 5000,
});
```
And finaly apply some css, for example
```css
.slider {height:33.333333vw;position:relative}
.slider .slide {position:absolute;top:0;right:0;bottom:0;left:0}
.slider .slide IMG {display:block;width:100%;height:100%;object-fit:cover}
.slider .slide H2 {position:absolute;z-index:1;color:$white;bottom:0;font-size:3vw;padding:1vw}
.slider .slide {opacity:0;transition:opacity 0s, transform 0s;transition-delay:1s;z-index:1}
.slider .slide.active {opacity:1;z-index:2;transition-delay:0s;transition:opacity 1s, transform 1s}
.slider:hover .slider-prev,
.slider:hover .slider-next {position:absolute;top:50%;display:block;transform:translateY(-50%);z-index:10;width:40px;height:40px;border-radius:100%;background-color:rgba(0,0,0,0.2);cursor:pointer}
.slider:hover .slider-prev:hover,
.slider:hover .slider-next:hover {background-color:rgba(0,0,0,0.4)}
.slider .slider-prev::before,
.slider .slider-next::before {content:'';width:14px;height:14px;display:block;position:absolute;border-top:3px solid #fff;border-right:3px solid #fff;top:50%;left:50%}
.slider .slider-prev {left:10px}
.slider .slider-next {right:10px}
.slider .slider-prev::before {transform:translate(-6px,-50%) rotate(-135deg)}
.slider .slider-next::before {transform:translate(-12px,-50%) rotate(45deg)}
.slider .slider-dots {position:absolute;bottom:0;right:0;z-index:10;line-height:1}
.slider .slider-dot {display:inline-block;width:11px;height:11px;margin:0 5px;border:1px solid #ccc;border-radius:100%;background-color:#ccc;cursor:pointer;color:transparent}
.slider .slider-dot.active {background-color:#fff}

```
