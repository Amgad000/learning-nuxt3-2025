// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: ['@nuxt/ui', '@nuxtjs/supabase'],
  supabase: {
    // redirect: true,
    redirectOptions: {
      login: '/login',
      callback: '/confirm',
      exclude: ['/', '/courses'],
    },
  },
  css: ['~/assets/css/main.css'],
  icon: {
    customCollections: [
      {
        prefix: 'my-icons',
        dir: './app/assets/icons',
      },
    ],
  },
})
