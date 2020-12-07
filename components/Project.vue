<template>
  <div
    class="uk-card uk-card-default uk-grid-collapse uk-child-width-1-2@m uk-margin uk-grids"
    uk-grid
  >
    <div :class="innerClass">
      <transition name="fade" mode="out-in">
        <img
          v-if="image.match(/jpg|jpeg|webp/)"
          :src="require('@/assets/img/projects/' + image)"
          loading="lazy"
          class="lazyload"
          :alt="title"
          uk-cover
        />
      </transition>
      <transition name="fade" mode="out-in">
        <img
          v-if="placeholderImage"
          v-show="!hidePlaceholder"
          id="placeholder-image"
          :src="require('@/assets/img/projects/' + placeholderImage)"
          loading="lazy"
          class="lazyload"
          :alt="title"
          uk-cover
        />
      </transition>
      <transition name="fade" mode="out-in">
        <video
          v-if="image.match(/mp4/)"
          autoplay
          muted
          loop
          class="project-video"
          @playing="hidePlaceholderToggle"
        >
          <source
            :src="require('@/assets/img/projects/' + image)"
            type="video/mp4"
            class="lazyload"
          />
        </video>
      </transition>
      <canvas width="600" height="400"></canvas>
    </div>
    <div>
      <div class="uk-card-body">
        <h3 class="uk-card-title">
          {{ title
          }}<span
            class="uk-label"
            :style="'background:' + labelColor + '; !important'"
            >{{ label }}</span
          >
        </h3>
        <p>{{ body }}</p>
        <div v-for="link in links" :key="link.linkText">
          <a :href="link.link" target="_blank">{{ link.linkText }}</a>
          <br />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Project',
  props: {
    title: {
      type: String,
      required: true,
    },
    label: {
      type: String,
      required: true,
    },
    labelColor: {
      type: String,
      required: true,
    },
    body: {
      type: String,
      required: true,
    },
    links: {
      type: Array,
      required: false,
      default() {
        return [
          {
            link: '',
            linkText: '',
          },
        ]
      },
    },
    image: {
      type: String,
      required: true,
    },
    placeholderImage: {
      type: String,
      required: false,
      default: '',
    },
    index: {
      type: Number,
      required: true,
    },
  },
  data() {
    return {
      hidePlaceholder: false,
    }
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
    hidePlaceholderToggle() {
      this.hidePlaceholder = true
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

.image-container {
  display: flex;
  justify-content: center;
  align-items: center;
}

#placeholder-image {
  z-index: 1 !important;
}

.uk-card-default {
  background: #ffffff;
}

.uk-label {
  transform: scale(0.75);
}
</style>
