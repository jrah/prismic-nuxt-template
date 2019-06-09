/* eslint-disable no-undef */
/* eslint-disable no-console */
export function getPage(prismic, uid, pageType) {
  // "custom type", ""
  console.log('fetching ', uid)
  return prismic.api.getByUID(uid === 'index' ? 'home' : pageType, uid)
}
export const PrismicMixin = {
  head() {
    const ret = {
      // eslint-disable-next-line no-console
      title:
        this.document.data.meta_title ||
        this.document.data.body.header_title ||
        'Britcent',
      link: [
        {
          rel: 'canonical',
          href: `https://localhost:3000${this.$prismic.linkResolver(
            this.document
          )}`
        }
      ],
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.document.data.meta_description
        }
      ]
    }
    if (this.document.data.follow === 'No follow') {
      ret.meta.push({ hid: 'robots', name: 'robots', content: 'nofollow' })
    }
    return ret
  },
  async asyncData({ app, params }) {
    console.log(params, app.pageType, app.route)
    let uid = 'index'
    if ('page' in params) {
      uid = params.page
    }
    let document
    try {
      document = await getPage(app.$prismic, uid, 'schools')
    } catch (e) {
      try {
        document = await getPage(app.$prismic, uid, 'page')
      } catch (f) {
        error({ statusCode: 404, message: 'Post not found' })
      }
    }
    // if path is route output 'home' else output current path equals document.uid
    // Also want to output app.$route.name to be document.type but not sure how to pass it into the function
    // app.router.app._route.path === "/"
    //   ? pageContentType === "home"
    //   : pageContentType === app.router.app._route.path,
    // app.$route ? app.$route.params.slug : pageContentType,

    return {
      document
    }
  }
}
