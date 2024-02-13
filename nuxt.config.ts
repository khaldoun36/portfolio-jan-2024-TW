// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  // Global head config
  app: {
    head: {
      htmlAttrs: {
        lang: "en",
      },
      title: "Khaldoo.Dev",
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
  css: ["~/assets/css/main.css"],
  modules: ["nuxt-icon", "@nuxt/image", "@nuxt/content"],
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
