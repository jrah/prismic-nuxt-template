<template>
  <div>
    <f-main-header
      :title="document.data.header_title"
      :background-url="document.data.header_image.url"
    ></f-main-header>
    <!-- <div v-for="(slice, k) in document.data.body" :key="k">
      <component
        :is="
          `prismic${slice.slice_type.replace(/(^|_)./g, s =>
            s.slice(-1).toUpperCase()
          )}`
        "
        :slice="slice"
      ></component>
    </div> -->
  </div>
</template>
<script>
import fMainHeader from '~/components/fixed/MainHeader.vue'

// eslint-disable-next-line camelcase

import { PrismicMixin, getPage } from '~/assets/js/getPrismicData.js'

export default {
  layout: 'empty',
  components: {
    fMainHeader
  },
  mixins: [PrismicMixin],
  async asyncData({ app, params }) {
    const document = await getPage(app.$prismic, params.page, 'page')
    return { document }
  }
}
</script>
<style lang="css">
.mainHeader h1 {
  @apply text-white;
}
</style>
