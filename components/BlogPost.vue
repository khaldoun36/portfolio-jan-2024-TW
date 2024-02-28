<template>
  <NuxtLink>
    <article
      class="flex max-w-fit flex-col items-baseline gap-6 rounded-e-lg p-6 transition-colors hover:bg-primary-900 focus:bg-primary-900 focus:outline-none md:flex-row"
    >
      <time
        datetime="2008-02-14"
        class="border-l border-primary-700 pl-4 text-base font-medium text-primary-500 md:border-0 md:pl-0"
        >{{ formatDate(date) }}</time
      >
      <div class="flex flex-col items-start">
        <h2
          class="max-w-[45ch] text-balance text-xl font-semibold text-primary-50"
        >
          {{ title }}
        </h2>
        <p class="mt-2 max-w-[55ch] text-base text-primary-400">
          {{ desc }}
        </p>
        <button class="mt-4 flex items-center gap-1 text-secondary-400">
          <span class="text-base font-semibold">Read more</span>
          <Icon name="ph:caret-right" size="16px" />
        </button>
      </div>
    </article>
  </NuxtLink>
</template>

<script setup>
import formatDate from "../util/formatDate";
const props = defineProps(["title", "desc", "date"]);
</script>

<style scoped></style>
