<template>
  <footer class="full-width content-grid border-t border-primary-700 py-4">
    <div
      class="flex flex-col items-center justify-center gap-2 lg:flex-row lg:justify-between"
    >
      <Logo />
      <nav class="flex items-center justify-between gap-6 p-1 md:gap-1">
        <NuxtLink
          v-for="link in navigationLinks"
          :key="link.path"
          :to="link.path"
          class="flex h-10 items-center rounded-full text-sm font-medium text-primary-50 transition-colors hover:bg-primary-800 focus:bg-primary-800 focus:outline-none md:px-5"
          >{{ link.text }}</NuxtLink
        >
      </nav>
    </div>
  </footer>
</template>

<script setup>
import navigationLinks from "../util/navigationLinks";
</script>

<style scoped></style>
