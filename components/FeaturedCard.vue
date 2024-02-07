<template>
  <NuxtLink>
    <article
      class="featured-card justify-self-stretch overflow-clip rounded-md border border-primary-700 transition-colors hover:border-primary-500 focus:border-primary-500"
    >
      <img
        src="https://images.unsplash.com/photo-1490814525860-594e82bfd34a?q=80&w=2095&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="card image"
        class="aspect-[4/3] h-auto w-full object-cover"
      />

      <div class="flex flex-col items-start justify-between gap-2 p-6">
        <h2 class="text-balance text-xl font-semibold text-primary-50">
          Refraction, dispersion, and other shader light effects
        </h2>
        <p class="text-base text-primary-400">
          A complete guide on how to use shaders with React Three Fiber, work
          with uniforms and varyings, and build dynamic interactive and
        </p>
      </div>
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
