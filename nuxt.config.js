const baseHref = process.env.BASE_HREF || '/';
const title = process.env.npm_package_name || ''
const content = process.env.npm_package_description || '';

export default {
  // mode: 'universal',

  head: {
    title,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: baseHref + 'favicon.ico' },
    ]
  },

  // /**
  //  *  Customize the progress-bar color
  //  */
  // loading: { color: '#fff' },

  // /**
  //  *  Global CSS
  //  */
  // css: [],

  // plugins: [],

  /**
   * Nuxt dev-modules
   */
  buildModules: [
    '@nuxt/typescript-build',
    // '@nuxtjs/router',
  ],

  extends: [
    '@nuxtjs/eslint-config-typescript',
  ],

  typescript: {
    typeCheck: {
      eslint: true,
    },
  },

  // /**
  //  * Nuxt modules
  //  */
  // modules: [
  //   // // '@nuxtjs/pwa',
  //   // '@nuxtjs/axios',
  //   // '@nuxtjs/dotenv',
  // ],

  // /**
  //  * Axios
  //  */
  // axios: { },

  // /**
  //  * Extend build
  //  */
  // build: {
  //   /*
  //   ** You can extend webpack config here
  //   */
  //   extend (config, ctx) { }
  // },

  generate: {
    routes: [
      '/',
    ],
  },

  router: {
    base: baseHref,
    mode: 'history',
  },
};
