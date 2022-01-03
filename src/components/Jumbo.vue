<template>
    <section class="container-fluid pb-5">
        <header class="row justify-content-between">
            <div class="col-3 cs-logo ps-0 pt-1">
                <a class="fs-1 p-3" href="#">
                    <img
                        src="../assets/1640562992772.jpg"
                        alt="Logo-Cristina"
                    />
                </a>
            </div>
            <div class="col-3 social p-2 justify-content-end d-flex">
                <a target="_blank" href="mailto: doulacri@gmail.com">
                    <img
                        class="mx-1 gmail"
                        src="../assets/gmail-google.png"
                        alt="E-Mail"
                    />
                </a>
                <a target="_blank" href="tel:+393472256151">
                    <img
                        class="mx-1"
                        src="../assets/whatsapp-6273368_1280.webp"
                        alt="Telefono"
                    />
                </a>
                <a
                    target="_blank"
                    href="https://www.instagram.com/custodiamoci/"
                >
                    <img
                        class="mx-1"
                        src="../assets/logo-instragram.png"
                        alt="Instagram"
                    />
                </a>
            </div>
        </header>
        <div
            class="container-xl text-center d-flex flex-column justify-content-center justify-content-md-evenly h-100 pb-5"
        >
            <div class="row">
                <div class="col-12 text pb-3">
                    <h2 class="fs-1">Doula Cristina</h2>
                    <h3 class="fs-1">
                        Sostegno in gravidanza parto e puerperio
                    </h3>
                </div>
            </div>

            <div
                class="row g-0 justify-content-md-between align-items-center flex-wrap mt-2"
            >
                <div
                    class="col-12 col-md-6 col-lg-3 px-4 px-md-2 px-lg-3 d-flex justify-content-center align-item-center my-2"
                >
                    <div class="servizi p-2 p-sm-3">
                        <a class="fs-3 w-100 d-block" href="#servizi"
                            >Scopri i Servizi</a
                        >
                    </div>
                </div>

                <div
                    class="col-12 col-md-6 col-lg-3 px-4 px-md-2 px-lg-3 d-flex justify-content-center align-item-center my-2"
                >
                    <div class="servizi p-2 p-sm-3">
                        <a class="fs-3 w-100 d-block" href="#presentazione"
                            >Scopri chi sono</a
                        >
                    </div>
                </div>

                <div
                    class="col-12 col-md-6 col-lg-3 px-4 px-md-2 px-lg-3 d-flex justify-content-center align-item-center my-2"
                >
                    <div class="servizi p-2 p-sm-3">
                        <a class="fs-3 w-100 d-block" href="#download"
                            >Regalo per te</a
                        >
                    </div>
                </div>

                <div
                    class="col-12 col-md-6 col-lg-3 px-4 px-md-2 px-lg-3 d-flex justify-content-center align-item-center my-2"
                >
                    <div class="servizi p-2 p-sm-3">
                        <a class="fs-3 w-100 d-block" href="#footer"
                            >Contatti</a
                        >
                    </div>
                </div>
            </div>
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
    height: 100vh;
    background-position: bottom;
    background-size: cover;
}

.cs-logo img {
    width: 90px;
    border-radius: 50%;
}

.text {
    color: white;
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
</style>
