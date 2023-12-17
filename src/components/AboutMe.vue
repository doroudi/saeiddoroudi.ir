<script setup>

</script>

<template>
  <section class="section content container">
    <div class="flex flex-row">
      <div class="author-image">
        <img src="@/assets/images/profile.jpg" alt="سعید درودی saeid doroudi">
      </div>
      <div>
        <h3 class="bubble">
          Hi I'm
        </h3>
        <h2 class="name">
          Saeid Doroudi.
        </h2>
        <p class="about-me-text pt-3">
          Full Stack Software developer with more than 15 yrs of experience in software industry.<br>
          I get familiar with programming because of a curiosity and register for programming class for QBasic and
          VB6<br>
          the journey start from there and continued with starting work as freelancer and then educate computer
          science in university
          after that I start to build multiple startup projects and continue to do freelancing for more than 8
          years.
          I worked full Stack based on .Net ecosystem (Web, Desktop, mobile, ...) and client side development with
          Angular,Vue and react.
          I also familiar with mobile development (especially Hybrid and Flutter).
        </p>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.content {
    background: #f3f3f5;
    padding: 5rem;
}

.name {
    font-size: 2.2rem;
    font-weight: bold;
}

.bubble {
    display: inline-block;
    background: var(--secondary);
    border-radius: 14px 14px 0px 14px;
    color: #FFF;
    padding: 0.3rem 0.8rem;
    font-weight: bold;
}

.about-me-text {
    width: 50%;
    text-align: justify;
}

.flex {
    display: flex;
}

.flex-row {
    flex-direction: row;
}

.author-image {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 410px;
    padding: 0 1rem 0 1rem;

    img {
        border-radius: 50%;
        border: solid 7px #d2e1d2;
    }
}
</style>
