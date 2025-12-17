# How to work with animation component

- Animations are tied to data-attrs added to elements. You can choose from 15 different defined combinations of animations + set animation `duration` and `delay` for each animated element.

- For the animation component to work properly, the `<body>` element must be set to `overflow-x: hidden`.

- Animations are only available for visitors who don't use `IE`!!!!

- If you do not want to have animations on your mobile phone, then it is necessary to set value to `breakpoint` variable in components/animation/script.js, `breakpoint` is the value of the browser window width from which the animation is active if it is not intended for mobile phones

## Animation works if:

  - It is necessary to add the `is-animation` class to `<body>` (it will be removed via js if `window.innerWidth` is greater than `breakpoint` value).

  - The elements we want to animate must have set the data-attribute `data-animation="XXX"` with the specified name of the animation type (components/animation/style.less).

  - We can set the data attribute `data-animation-duration` on each element, which sets the length of the animation duration(in ms)
  For `data-animation-duration` we have the option to enter values from `0 - 3000 (ms) entered in hundreds of milliseconds (100ms)` (or you can add more generated selectors in `each loop` in components/animation/style.less).

  - It is also possible to enter the data-attribute `data-animation-delay`, which sets the animation delay (entered in hundreds of milliseconds (100ms)).
  For `data-animation-delay` we have the option to enter values from `0 - 2000 (ms) entered in hundreds of milliseconds (100ms)` (or you can add more generated selectors in `each loop` in components/animation/style.less).

## Example

```css

  /* located at components/animation/style.less */

  /* In components/animation/style.less set animation timing variable */

  @transition-timing: linear|ease|ease-in|ease-in-out|... /* specifies the speed curve of the transition effect */

  - or you can use online generator for cubic-bezier `http://www.roblaplaca.com/examples/bezierBuilder/`

```

```js

  // located at components/animation/script.js

  // Set data for js variables

  const breakpoint = 768; // set the breakpoint from which you want the animations to be active if you do not want the animations to be on mobile, set to zero if you want the animations to be on mobile

  - `config` - object where values for the observer are entered

	const config = {
    root: null, // an element whose surface our element is to overlap. Usually we want to use the whole viewport, so set `root: null`
    rootMargin: "0px", // outer edge around root element, when the watchdog is activated. RootMargin: '-50px 0px' - starts js fifty pixels before the element appears in the view
    threshold: .2 // value: 0 - 1, The value of how much of the element should be in the view when js is run for animation
    // treshold can make an error when animation element is so long - values for treshold is in percentage so in this example it is 20% of the element must be visible in view to run the animation. Change this value if your animated elements are too low or too high
	};

```

```php

  <div data-animation="fade" data-animation-duration="3000" data-animation-delay="900">
    // the animation on example element above is the fade type - only opacity, no shift and the course of the animation will last 3s (3000ms) and animation delay is set to 900ms. The animation will be applied to div with data-attr.
    <h2>Nadpis</h2>
    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing...</p>
  </div>

```

## List of data-animation values (for data-animation="..." attribute)

`fade`
`fade-right`
`fade-left`
`fade-bottom`
`fade-down-left`
`fade-down-right`
`fade-up-left`
`fade-up-right`
`zoom-in`
`zoom-in-right`
`zoom-in-left`
`zoom-in-up`
`zoom-in-down`
`zoom-in-bottom`
