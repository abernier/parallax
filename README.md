[![NPM version](https://img.shields.io/npm/v/@abernier/parallax.svg?style=flat)](https://www.npmjs.com/package/@abernier/parallax)

//ax

DEMO: https://bl.ocks.org/abernier/raw/a67f6f78721b152c004c759ebb4387c4/

# INSTALL

client-side:

```js
import Parallax from 'https://unpkg.com/@abernier/parallax@1.0.2'
```

or via a bundler:

```js
import Parallax from '@abernier/parallax'
```

NB: you must yarn/npm install it before

# Usage

see: `index.html`

```html
<section>
  <div data-parallax-dy="0">A</div>
  <div data-parallax-dy=".1">B</div>
  <div data-parallax-dy=".2">C</div>
  <div data-parallax-dy=".3">D</div>
  <div data-parallax-dy=".4">E</div>
  <div data-parallax-dy=".5">F</div>
  <div data-parallax-dy=".6">G</div>
  <div data-parallax-dy=".7">H</div>
  <div data-parallax-dy=".8">I</div>
  <div data-parallax-dy=".9">J</div>
  <div data-parallax-dy>K</div>
</section>

<script type="module">
import Parallax from 'https://unpkg.com/@abernier/parallax@latest'

new Parallax(document.querySelector('section'))
</script>
```