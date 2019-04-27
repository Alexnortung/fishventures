<template lang="pug">
    <div>
        #game-wrapper
            #clicker-area
                #click-area-inner
                    #clicker-object


            #shop-area
                <shop-header>Upgardes</shop-header>
                
                <shop-header>Shop</shop-header>
                
    </div>
</template>

<script>
import ShopHeader from "./ShopHeader.vue";

export default {
    
    data() {
        money: 0
    },

    components: {
        ShopHeader
    }
}
</script>

<style lang="scss">
    
    #shop-area {
        
    }
</style>