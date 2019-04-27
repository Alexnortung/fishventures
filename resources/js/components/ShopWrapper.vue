<template lang="pug">
    .shop-wrapper
        <shop-header>{{ headerName }}</shop-header>
        <slot></slot>
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


</style>