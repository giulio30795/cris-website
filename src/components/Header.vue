<template>
          <header class="row justify-content-between p-1 container-fluid m-0">
            <div class="col-3 cs-logo d-flex align-items-center">
                <a class="fs-1 p-1" href="#">
                    <img
                        src="../assets/1640562992772.jpg"
                        alt="Logo-Cristina"
                    />
                </a>
            </div>


            
            <!-- <div class="col-3 social p-1 justify-content-end d-flex align-items-center">
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
                    href="https://www.instagram.com/custodiamoci_doula_cristina/"
                >
                    <img
                        class="mx-1"
                        src="../assets/logo-instragram.png"
                        alt="Instagram"
                    />
                </a>
            </div> -->
        </header>
</template>

<script>
export default {
    name: "Footer",
};
</script>

<style scoped lang="scss">
header{
    height: 15vh;
     background-color: rgba(248, 164, 210, 0.527);
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