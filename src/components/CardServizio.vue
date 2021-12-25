<template>
    <div class="servizio">
        <img :src="img" alt="title" />
        <h4>{{title}}</h4>
        <p>{{text}}</p>
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
    max-width: 100%;    
    max-height:50%;
}
</style>
