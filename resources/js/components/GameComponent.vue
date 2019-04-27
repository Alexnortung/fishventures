<template lang="pug">
    #game-wrapper
        #clicker-area
            #click-area-inner
                #clicker-object


        #shop-area
            <shop-wrapper :headerName="'Upgrades'">
                <upgrade-item></upgrade-item>
            </shop-wrapper>
            
            <shop-wrapper :headerName="'Shop'">
                <shop-item v-for="item in visibleItems" v-bind:name="item.name" v-bind:owned="item.owned" v-bind:imgName="item.imgName" v-bind:key="item.id"></shop-item>
            
            </shop-wrapper>
</template>

<script>
import ShopHeader from "./ShopHeader.vue";
import ShopWrapper from "./ShopWrapper.vue";
import ShopItem from "./ShopItem.vue";
import UpgradeItem from "./UpgradeItem.vue";

let shopItemId = 0;

class ShopItemObj {
    constructor(name, owned, imgName) {
        this.name = name;
        this.owned = owned;
        this.id = shopItemId;
        this.imgName = imgName;
        shopItemId++;
    }
}

export default {
    
    data() {

        const items = [
            new ShopItemObj("Gin T", 0, "gin-t"),
            new ShopItemObj("Ripper", 0, "ripper"),
            new ShopItemObj("Rixo", 0, "rixo"),
        ];        

        return {
            money: 0,
            level: 0,
            visibleItemNum: 1,
            items: items
        }
    },

    computed: {
        visibleItems() {

            const ret = this.items.slice(0, this.visibleItemNum);

            return ret;
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
    }
    
    #shop-area {
        max-width: 100%;
        width: 300px;
        display: table-cell;
    }
</style>