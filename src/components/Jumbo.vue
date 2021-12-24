<template>
    <section>
        <header>
            <div class="row">
                <div class="col-6 cs-logo my-0">
                    <a href="#">C.S.</a>
                </div>
                <div class="col-6 d-flex social justify-content-end align-items-center">
                    <a href="">
                        <img src="../assets/logo-instragram.png" alt="Instagram">
                    </a>

                    <a href="">
                        <img src="../assets/logo-linkedin.png" alt="Linkedin">
                    </a>
                    <a href="">
                        <img src="../assets/logo-facebook.jpeg" alt="Facebook">
                    </a>
                </div>
            </div>
        </header>
        <div class=" overlay h-100 text-center d-flex flex-column justify-content-center align-items-center">
            <div class="text">
                <h2>Doula Cristina</h2>
                <h3 class="mb-5">Sostegno in gravidanza parto e puerperio.</h3>
            </div>
                <div>
                    <a class="servizi" href="#">Scopri i Servizi</a>
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
        color: white;
        text-decoration: none;
        font-size: 3rem;
        padding: 1rem;
        border-bottom-right-radius:15px;
        &:hover {
            border: none;
            color: black;
            background-color: #EBC1BA;
            transition:  all ease-in-out .3s;
        }
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
            border: none;
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
        margin: 0 10px;
    }
}
</style>