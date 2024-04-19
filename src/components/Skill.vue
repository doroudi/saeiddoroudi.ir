<script setup lang="ts">
interface Props {
  title: string
  content: string
}
defineProps<Props>()
</script>

<template>
  <div class="work-info flex flex-col py-6">
    <h3 class="title mb-4 font-bold font-mono">
      {{ title }}
    </h3>
    <p class="text-dark-100">
      {{ content }}
    </p>
  </div>
</template>

<style lang="scss" scoped>
.title {
    color: #000;
    position: relative;
    font-size:1.2rem;
    &::after {
        content: '';
        position: absolute;
        bottom: -4px;
        left: 0;
        height: 4px;
        width: 45px;
        background: #4caf50;

    }
}
</style>
