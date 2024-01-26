<script setup>
const skills = [
  {
    title: 'FrontEnd',
    content: 'JavaScript | TypeScript | Vue.js | PWA | React | Ionic | jQuery | HTML | CSS | Angular | Blazor | SSR/SSG | Cypress',
  },
  {
    title: 'BackEnd',
    content: 'C# | .Net | ASP.Net | OOP | SQL Server | Redis | NoSQL | Testing | RabbitMQ | Kafka | EF Core | MongoDb',
  },
  {
    title: 'Software design',
    content: 'System Design | Clean Architecture | MicroServices | Event Sourcing | CQRS | Agile | Web Security basics | TDD | BDD',
  },
  {
    title: 'Deployment',
    content: 'DevOps | AzureDevops | Github Actions | Docker | Kubernetes | E2E Testing ',
  },
  {
    title: 'Others',
    content: 'Ionic | WinForms | WPF | Telegram Bot | Speak in English, Turkish and Persian',
  },
]
</script>

<template>
  <section class="section content p-6 md:p-8">
    <div class="mx-auto container">
      <div class="flex flex-col pt-4 md:flex-row md:pt-10">
        <div class="author-image w-full flex items-start justify-center p-4 md:w-1/5">
          <img src="@/assets/images/profile.jpg" alt="سعید درودی saeid doroudi">
        </div>
        <div>
          <h3 class="bubble">
            About Me
          </h3>
          <h2 class="name py-2">
            Saeid Doroudi
          </h2>
          <p class="py-3 text-justify text-dark">
            Full Stack Software developer with more than 15 yrs of experience in software industry.<br>
            Developing Web and service based solutions (specially based on ASP.Net and Web Api) for more than a decade.
            <br>
            Loving implement UI and client side applications and SPA solutions in JavaScript ecosystem, specially in
            Vue<br>
            Educated Software architecture and System Designer with hands on experience in various businesses.
            <br>
            I'm seeking new job opportunity to learn more and do amazing works, feel free to contact me.
          </p>

          <div class="center my-4 flex items-center">
            <a
              href="/uploads/Saeid_Doroudi_Resume.pdf"
              class="mx-1 flex items-center border-2 border-green-600 rounded-full bg-transparent p-3 text-sm font-semibold text-green-600 transition duration-300 hover:(border-transparent bg-green-600 text-white) focus:(outline-none ring-2 ring-offset-2 ring-green-600)"
            >
              Download Resume
              <i class="i-mdi:arrow-down ml-2 inline-block" />
            </a>

            <a class="round-link" href="https://github.com/doroudi" target="_blank">
              <span class="i-mdi:github font-size-1.5em" />
            </a>
            <a class="round-link" href="https://stackoverflow.com/users/5292901/saeid-doroudi" target="_blank">
              <span class="i-mdi:stack-overflow font-size-1.5em" />
            </a>
            <a class="round-link" href="https://www.linkedin.com/in/saeiddoroudi/" target="_blank">
              <span class="i-mdi:linkedin font-size-1.5em" />
            </a>
            <a class="round-link" href="mailto:doroudi@outlook.com" target="_blank">
              <span class="i-mdi:email font-size-1.5em" />
            </a>
          </div>

          <section class="pb-3 pt-10">
            <h3 class="bubble">
              Skills
            </h3>

            <div class="mt-4" />
            <div class="">
              <Skill v-for="(item, i) of skills" v-bind="item" :key="i" />
            </div>
          </section>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.content {
  // background: #f3f3f5;
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
