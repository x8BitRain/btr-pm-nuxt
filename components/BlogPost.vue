<template>
  <div
    class="uk-card uk-card-default uk-grid-collapse uk-child-width-1-2@m uk-margin uk-grids"
    uk-grid
  >
    <div :class="innerClass">
      <img
        v-if="image.match(/jpg|jpeg|webp|png/)"
        :src="require('@/assets/img/blog/' + link + '/' + image)"
        loading="lazy"
        class="uk-cover lazyload"
        :alt="title"
        uk-cover
      />
      <video
        v-if="image.match(/mp4/)"
        autoplay
        muted
        loop
        class="project-video"
      >
        <source
          :src="require('@/assets/img/projects/' + image)"
          type="video/mp4"
          class="lazyload"
        />
      </video>
      <canvas width="600" height="400"></canvas>
    </div>
    <div>
      <div class="uk-card-body">
        <NuxtLink :to="'/blog/' + link">
          <h3 class="uk-card-title">
            {{ title }}
            <span
              class="uk-label"
              :style="'background:' + labelColor + '; !important'"
            >
              {{ label }}
            </span>
          </h3>
        </NuxtLink>
        <p>{{ description }}</p>
        <div>
          <h6 class="blog-date">{{ formatDate(date) }}</h6>
          <NuxtLink :to="'/blog/' + link">READ ME</NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BlogCard',
  props: {
    title: {
      type: String,
      required: true,
    },
    label: {
      type: String,
      required: true,
    },
    date: {
      type: String,
      required: true,
    },
    labelColor: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    link: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    index: {
      type: Number,
      required: true,
    },
  },
  computed: {
    innerClass() {
      if (this.index % 2) {
        return 'image-container uk-flex-last@s uk-card-media-right uk-cover-container'
      } else {
        return 'image-container uk-card-media-left uk-cover-container'
      }
    },
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
.project-video {
  position: absolute;
  width: 74%;
  box-shadow: 0 0 4px #00000069;
}

.blog-date {
  color: #666;
}

.image-container {
  display: flex;
  justify-content: center;
  align-items: center;
}

.uk-card-default {
  background: #ffffff;
}

.uk-label {
  transform: scale(0.75);
}
</style>
