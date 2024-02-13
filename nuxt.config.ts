// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  // my image presets
  image: {
    presets: {
      cover: {
        modifiers: {
          fit: "cover",
          loading: "lazy",
          format: "webp",
          width: 2070,
          height: 1380,
          quality: 80,
        },
      },
    },
  },
  css: ["~/assets/css/main.css"],
  modules: ["nuxt-icon", "@nuxt/image", "@nuxt/content", "@nuxtjs/tailwindcss"],
  content: {
    markdown: {
      anchorLinks: false,
    },
  },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
});
