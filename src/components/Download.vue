<template>
    <section id="download">
        <h2 class="fs-1 mb-2 text-center">Download</h2>
        <div class="container py-4">
            <div class="row">
                <div class="col-12">
                    <div class="float-end margin-center w-50 p-1 p-sm-3">
                        <img src="../assets/1641058440687.jpg" alt="" />
                    </div>
                    <p class="mb-0 pt-1 pt-sm-3">
                        Le aspettative presenti in ciascuna di noi rispetto alla
                        maternità non sempre rispecchiano la realtà di fronte
                        alla quale poi ci ritroviamo. Ho pensato potesse farti
                        piacere un pdf con una riflessione su questo argomento.
                        A te, che hai visitato il mio sito entro il 7 febbraio
                        2022, ho riservato la possibilità di averlo
                        gratuitamente. Lasciami un feedback via mail e
                        raccontami se la realtà ha rispecchiato le tue
                        aspettative, avrai diritto ad uno sconto sui servizi
                        proposti!
                    </p>
                    <p class="fs-3 py-5">
                        <a
                            target="_blank"
                            href="Maternità, tra aspettative e realtà - di Cristina Savino.pdf"
                        >
                            Clicca Qui per il Download Gratuito del PDF
                        </a>
                    </p>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: "Download",
};
</script>

<style scoped lang="scss">
section {
    background-color: #f5eaef;
}

img {
    max-width: 100%;
    border-radius: 30px;
}
.margin-center {
    margin: 0 auto;
}

a {
    color: black;
    text-decoration: none;
    &:hover {
        text-decoration: underline;
        color: black;
    }
}
</style>
