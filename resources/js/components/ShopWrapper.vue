<template lang="pug">
    .shop-wrapper
        shop-header.shop-header {{ headerName }}
        .shop-items
            slot
</template>

<script>
import ShopHeader from './ShopHeader.vue';


export default {
    props: ["headerName"],
    components: {
        ShopHeader
    }
}
</script>

<style lang="scss">
    .shop-wrapper {
        width: 100%;
        display: table;
        
    }

    .shop-items, .shop-header {
        margin-top: 15px;
    }
    
    .shop-header {
        $color-length: 40px;
        background: repeating-linear-gradient(to right, 
            #00152b $color-length * 0,
            #00152b $color-length * 1,
            #004147 $color-length * 1, 
            #004147 $color-length * 2
        );

        color: #ffffff;
    }


</style>