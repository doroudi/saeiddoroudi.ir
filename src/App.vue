<script setup lang="ts">
useHead({
  title: 'Saeid Doroudi',
  meta: [
    { name: 'description', content: 'Personal CV of Saeid Doroudi, Professional Software developer' },
    {
      name: 'theme-color',
      content: () => isDark.value ? '#4CAF50' : '#ffffff',
    },
  ],
  link: [
    {
      rel: 'icon',
      type: 'image/svg+xml',
      href: () => preferredDark.value ? '/favicon-dark.svg' : '/favicon.svg',
    },
  ],
})
</script>

<template>
  <RouterView />
</template>
