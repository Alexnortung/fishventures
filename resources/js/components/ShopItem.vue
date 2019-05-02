<template lang="pug">
    .shop-item.shop-item-gradient
        .table-cell.w100
            <img class="shop-item-icon" :src="'/img/icons/' + imgName + '.png'">
            .border
            span.in.name.text {{ name }}
        .table-cell.w100.right
            span.in.owned.text {{ owned }}
</template>

<script>
export default {
    props: ["name", "owned", "imgName", "item"],
    data() {
        return {

        }
    },
}
</script>

<style lang="scss">

    .shop-item {
        position: relative;
        background: linear-gradient(to right, #1d1d1d, #6F6F6F);
        color: #fff;
        height: 64px;
        cursor: pointer;

        span.text {
            padding-left: 10px;

        }
        .right {
            span.text {
                padding-left: 0;
                padding-right: 10px;

            }
        }

        .border {
            position: absolute;
            height: 100%;
            display: inline-block;
        }

        &.unknown {
            .shop-item-icon {
                filter: grayscale(80%) blur(15px);
                overflow: hidden;

            }
        }

        &.unknown, &.unaffordable {
            color: rgba(#fff, 0.5);
            cursor: default;
        }

    }

    .w100 {
        width: 100%;
    }
    .table-col {
        display: table-column;

    }

    .table-cell {
        display: table-cell;
    }

    .right {
        text-align: right;
    }

    span.in {
        display: inline-block;
        // display: table-cell;

    }

    .shop-item-icon {
        width: 64px;
        height: 64px;
        display: inline-block;
        vertical-align: middle;
    }
</style>