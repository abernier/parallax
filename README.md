//ax

# Usage

see: `index.html`

```html
<section style="display:flex; height:200vh;">
  <div data-parallax-dy="0">A</div>
    <div data-parallax-dy=".1">A</div>
    <div data-parallax-dy=".2">B</div>
    <div data-parallax-dy=".3">C</div>
    <div data-parallax-dy=".4">D</div>
    <div data-parallax-dy=".5">E</div>
    <div data-parallax-dy=".6">F</div>
    <div data-parallax-dy=".7">G</div>
    <div data-parallax-dy=".8">H</div>
    <div data-parallax-dy=".9">I</div>
    <div data-parallax-dy>J</div>
</section>

<script type="module">
import Parallax from './index.js'

new Parallax(document.querySelector('section'))
</script>
```