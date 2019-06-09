const Prismic = require('prismic-javascript')

export default {
  mode: 'universal',
  /*
   ** Headers of the page
   */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || ''
      }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },
  /*
   ** Global CSS
   */
  css: ['~/assets/css/tailwind.css'],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: ['~/plugins/prismic-slices-global.js'],
  /*
   ** Nuxt.js modules
   */
  modules: [
    '@nuxtjs/eslint-module',
    [
      'prismic-nuxt',
      {
        endpoint: 'https://britcent.cdn.prismic.io/api/v2',
        // deferLoad: true,
        linkResolver: function(doc, ctx) {
          return '/'
        }
      }
    ]
  ],
  generate: {
    // fallback: true,
    routes: async function() {
      const apiEndpoint = 'https://britcent.cdn.prismic.io/api/v2'
      const routes = []
      await Prismic.getApi(apiEndpoint)
        .then(function(api) {
          return api.query('', { pageSize: 100 }) // An empty query will return all the documents
        })
        .then(response => {
          // response is the response object, response.results holds the documents
          response.results.map(item => {
            let url = ''
            if (item.type == 'page') {
              url = `/${item.uid}`
            } else if (item.type != 'home') {
              url = `/${item.type.replace('_', '/')}/${item.uid}`
            } else {
              url = '/'
            }
            routes.push(url)
          })
        })
      return routes
    }
  },
  /*
   ** Build configuration
   */
  build: {
    postcss: {
      plugins: {
        tailwindcss: './tailwind.js'
      }
    },
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {}
  }
}
