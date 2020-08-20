<template>
  <div>
    <Header />
    <main>
      <div
        id="content"
        uk-lightbox="animation:fade"
        class="uk-grid-collapse uk-child-width-1-3@s uk-child-width-1-3@m uk-animation-fade"
        uk-grid="masonry: true"
      >
        <a
          v-for="photo in photos"
          :key="photo"
          :href="require('~/assets/img/photos/' + photo + '?original')"
        >
          <picture>
            <source
              :srcset="require('~/assets/img/photos/' + photo + '?webp')"
              type="image/webp"
            />
            <source
              :srcset="require('~/assets/img/photos/' + photo)"
              type="image/jpeg"
            />
            <img
              class="lazyload"
              :src="require('~/assets/img/photos/' + photo + '')"
              height="600"
              loading="lazy"
              :alt="photo"
              uk-img
            />
          </picture>
        </a>
      </div>
    </main>
    <Footer />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import photos from '~/assets/img-list'
import Header from '~/components/Header.vue'
import Footer from '~/components/Footer.vue'

export default Vue.extend({
  components: { Footer, Header },
  data() {
    return {
      photos,
    }
  },
})
</script>

<style scoped lang="scss">
#content {
  padding: 2px;
  a {
    padding: 2px !important;
  }
  .uk-lightbox-toolbar {
    background: #00000000 !important;
  }
  .uk-lightbox-button {
    background: #00000000 !important;
  }
}

#footer {
  margin: 30px;
}

#header {
  margin: 30px;
}
</style>
