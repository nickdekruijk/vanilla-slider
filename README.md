# vanilla-slider
A simple slider script with css transitions for effects. It works by applying an active class on the the active slide so you can customize all transitions with css.

## Usage
Add some slider elements to your html for example
```html
<section class="slider">
    <div class="slide">
        <img src="image1.jpg" alt="First image">
        <h2>An image!</h2>
    </div>
    <div class="slide">
        <img src="image2.jpg" alt="Second image">
        <h2>Another image</h2>
    </div>
    <div class="slide">
        <img src="image3.jpg" alt="Third image">
    </div>
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
```
