<template lang="pug">
    #game-wrapper
        #clicker-area
            #click-area-inner
                #clicker-object


        #shop-area
            //- <shop-wrapper :headerName="'Upgrades'">
            //-     <upgrade-item></upgrade-item>
            //- </shop-wrapper>
            
            .shop-wrapper
                shop-header.shop-header Shop
                .shop-items
                    .item-items-item-wrapper(
                        @click="buy(item)"
                        v-for="item in visibleItems" 
                        )

                        shop-item(
                            
                            v-bind:name="item.name" 
                            v-bind:owned="item.owned" 
                            v-bind:imgName="item.imgName" 
                            v-bind:key="item.id"
                            v-bind:item="item"
                            v-bind:class="[item.isVisible ? '' : 'unknown', item.affordable ? '' : 'unaffordable']"
                            )
            
</template>

<script>
// Components:
import ShopHeader from "./ShopHeader.vue";
import ShopItem from "./ShopItem.vue";
import UpgradeItem from "./UpgradeItem.vue";

// Classes
import ShopItemObj from "../ShopItemObj.js";

window.ShopItemObj = ShopItemObj;





export default {
    
    data() {

        const items = [
            new ShopItemObj("Gin T", "gin-t", {
                initialCost: 1,
                baseCostAdd: 1,
                costMultiplier: 2,
            }),
            new ShopItemObj("Ripper", "ripper"),
            new ShopItemObj("Rixo", "rixo"),
            new ShopItemObj("Igor", "igor"),
            new ShopItemObj("Jaeger", "jaeger"),
            new ShopItemObj("Steven", "steven"),
            new ShopItemObj("Blu", "blu"),
            new ShopItemObj("Enigma", "enigma"),
            new ShopItemObj("Bartholomew", "bartholomew"),
            new ShopItemObj("Zanuchi", "zanuchi"),
            new ShopItemObj("Beaumont", "beaumont"),
        ];

        return {
            money: 0,
            level: 0,
            visibleItemNum: 1,
            items: items,
            buyingAmount: 1
        }
    },

    methods: {
        buy(item) {
            const cost = item.getCurrentCost(this.buyingAmount);
            if (cost <= this.money && item.isVisible) {
                this.money -= cost;
                item.add(this.buyingAmount);
            }
        },

        onBuy(item) {
            console.log("correct log");
            this.buy(item);
        },

        testMethod(...args) {
            console.log(args);
        }
    },

    computed: {
        visibleItems() {

            for (let i = 0; i < this.items.length; i++) {
                const item = this.items[i];
                item.isVisible = i < this.visibleItemNum;
            }

            return this.items;
        },

        affordableItems() {
            const affordable = [];
            this.items.forEach(item => {
                if (item.getCurrentCost(this.buyingAmount) <= this.money) {
                    affordable.push(item);
                    item.affordable = true;
                } else {
                    item.affordable = false;
                }
            });

            return affordable;
        }
    },

    components: {
        ShopHeader,
        ShopWrapper,
        ShopItem,
        UpgradeItem,
    }
}
</script>

<style lang="scss">

    #game-wrapper {
        display: table;
        width: 100%;
        height: 100%;
    }

    #clicker-area {
        display: table-cell;
        max-width: 100%;

        background: linear-gradient(to top, #2376ba, #bff8ff)
    }
    
    #shop-area {
        max-width: 100%;
        width: 320px;
        display: table-cell;
        padding-left: 15px;

        $outer: #877152;
        $inner: #c79b65;
        background: linear-gradient(to right, $outer, $inner, $outer);
    }

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