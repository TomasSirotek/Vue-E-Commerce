<template>
    
         
   

    <div class="container p-4">
      <div class="row test">
        <div class="col-12">
        
        </div>
      </div>
    </div>
</template>

<script>
    export default {
        name: "searchResult",
        computed: {
        filtered() {
      return this.$store.getters.finalFilter;
    },
        }
        
    }
</script>

<style lang="scss" scoped>

</style>