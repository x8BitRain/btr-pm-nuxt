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
        <a href="/"><button class="u">Photos</button></a>
        <nuxt-link to="/projects"><button>Projects</button></nuxt-link>
        <nuxt-link to="/"><button>Blog</button></nuxt-link>
        <nuxt-link to="/"><button>Contact</button></nuxt-link>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'Header',
}
</script>

<style scoped>
@import 'assets/scss/components/button.css';

#header .uk-card-body {
  padding-top: 20px;
  padding-bottom: 20px;
  margin: 15px;
}
</style>
