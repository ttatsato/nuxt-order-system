export default {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    title: process.env.APP_NAME || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.APP_DESICRIPTION || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: ["~/assets/css/main.css"],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    // google analytics
    // { src: '~plugins/ga.js', mode: 'client' }
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [],
  /*
  ** Nuxt.js modules
  */
  modules: [
    "@nuxtjs/axios",
    '@nuxt/typescript-build',
    'nuxt-buefy',
    '@nuxtjs/sitemap'
  ],
  axios: {
    baseURL: process.env.VUE_APP_MOCK_API,
    timeout: 5000,
    debug: true
  },
  sitemap: {
    path: '/sitemap.xml',
    hostname: 'https://hopeful-benz-6500ea.netlify.com',
    // generate: true,
    // 動的分もsitemapについかする処理
    // async routes () {
    //   const contentful = require('contentful');
    //   const client = contentful.createClient({
    //     space: contentFulConfig.CTF_SPACE_ID,
    //     accessToken: contentFulConfig.CTF_CDA_ACCESS_TOKEN
    //   });
    //   const posts = await client.getEntries({
    //     'content_type': contentFulConfig.CTF_BLOG_POST_TYPE_ID,
    //     order: '-sys.createdAt'
    //   });
    //
    //   let urls = [];
    //   posts.items.forEach((val, idx, arr) => {
    //     console.log(val.fields.slug)
    //     urls[idx] = val.fields.slug
    //   });
    //   return urls;
    // }
  },
  /*
  ** Build configuration
  */
  build: {},
  env: {},
  vue: {
    config: {
      ignoredElements :['nuxt']
    }
  },
  router: {
    extendRoutes(routes, resolve) {
      routes.push({
        path: '*',
        component: resolve(__dirname, 'pages/404.vue')
      })
    }
  }
}
