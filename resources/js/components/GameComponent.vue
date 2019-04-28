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
const unknownImgName = "unknown";

class ShopItemObj {
    constructor(name, imgName) {
        this._name = name;
        this._owned = 0;
        this.id = shopItemId;
        this._imgName = imgName;
        this.notVisibleImgName = unknownImgName;
        shopItemId++;

        this.isVisible = false;
    }

    get name() {
        if (this.isVisible) {
            return this._name;
        } else {
            return "??????";
        }
    }

    get owned() {
        if (this.isVisible) {
            return this._owned;
        } else {
            return 0;
        }
    }

    get imgName() {
        if (this.isVisible) {
            return this._imgName;
        } else {
            return this.notVisibleImgName;
        }
    }
}

export default {
    
    data() {

        const items = [
            new ShopItemObj("Gin T", "gin-t"),
            new ShopItemObj("Ripper", "ripper"),
            new ShopItemObj("Rixo", "rixo"),
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

            for (let i = 0; i < this.items.length; i++) {
                const item = this.items[i];
                item.isVisible = i < this.visibleItemNum;
            }

            return this.items;
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
</style>