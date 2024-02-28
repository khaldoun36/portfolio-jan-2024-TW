<template>
  <main>
    <h1 class="max-w-[40ch] text-2xl font-semibold text-primary-50 md:text-3xl">
      Over the years, I've worked on many projects, but these are the ones I'm
      most proud of ✨
    </h1>
  </main>
  <section
    class="mt-16 grid auto-rows-[360px] gap-8 md:grid-cols-2 lg:grid-cols-3"
  >
    <ProjectCard
      v-for="project in projects"
      :key="project.projectID"
      :project="project"
    />
  </section>
</template>

<script setup>
import projects from "~/util/projects";
</script>

<style scoped></style>
