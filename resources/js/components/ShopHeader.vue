<template lang="pug">
    .shop-header
        div.shop-header-text 
            <slot></slot>
</template>

<style lang="scss">
    .shop-header {
        width: 100%;

        text-align: center;
        font-size: 36px;
        display: table-row;

    }

    .shop-header-text {
        padding: 5px;
    }
</style>