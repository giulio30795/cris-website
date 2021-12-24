<template>
    <section>
        <header>
            <div class="row">
                <div class="col-6 cs-logo my-0">
                    <a href="#">C.S.</a>
                </div>
                <div class="col-6 d-flex social justify-content-end align-items-center align-items-md-end flex-md-column flex-lg-row ">
                    <a href="https://www.instagram.com/custodiamoci/?show_story_unavailable=1">
                        <img class="mx-1" src="../assets/logo-instragram.png" alt="Instagram">
                    </a>

                    <a href="">
                        <img class="mx-1" src="../assets/logo-linkedin.png" alt="Linkedin">
                    </a>
                    <a href="https://www.facebook.com/criscustodiamoci/">
                        <img class="mx-1" src="../assets/logo-facebook.jpeg" alt="Facebook">
                    </a>
                </div>
            </div>
        </header>
        <div class=" overlay h-100 text-center d-flex flex-column justify-content-center align-items-center">
            <div class="text">
                <h2>Doula Cristina</h2>
                <h3 class="mb-5">Sostegno in gravidanza parto e puerperio.</h3>
            </div>
            
            <div class="d-flex justify-content-center">
                <div>
                    <a class="servizi mx-5" href="#servizi">Scopri i Servizi</a>
                </div>

                <div>
                    <a class="servizi mx-5" href="#presentazione">Scopri chi sono</a>
                </div>

                <div>
                    <a class="servizi mx-5 px-4" href="#feedback">Dicono di me</a>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
name: 'Jumbo'
}
</script>

<style scoped lang="scss">

header {
    height: 100px;
    position:fixed;
    width:100%;
}
section{
    background-image: url('../assets/lidiaweb-505_2.jpg');
    height: 100vh;
    width: 100vw;
    background-position: bottom ;
    background-size: cover;
}
.cs-logo{
    font-weight: 1000;
    font-size: 3rem;
    a{
        color: black;
        background-color: #EBC1BA;
        text-decoration: none;
        font-size: 3rem;
        padding: 1rem;
        border-bottom-right-radius:15px;

    }
}

.overlay{
    background-color: rgba(58, 56, 56, .3);
}
.text {
    margin-bottom: 2rem;
    h2, h3{
    color: white;
    font-size: 4rem;
    font-weight: normal;
    }
}

.servizi{
        color: white;
        text-decoration: none;
        font-size: 2rem;
        border: 1px solid white;
        padding: 1rem;
        &:hover {
            border: 1px solid transparent;
            color: black;
            background-color: #EBC1BA;
            transition:  all ease-in-out .3s
        }
    }


.social {
    padding: 1rem;
    
    img {
        width:50px;
        border-radius: 30%;

    }
}
</style>