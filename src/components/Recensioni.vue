<template>
    <div id="feedback">
        <div class="container px-0 px-md-1">
            <div class="row justify-content-center d-flex py-2">
                <div class="col-12 col-md-10">
                    <div
                        id="carouselExampleFade"
                        class="recensioni carousel slide"
                        data-bs-ride="carousel"
                    >
                        <div class="carousel-inner">
                            <div
                                data-bs-interval="12000"
                                class="carousel-item active"
                            >
                                <p class="text-center px-lg-1">
                                    Oggi ho passato un'ora di incontro con
                                    Cristina on line. Innanzitutto ha subito
                                    creato un clima di fiducia, dove mi sono
                                    sentita libera di raccontare il mio vissuto.
                                    Mi sono sentita ascoltata e compresa. Mi ha
                                    dato poi degli ottimi suggerimenti per
                                    aiutarmi a connettermi con me stessa e con
                                    le mie risorse. Credo che ogni donna debba
                                    essere custodita da una doula. Un grande
                                    grazie!
                                </p>
                            </div>
                            <div
                                data-bs-interval="12000"
                                class="carousel-item text-center"
                            >
                                <p class="px-lg-1">
                                    Ho conosciuto Cristina per caso, in un
                                    gruppo di mamme. Non sono solita chiedere
                                    aiuto, ma la gravidanza e l'arrivo di un
                                    bambino cambiano davvero la vita e ti
                                    pongono davanti a mille dubbi su qualsiasi
                                    cosa e per una neomamma cavarsela da sola
                                    non è sempre la scelta migliore. Mi sono
                                    affidata a lei e ne sono stata davvero
                                    contenta, mi ha dato diversi chiarimenti e
                                    spunti interessanti, in modo gentile e
                                    disponibile, ascoltandomi con pazienza,
                                    senza giudicarmi. Purtroppo al momento del
                                    parto non conoscevo ancora Cristina,
                                    altrimenti avrei chiesto il suo appoggio,
                                    sia pratico che psicologico, molto prima!
                                </p>
                            </div>
                            <div
                                data-bs-interval="12000"
                                class="carousel-item text-center"
                            >
                                <p class="px-lg-1">
                                    Ho avuto l’occasione di confrontarmi più
                                    volte con Cristina e la prima parola che mi
                                    viene di getto è DOLCEZZA. Ho avuto
                                    l’impressione di parlare con una persona che
                                    conoscessi da tempo, un’amica insomma! Si
                                    perché sa usare le parole giuste al momento
                                    giusto..senza essere invasiva e ha una
                                    grande capacità di ascolto. Spero di avere
                                    l’occasione prossimamente di riparlare con
                                    lei.
                                </p>
                            </div>
                            <div
                                data-bs-interval="12000"
                                class="carousel-item text-center"
                            >
                                <p class="px-lg-1">
                                    L'essere mamma è gratificante ma a volte la
                                    stanchezza prevale, oggi dopo una notte
                                    infernale ho sentito il bisogno di parlare
                                    con doula Cristina per capire se smettere o
                                    no di allattare, devo dire che ho trovato
                                    oltre ad una professionista super preparata
                                    anche una mamma con un cuore super gigante
                                    con cui parlare. Grazie mille per questa
                                    consulenza!"
                                </p>
                            </div>
                        </div>
                        <button
                            class="carousel-control-prev d-none d-lg-flex"
                            type="button"
                            data-bs-target="#carouselExampleFade"
                            data-bs-slide="prev"
                        >
                            <span
                                class="carousel-control-prev-icon"
                                aria-hidden="true"
                            ></span>
                            <span class="visually-hidden">Previous</span>
                        </button>
                        <button
                            class="carousel-control-next d-none d-lg-flex"
                            type="button"
                            data-bs-target="#carouselExampleFade"
                            data-bs-slide="next"
                        >
                            <span
                                class="carousel-control-next-icon text-end"
                                aria-hidden="true"
                            ></span>
                            <span class="visually-hidden">Next</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "Recensioni",
};
</script>

<style scoped lang="scss">

.recensioni {
    min-height: 200px;
}

.carousel-control-next {
    justify-content: end;
    align-items: center;
}
.carousel-control-next-icon {
    background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='white'%3e%3cpath d='M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z'/%3e%3c/svg%3e");
}
.carousel-control-prev-icon {
    background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='white'%3e%3cpath d='M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z'/%3e%3c/svg%3e");
}
.carousel-control-prev {
    justify-content: start;
    align-items: center;
}
.carousel-inner {
    width: 85%;
}

.carousel {
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>
