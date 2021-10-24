<template>
 <div class="front-side">
 
    <div class="container py-4">
      <div class="line-bottom heading-text">
        <h1 class="main_title"><span>All game</span></h1>
      </div>

      <div class="row mt-4">
        <MainCardsDisplay
          v-for="item in allGames"
          :key="item.id"
          :cardsSection="item"
        />
      </div>

   
    </div>
  </div>

</template>

<script>
import MainCardsDisplay from "@/components/MainCardsDisplay.vue";
    export default {
        name:"Products",
        components: {
            MainCardsDisplay
        },
        computed: {
            allGames(){
                return this.$store.state.games
            },
            sort()
            
        }
      
    }
</script>

<style lang="scss" scoped>

</style>