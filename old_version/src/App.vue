<script setup lang="ts">
useHead({
  title: `Home Page of Saeid Doroudi - Professional Web Developer`,
  meta: [
    { name: 'description', content: 'Personal CV of Saeid Doroudi, Professional Software developer, وبسایت شخصی سعید درودی' },
    { name: 'keywords', content: 'Saeid Doroudi, CV, .Net Developer, Programming, سعید درودی' },
    {
      name: 'theme-color',
      content: () => '#4CAF50',
    },
  ],
  link: [
    {
      rel: 'icon',
      type: 'image/png',
      href: () => '/favicon.png',
    },
  ],
})
</script>

<template>
  <RouterView />
</template>
