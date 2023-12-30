<script setup lang="ts">
interface Props {
  title: string
  description: string
}
defineProps<Props>()
</script>

<template>
  <div class="work-info flex flex-col py-6">
    <h3 class="title mb-4 font-bold font-mono">
      {{ title }}
    </h3>
    <p>{{ description }}</p>
  </div>
</template>

<style lang="scss" scoped>
.title {
    color: #000;
    position: relative;
    &::after {
        content: '';
        position: absolute;
        bottom: -4px;
        left: 0;
        height: 4px;
        width: 45px;
        background: #d2e1d2;

    }
}
</style>
