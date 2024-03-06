<script setup>
import { createBlurEffect } from '~/scripts/background-blur'

onMounted(() => {
  createBlurEffect('.bg-image')
})
</script>

<template>
  <section id="container" class="intro-effect-push main-section">
    <header class="header">
      <div class="bg-image">
        <AuthorName />
        <ScrollButton />
      </div>
    </header>
    <AboutMe />
  </section>
</template>

<style lang="scss">
.container:not(.notrans) button.scroll-btn {
  -webkit-transition: opacity 0.3s 0.5s;
  transition: opacity 0.3s 0.5s;
}

.container.modify:not(.notrans) button.scroll-btn {
  opacity: 0;
  pointer-events: none;
  -webkit-transition-delay: 0s;
  transition-delay: 0s;
}

.section {
  min-height: 100vh;
}

.main-section {

  .header {
    width: 100%;

    .bg-image {
      height: 100vh;
      display: flex;
      position: relative;
      flex-direction: column;
      justify-content: end;
      padding: 1.9rem;
      padding-bottom: 9rem;
      background-image: url(/assets/images/light.jpg);
      background-position-x: center;
      background-position-y: center;
      background-repeat: no-repeat;
      background-color: #f5fafe;
      background-size: 180%;
    }
  }

  .animated-bg {
    position: absolute;
    inset: 0;
    object-fit: cover;
  }
}

@media screen and (min-width: 640px) {
  .main-section {
    .header {
      .bg-image {
        padding: 3.8rem;
        padding-bottom: 3.8rem;
        background-size: cover;
        background-position: initial;
      }
    }
  }
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
</style>
