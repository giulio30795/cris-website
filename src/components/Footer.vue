<template>
    <footer id="footer" class="py-5">
        <div class="container">
            <div class="row">
                <div class="col-12 col-md-4">
                    <div>
                        <h5>Hai ancora dubbi?</h5>
                        <h6>
                            Contattami senza impegno per qualsiasi informazione
                        </h6>
                        <div>
                            La mia mail è:
                            <a class="ms-1" href=" mailto: doulacri@gmail.com"
                                >doulacri@gmail.com</a
                            >
                        </div>

                        <div>
                            il mio numero di telefono è:
                            <a class="ms-1" href=" tel:+393472256151 "
                                >3472256151</a
                            >
                        </div>
                    </div>
                    <div>
                        <div>
                            Puoi scrivermi anche su Instagram
                            <a
                                class="ms-1"
                                href="https://www.instagram.com/custodiamoci/?show_story_unavailable=1"
                                >@custodiamoci
                            </a>
                        </div>
                    </div>
                </div>

                <div class="col-12 col-md-4">
                    <div>About me</div>
                    <p>
                        Sostegno in gravidanza e puerperio. Percorsi di accompagnamento alla nascita ed elaborazioni del parto.
                    </p>
                    <a href="#">
                        <img
                            src="../assets/1640562992772.jpg"
                            alt="Logo-Cristina"
                        />
                    </a>
                </div>
            </div>
        </div>
    </footer>
</template>

<script>
export default {
    name: "Footer",
};
</script>

<style scoped lang="scss">
footer {
    background-color: rgba(248, 164, 210, 0.527);
}
a {
    color: black;
    text-decoration: none;
    &:hover {
        color: black;
        text-decoration: underline;
    }
}

img {
    width: 90px;
    border-radius: 50%;
}
</style>
