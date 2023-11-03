<script setup>
import TypeIt from 'typeit'

import { setBlurEffect } from '~/scripts/background-blur'

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

  setTimeout(() => {
    setBlurEffect()
  }, 1000)
})
</script>

<template>
  <section id="mainbg" class="main-section">
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
  // border-left: solid 10px var(--primary);
  background-image: url('@/assets/images/light.jpg');
  background-size: cover;
  background-color: #d2d2d2;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: start;
  padding: 3.8rem;

  .author-name {
    position: relative;
    z-index: 999;

    .main-title {
      font-family: "Montserrat", sans-serif;
      font-size: 7rem;
      /* text-transform: uppercase; */
      line-height: 6.2rem;

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
</style>
