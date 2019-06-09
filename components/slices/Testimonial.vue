<template lang="html">
  <section>
    <div class="container py-10">
      <h1 class="text-center mb-12 text-4xl">
        {{ slice.primary.heading[0].text }}
      </h1>
      <no-ssr>
        <div slot="placeholder" class="justify-center items-center flex">
          <font-awesome-icon icon="spinner" spin size="5x" />
        </div>
        <carousel
          :auto-play="true"
          :pagination-active-color="'#25324e'"
          :navigation-click-target-size="20"
          :per-page="1"
        >
          <slide
            v-for="(testimonial, index) in slice.items"
            :key="index"
            class="p-3"
          >
            <figure class="text-center">
              <blockquote
                class="italic font-normal text-2xl mb-3 text-grey-darker"
              >
                {{ testimonial.quote }}
                <figcaption class="uppercase">
                  <cite class="author font-bold text-sm roman"
                    >- {{ testimonial.author }}</cite
                  >
                </figcaption>
              </blockquote>
            </figure>
          </slide>
        </carousel>
      </no-ssr>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    slice: {
      type: Object,
      required: true
    }
  }
}
</script>

<style scoped lang="scss">
@import '~assets/scss/mixins';
</style>
