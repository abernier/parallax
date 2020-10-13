[![NPM version](https://img.shields.io/npm/v/@abernier/parallax.svg?style=flat)](https://www.npmjs.com/package/@abernier/parallax)

//ax

# Usage

see: `index.html`

```html
<section>
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
import Parallax from 'https://unpkg.com/@abernier/parallax@1.0.0'

new Parallax(document.querySelector('section'))
</script>
```