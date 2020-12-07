<template>
  <nav id="header">
    <div
      class="uk-card uk-card-default uk-card-body uk-light uk-animation-fade"
    >
      <transition name="fadeDelay">
        <canvas id="fun-canvas"></canvas>
      </transition>
      <div class="uk-inline">
        <a id="l" href="/"
          ><img
            width="250"
            height="10"
            src="~/assets/img/icons/btr.svg"
            alt="btr.pm"
        /></a>
        <nuxt-link to="/">
          <button :class="activeLink('/')">Photos</button>
        </nuxt-link>
        <nuxt-link to="/projects">
          <button :class="activeLink('/projects')">Projects</button>
        </nuxt-link>
        <nuxt-link to="/blog">
          <button :class="activeLink('/blog')">Blog</button>
        </nuxt-link>
        <nuxt-link to="/contact">
          <button :class="activeLink('/contact')">Contact</button>
        </nuxt-link>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'Header',
  mounted() {
    if (this.$route.path.match('projects')) {
      const script = document.createElement('script')
      script.type = 'text/javascript'
      script.src = '/fluid.js'
      document.body.appendChild(script)
    }
  },
  methods: {
    activeLink(linkName) {
      if (this.$route.path === linkName) {
        return 'u'
      }
    },
  },
}
</script>

<style lang="scss" scoped>
@import '../assets/scss/components/button.scss';

#header .uk-card-body {
  padding-top: 20px;
  padding-bottom: 20px;
  margin-top: 15px;
  margin-bottom: 15px;
  canvas {
    opacity: 80%;
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
  }
}
</style>
