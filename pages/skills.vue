<template>
  <main>
    <h1 class="max-w-[30ch] text-2xl font-semibold text-primary-50 md:text-3xl">
      Software I use, gadgets I love, and other things I recommend.
    </h1>
  </main>
  <section
    class="mt-16 flex flex-col items-start justify-start gap-8 md:border-l md:border-primary-700"
  >
    <ContentList path="/posts" v-slot="{ list }">
      <div v-for="article in list" :key="article._path">
        <BlogPost
          :title="article.title"
          :desc="article.description"
          :to="`/posts/${slugify(article.title)}`"
        />
      </div>
    </ContentList>
  </section>
</template>

<script setup>
import slugify from "../util/slugify";
useHead({
  title: "Khaldoon.dev | Writings",
});
</script>

<style scoped></style>
