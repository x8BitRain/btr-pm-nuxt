<template>
  <div id="projects">
    <Header />
    <main>
      <Project
        v-for="(project, index) in projects"
        :key="index"
        :title="project.title"
        :label="project.label"
        :label-color="project.labelColor"
        :body="project.body"
        :links="project.links"
        :image="project.image"
        :index="index"
      />
    </main>
    <Footer />
  </div>
</template>

<script>
import Footer from '@/components/Footer'
export default {
  name: 'Projects',
  components: { Footer },
  computed: {
    projects() {
      const projectJsons = require.context(
        '@/assets/projects/',
        false,
        /.json$/
      )
      return projectJsons.keys().map((x) => projectJsons(x))
    },
  },
}
</script>

<style scoped lang="scss">
#projects {
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
