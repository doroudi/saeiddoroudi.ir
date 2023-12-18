<script setup>
import { setBlurEffect } from '~/scripts/background-blur'

onMounted(() => {
  setBlurEffect('.bg-image')
})
</script>

<template>
  <main id="container" class="intro-effect-push main-section">
    <header class="header">
      <div class="bg-image">
        <AuthorName />
        <ScrollButton />
      </div>
    </header>
    <AboutMe />
  </main>
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
  min-height: 101vh;
}

.main-section {
  height: 100vh;

  .header {

    width: 100%;

    .bg-image {
      height: 101vh;
      display: flex;
      position: relative;
      flex-direction: column;
      justify-content: end;
      padding: 1.9rem;
      padding: 3.8rem;
      background-image: url(/assets/images/light.jpg);
      background-position-x: 2px;
      background-position-y: 4px;
      background-repeat: no-repeat;
      background-color: #f5fafe;
      background-size: cover;

    }
  }

  .animated-bg {
    position: absolute;
    inset: 0;
    object-fit: cover;
  }
}

@media screen and (min-width: 760px) {
  .main-section {
    .bg-image {

      padding: 3.8rem;
      background-image: url('/assets/images/light.jpg');
      background-size: cover;
      background-position: initial;
    }

    .author-name {
      .main-title {
        font-size: 7rem;
        line-height: 6.2rem;
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
