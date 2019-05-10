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

        img {
            width: 64px;

        }
    }


</style>