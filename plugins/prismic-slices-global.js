import Vue from 'vue'
import prismicTestimonial from '~/components/slices/Testimonial.vue'

const components = {
  prismicTestimonial
}

Object.entries(components).forEach(([name, component]) => {
  Vue.component(name, component)
})
