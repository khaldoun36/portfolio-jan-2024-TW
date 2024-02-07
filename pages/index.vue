<template>
  <main>
    <h1 class="max-w-[45ch] text-2xl font-semibold text-primary-50 md:text-3xl">
      <span class="text-primary-400">Hello! مرحباً! こんにちは!</span> I'm
      Khaldoon &#8212; a Dubai-based independent web designer and developer. I
      specialize in crafting pixel-perfect web applications that elevate
      everyday user experiences.
    </h1>
    <div class="flex flex-wrap items-center gap-6 pt-6">
      <ButtonLink
        v-for="link in heroSocialLinks"
        :key="link.id"
        :to="link.link"
        intent="secondary"
      >
        <Icon :name="link.iconAlt" />
        <span>@{{ link.handle }}</span>
      </ButtonLink>
    </div>
  </main>

  <section class="mt-16 flex flex-col items-start justify-start gap-8">
    <h2
      class="col-span-full justify-self-start text-xl font-semibold text-primary-50"
    >
      Featured
    </h2>
    <div class="grid gap-8 md:grid-cols-2">
      <FeaturedCard to="https://khaldoon.dev/" v-for="n in 4" :key="n" />
    </div>
  </section>
</template>

<script setup>
import socialLinks from "~/util/socialLinks";

const heroSocialLinks = socialLinks.slice(0, 2);
</script>

<style scoped></style>
