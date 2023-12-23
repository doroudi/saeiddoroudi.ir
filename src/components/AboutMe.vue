<script setup>

</script>

<template>
  <section class="section content p-6 md:p-8">
    <div class="mx-auto container">
      <div class="flex flex-col pt-4 md:flex-row md:pt-10">
        <div class="author-image w-full flex items-center justify-center p-4 md:w-1/5">
          <img src="@/assets/images/profile.jpg" alt="سعید درودی saeid doroudi">
        </div>
        <div>
          <h3 class="bubble">
            About Me
          </h3>
          <h2 class="name py-2">
            Saeid Doroudi
          </h2>
          <p class="pt-3 text-justify">
            Full Stack Software developer with more than 15 yrs of experience in software industry.<br>
            Developing Web and service based solutions (specially based on ASP.Net and Web Api) for more than a decade. <br>
            Loving implement UI and client side applications and SPA solutions in JavaScript ecosystem and specially in Vue<br>
            Educated Software architecture and System Designer with hands on experience in various businesses.
          </p>
        </div>
      </div>
      <div class="my-3">
        <h3 class="bubble">
          What I'm Doing
        </h3>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.content {
  background: #f3f3f5;

}

.name {
  font-size: 2.2rem;
  font-weight: bold;
}

.bubble {
  display: inline-block;
  background: var(--primary);
  border-radius: 14px 14px 0px 14px;
  color: #FFF;
  padding: 0.3rem 0.8rem;
  font-weight: bold;
}

.name {
  color: #3a3a3a;
}

.about-me-text {
  width: 50%;
  text-align: justify;
}

.author-image {
  img {
    border-radius: 50%;
    border: solid 7px #d2e1d2;
    max-width: 75%;
  }
}
</style>
