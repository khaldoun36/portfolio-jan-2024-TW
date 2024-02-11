<template>
  <NuxtLink
    to="https://blog.maximeheckel.com/"
    class="gradient-card flex flex-col rounded-md border border-primary-700 p-6 transition-colors hover:border-primary-500 active:scale-95"
  >
    <article class="flex flex-grow flex-col items-start justify-start">
      <NuxtImg
        class="mt-auto size-14 rounded-full bg-cover ring-8 ring-primary-600/50"
        src="https://images.unsplash.com/photo-1603415526960-f7e0328c63b1?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      />
      <h2 class="mt-6 text-xl font-semibold text-primary-50">Project Title</h2>
      <p class="mt-2 text-base text-primary-400">
        Revolutionize urban mobility: an AI-driven, sustainable transportation
        platform that seamlessly integrates
      </p>
      <button
        class="mt-4 flex items-center gap-2 text-base font-semibold text-primary-600"
      >
        <Icon name="ph:link-simple" />
        <span>youtube.com</span>
      </button>
    </article>
  </NuxtLink>
</template>

<script setup></script>

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
