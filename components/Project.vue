<template>
  <div class="uk-card uk-card-default uk-grid-collapse uk-child-width-1-2@m uk-margin uk-grids" uk-grid>
    <div :class="innerClass">
      <img
        v-if="image.match(/jpg|jpeg|webp/)"
        :src="require('@/assets/img/projects/' + image)"
        loading="lazy"
        class="lazyload"
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
          <a :href="link.link">{{ link.linkText }}</a>
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

.uk-card-default {
  background: #ffffff;
}

.uk-label {
  transform: scale(0.75);
}
</style>
