<template>
    <div class="servizio">
        <div class="service-card d-flex justify-content-center align-items-center pt-2">
            <div class="text-center px-3 fs-5"> {{title}} </div>
        </div>
        <img class="p-3" :src="img" alt="title"/>

        <div class="accordion">
            <div class="accordion-item">
                <h2 class="accordion-header" :id="`heading${index}`">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" :data-bs-target="`#collapse${index}`" aria-expanded="true" :aria-controls="`collapse${index}`">
                        <div class="text-center w-100">
                            Scopri il Servizio
                        </div>
                    </button>
                </h2>
            <div :id="`collapse${index}`" class="accordion-collapse collapse" :aria-labelledby="`heading${index}`" data-bs-parent="#accordionExample">
                <div class="accordion-body">
                    <p>
                        {{text}}
                    </p>
                </div>
            </div>
        </div>
    </div>



    </div>
</template>


<script>
export default {
    name: 'CardServizio',
    props:{
        img: String,
        title: String,
        text: String,
        index: Number,
    },

    data(){
        return {
            flag: false,
        }
    },

    methods:{
        setFlag(){
            this.flag = !this.flag
            },
        },
    };
</script>

<style scoped lang="scss">

.rotate{
    transition: .4s ease-in-out;
    transform: rotate(180deg)
}

.scopri{
    cursor:pointer;
}

.transtion{
    transition: 1s
}
.servizio{
    border: .5px solid grey;
    background-color: white;
}
.service-card{
    height: 60px;
}

img{
    width: 100%;
    max-height: 270px;
    object-fit: cover;
    object-position: center;
    border-radius: 30px;
}
</style>
