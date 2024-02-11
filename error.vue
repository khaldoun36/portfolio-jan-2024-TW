<template>
  <div class="content-grid flex flex-col">
    <PrimaryHeader />
    <div class="flex flex-col items-center justify-center gap-8 py-20 lg:py-24">
      <h1
        class="bg-gradient-to-r from-secondary-600 via-primary-500 to-secondary-400 bg-clip-text text-center text-[300px] font-semibold text-transparent"
      >
        {{ error.statusCode }}
      </h1>
      <p class="text-center text-2xl font-semibold text-primary-400">
        {{ error.message }}
      </p>
      <ButtonLink intent="secondary" class="max-w-fit" to="/"
        >Go back home</ButtonLink
      >
    </div>
  </div>
</template>

<script setup>
defineProps(["error"]);
</script>

<style lang="scss" scoped></style>
