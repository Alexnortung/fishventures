<template lang="pug">
    .shop-header
        span.shop-header-text 
            <slot></slot>
</template>

<style lang="scss">
    .shop-header {
        width: 100%;

        text-align: center;
        font-size: 28px;
        display: table-row;

    }
</style>