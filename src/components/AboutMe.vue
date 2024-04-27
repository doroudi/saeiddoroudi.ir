<script setup>
const skills = [
  {
    title: 'FrontEnd',
    items: [
      { title: 'JS', percent: 90 },
      { title: 'TypeScript', percent: 80 },
      { title: 'VueJs', percent: 95 },
      { title: 'Nuxt', percent: 80 },
    ],
    content: 'JavaScript | TypeScript | Vue.js | PWA | React | Ionic | jQuery | HTML | CSS | Angular | Blazor | SSR/SSG | Cypress',
  },
  {
    title: 'BackEnd',
    items: [
      { title: 'C#', percent: 90 },
      { title: 'Asp.Net', percent: 92 },
      { title: 'SqlServer', percent: 80 },
      { title: 'RabbitMQ', percent: 75 },
      { title: 'OOP/Design Patterns', percent: 80 },
      { title: 'Python', percent: 45 },
    ],
    content: 'C# | .Net | ASP.Net | OOP | SQL Server | Redis | NoSQL | Testing | RabbitMQ | Kafka | EF Core | MongoDb',
  },

]

const experiences = [
  {
    period: '2020-Present',
    company: 'Hyperstar (Majid Al Futtaim)',
    jobTitle: 'FullStack Developer',
    description: `
Implement new Front-End infrastructure using Vue.Js 3 and TypeScript and update all front-end apps to new structure.
<br />Building multiple reuseable VueJs components published as NPM package that used in multiple projects.
<br />Find performance bottlenecks using performance testing, implement test processes for critical business sections.
<br />Building multiple back-office apps for multiple parts of organization to achieve up to 40% cost saving.
<br />Build Customers Loyalty mobile application and lottery that published as PWA web application with more than 300K users.
<br />Build multiple Dashboard applications for different parts of organization using Vue3 and deploy to K8s Cluster.

    `,
  },
  {
    period: '2018-2020',
    company: 'Mobinnet',
    jobTitle: 'FullStack Developer',
    description:
      `Leading Front-End team and coaching team members and reviewing codes and make technical decisions.
      <br />Build Mobinnet customers Mobile app (MyMobinnet) using PWA and Asp.Net Core and Vue which responds to more than 70% of requests (More than 500K active users) beside web version after a little while.
      <br />Implement modem troubleshoot application using Ionic (angular) to help customers to find and fix their internet connectivity issues.
      <br />Find Performance issues and design new structure for existing eCare System using .Net Core, CQRS, Redis, Kafka, HA Proxy, Azure DevOps witch results in 99.99% uptime system.

    `,
  },
  {
    period: '2017-2018',
    company: 'ArtimMehr',
    jobTitle: 'Mobile Developer',
    description: `
      Build shopping mobile app for Balakmarket, SalemMarket  using Ionic for local shopping centers and deploy them to AppStore and PlayStore. <br />
      Build website for Go2TR company
    `,
  },
  {
    period: '2017-2018',
    company: 'Elcaco',
    jobTitle: 'CoFounder - Senior Developer',
    description: `
      Build SMS based Lottery System for Food industry factories and build simpler version for restaurants using Asp.Net and AngularJs.
      <br />Build TeleHub (Telegram Directory App) Mobile Application and Service and publish it to AppStore and Windows Store.
      <br />Build Iran Football League Mobile app and publish it to Bazaar and reach thousands active users.
      <br />Build multiple shopping mobile apps using Ionic for local shopping centers and deploy them to AppStore and PlayStore

    
    `,
  },

  {
    period: '2017-2018',
    company: '',
    jobTitle: 'Freelancer Developer',
    description: `
      Build Abna-News Agency QA Multilingual website (Asp.Net 4 and MVC).<br />
      Build Application for managing Tax for municipality of Marand.<br />
      Build Websites and Applications for BlogSky, IranArmy, Tabriz University, Hoopa and Barayand Publishing, and many other clients.<br />
      Build ThemeStudio.ir website and sell blog themes and get orders to develop Websites<br />
    `,
  },
  {
    period: '2017-2018',
    company: 'Tabriz University of College',
    jobTitle: 'Bsc Degree',
    description: 'Bachelor of Software Engineering technologies',
  },
]
</script>

<template>
  <section id="about" class="section content p-6 md:p-8">
    <div class="mx-auto container">
      <div class="flex flex-col pt-4 md:flex-row md:pt-10">
        <div class="author-image w-full flex items-start justify-center p-4 md:w-1/5">
          <div class="image-border">
            <img src="@/assets/images/profile.jpg" alt="سعید درودی saeid doroudi">
            <div class="open-to-work" />
          </div>
        </div>
        <div class="w-full">
          <h3 class="bubble">
            About Me
          </h3>
          <h2 class="name py-2">
            Saeid Doroudi
          </h2>
          <p class="py-3 text-dark">
            I'm a Full Stack Software developer with more than 15 years of experience in software industry,<br>
            especially in Microsoft .Net ecosystem and Web with experience in both BackEnd and FrontEnd realm.
            <br>
            Loving implement UI and build client side applications and SPA solutions in Vue and React.<br>
            I am an educated software engineer who loves to learn new things and face challenges.
          </p>

          <div class="center my-4 flex items-center">
            <a
              title="Download Resume" href="/uploads/Saeid_Doroudi_Resume.pdf" target="_blank"
              class="mx-1 flex items-center border-2 border-green-600 rounded-full bg-transparent p-2 text-sm font-semibold text-green-600 transition duration-300 hover:(border-transparent bg-green-600 text-white) md:p-3 focus:(outline-none ring-2 ring-offset-2 ring-green-600)"
            >
              Download CV
              <!-- <i class="i-mdi:arrow-down ml-1 inline-block" /> -->
            </a>

            <a title="Github" class="round-link" href="https://github.com/doroudi" target="_blank">
              <span class="i-mdi:github font-size-1.5em" />
            </a>
            <!-- <a title="" class="round-link" href="https://stackoverflow.com/users/5292901/saeid-doroudi" target="_blank">
              <span class="i-mdi:stack-overflow font-size-1.5em" />
            </a> -->
            <a title="LinkedIn" class="round-link" href="https://www.linkedin.com/in/doroudi/" target="_blank">
              <span class="i-mdi:linkedin font-size-1.5em" />
            </a>
            <a title="Email" class="round-link" href="mailto:doroudi@outlook.com" target="_blank">
              <span class="i-mdi:email font-size-1.5em" />
            </a>
            <a title="Call" class="round-link" href="tel:+989101003894" target="_blank">
              <span class="i-mdi:phone font-size-1.5em" />
            </a>
          </div>

          <section class="grid grid-cols-1 gap-7 pt-6 md:grid-cols-3">
            <div class="md:col-span-2">
              <h3 class="bubble">
                Experiences
              </h3>
              <div class="pt-8">
                <Experience v-for="(item, i) of experiences" v-bind="item" :key="i" />
              </div>
            </div>
            <div class="">
              <h3 class="bubble">
                Skills
              </h3>

              <div class="pt-2">
                <SkillGroup v-for="(item, i) of skills" v-bind="item" :key="i" />
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
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

.image-border {
  padding: 0.5rem;
  display: inline-flex;
  justify-content: center;
  position: relative;

  &::after {
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    height: 100%;
    width: 77%;
    background: linear-gradient(60deg, #f7e533, #e5573a, #e33d6b, #84508d, #597fc9, #139eb3, #11a38f, #77c98c);
    border-radius: 50%;
    z-index: -1;
    animation: animated-gradient 2s ease alternate infinite;
    background-size: 300% 300%;
    transform: translate(-50%, -50%);
  }

}

.author-image {
  img {
    border-radius: 50%;
    border: none;
    max-width: 75%;

  }

  .open-to-work {
    position: absolute;
    inset: 2px;
    z-index: 1;
    background: url('@/assets/images/open-to-work.png') no-repeat center center;
    background-size: contain;
  }

}

@keyframes animated-gradient {
  0% {
    background-position: 0% 50%;
  }

  50% {
    background-position: 100% 50%;
  }

  100% {
    background-position: 0% 50%;
  }
}
</style>
