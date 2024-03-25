// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ['~/assets/css/bootstrap.css', '~/assets/css/additional.css', '~/assets/css/pace.css', '~/assets/css/remixicon.css'],
  app: {
    head: {
      link: [{rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Maven+Pro:wght@500;700&display=swap'}],
      script: [{ src: '/js/bootstrap.bundle.min.js', type: 'text/javascript' }],
    },
  }
})
