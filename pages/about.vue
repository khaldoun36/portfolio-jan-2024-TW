<template>
  <div class="grid gap-16 lg:grid-cols-5">
    <main class="order-2 lg:order-1 lg:col-span-3">
      <h1 class="text-2xl font-semibold text-primary-50 md:text-3xl">
        Engineering a brighter future, one pixel at a time. I specialize in
        designing web experiences that empower everyday users.
      </h1>
      <div class="about-me-text mt-8 flex flex-col items-start gap-6">
        <p
          class="text-lg text-primary-400"
          v-for="text in aboutMeText"
          :key="text.id"
        >
          {{ text.text }}
        </p>
      </div>
    </main>
    <aside class="order-1 lg:order-2 lg:col-span-2">
      <NuxtImg
        src="about-me.jpg?updatedAt=1709022716048"
        class="aspect-square h-auto max-w-full rounded-md object-cover md:aspect-video lg:aspect-square"
        width="3024"
        height="3024"
        alt="Image of a person walking in a forest somewhere in Japan."
      />
      <div class="mt-6 hidden flex-col justify-start gap-6 lg:flex">
        <NuxtLink
          v-for="link in socialLinks"
          :key="link.id"
          class="flex items-center justify-start gap-3 text-sm font-medium text-primary-300 transition-colors last:min-w-full last:border-t last:border-primary-700 last:pt-6 hover:text-primary-500 focus:text-primary-500 focus:outline-none"
          :to="link.link"
          target="_blank"
        >
          <Icon :name="link.icon" />
          <span>{{ link.text }}</span>
        </NuxtLink>
      </div>
    </aside>

    <div class="order-3 flex flex-col justify-start gap-6 lg:hidden">
      <NuxtLink
        v-for="link in socialLinks"
        :key="link.id"
        class="flex items-center justify-start gap-3 text-sm font-medium text-primary-300 last:min-w-full last:border-t last:border-primary-700 last:pt-6"
        :to="link.link"
        target="_blank"
      >
        <Icon :name="link.icon" />
        <span>{{ link.text }}</span>
      </NuxtLink>
    </div>
  </div>
</template>

<script setup>
// page title for SEO
useHead({
  title: "Khaldoon.dev | About",
});

// import social links && About me text
import socialLinks from "../util/socialLinks.js";
import aboutMeText from "../util/aboutMeText.js";
</script>

<style scoped></style>
