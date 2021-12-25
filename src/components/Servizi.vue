<template>
    <section id="servizi">
        <h2 class="text-center">Ecco quali sono i servizi offerti</h2>
        <div class="container">
            <div class="row">
                <div class="col-md-12 col-lg-6 my-2" v-for="(element, index) in Servizi" :key="`servizio-${index}`">
                    <CardServizio
                    :img="element.img"
                    :title="element.title"
                    :text="element.text"
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

.servizio{
    border: 1px solid grey
}


</style>