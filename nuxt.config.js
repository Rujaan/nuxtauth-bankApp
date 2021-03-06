export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "Nuxt auth - Bank App",
    htmlAttrs: {
      lang: "en",
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" },
      { name: "format-detection", content: "telephone=no" },
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ["@/assets/css/main.css"],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: ["@nuxt/postcss8"],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    { src: "@nuxtjs/axios", mode: "client" },
    { src: "@nuxtjs/auth-next", mode: "client" },
  ],

  axios: {
    baseURL: "https://staging-api.reconwithme.com",
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    postcss: {
      plugins: {
        tailwindcss: {},
        autoprefixer: {},
      },
    },
  },

  generate: {
    dir: "dist",
  },

  auth: {
    redirect: {
      login: "/dashboard",
      logout: "/login",
      // callback: "/dashboard",
      home: "/dashboard",
    },
    strategies: {
      local: {
        token: {
          property: "token",
          global: true,
          // required: true,
          // type: 'Bearer'
        },
        user: {
          property: false,
          autoFetch: false,
          endpoints: false,
        },
        endpoints: {
          login: {
            url: "/accounts/users/login",
            method: "post",
          },
          logout: false,
          user: false,
        },
      },
    },
  },
};
