<script setup lang="ts">
useHead({
  title: 'Saeid Doroudi',
  meta: [
    { name: 'description', content: 'Personal CV of Saeid Doroudi, Professional Software developer' },
    {
      name: 'theme-color',
      content: () => isDark.value ? '#EEBB00' : '#ffffff',
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
