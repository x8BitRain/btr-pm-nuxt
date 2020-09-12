export default {
  /*
   ** Nuxt rendering mode
   ** See https://nuxtjs.org/api/configuration-mode
   */
  mode: 'spa',
  /*
   ** Nuxt target
   ** See https://nuxtjs.org/api/configuration-target
   */
  target: 'static',

  loaders: {
    vue: {
      transformAssetUrls: {
        img: 'data-src',
        div: 'data-src',
      },
    },
  },
  /*
   ** Headers of the page
   ** See https://nuxtjs.org/api/configuration-head
   */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || '',
      },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },
  /*
   ** Global CSS
   */
  css: ['assets/scss/uikit.css', 'assets/scss/main.scss'],
  /*
   ** Plugins to load before mounting the App
   ** https://nu Fxtjs.org/guide/plugins
   */
  plugins: [
    { src: '~/plugins/uikit.js', ssr: false },
    { src: '~/plugins/vue-lazysizes.client.js', ssr: false },
  ],
  /*
   ** Auto import components
   ** See https://nuxtjs.org/api/configuration-components
   */
  components: true,
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: ['@nuxt/typescript-build', '@aceforth/nuxt-optimized-images'],
  optimizedImages: {
    handleImages: ['jpeg', 'png', 'svg', 'webp', 'gif'],
    optimizeImages: true,
    optimizeImagesInDev: false,
    webp: {
      quality: 60,
      method: 6,
    },
    mozjpeg: {
      quality: 60,
      tune: 'ms-ssim',
      quantTable: 2,
    },
  },
  /*
   ** Nuxt.js modules
   */
  modules: ['@nuxt/content'],
  /*
   ** Build configuration
   ** See https://nuxtjs.org/api/configuration-build/
   */
  build: {},
}
