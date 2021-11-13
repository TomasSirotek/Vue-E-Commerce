<template>
 
 
    <div class="container py-4">
      <div class="line-bottom heading-text">
        <h1 class="main_title"><span>PS4 GAMES</span></h1>
      </div>

      <div class="row mt-4 p-5">
        <MainCardsDisplay
          v-for="game in gamesCategoryPS4"
          :key="game.id"
          :cardsSection="game"
          class="ccol-12 col-md-3 col-sm-3 mb-3 py-3"
        />
      </div>
     
    </div>
 

</template>

<script>
import MainCardsDisplay from "@/components/MainCardsDisplay.vue";
import { mapGetters } from "vuex";

    export default {
        name:"CategoryPS5",
        components: {
            MainCardsDisplay
        },
        computed: {
          ...mapGetters(["gamesCategoryPS4"]),

         
            
        }
      
    }
</script>

<style lang="scss" scoped>

</style>