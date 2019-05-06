<template lang="pug">
    #game-wrapper
        #clicker-area
            #fish-money-container 
                img#fish-money-icon(src="img/fish-money.png")
                .money-num {{ displayMoney }}
            #click-area-inner
                #clicker-object
                    img(
                        v-bind:src="'img/level-images/' + currentLevelImageName + '.png'"
                        v-on:click="money+= clickValue"
                        )

        #shop-area
            //- <shop-wrapper :headerName="'Upgrades'">
            //-     <upgrade-item></upgrade-item>
            //- </shop-wrapper>
            
            .shop-wrapper
                shop-header.shop-header Shop
                .shop-items
                    .item-items-item-wrapper(
                        @click="buy(item)"
                        v-for="item in items" 
                        )

                        shop-item(
                            
                            v-bind:name="item.name" 
                            v-bind:owned="item.owned" 
                            v-bind:imgName="item.imgName" 
                            v-bind:key="item.id"
                            v-bind:item="item"
                            v-bind:class="{unknown: !isItemVisible(item), unaffordable: !isItemAffordable(item)}"
                            )
            
</template>

<script>
// Components:
import ShopHeader from "./ShopHeader.vue";
import ShopItem from "./ShopItem.vue";
import UpgradeItem from "./UpgradeItem.vue";


// Classes
import ShopItemObj from "../ShopItemObj.js";
import LevelHandler from "../LevelHandler.js";

window.ShopItemObj = ShopItemObj;





export default {
    
    data() {
        const levelImages = [
            "bronze-cup"
        ];

        const items = [
            new ShopItemObj("Gin T", "gin-t", {
                initialCost: 1,
                baseCostAdd: 1,
                costMultiplier: 2,
                moneyPerSecond: 0.1,
            }),
            new ShopItemObj("Ripper", "ripper", {
                moneyPerSecond: 2,
            }),
            new ShopItemObj("Rixo", "rixo", {
                moneyPerSecond: 5,
            }),
            new ShopItemObj("Igor", "igor", {
                moneyPerSecond: 35,
            }),
            new ShopItemObj("Jaeger", "jaeger", {
                moneyPerSecond: 120,
            }),
            new ShopItemObj("Steven", "steven", {
                moneyPerSecond: 375,
            }),
            new ShopItemObj("Blu", "blu", {
                moneyPerSecond: 1000
            }),
            new ShopItemObj("Enigma", "enigma", {
                moneyPerSecond: 3000
            }),
            new ShopItemObj("Bartholomew", "bartholomew", {
                moneyPerSecond: 9999
            }),
            new ShopItemObj("Zanuchi", "zanuchi", {
                moneyPerSecond: 33333,
            }),
            new ShopItemObj("Beaumont", "beaumont", {
                moneyPerSecond: 190000,
            }),
        ];

        return {
            money: 0,
            level: 0,
            visibleItemNum: 1,
            items: items,
            buyingAmount: 1,
            levelHandler: new LevelHandler(levelImages),
            lastTimestamp: 0,
        }
    },

    created() {
        this.moneyTick();
    },

    methods: {
        buy(item) {
            const cost = item.getCurrentCost(this.buyingAmount);
            if (cost <= this.displayMoney && item.isVisible) {
                this.displayMoney -= cost;
                item.add(this.buyingAmount);
            }
        },

        onBuy(item) {
            console.log("correct log");
            this.buy(item);
        },

        testMethod(...args) {
            console.log(args);
        },

        isItemVisible(item) {
            const items = this.visibleItems;
            for (let i = 0; i < items.length; i++) {
                const cItem = items[i];
                if (cItem === item) {
                    return true;
                }
            }

            return false;
        },

        isItemAffordable(item) {
            const items = this.visibleItems;
            for (let i = 0; i < items.length; i++) {
                const cItem = items[i];
                if (item === cItem) {
                    const cost = cItem.getCurrentCost(this.buyingAmount);
                    if (this.displayMoney >= cost) {
                        return true;
                    } else {
                        break;
                    }
                }

            }

            return false;
        },

        moneyEarnedSinceLastFrame(timestamp) {
            const timeDiff = (timestamp - this.lastTimestamp) / 1000;

            let total = 0;

            total = this.items.reduce((acc, item) => acc + item.moneyPerSecond * item.owned * timeDiff, 0);
            // console.log(this.items);
            

            return total;

        },

        moneyTick () {
            window.requestAnimationFrame((timestamp) => {
                const addMoney = this.moneyEarnedSinceLastFrame(timestamp);
                this.lastTimestamp = timestamp;
                this.money += addMoney;
                // console.log("tick", addMoney);
                
                this.moneyTick();
            });
        }
    },

    computed: {

        displayMoney() {
            return Math.floor(this.money);
        },

        visibleItems() {
            const vis = [];
            for (let i = 0; i < this.items.length; i++) {
                const item = this.items[i];
                item.isVisible = i < this.visibleItemNum;
                if (i < this.visibleItemNum) {
                    vis.push(item);
                }
            }

            return vis;
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
        },

        currentLevelImageName() {
            return this.levelHandler.getCurrentImage();
        },

        clickValue() {
            const base = 1;
            let value = base;
            //add upgrades

            return value;
        }
    },

    components: {
        ShopHeader,
        ShopItem,
        UpgradeItem,
    }
}
</script>

<style lang="scss">

    .item-items-item-wrapper {
        overflow: auto;
    }

    #game-wrapper {
        display: table;
        width: 100%;
        height: 100%;
    }

    #clicker-area {
        position: relative;
        display: table-cell;
        max-width: 100%;

        background: linear-gradient(to top, #2376ba, #bff8ff)
    }

    #clicker-object  {
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
    }
    
    #shop-area {
        position: relative;
        max-width: 100%;
        width: 320px;
        display: table-cell;
        padding-left: 15px;

        $outer: #877152;
        $inner: #c79b65;
        background: linear-gradient(to right, $outer, $inner, $outer);
    }

    #fish-money-container {
        display: table;
        position: absolute;
        top: 0;
        right: 0;
        background-color: #282828;
        padding: 5px;

        min-width: 160px;

        .money-num {
            display: table-cell;
            vertical-align: middle;
            color: #ceb85b;
            font-size: 38px;
            padding-left: 20px;
            text-align: right;
        }

    }

    #fish-money-icon {
        width: 44px;
        height: auto;
        display: table-cell;
        vertical-align: middle;
        

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