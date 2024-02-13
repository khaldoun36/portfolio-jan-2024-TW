<template>
  <NuxtLink class="active:scale-95">
    <article
      class="gradient-card featured-card justify-self-stretch overflow-clip rounded-md border border-primary-700 transition-colors hover:border-primary-500 focus:border-primary-500"
    >
      <NuxtImg
        :src="thumbnail"
        :alt="thumbnailDesc"
        class="aspect-[4/3] h-auto w-full object-cover"
        sizes="100vw sm:50vw md:400px"
        preset="cover"
      />

      <div class="flex flex-col items-start justify-between gap-2 p-6">
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
const props = defineProps(["title", "desc", "thumbnail", "thumbnailDesc"]);
</script>

<style scoped>
.featured-card img {
  mask: linear-gradient(180deg, var(--slate-900) 60%, transparent 100%);
}
</style>
