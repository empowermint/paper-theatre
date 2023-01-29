# paper-theatre

This a quick experiment with pointer events to create an easily configurable mouse-responsive parallax effect.

I'm the production editor of *Shoreline of Infinity*, a science-fiction magazine, and this project came about because I want to create a re-usable codebase for creating interactive, animated illustrations to go with the stories we publish.

I played with Pollock's toy paper theatres as a child and always really enjoyed the complex visual effects than can be achieved with such simple pieces.

## Architecture

I wanted to create something that was adaptable and configurable, so the setup uses CSS custom properties which can be set in inline HTML or via JavaScript. This also means we take advantage of the native performance of CSS animations.

Using classes to identify layers means that any HTML element can be used as a layer or placed inside one, and any technique can be used to position or animate items inside each layer. For example, multiple image elements, CSS background images and other shapes, SVGs, and video embeds can all be included.

## Configuration

Each layer of the paperTheatre accepts CSS custom properties to configure how it responds to mouse/touch motion.

The simplest way to adjust custom properties is with inline HTML:

```HTML
<div class="paperTheatre">
  <div class="paperLayer" style="--sensitivityX: -0.2; --initX: 100"> // <- Custom properties
    <img src="./image-content.jpg" />
  </div>
  <div class="paperLayer" style="--sensitivityY: 2; --initY: 50"> // <- Custom properties
    <img src="./image-content2.jpg" />
  </div>
</div>
```

Each property has X and Y options which respond separately to pointer movements on their respective axes.

### Initial position

Use `--initX` and `--initY` to configure the absolute position of the layer when the pointer is in the exact centre of the theatre window, where `0, 0` is the top left corner and `100, 100` is the bottom right corner.

- If you set only one initial position, the other will default to the same value. This is useful for centering a layer.
- If you set neither position, both default to `0`, positioning the layer in the top left of the theatre window.

### Sensitivity

Use `--sensitivityX` and `sensitivityY` to configure the responsiveness of each layer to pointer movement, where `0` is no movement at all and there is no upper or lower bound.

- Layers with a higher sensitivity will move more and therefore appear closer to the theatre window.
- Layers with a negative sensitivity will move in the opposite direction from the pointer.
- If you set only one sensitivity property, the other will default to the same value.
- If you set neither sensitivity, the default value is `10`.

### Rotation

Use `--rotateX` and `--rotateY` to configure the amount of rotation applied to shifted layers, where `0` is no rotation and `360` is a full turn as the pointer moves from the center to any edge.

- If you set only one rotation, the other defaults to `0`. (This is different from the other properties.)
- If you leave both rotation properties blank, the value defaults to `0` and no rotation will occur.
