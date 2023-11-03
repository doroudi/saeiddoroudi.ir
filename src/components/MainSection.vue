<script setup>
import TypeIt from 'typeit'

onMounted(() => {
  new TypeIt('#description', {
    loop: true,
    speed: 100,
  })
    .pause(2000)
    .delete()
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
    .go()
})
</script>

<template>
  <section class="main-section">
    <h1 class="main-title">
      I'm SAEID<br>DOROUDI
    </h1>
    <h2 class="introduce">
      I'm:  <span id="description" />
    </h2>
  </section>
</template>

<style lang="scss" scoped>
.main-section {
    border-left: solid 10px var(--primary);
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: start;
    padding: 3.8rem;

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
            padding: 0.1rem 0.3rem;
        }
    }
}
</style>
