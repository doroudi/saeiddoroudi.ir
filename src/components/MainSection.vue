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

  setBlurEffect('.bg-image')
  applyIntroEffect('.main-section', '.scroll-btn')
})
</script>

<template>
  <section id="container" class="intro-effect-push main-section container">
    <header class="header">
      <div class="bg-image">
        <div class="author-name">
          <h1 class="main-title">
            I'm SAEID<br>DOROUDI
          </h1>
          <h2 class="introduce">
            I'm: <span id="description" />
          </h2>
        </div>

        <a class="scroll-btn">
          <svg
            xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
            style="fill: rgba(0, 0, 0, 1);transform: ;msFilter:;"
          >
            <path d="m18.707 12.707-1.414-1.414L13 15.586V6h-2v9.586l-4.293-4.293-1.414 1.414L12 19.414z" />
          </svg>
        </a>
      </div>
    </header>
    <section class="section content">
      <div>Hi I'm Saeid Doroudi</div>
    </section>
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
  min-height: 101vh;
}

.main-section {
  height: 102vh;
  margin-top: -50px;
  .header {

    width: 100%;

    .bg-image {
      height: 100vh;
      display: flex;
      position: relative;
      flex-direction: column;
      justify-content: end;
      padding: 1.9rem;
      padding: 3.8rem;
      background-image: url(/assets/images/light.jpg);
      // background-size: 265%;
      background-repeat: no-repeat;
      background-color: #f5fafe;
      background-position: top;

      .author-name {
        position: relative;
        z-index: 999;

        .main-title {
          font-family: "Montserrat", sans-serif;
          font-size: 3.9rem;
          font-size: 7rem;
          line-height: 4.1rem;
          line-height: 6rem;

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
    }
  }

  .animated-bg {
    position: absolute;
    inset: 0;
  }
}

.content {
  background: #546E7A;
}

// @media screen and (min-width: 760px) {
//   .main-section {
//     .bg-image {

//       padding: 3.8rem;
//       background-image: url('/assets/images/light.jpg');
//       background-size: cover;
//       background-position: initial;
//     }

//     .author-name {
//       .main-title {
//         font-size: 7rem;
//         line-height: 6.2rem;
//       }
//     }

//   }
// }

.scroll-btn {
  position: fixed;
  bottom: 100px;
  right: 100px;
  z-index: 5000;

  width: 2em;
  height: 2em;
  display: flex;
  align-items: center;
  justify-content: center;

  font-size: 2em;
  cursor: pointer;
  background-color: var(--secondary);
  border-radius: 50%;
  transition: all;

  &:hover {
    background-color: var(--secondaryHover);
    transition: all 0.3s;
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
