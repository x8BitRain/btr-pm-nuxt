<template>
  <nav id="header">
    <div
      class="uk-card uk-card-default uk-card-body uk-light uk-animation-fade"
    >
      <div class="uk-inline">
        <a id="l" href="https://btr.pm"
          ><img
            width="250"
            height="10"
            src="~/assets/img/icons/btr.svg"
            alt="btr.pm"
        /></a>
        <nuxt-link to="/"><button :class="activeLink('/')">Photos</button></nuxt-link>
        <nuxt-link to="/projects"><button :class="activeLink('/projects')">Projects</button></nuxt-link>
        <nuxt-link to="/blog"><button :class="activeLink('/blog')">Blog</button></nuxt-link>
        <nuxt-link to="/"><button :class="activeLink('/contact')">Contact</button></nuxt-link>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'Header',
  methods: {
    activeLink(linkName) {
      if (this.$route.path === linkName) {
        return 'u'
      }
    },
  },
}
</script>

<style scoped>
@import 'assets/scss/components/button.css';

#header .uk-card-body {
  padding-top: 20px;
  padding-bottom: 20px;
  margin-top: 15px;
  margin-bottom: 15px;
}
</style>
