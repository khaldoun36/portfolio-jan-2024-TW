<template>
  <NuxtLink
    :to="project.link"
    target="_blank"
    rel="noopener"
    class="gradient-card flex flex-col rounded-md border border-primary-700 p-6 transition-colors hover:border-primary-500 active:scale-95"
  >
    <article class="flex flex-grow flex-col items-start justify-start">
      <NuxtImg
        class="mt-auto size-14 rounded-full bg-cover ring-8 ring-primary-600/50"
        :src="project.icon"
        preset="projectIcon"
      />

      <h2 class="mt-6 text-xl font-semibold text-primary-50">
        {{ project.name }}
      </h2>
      <p class="mt-2 text-base text-primary-400">
        {{ project.desc }}
      </p>
      <button
        class="mt-4 flex items-center gap-2 text-base font-semibold text-primary-600"
      >
        <Icon name="ph:link-simple" />
        <span>{{ project.link }}</span>
      </button>
    </article>
  </NuxtLink>
</template>

<script setup>
const props = defineProps(["project"]);
</script>

<style scoped>
.featured-card {
  --slate-800: #1e293b;
  --slate-900: #0f172a;
  background:
    url(../assets/images/noise.png) repeat,
    linear-gradient(147deg, var(--slate-800) 17.97%, var(--slate-900) 100%);
}

.featured-card img {
  mask: linear-gradient(180deg, var(--slate-900) 60%, transparent 100%);
}
</style>
