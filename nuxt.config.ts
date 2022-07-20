import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1.0' },
    ]
  },

  css: [
    '@/assets/css/global.css',
    '@/assets/css/header.css',
    '@/assets/css/footer.css',
    '@/assets/css/base/input-text.css',
    '@/assets/css/base/button-icon.css',
    '@/assets/css/base/searcher.css',
    '@/assets/css/home/main.css',
  ],
})
