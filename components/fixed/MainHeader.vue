<template>
  <header
    :style="`background-image:url('${backgroundUrl}')`"
    class="mainHeader bg-cover bg-center pt-12 relative bg-navy"
  >
    <div class="container py-32 relative z-10">
      <div
        class="text-white m:w-3/5 l:w-2/5"
        v-html="$prismic.asHtml(title)"
      ></div>
    </div>
    <div
      class="overlay"
      style="background-image: linear-gradient(205deg,rgba(37, 37, 37, 0.23), rgba(10, 10, 10, 0.72));"
    />
  </header>
</template>
<script>
export default {
  props: {
    backgroundUrl: {
      type: String,
      required: false,
      default: ''
    },
    title: {
      type: Array,
      required: false,
      default: () => []
    }
  },
  computed: {}
}
</script>

<style lang="css">
.overlay {
  position: absolute;
  @apply pin;
  z-index: 1;
  display: block;
}
.mainHeader h1 {
  @apply text-4xl;
  @apply mt-16;
  @apply mb-6;
  @apply font-light;
  @apply leading-tight;
}
</style>
