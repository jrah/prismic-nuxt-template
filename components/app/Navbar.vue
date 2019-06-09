<template>
  <nav></nav>
</template>

<script>
// import PrismicMixin from "~/assets/js/getPrismicData.js";
function getPage(prismic) {
  // page, custom type
  return prismic.api.getByUID('menu', 'menu')
}
export default {
  data() {
    return {
      isOpen: false,
      document: {}
    }
  },
  async asyncData({ app, error }) {
    const document = await getPage(app.$prismic)
    // eslint-disable-next-line no-console
    console.log(document)
    if (document) {
      return { document }
    } else {
      error({ statusCode: 404, message: 'Page not found' })
    }
  },
  created() {
    getPage(this.$prismic).then(document => {
      this.document = document
    })
  },
  mounted() {
    // eslint-disable-next-line no-console
    console.log(document.querySelector('.site'))
  },
  methods: {
    closeNav() {},
    toggleNav() {
      this.isOpen = !this.isOpen
      // eslint-disable-next-line no-unused-vars
      const header = document.querySelector('#header')
      const site = document.querySelector('.site')
      site.classList.toggle('position-fixed')
      // eslint-disable-next-line no-console
      // console.log(header);

      // if (site.contains('position-fixed')) {
      //   document.querySelector('#header').classList.remove('position-fixed')
      // } else {
      //   document.querySelector('#header').classList.add('position-fixed')
      // }
      // document.querySelector('header').classList.toggle('h-screen')
    }
  }
}
</script>

<style lang="scss">
@import 'assets/scss/mixins';
</style>
