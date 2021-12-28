<template>
    <div class="servizio">
        <img class="p-3" :src="img" alt="title"/>
        <!-- <p>
            <a @click="setFlag" class="btn btn-primary" data-bs-toggle="collapse" href="#collapseExample" role="button" :aria-expanded="{flag}" aria-controls="collapseExample">
                Scopri il servizio 
            </a>
        </p>
            <div class="collapse" id="collapseExample" :class="{show : flag }">
            <div class="card card-body">
                {{text}}
            </div>
        </div> -->


        <!-- <div class="accordion accordion" id="accordionExample">
            <div class="accordion-item">
                <h2 class="accordion-header" id="headingOne">
                    <div class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="collapseOne">
                        {{title}}
                    </div>
                </h2>
                <div id="flush-collapseOne" class="accordion-collapse collapse" aria-labelledby="headingOne"  data-bs-parent="#accordionFlushExample">
                    <div class="accordion-body">{{text}}</div>
                </div>
            </div>
        </div> 



          <div id="accordion">
            <div class="card">
                <div class="card-header service-card" :id="`heading${indice}`">
                    <div class="mb-0 fs-6 row justify-content-evenly g-0" data-toggle="collapse" :data-target="`#collapse${indice}`" aria-expanded="false" :aria-controls="`collapse${indice}`">
                        <div class="col-6 h-100 align-self-center fs-6">
                            {{title}}
                        </div>
                        <div @click="setFlag" class="col-5 offset-1 d-flex flex-column justify-content-center text-center scopri">
                            <div>Scopri di più</div>
                            <div class="fs-2 text-center" :class="{rotate: flag}">
                                &#8595;
                            </div>
                        </div>
                    </div>
                </div>

                <div :id="`collapse${indice}`" class="collapse" :class="{show : flag}" :aria-labelledby="`heading${indice}`" data-parent="#accordion">
                    <div class="card-body">
                        {{text}}
                    </div>
                </div>
            </div>
        </div> -->

        <div class="accordion">
            <div class="accordion-item">
                <h2 class="accordion-header" :id="`heading${index}`">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" :data-bs-target="`#collapse${index}`" aria-expanded="true" :aria-controls="`collapse${index}`">
                    Accordion Item #1
                    </button>
                </h2>
            <div :id="`collapse${index}`" class="accordion-collapse collapse" :aria-labelledby="`heading${index}`" data-bs-parent="#accordionExample">
                <div class="accordion-body">
                    <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
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
}
.service-card{
    min-height: 110px;
}

img{
    width: 100%;
    max-height: 270px;
    object-fit: cover;
    object-position: center;
    border-radius: 30px;
}
</style>
