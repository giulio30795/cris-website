<template>
    <div>
      <Jumbo />
      <Presentazione />
      <Servizi />
    </div>
</template>

<script>
import Jumbo from './components/Jumbo.vue'
import Presentazione from './components/Presentazione.vue'
import Servizi from './components/Servizi.vue'
export default {
  name: 'App',
  components: {
    Jumbo,
    Servizi,
    Presentazione,
  }
}
</script>

<style lang="scss">
*{
font-family: 'Bodoni Moda', serif;

}
</style>
