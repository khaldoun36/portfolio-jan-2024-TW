// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  // Global head config
  app: {
    head: {
      htmlAttrs: {
        lang: "en",
      },
      title: "Khaldoon.Dev",
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        { name: "description", content: "Free Web tutorials" },
      ],

      link: [
        {
          rel: "preload",
          href: "/fonts/GeistVariableVF.woff2",
          crossorigin: "",
          as: "font",
          type: "font/woff2",
        },
      ],
    },
  },
  // my image presets
  image: {
    presets: {
      cover: {
        modifiers: {
          fit: "cover",
          loading: "lazy",
          format: "webp",
          width: 300,
          height: 300,
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
