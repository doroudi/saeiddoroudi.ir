<script setup lang="ts">
interface Props {
  title: string
  items: Array<{ title: string, percent: number }>
}
defineProps<Props>()
</script>

<template>
  <div class="work-info flex flex-col py-6">
    <h3 class="title mb-4 font-bold font-mono">
      {{ title }}
    </h3>
    <div v-for="(item, index) in items" :key="index">
      <div class="my-1 flex justify-between text-dark-100">
        <h4>{{ item.title }}</h4>
        <span class="text-sm text-gray-5">{{ item.percent }}%</span>
      </div>
      <div class="skill-container">
        <div class="percentage" :style="{ width: `${item.percent}%` }" />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.title {
  color: #000;
  position: relative;
  font-size: 1.2rem;
}

.skill-container {
  position: relative;
  display: inline-block;
  background-color: #ebeef2;
  -moz-border-radius: 8px;
  -webkit-border-radius: 8px;
  border-radius: 8px;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
  height: 6px;
  margin-bottom: 8px;
  width: 100%;

  .percentage {
    background-color: var(--primary);
    -moz-border-radius: 9px;
    -webkit-border-radius: 9px;
    border-radius: 9px;
    height: 6px;
    padding: 0;
  }
}
</style>
