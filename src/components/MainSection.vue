<script setup>
import TypeIt from 'typeit'

import { setBlurEffect } from '~/scripts/background-blur'
import { applyIntroEffect } from '~/scripts/intro-effect'

onMounted(() => {
  new TypeIt('#description', {
    loop: true,
    speed: 100,
  })
    .type('Software Engineer')
    .pause(2000)
    .delete()
    .type('System Designer')
    .pause(2000)
    .delete()
    .type('.Net specialist')
    .pause(2000)
    .delete()
    .type('FrontEnd Professional')
    .pause(2000)
    .delete()
    .type('Open Source Contributor')
    .pause(2000)
    .delete()
    .go()

  setBlurEffect()
  applyIntroEffect('main-section', 'scroll-btn')
})
</script>

<template>
  <section class="main-section intro-effect-push">
    <div class="author-name">
      <h1 class="main-title">
        I'm SAEID<br>DOROUDI
      </h1>
      <h2 class="introduce">
        I'm: <span id="description" />
      </h2>
    </div>
  </section>
</template>

<style lang="scss">
.main-section {
  background-image: url(/assets/images/light.jpg);
  background-size: 265%;
  background-repeat: no-repeat;
  background-color: #f5fafe;
  background-position: top;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: start;
  padding: 1.9rem;

  .author-name {
    position: relative;
    z-index: 999;

    .main-title {
      font-family: "Montserrat", sans-serif;
      font-size: 3.9rem;
      line-height: 4.1rem;

    }

    .introduce {
      padding-top: .4rem;
      font-family: sans-serif;
      padding: .4rem 0.2rem;
      font-size: 1.5rem;

      #description {
        display: inline-block;
        background-color: var(--secondary);
        color: #000;
        padding: 0.1rem 0.3rem;
      }
    }
  }

  .animated-bg {
    position: absolute;
    inset: 0;
  }
}

@media screen and (min-width: 760px) {
  .main-section {
    padding: 3.8rem;
    background-image: url('/assets/images/light.jpg');
    background-size: cover;
    background-position: initial;

    .author-name {
      .main-title {
        font-size: 7rem;
        line-height: 6.2rem;
      }
    }

  }
}

.scroll-btn {
  position: fixed;
  bottom: 40px;
  left: 50%;
  z-index: 5000;
  display: block;
  margin-left: -0.5em;
  padding: 0;
  width: 1em;
  height: 1em;
  border: none;
  background: transparent;
  color: transparent;
  font-size: 2em;
  cursor: pointer;
}

.main-section:not(.notrans) .scroll-btn {
  -webkit-transition: opacity 0.3s 0.5s;
  transition: opacity 0.3s 0.5s;
}

.main-section.modify:not(.notrans) .scroll-btn {
  opacity: 0;
  pointer-events: none;
  -webkit-transition-delay: 0s;
  transition-delay: 0s;
}

.scroll-btn::before {
  position: absolute;
  bottom: 100%;
  left: -100%;
  padding: 0.8em;
  width: 300%;
  color: #fff;
  content: attr(data-info);
  font-size: 0.35em;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
}

.scroll-btn:focus {
  outline: none;
}

.scroll-btn span {
  position: relative;
  display: block;
  overflow: hidden;
  width: 100%;
  height: 100%;
}

.scroll-btn span::before {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  color: #fff;
  content: "\e097";
  text-transform: none;
  font-weight: normal;
  font-style: normal;
  font-variant: normal;
  font-family: 'icomoon';
  line-height: 1;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
