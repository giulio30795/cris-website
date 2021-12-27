<template>
    <div class="servizio">
        <img class="p-3" :src="img" alt="title" />
        <div class="px-3 text">
            <h4>{{title}}</h4>
            <p class="mt-3">{{text}}</p>
        </div>
    </div>
</template>

<script>
export default {
    name: 'CardServizio',
    props:{
        img: String,
        title: String,
        text: String,
    }
};
</script>

<style scoped lang="scss">


img{
    width: 100%;
    max-height: 270px;
    object-fit: cover;
    object-position: center;
}
</style>
