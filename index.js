const TRANSFORMPROP = ["transform", "webkitTransform", "MozTransform", "msTransform"].filter(function (prop) {
  return prop in document.documentElement.style
})[0]

//
// https://www.html5rocks.com/en/tutorials/speed/animations/?redirect_from_locale=fr#debouncing-scroll-events
//

let lastScrollY = window.pageYOffset
function onScroll() {
  requestTick()
  
  lastScrollY = window.pageYOffset
}

let ticking = false
function requestTick() {
  if (!ticking) {
    ticking = true
    requestAnimationFrame(update)
  }
}
function update() {
  var l = instances.length
  
  var instance
  while (l--) {
    instance = instances[l]
    
    var percent = instance.percent(lastScrollY)
    instance.draw(percent)
  }
  
  // allow further rAFs to be called
  ticking = false
}
window.addEventListener('scroll', onScroll, false)

//
//
//

const instances = []

function Parallax(el, options = {}) {
  this.el = el
  
  this.amplitude = options.amplitude || 1
  
  // Add .parallax class
  this.el.classList.add('parallax')
  
  // setDims
  this.setDims()
  
  //
  // initial draw
  //
  
  var percent = this.percent(lastScrollY)
  
  this.setItems()
  
  this.draw(percent)
  
  instances.push(this)
}
Parallax.prototype.setItems = function () {
  this.items = Array.from(this.el.querySelectorAll('[data-parallax-dy]'))
}
Parallax.prototype.setDims = function () {
  //console.log('setDims')
  
  const rect = this.el.getBoundingClientRect()
  
  this.offsettop = rect.top + window.pageYOffset - document.documentElement.clientTop  // .offset() equivalent, see: https://stackoverflow.com/a/28857255/133327
  this.WH = window.innerHeight
  this.h = rect.height
};
Parallax.prototype.percent = function (scrolltop = window.pageYOffset) {
  var percent = ((this.offsettop - scrolltop) + this.h) / (this.WH + this.h)
  
  return percent
};
Parallax.prototype.draw = function (percent = this.percent()) {
  if (percent > 0 && percent < 1) {
    this.items.forEach(el  => {
      
      const dy = +(el.dataset.parallaxDy || this.amplitude)
      console.log('dy=', dy)
      
      const ty = 100*(2*(percent - .5) * dy)
      
      let t
      if (Parallax.has3d) {
        t = 'translate3d(0,' + ty + '%,0)'
      } else {
        t = 'translate(0,' + ty + '%)'
      }
      
      el.style[TRANSFORMPROP] = t
    })
  }
}

// http://stackoverflow.com/questions/5661671/detecting-transform-translate3d-support#answer-12621264
function has3d() {
  const el = document.createElement('p')
  let has3d
  const transforms = {
    'webkitTransform':'-webkit-transform',
    'OTransform':'-o-transform',
    'msTransform':'-ms-transform',
    'MozTransform':'-moz-transform',
    'transform':'transform'
  }
  
  // Add it to the body to get the computed style.
  document.body.insertBefore(el, null)
  
  for (let t in transforms) {
    if (el.style[t] !== undefined) {
      el.style[t] = "translate3d(1px,1px,1px)"
      has3d = window.getComputedStyle(el).getPropertyValue(transforms[t])
    }
  }
  
  document.body.removeChild(el)
  
  return (has3d !== undefined && has3d.length > 0 && has3d !== "none")
}
Parallax.has3d = has3d()

// resize => setDims
window.addEventListener('resize', event => instances.forEach(instance => instance.setDims()))

export default Parallax
