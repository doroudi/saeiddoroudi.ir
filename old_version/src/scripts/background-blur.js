export function createBlurEffect(selector) {
  let bgCanvas
  let blurCanvas
  let k
  let g
  let c
  let n = null
  let r = null
  const mouseCoordinates = []
  let u = false
  let q = true
  function b() {
    const el = document.querySelector(selector)
    el.addEventListener('mousemove', (a) => {
      n = a.clientX
      r = a.clientY
      u = Date.now()
      q || m()
    })
    drawBlurEffect()
  }

  function drawBlurEffect() {
    bgCanvas = document.createElement('canvas')
    bgCanvas.className = 'animated-bg'
    bgCanvas.width = window.innerWidth
    bgCanvas.height = window.innerHeight
    document.querySelector(selector).appendChild(bgCanvas)
    blurCanvas = document.createElement('canvas')
    blurCanvas.width = window.innerWidth
    blurCanvas.height = window.innerHeight

    if (bgCanvas.getContext && bgCanvas.getContext('2d')) {
      k = bgCanvas.getContext('2d')
      g = blurCanvas.getContext('2d')
      g.lineCap = 'round'
      g.shadowColor = '#CCC'
      g.shadowBlur = navigator.userAgent.includes('Firefox') ? 0 : 20
      c = new Image(selector)
      let backgroundImage = loadBackgroundImage(selector)
      if (backgroundImage) {
        c.addEventListener('load', m, { once: true })
        backgroundImage = backgroundImage.replace(/url\((.*)\)/, '$1').replace(/["']/gi, '').replace(/\.jpg/, '_color.jpg')
        c.setAttribute('src', backgroundImage)
      }
    }
  }

  function loadBackgroundImage(selector) {
    const el = document.querySelector(selector)
    const style = el.currentStyle || window.getComputedStyle(el, false)
    return style.backgroundImage.slice(4, -1).replace(/"/g, '')
  }

  function m() {
    let d
    let initializeBlurEffect = Date.now()
    q = !(initializeBlurEffect > (u + 1500))
    n && q && mouseCoordinates.splice(0, 0, {
      time: initializeBlurEffect,
      x: n,
      y: r,
    })
    for (d = 0; d < mouseCoordinates.length;) initializeBlurEffect - mouseCoordinates[d].time > 2000 ? mouseCoordinates.splice(d, mouseCoordinates.length) : d++
    mouseCoordinates.length > 0 && window.l(m)
    g.clearRect(0, 0, blurCanvas.width, blurCanvas.height)
    for (d = 1; d < mouseCoordinates.length; d++) {
      const e = Math.sqrt((mouseCoordinates[d].x - mouseCoordinates[d - 1].x) ** 2 + (mouseCoordinates[d].y - mouseCoordinates[d - 1].y) ** 2)
      g.strokeStyle = `rgba(0,0,0,${Math.max(1 - (initializeBlurEffect - mouseCoordinates[d].time) / 2000, 0)})`
      g.lineWidth = 50 + 50 * Math.max(1 - e / 50, 0)
      g.beginPath()
      g.moveTo(mouseCoordinates[d - 1].x, mouseCoordinates[d - 1].y)
      g.lineTo(mouseCoordinates[d].x, mouseCoordinates[d].y)
      g.stroke()
    }
    d = bgCanvas.width
    initializeBlurEffect = bgCanvas.width / c.naturalWidth * c.naturalHeight
    if (initializeBlurEffect < bgCanvas.height) {
      initializeBlurEffect = bgCanvas.height
      d = bgCanvas.height / c.naturalHeight * c.naturalWidth
    }
    k.drawImage(c, 0, 0, d, initializeBlurEffect)
    k.globalCompositeOperation = 'destination-in'
    k.drawImage(blurCanvas, 0, 0)
    k.globalCompositeOperation = 'source-over'
  }

  'createTouch' in document || b()
  window.l = (function () {
    return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function () {
      window.setTimeout(setBlurEffect, 17)
    }
  }())
}
