<template>
  <header
    class="primary-header full-width content-grid sticky left-0 top-0 z-50 border-b border-primary-700 bg-primary-950/60 backdrop-blur-md"
  >
    <div class="primary-header__layout flex items-center justify-between py-4">
      <Logo class="logo" />
      <nav
        class="hidden items-center justify-between gap-1 rounded-full border border-primary-700 p-1 md:flex"
      >
        <NuxtLink
          v-for="link in navigationLinks"
          :key="link.path"
          :to="link.path"
          class="flex h-10 items-center rounded-full px-5 text-sm font-medium text-primary-50 transition-colors hover:bg-primary-800 focus:bg-primary-800 focus:outline-none"
          >{{ link.text }}</NuxtLink
        >
      </nav>
      <ButtonLink
        to="https://www.youtube.com/watch?v=kHQNK2jU_TQ"
        intent="primary"
        >Let's work together!</ButtonLink
      >
    </div>
    <nav
      class="full-width content-grid border-t border-primary-700 p-1 md:hidden"
    >
      <div
        class="mobie-nav-layout no-scrollbar flex snap-x items-center justify-between gap-1 overflow-x-scroll py-2"
      >
        <NuxtLink
          v-for="link in navigationLinks"
          :key="link.path"
          :to="link.path"
          class="flex h-10 snap-start items-center rounded-full px-5 text-sm font-medium text-primary-50 transition-colors hover:bg-primary-800 focus:bg-primary-800 focus:outline-none"
          >{{ link.text }}</NuxtLink
        >
      </div>
    </nav>
  </header>
</template>

<script setup>
import navigationLinks from "../util/navigationLinks";
</script>

<style>
.primary-header .router-link-active:not(.logo),
.primary-header .router-link-exact-active:not(.logo) {
  @apply border border-primary-700 bg-primary-800/70;
}
</style>
