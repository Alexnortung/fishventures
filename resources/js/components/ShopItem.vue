<template lang="pug">
    .shop-item.shop-item-gradient
        .row.w100
            .table-cell.w100
                <img class="shop-item-icon" :src="'/img/icons/fish/' + imgName + '.png'">
                .border
                span.in.middle
                    span.name.text {{ name }}
                    br
                    span.gain.text(
                        v-text="item.moneyPerSecond + '$/s'"
                        v-if="item.isVisible"
                        )
                
            .table-cell.right.w100
                span.in.middle
                    span.cost.text(
                        v-text="costFormatter(item.getCurrentCost()) + '$'"
                        v-if="item.isVisible"
                        )
                    br(v-if="item.isVisible")
                    span.owned.text {{ owned }}
</template>

<script>
export default {
    props: {
        "name": {
            type: String,
        }, 
        "owned": {
            type: Number,
        }, 
        "imgName": {
            type: String,
        }, 
        "item": {
            type: Object,
        },
        "costFormatter": {
            type: Function,
            default(number) {
                return number;
            }
        }
    },
    data() {
        return {

        }
    },
}
</script>

<style lang="scss">

    .middle {
        vertical-align: middle;
    }
    .row {
        display: table-row;
    }

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

        .shop-item-icon {
            filter: grayscale(0) blur(0);
            transition: filter 0.5s;
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

    .name, .cost {
        font-size: 24px;
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