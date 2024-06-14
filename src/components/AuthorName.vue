<script setup>
import TypeIt from 'typeit'
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

  applyIntroEffect('.main-section', '.scroll-btn')
})
</script>

<template>
  <div class="author-name">
    <h2 class="main-title">
      I'm SAEID<br>DOROUDI
    </h2>
    <h2 class="introduce">
      I'm: <span id="description" />
    </h2>
  </div>
</template>

<style lang="scss" scoped>
.author-name {
  position: relative;
  z-index: 999;
  user-select:none;

  .main-title {
    font-family: "Montserrat", sans-serif;
    font-size: 3.9rem;
    line-height: 4.1rem;
  }

  .introduce {
    font-family: 'JetBrains Mono', monospace;
    padding: .3rem 0.1rem;
    font-size: 1rem;

    #description {
      display: inline-block;
      background-color: var(--primary);
      color: #000;
      padding: 0.08rem 0.1rem;
    }
  }
}

@media screen and (min-width: 640px) {
  .author-name {

    .main-title {
      font-family: "Montserrat", sans-serif;
      font-size: 7rem;
      line-height: 6rem;
    }

    .introduce {

    padding: .6rem 0.2rem;
    font-size: 1.5rem;

    #description {
      padding: 0.1rem 0.3rem;
    }
  }
  }
}
</style>
