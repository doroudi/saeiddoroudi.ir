<script setup lang="ts">
useHead({
  title: `Saeid Doroudi's Personal website`,
  meta: [
    { name: 'description', content: 'Personal CV of Saeid Doroudi, Professional Software developer, وبسایت شخصی سعید درودی' },
    { name: 'keywords', content: 'Saeid Doroudi, CV, .Net Developer, Programming, سعید درودی' },
    {
      name: 'theme-color',
      content: () => isDark.value ? '#4CAF50' : '#ffffff',
    },
  ],
  link: [
    {
      rel: 'icon',
      type: 'image/png',
      href: () => preferredDark.value ? '/favicon.png' : '/favicon.png',
    },
  ],
})
</script>

<template>
  <RouterView />
</template>
