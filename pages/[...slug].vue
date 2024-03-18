<template>
  <main class="prose mx-auto max-w-[70ch]">
    <ContentDoc v-slot="{ doc }">
      <h1 class="mt-0 text-2xl font-semibold text-primary-50 md:text-3xl">
        {{ doc.title }}
      </h1>
      <div class="flex items-center">
        <time
          class="text-base font-medium text-primary-400"
          :datetime="doc.date"
          >{{ formatDate(doc.date) }}</time
        >
        <div v-if="doc.lastUpdated">
          <span class="px-2 text-secondary-400">&#8212;</span>
          <time
            class="text-base font-semibold text-secondary-400"
            :datetime="doc.lastUpdated"
          >
            Last Updated
            {{
              new Date(doc.lastUpdated).toLocaleDateString("en-us", {
                year: "numeric",
                month: "short",
              })
            }}</time
          >
        </div>
      </div>
      <NuxtImg
        :src="doc.image.src"
        :alt="doc.image.alt"
        class="rounded-md"
        preset="cover"
        sizes="400px sm:100vw lg:60vw"
      />
      <ContentRenderer :value="doc" />
    </ContentDoc>
  </main>
</template>

<script setup>
import formatDate from "~/util/formatDate";
</script>

<style></style>
