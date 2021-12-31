<template>
        <div class="servizio d-flex flex-column">
            <div class=" title-container service-card d-flex justify-content-center align-items-center pt-2">
                <div class="text-center px-3 py-1 fs-5"> {{title}} </div>
            </div>

            <div classh="h-100">
                <img class="p-3 h-100" :src="img" alt="title"/>
            </div>
            <div class="accordion">
                <div class="accordion-item">
                    <h2 class="accordion-header " :id="`heading${index}`">
                        <button  class="accordion-button collapsed test" type="button" data-bs-toggle="collapse" :data-bs-target="`#collapse${index}`" aria-expanded="true" :aria-controls="`collapse${index}`">
                            <div class="text-center w-100">
                                Scopri il Servizio
                            </div>
                        </button>
                    </h2>
                </div>
            </div>
            <div :id="`collapse${index}`" class="accordion-collapse collapse" :aria-labelledby="`heading${index}`" data-bs-parent="#accordionExample">
                <div class="accordion-body">
                    <p>
                        {{text}}
                    </p>
                </div>
            </div>
        </div>
        <!-- <div class="flex-grow-2" v-show="!isActive && !closed"></div> -->
        <!-- @click="$emit('activeAccordion', index)" -->
</template>


<script>
export default {
    name: 'CardServizio',
    props:{
        img: String,
        title: String,
        text: String,
        index: Number,
        isActive: Boolean,
        closed: Boolean,
    },

    // data(){
    //     return {
    //         flag: false,
    //     }
    // },

    // methods:{
    //     setFlag(){
    //         this.flag = !this.flag
    //         },
    //     },
    };
</script>

<style scoped lang="scss">


.accordion-button:not(.collapsed)::after{
    background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='%23212529'%3e%3cpath fill-rule='evenodd' d='M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z'/%3e%3c/svg%3e");
}
.accordion-button:hover{
        background-color: rgba(248, 164, 210, 0.527)
    }

.accordion-button:focus{
    border-color: pink;
    box-shadow: 0 0 0 0.25rem rgba(248, 135, 197, 0.527);
}

.accordion-button:not(.collapsed){
    color: black;
    background-color: #f5eaef;
}

.accordion-item:last-of-type .accordion-button.collapsed,
.accordion-item:last-of-type,
.accordion-item:first-of-type .accordion-button {
    border-bottom-right-radius: 0;
    border-bottom-left-radius: 0;
    border-top-left-radius: 0;
    border-top-right-radius: 0;

    }
.accordion-item{
    border: none;
    border-top: 1px solid rgba(0, 0, 0, 0.125);
}

.rotate{
    transition: .4s ease-in-out;
    transform: rotate(180deg)
}

.scopri{
    cursor:pointer;
}

.flex-grow-2{
    flex-grow: 2;
}

.transtion{
    transition: 1s
}
.servizio{
    border: 2px solid rgba(0, 0, 0, 0.125);
    background-color: white;
}
.title-container{
    height: 110px;
}

img{
    width: 100%;
    max-height: 270px;
    object-fit: cover;
    object-position: center;
    border-radius: 30px;
}
</style>
