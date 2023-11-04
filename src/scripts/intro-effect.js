export function applyIntroEffect(containerSelector, buttonSelector) {
  const keys = [32, 37, 38, 39, 40]

  function preventDefault(e) {
    e = e || window.event
    if (e.preventDefault)
      e.preventDefault()
    e.returnValue = false
  }

  function keydown(e) {
    for (let i = keys.length; i--;) {
      if (e.keyCode === keys[i]) {
        preventDefault(e)
        return
      }
    }
  }

  function touchmove(e) {
    preventDefault(e)
  }

  function disable_scroll() {
    window.onmousewheel = document.onmousewheel = wheel
    document.onkeydown = keydown
    document.body.ontouchmove = touchmove
  }

  function enable_scroll() {
    window.onmousewheel = document.onmousewheel = document.onkeydown = document.body.ontouchmove = null
  }

  const docElem = window.document.documentElement
  let scrollVal
  let isRevealed
  let noscroll
  let isAnimating
  const container = document.querySelector(containerSelector)
  const trigger = container.querySelector(buttonSelector)

  function scrollY() {
    return window.pageYOffset || docElem.scrollTop
  }

  function scrollPage() {
    scrollVal = scrollY()

    if (noscroll) {
      if (scrollVal < 0)
        return false
      // keep it that way
      window.scrollTo(0, 0)
    }

    if (container.classList.contains('notrans')) {
      container.classList.toggle('notrans')
      return false
    }

    if (isAnimating)
      return false

    if (scrollVal <= 0 && isRevealed)
      toggle(0)

    else if (scrollVal > 0 && !isRevealed)
      toggle(1)
  }

  function toggle(reveal) {
    isAnimating = true

    if (reveal) {
      container.classList.add('modify')
    }
    else {
      noscroll = true
      disable_scroll()
      container.classList.remove('modify')
    }

    // simulating the end of the transition:
    setTimeout(() => {
      isRevealed = !isRevealed
      isAnimating = false
      if (reveal) {
        noscroll = false
        enable_scroll()
      }
    }, 1200)
  }

  // refreshing the page...
  const pageScroll = scrollY()
  noscroll = pageScroll === 0

  disable_scroll()

  if (pageScroll) {
    isRevealed = true
    container.classList.add('notrans')
    container.classList.add('modify')
  }

  window.addEventListener('scroll', scrollPage)
  trigger.addEventListener('click', () => {
    toggle('reveal')
  })
}
