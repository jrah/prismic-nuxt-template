<template>
  <div>
    <f-main-header
      :title="document.data.header_title"
      :background-url="document.data.header_image.url"
    ></f-main-header>
  </div>
</template>

<script>
// fixed
import fMainHeader from '~/components/fixed/MainHeader.vue'
// import fForm from '~/components/fixed/Form.vue'

import { PrismicMixin } from '~/assets/js/getPrismicData.js'
export default {
  components: {
    fMainHeader
  },
  mixins: [PrismicMixin],
  // data() {
  //   return {
  //     title: this.$prismic.asText(document.data.header_title)
  //   };
  // },
  data() {
    return {
      pageType: 'index'
    }
  },
  computed: {}
}
</script>

<style lang="css">
.mainHeader h1 {
  @apply text-white;
}
</style>
