<template>
    <footer id="footer" class="py-4">
        <div class="container">
            <div class="row">
                <div class="col-12 col-md-4 mt-3">
                    <div>
                        <h5>Hai ancora dubbi?</h5>
                        <h6>
                            Contattami senza impegno per qualsiasi informazione
                        </h6>
                        <div>
                            La mia mail è:
                            <a
                                target="_blank"
                                class="ms-1"
                                href=" mailto: doulacri@gmail.com"
                                >doulacri@gmail.com</a
                            >
                        </div>

                        <div>
                            <a
                                target="_blank"
                                href=" tel:+393472256151 "
                                >Puoi contattarmi su WhatsApp cliccando qui</a
                            >
                        </div>
                    </div>
                    <div>
                        <div>
                            Puoi scrivermi anche su Instagram
                            <a
                                target="_blank"
                                href="https://www.instagram.com/custodiamoci_doula_cristina/"
                                >@custodiamoci_doula_cristina
                            </a>
                        </div>
                    </div>
                </div>

                <div class="col-12 col-md-4 mt-3">
                    <h5>Doula Cristina</h5>
                    <div class="d-flex align-items-center">
                        <p class="mb-0">
                            Sostegno in gravidanza e puerperio. Percorsi di
                            accompagnamento alla nascita ed elaborazioni del
                            parto. <br> <br>
                            Attiva online e a Vigevano, Pavia, Voghera e paesi limitrofi
                        </p>
                    </div>
                </div>

                <div class="align-self-center col-12 col-md-4 mt-3 text-center">
                    <a href="#">
                        <img
                            src="../assets/logoCristinaNuovo.jpeg"
                            alt="Logo-Cristina"
                        />
                    </a>
                </div>
            </div>
        </div>
        <a class="back-home text-center" href="#"> &uarr; </a>
    </footer>
</template>

<script>
export default {
    name: "Footer",
};
</script>

<style scoped lang="scss">
footer {
    color:white;
    background-color: #0088A3
}
a {
    color: white;
    text-decoration: none;
    margin-left: 0;
    &:hover {
        text-decoration: underline;
        color: white;
    }
}

img {
    width: 90px;
    border-radius: 50%;
}
.back-home {
    font-size: 2.5rem;
    color: white;
    width: 50px;
    border-radius: 50px;
    position: fixed;
    bottom: 15px;
    right: 15px;
    transition: 0.3s;
    &:hover {
        color: white;
        text-decoration: none;
        transform: scale(1.3);
    }
}
</style>
