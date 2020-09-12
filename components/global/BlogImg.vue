<template>
  <transition name="fade" mode="out-in">
    <div class="blog-post-image">
      <picture>
        <source
          :srcset="
            require('~/assets/img' + this.$route.path + '/' + src + '?webp')
          "
          type="image/webp"
        />
        <source
          :srcset="require('~/assets/img' + this.$route.path + '/' + src)"
          type="image/jpeg"
        />
        <img
          :src="require('~/assets/img' + this.$route.path + '/' + src)"
          class="lazyload"
          :height="height"
          :width="width"
          loading="lazy"
          :alt="alt"
        />
      </picture>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'BlogImg',
  props: {
    src: {
      type: String,
      required: true,
      default: '',
    },
    height: {
      type: String,
      required: false,
      default: 'auto',
    },
    width: {
      type: String,
      required: false,
      default: 'auto',
    },
    alt: {
      type: String,
      required: false,
      default: '',
    },
  },
}
</script>
<style>
.blog-post-image {
  text-align: center;
  margin: 35px 0 35px 0;
}
</style>
