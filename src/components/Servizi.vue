<template>
    <section id="servizi">
        <h2 class="text-center mb-4">Ecco quali sono i servizi offerti</h2>
        <div class="container">
            <div id="accordionExample" class="row">
                <div class="col-sm-12 col-md-6 col-lg-4 my-2" v-for="(element, index) in Servizi" :key="`servizio-${index}`">
                    <CardServizio
                    :img="element.img"
                    :title="element.title"
                    :text="element.text"
                    :index="index"
                    />
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import Servizi from '../DevData/Servizi.js'
import CardServizio from './CardServizio.vue'

export default {
name: 'Servizi',
components:{
    CardServizio,
},



data (){
    return {
        Servizi : Servizi
    }
},
}
</script>


<style scoped lang="scss">



</style>