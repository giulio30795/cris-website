<template>
    <section class="container-fluid pb-5">
        <div
            class="container-xl text-center d-flex flex-column justify-content-center justify-content-md-evenly h-100 pb-5"
        >
            <div class="row">
                <div class="col-12 text pb-3">
                    <h2 class="corsivo">Doula Cristina</h2>
                    <h3 class="fs-1">
                        Sostegno in gravidanza parto e puerperio
                    </h3>
                </div>
            </div>

            <!-- <div
                class="row g-0 justify-content-md-between align-items-center flex-wrap mt-2"
            >
                <div
                    class="col-12 col-sm-6 col-lg-2 px-4 px-md-2 px-lg-0 d-flex justify-content-center align-item-center my-2"
                >
                    <div class="servizi p-2 p-sm-3">
                        <a class="fs-3 w-100 d-block" href="#servizi"
                            >Servizi</a
                        >
                    </div>
                </div>

                <div
                    class="col-12 col-sm-6 col-lg-2 px-4 px-md-2 px-lg-0 d-flex justify-content-center align-item-center my-2"
                >
                    <div class="servizi p-2 p-sm-3">
                        <a class="fs-3 w-100 d-block" href="#presentazione"
                            >Chi sono</a
                        >
                    </div>
                </div>

                <div
                    class="col-12 col-sm-6 col-lg-2 px-4 px-md-2 px-lg-0 d-flex justify-content-center align-item-center my-2"
                >
                    <div class="servizi p-2 p-sm-3">
                        <a class="fs-3 w-100 d-block" href="#download"
                            >Letture</a
                        >
                    </div>
                </div>

                <div
                    class="col-12 col-sm-6 col-lg-2 px-4 px-md-2 px-lg-0 d-flex justify-content-center align-item-center my-2"
                >
                    <div class="servizi p-2 p-sm-3">
                        <a class="fs-3 w-100 d-block" href="#footer"
                            >Contatti</a
                        >
                    </div>
                </div>

                <div
                    class="col-12 col-sm-6 d-sm-none d-lg-flex col-lg-2 px-4 px-md-2 px-lg-0 d-flex justify-content-center align-item-center my-2 feedback"
                >
                    <div class="servizi p-2 p-sm-3">
                        <a class="fs-3 w-100 d-block" href="#feedback"
                            >Feedback</a
                        >
                    </div>
                </div>
            </div> -->
        </div>
    </section>
</template>

<script>
export default {
    name: "Jumbo",
};
</script>

<style scoped lang="scss">
section {
    background-image: url("../assets/lidia-505.jpg");
    height: 85vh;
    background-position: center;
    background-size: cover;
}

.cs-logo img {
    width: 90px;
    border-radius: 50%;
}

.text {
    color: white;
}
.corsivo {
    font-family: 'Dr Sugiyama', cursive;
    font-size: 3rem;
    
}
.servizi {
    border: 1px solid white;
    width: 100%;
    transition: all ease-in-out 0.3s;
    &:hover {
        border: 1px solid transparent;
        background-color: #f5eaef;
        border-radius: 50px;
    }
    &:hover a {
        color: black;
    }
    a {
        color: white;
        text-decoration: none;
        font-size: 2rem;
    }
}

.social img {
    width: 45px;
    height: 45px;
    transition: all ease-in-out 0.6s;
    &:hover {
        transform: rotate(360deg);
    }
}

@media screen and (max-width: 370px) {
    .feedback{
        display: none !important;
    }

    .corsivo{
        font-size: 2.5rem
    }
}
</style>
