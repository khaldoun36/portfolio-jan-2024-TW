// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  // global head config
  app: {
    head: {
      charset: "utf-8",
      viewport: "width=device-width, initial-scale=1.0",
      title: "Khaldoon.dev",
      htmlAttrs: {
        lang: "en",
      },
      meta: [
        {
          hid: "description",
          name: "description",
          content:
            "Looking for a web designer in Dubai? I'm Khaldoon, an independent developer specializing in crafting user-friendly web applications that leave a lasting impression. Let's elevate your online presence together!",
        },
        {
          hid: "keywords",
          name: "keywords",
          content:
            "Dubai web design, Dubai web developer, user experience design, UI/UX design, web application development",
        },
        { hid: "author", name: "author", content: "John Doe" },
      ],
      link: [
        {
          rel: "preload",
          href: "./public/fonts/GeistVariableVF.woff2",
          as: "font",
          type: "font/woff2",
          crossorigin: "anonymous",
        },
      ],
    },
  },

  // ./global head config
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
