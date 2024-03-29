// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  routeRules: {
    // Homepage pre-rendered at build time
    "/": { prerender: true },
  },
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
          href: "/fonts/GeistVariableVF.woff2",
          crossorigin: "",
          as: "font",
          type: "font/woff2",
        },
        {
          rel: "icon",
          type: "image/svg",
          href: "./favicon.svg",
        },
      ],
    },
  },
  // ./global head config

  // my image presets
  image: {
    provider: "imagekit",
    imagekit: {
      baseURL: "https://ik.imagekit.io/hl8yxed8gq/",
    },

    presets: {
      cover: {
        modifiers: {
          fit: "cover",
          loading: "lazy",
          format: "avif",
        },
      },
      projectIcon: {
        modifiers: {
          fit: "cover",
          loading: "lazy",
          format: "avif",
          alt: "Logo of the described project",
          width: 120,
          heigt: 120,
        },
      },
    },
  },
  css: ["~/assets/css/main.css"],
  modules: [
    "nuxt-icon",
    "@nuxt/image",
    "@nuxt/content",
    "@nuxtjs/tailwindcss",
    "@nuxtjs/robots",
  ],
  robots: {
    UserAgent: "*",
    Disallow: "",
  },
  content: {
    markdown: {
      anchorLinks: false,
    },
    highlight: {
      theme: "github-dark",
    },
  },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
});
