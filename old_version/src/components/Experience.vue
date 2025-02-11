<script setup lang="ts">
defineProps<{ period: string, company: { name: string, url?: string }, jobTitle: string, description: string }>()
</script>

<template>
  <div class="item relative clear-both w-full table table-fixed pb-5">
    <div class="left">
      <h5 class="period text-sm text-dark">
        {{ period }}
      </h5>
      <a :href="company.url ?? '#'" :title="company.name" target="_blank" class="company text-sm font-700 text-gray-5 hover:text-gray-700">{{ company.name }}</a>
    </div>
    <div class="divider" />
    <div class="right">
      <h4 class="item-title text-lg font-bold text-dark-300">
        {{ jobTitle }}
      </h4>
      <p class="text-sm-1 line-height-relaxed text-gray-700" v-html="description" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.item {
    .divider {
        position: absolute;
        top: 0;
        left: 30%;
        bottom: 0;
        width: 1px;
        background-color: #eee;

        &::before {
            content: '';
            display: block;
            position: absolute;
            margin-top: 2px;
            width: 21px;
            height: 21px;
            position: absolute;
            margin-left: -10px;
            border-radius: 12px;
            background-color: var(--primary);
            opacity: .25;
            z-index: 0;
        }

        &::after {
            content: '';
            display: block;
            position: absolute;
            margin-top: 6px;
            width: 13px;
            height: 13px;
            margin-left: -6px;
            background-color: #fff;
            border-radius: 10px;
            border: 2px solid var(--primary);
            z-index: 1;
        }
    }

    .left {
        width: 30%;
        display: table-cell;
        padding-right: 25px;
        min-height: 100%;
        text-align: right;
        vertical-align: top;
    }

    .right {
        width: 70%;
        display: table-cell;
        padding-left: 25px;
        padding-right: 15px;
        vertical-align: top;
    }
}
</style>
