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
