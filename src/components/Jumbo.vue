<template>
    <section class="container-fluid">
        <header class="row justify-content-between">
            <div class="col-3 cs-logo">
                <a href="#">C.S.</a>
            </div>
            <div class="col-3 social justify-content-end d-flex">
                <a
                    href="https://www.instagram.com/custodiamoci/?show_story_unavailable=1"
                >
                    <img
                        class="mx-1"
                        src="../assets/logo-instragram.png"
                        alt="Instagram"
                    />
                </a>

                <a href="">
                    <img
                        class="mx-1"
                        src="../assets/logo-linkedin.png"
                        alt="Linkedin"
                    />
                </a>
                <a href="https://www.facebook.com/criscustodiamoci/">
                    <img
                        class="mx-1"
                        src="../assets/logo-facebook.jpeg"
                        alt="Facebook"
                    />
                </a>
            </div>
        </header>
        <div
            class="container-xl text-center d-flex flex-column justify-content-center h-100 pb-5"
        >
            <div class="row">
                <div class="col-12 text pb-5">
                    <h2>Doula Cristina</h2>
                    <h3 class="mb-5">
                        Sostegno in gravidanza parto e puerperio.
                    </h3>
                </div>
            </div>

            <div
                class="row justify-content-md-between align-items-center flex-wrap mt-1"
            >
                <div
                    class="col-12 col-sm-6 col-md-3 d-flex justify-content-center align-item-center my-2"
                >
                    <div class="servizi">
                        <a href="#servizi">Scopri i Servizi</a>
                    </div>
                </div>

                <div
                    class="col-12 col-sm-6 col-md-3 d-flex justify-content-center align-item-center my-2"
                >
                    <div class="servizi">
                        <a href="#presentazione">Scopri chi sono</a>
                    </div>
                </div>

                <div
                    class="col-12 col-sm-6 col-md-3 d-flex justify-content-center align-item-center my-2"
                >
                    <div class="servizi">
                        <a href="#feedback">Dicono di me</a>
                    </div>
                </div>

                <div
                    class="col-12 col-sm-6 col-md-3 d-flex justify-content-center align-item-center my-2"
                >
                    <div class="servizi">
                        <a href="#feedback">Dicono di me</a>
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
.cs-logo {
    font-weight: 1000;
    font-size: 3rem;
    a {
        color: black;
        background-color: #ebc1ba;
        text-decoration: none;
        font-size: 3rem;
        padding: 1rem;
        border-bottom-right-radius: 15px;
    }
}

.text {
    margin-bottom: 2rem;
    h2,
    h3 {
        color: white;
        font-size: 3rem;
        font-weight: normal;
    }
}

.servizi {
    border: 1px solid white;
    padding: 1rem;
    &:hover {
        border: 1px solid transparent;
        background-color: #ebc1ba;
        transition: all ease-in-out 0.3s;
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

.social {
    padding: 1rem;
    img {
        width: 50px;
        border-radius: 30%;
    }
}
</style>
