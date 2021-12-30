<template>
    <div>
      <Jumbo />
      <Presentazione />
      <Servizi />
      <Footer />
    </div>
</template>

<script>
import Jumbo from './components/Jumbo.vue'
import Presentazione from './components/Presentazione.vue'
import Servizi from './components/Servizi.vue'
import Footer from './components/Footer.vue'
export default {
  name: 'App',
  components: {
    Jumbo,
    Servizi,
    Presentazione,
    Footer,
  }
}
</script>

<style lang="scss">
*{
font-family: 'Bodoni Moda', serif;

}
</style>
