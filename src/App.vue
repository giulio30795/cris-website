<template>

      <div class="d-flex flex-column">
        <Header />
          <main class="flex-grow-1">
              <router-view></router-view>
          </main>
        <Footer />
      </div>
      <!-- <Jumbo />
      <Divider />
      <Presentazione />
      <Divider />
      <Servizi />
      <Divider />
      <Download />
      <Divider />
      <Recensioni /> -->
</template>

<script>

import Header from './components/Header.vue'
// import Jumbo from './components/Jumbo.vue'
// import Presentazione from './components/Presentazione.vue'
// import Servizi from './components/Servizi.vue'
import Footer from './components/Footer.vue'
// import Divider from './components/Divider.vue'
// import Download from './components/Download.vue'
// import Recensioni from './components/Recensioni.vue'
export default {
  name: 'App',
  components: {
    Header,
    // Jumbo,
    // Servizi,
    Footer,
    // Presentazione,
    // Divider,
    // Download,
    // Recensioni,
  }
}
</script>

<style lang="scss">
*{
font-family: 'Bodoni Moda', serif;
}
</style>
