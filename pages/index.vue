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
        target="_blank"
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
      <ContentList path="/posts" v-slot="{ list }">
        <div
          v-for="article in list.filter((item) => item.isFeatured).slice(0, 6)"
          :key="article._path"
        >
          <FeaturedCard
            :to="`/posts/${slugify(article.title)}`"
            :title="article.title"
            :type="article.type"
            :desc="article.description"
            :thumbnail="article.image.src"
            :thumbnailDesc="article.image.alt"
          />
        </div>
      </ContentList>
    </div>
  </section>
</template>

<script setup>
import socialLinks from "~/util/socialLinks";
import slugify from "../util/slugify";

const heroSocialLinks = socialLinks.slice(0, 2);

useHead({
  title: "Khaldoon.dev",
});
</script>

<style scoped></style>
