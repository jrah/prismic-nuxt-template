<template>
  <div class="site-canvas">
    <div id="header" class="absolute w-full">
      <div class="py-3 flex justify-between items-center container">
        <a-logo class="logo" />
        <a-navbar />
      </div>
    </div>
    <!-- <span v-if="document.data" class="block">{{ document.data.body }}</span> -->

    <nuxt />
    <a-footer></a-footer>
  </div>
</template>

<script>
// app
import aFooter from '~/components/app/Footer.vue'
import aNavbar from '~/components/app/Navbar.vue'
import aLogo from '~/components/app/Logo.vue'

function getPage(prismic) {
  // page, custom type
  return prismic.api.getByUID('menu', 'menu')
}
// import Navbar from "~/components/Navbar.vue";
export default {
  components: {
    aNavbar,
    aLogo,
    aFooter
  },
  data() {
    return { document: {} }
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
  }
}
</script>

<style lang="css">
html {
  @apply font-normal;
  @apply text-black;
  @apply leading-normal;
  @apply font-copy;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  @apply font-heading;
  @apply text-black;
}

h2,
h3,
h4,
h5,
h6 {
  @apply mb-3;
}

h2 {
  @apply text-3xl;
}



p,
blockquote,
nav,
button,
a {
  @apply font-normal;
  @apply text-black;
  @apply text-base;
  @apply mb-3;
}

.object-cover {
  object-fit: cover;
}
</style>

<style lang="scss">
@import '~assets/scss/mixins';

.container {
  @apply px-8;
  @include mq(ns) {
    @apply px-16;
  }
  @extend %mwc;
}

section {
  h2 {
    & ~ & {
      @apply text-orange;
    }
    @apply mt-12;
  }
  h2,
  h3,
  h4,
  h5,
  h6 {
    & + & {
      @apply text-blue;
    }
  }
  p {
    &:last-child {
      @apply mb-12;
    }
  }
}
</style>
