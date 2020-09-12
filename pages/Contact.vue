<template>
  <div id="contact">
    <Header />
    <main>
      <div class="uk-animation-fade" id="content">
        <div class="uk-card uk-card-default uk-card-body">
          <div id="foot" class="uk-margin-small-right">
            <div
              class="typeform-widget"
              data-url="https://form.typeform.com/to/cJpVVZ"
              style="width: 100%; height: 500px;"
            ></div>
            <script>
              ;(function () {
                var qs,
                  js,
                  q,
                  s,
                  d = document,
                  gi = d.getElementById,
                  ce = d.createElement,
                  gt = d.getElementsByTagName,
                  id = 'typef_orm',
                  b = 'https://embed.typeform.com/'
                if (!gi.call(d, id)) {
                  js = ce.call(d, 'script')
                  js.id = id
                  js.src = b + 'embed.js'
                  q = gt.call(d, 'script')[0]
                  q.parentNode.insertBefore(js, q)
                }
              })()
            </script>
            <div
              style="
                font-family: Sans-Serif;
                font-size: 12px;
                color: #999;
                opacity: 0.5;
                padding-top: 5px;
              "
            >
              powered by
              <a
                href="https://admin.typeform.com/signup?utm_campaign=cJpVVZ&utm_source=typeform.com-01D8JX693WE3MKGMWRQTQD3GRB-free&utm_medium=typeform&utm_content=typeform-embedded-poweredbytypeform&utm_term=EN"
                style="color: #999;"
                target="_blank"
                >Typeform</a
              >
            </div>
          </div>
        </div>
      </div>
    </main>
    <Footer />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Header from '~/components/Header.vue'
import Footer from '~/components/Footer.vue'

export default Vue.extend({
  components: { Footer, Header },
})
</script>

<style scoped lang="scss">
#contact {
  margin: 0 10% !important;
}

#footer {
  margin-top: 30px;
}
</style>
