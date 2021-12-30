<template>
    <footer class="py-5">
        <div class="container">
            <div class="row">
                <div class="col-12 col-md-6">
                    <div>
                        <h5>Hai ancora dubbi?</h5>
                        <h6>Contattami senza impegno per qualsiasi informazione</h6>
                        <div>
                            La mia mail è: 
                            <a class="ms-1" href=" mailto: giulioincarbone95@gmail.com">mail@gmail.com</a>
                        </div>

                        <div >
                            il mio numero di telefono è:
                            <a class="ms-1" href=" tel:+393472256151 ">3472256151</a>
                        </div>
                    </div>
                    <div>
                        <div>Puoi scrivermi anche su Instagram
                            <a class="ms-1"
                                href="https://www.instagram.com/custodiamoci/?show_story_unavailable=1"
                            >@custodiamoci
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </footer>
</template>

<script>
export default {
name: 'Footer',
}
</script>

<style scoped lang="scss">
footer{
    background-color: rgba(248, 164, 210, 0.527)
}
a{
    color:black;
    text-decoration: none;
    &:hover{
        color:black;
        text-decoration: underline;
    }
}
</style>