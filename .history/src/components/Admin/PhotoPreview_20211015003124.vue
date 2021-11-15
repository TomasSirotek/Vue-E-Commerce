<template>
   <b-modal id="modalPopover" title="Modal with Popover" ok-only>
    <img :src="this.productPictureName" alt="">
    
  </b-modal>
</template>

<script>
    export default {
        computed: {
        productPictureName(){
            return this.$store.state.productPictureName;
        },

    },
    methods: {

    }
        
    }
</script>

<style lang="scss" scoped>

</style>