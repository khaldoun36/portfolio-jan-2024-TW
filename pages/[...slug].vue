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
          >{{
            new Date(doc.date).toLocaleDateString("en-us", {
              year: "numeric",
              month: "short",
            })
          }}</time
        >
        <div v-if="doc.lastUpdated">
          <span class="px-2 text-secondary-400">&#8212;</span>
          <span class="text-base font-semibold text-secondary-400">
            Last Updated {{ doc.lastUpdated }}</span
          >
        </div>
      </div>
      <NuxtImg
        :src="doc.thumbnail"
        :alt="doc.thumbnailDesc"
        class="rounded-md"
        preset="cover"
        width="4000"
        height="3000"
        sizes="400px sm:100vw lg:60vw"
      />
      <ContentRenderer :value="doc" />
    </ContentDoc>
  </main>
</template>
