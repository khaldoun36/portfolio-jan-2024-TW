<template>
  <NuxtLink class="active:scale-95">
    <article
      class="gradient-card featured-card justify-self-stretch overflow-clip rounded-md border border-primary-700 transition-colors hover:border-primary-500 focus:border-primary-500"
    >
      <NuxtImg
        :src="thumbnail"
        :alt="thumbnailDesc"
        class="h-auto w-full object-cover"
        sizes="400px sm:100vw lg:60vw"
        preset="cover"
      />

      <div class="space-y-2 p-6">
        <p
          class="mb-3 max-w-fit rounded-md border border-secondary-600/75 bg-secondary-100/10 px-4 py-1 text-xs font-medium tracking-wide text-secondary-300"
        >
          {{ type }}
        </p>
        <h2 class="text-balance text-xl font-semibold text-primary-50">
          {{ title }}
        </h2>
        <p class="text-base text-primary-400">
          {{ desc }}
        </p>
      </div>
    </article>
  </NuxtLink>
</template>

<script setup>
const props = defineProps([
  "title",
  "type",
  "desc",
  "thumbnail",
  "thumbnailDesc",
]);
</script>

<style scoped>
/* .featured-card img {
  mask: linear-gradient(180deg, var(--slate-900) 60%, transparent 100%);
} */
</style>
