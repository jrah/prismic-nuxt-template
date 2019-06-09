export default {
  methods: {
    url(menuLink) {
      if (menuLink.type === 'home') {
        return '/'
      } else if (menuLink.link_type === 'Web') {
        return `/${menuLink.url}`
      }
      return `/${menuLink.type.replace('_', '/')}/${menuLink.uid}`
    },
    htmlHelper(content) {
      content.forEach(item => {
        item.spans.forEach(span => {
          if (
            span.type === 'hyperlink' &&
            span.data &&
            span.data.link_type === 'Document'
          ) {
            const url = this.url(span.data)
            span.data.link_type = 'Web'
            span.data.url = url
          }
        })
      })
      return this.$prismic.asHtml(content)
    }
  }
}
