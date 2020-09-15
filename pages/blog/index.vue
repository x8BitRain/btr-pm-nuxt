<template>
  <div id="blog">
    <Header />
    <main>
      <BlogPost
        v-for="(article, index) of articles"
        :key="index"
        :title="article.title"
        :description="article.description"
        :image="article.img"
        :date="article.createdAt"
        :link="article.slug"
        :label="article.label"
        :label-color="'article.labelColor'"
        :index="index"
      />
    </main>
    <Footer />
  </div>
</template>
<script>
import metaTags from '@/utils/metaTags.js'

export default {
  async asyncData({ $content, params }) {
    const articles = await $content('articles', params.slug)
      .only([
        'title',
        'description',
        'img',
        'slug',
        'author',
        'createdAt',
        'label',
      ])
      .sortBy('createdAt', 'asc')
      .fetch()
    return {
      articles,
    }
  },
  head() {
    return metaTags('Blog', this.$route.fullPath)
  },
}
</script>
<style scoped lang="scss">
#blog {
  margin: 0 10% !important;
}

.fun-canvas {
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  z-index: 0;
}

#header .uk-card-body {
  padding-top: 20px;
  padding-bottom: 20px;
  margin: 15px;
  text-align: left;
}

.uk-card-body {
  margin: 15px 0 15px 0 !important;
}
</style>
