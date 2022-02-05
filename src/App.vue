<template>
    <div>
      <Jumbo />
      <Divider />
      <Presentazione />
      <Divider />
      <Servizi />
      <Divider />
      <Download />
      <Divider />
      <Recensioni />
      <Footer />
    </div>
</template>

<script>
import Jumbo from './components/Jumbo.vue'
import Presentazione from './components/Presentazione.vue'
import Servizi from './components/Servizi.vue'
import Divider from './components/Divider.vue'
import Download from './components/Download.vue'
import Footer from './components/Footer.vue'
import Recensioni from './components/Recensioni.vue'
export default {
  name: 'App',
  components: {
    Jumbo,
    Servizi,
    Presentazione,
    Footer,
    Divider,
    Download,
    Recensioni,
  }
}
</script>

<style lang="scss">
*{
font-family: 'Bodoni Moda', serif;
}
</style>
