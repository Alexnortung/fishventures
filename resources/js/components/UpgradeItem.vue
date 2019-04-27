<template lang="pug">
    .upgrade-item
        span.name {{ name }}
        span.owned {{ owned }}
</template>

<script>
export default {
    props: ['owned', 'name'],
    data () {


        return {
            
        }
    }
}
</script>