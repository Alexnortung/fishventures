<template lang="pug">
    .upgrade-item
        img(
            :src="upgradeObject.imagePath"
            )
</template>

<script>
export default {
    props: ['upgradeObject'],
    data () {


        return {
            
        }
    },

    methods: {
        
    }
}
</script>

<style lang="scss">
    .upgrade-item {

        display: inline-block;

        img {
            width: 64px;
            filter: grayscale(1);
            transition: filter 0.3s;

        }

        .affordable & img {
            filter: grayscale(0);
        }
    }


</style>