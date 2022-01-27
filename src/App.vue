<template>
    <div>
      <Jumbo />
      <Divider />
      <Presentazione />
      <Divider />
      <Servizi />
      <Divider />
      <Download />
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
export default {
  name: 'App',
  components: {
    Jumbo,
    Servizi,
    Presentazione,
    Footer,
    Divider,
    Download,
  }
}
</script>

<style lang="scss">
*{
font-family: 'Bodoni Moda', serif;
}
</style>
