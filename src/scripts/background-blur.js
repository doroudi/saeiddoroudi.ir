export function setBlurEffect(selector) {
  let a
  let h
  let k
  let g
  let c
  let n = null
  let r = null
  const f = []
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
    e()
  }

  function e() {
    a = document.createElement('canvas')
    a.className = 'animated-bg'
    a.width = window.innerWidth
    a.height = window.innerHeight
    document.querySelector(selector).appendChild(a)
    h = document.createElement('canvas')
    h.width = window.innerWidth
    h.height = window.innerHeight

    if (a.getContext && a.getContext('2d')) {
      k = a.getContext('2d')
      g = h.getContext('2d')
      g.lineCap = 'round'
      g.shadowColor = '#CCC'
      g.shadowBlur = navigator.userAgent.includes('Firefox') ? 0 : 30
      c = new Image(selector)
      let d = getBackgroundImage(selector)
      if (d) {
        c.addEventListener('load', m, { once: true })
        d = d.replace(/url\((.*)\)/, '$1').replace(/["']/gi, '').replace(/\.jpg/, '_color.jpg')
        c.setAttribute('src', d)
      }
    }
  }

  function getBackgroundImage(selector) {
    const el = document.querySelector(selector)
    const style = el.currentStyle || window.getComputedStyle(el, false)
    return style.backgroundImage.slice(4, -1).replace(/"/g, '')
  }

  function m() {
    let d
    let b = Date.now()
    q = b > u + 1500 ? !1 : !0
    n && q && f.splice(0, 0, {
      time: b,
      x: n,
      y: r - 100,
    })
    for (d = 0; d < f.length;) b - f[d].time > 1e3 ? f.splice(d, f.length) : d++
    f.length > 0 && window.l(m)
    g.clearRect(0, 0, h.width, h.height)
    for (d = 1; d < f.length; d++) {
      const e = Math.sqrt((f[d].x - f[d - 1].x) ** 2 + (f[d].y - f[d - 1].y) ** 2)
      g.strokeStyle = `rgba(0,0,0,${Math.max(1 - (b - f[d].time) / 1e3, 0)})`
      g.lineWidth = 100 + 75 * Math.max(1 - e / 50, 0)
      g.beginPath()
      g.moveTo(f[d - 1].x, f[d - 1].y)
      g.lineTo(f[d].x, f[d].y)
      g.stroke()
    }
    d = a.width
    b = a.width / c.naturalWidth * c.naturalHeight
    if (b < a.height) {
      b = a.height
      d = a.height / c.naturalHeight * c.naturalWidth
    }
    k.drawImage(c, 0, 0, d, b)
    k.globalCompositeOperation = 'destination-in'
    k.drawImage(h, 0, 0)
    k.globalCompositeOperation = 'source-over'
  }

  'createTouch' in document || b()
  window.l = (function () {
    return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function (a) {
      window.setTimeout(a, 1e3 / 60)
    }
  }())
}
