<template>
  <div id="blog-post">
    <Header />
    <main class="uk-card uk-card-default uk-card-body">
      <article>
        <nuxt-content :document="article" />
        <p>Article last updated: {{ formatDate(article.updatedAt) }}</p>
      </article>
    </main>
    <Footer />
  </div>
</template>

<script>
import Header from '@/components/Header'
import metaTags from '@/utils/metaTags.js'
export default {
  components: { Header },
  async asyncData({ $content, params }) {
    const article = await $content('articles', params.slug).fetch()
    return { article }
  },
  methods: {
    formatDate(date) {
      const options = { year: 'numeric', month: 'long', day: 'numeric' }
      return new Date(date).toLocaleDateString('en', options)
    },
  },
  mounted() {
    console.log(this.article)
    console.log(this.$route)
  },
  head() {
    return metaTags(
      this.article.title,
      this.$route.fullPath,
      this.article.description,
      require('@/assets/img/blog/' + this.article.slug + '/' + this.article.img)
    )
  },
}
</script>

<style scoped lang="scss">
#blog-post {
  padding: 0 2vw;
  margin: 0 auto;
  max-width: 1160px;
}

main {
  margin-bottom: 20px;
}

article {
  margin: 0 auto;
  max-width: 1040px;
  width: 100%;
}

blockquote {
  font-size: 1.1rem;
  overflow-wrap: break-word;
}
</style>
