<template>
 <div class="front-side">
 
    <div class="container py-4">
      <div class="line-bottom heading-text">
        <h1 class="main_title"><span>PS5 GAMES</span></h1>
      </div>

      <div class="row mt-4">
        <MainCardsDisplay
          v-for="game in sort"
          :key="game.id"
          :cardsSection="game"
        />
      </div>
        <div>
            <div v-for="game in sort"
            :key="game.id"
            >
            {{ game.title}}
            </div>
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
            sort(){
                return this.$store.getters.gamesCategoryPS5;
            }
            
        }
      
    }
</script>

<style lang="scss" scoped>

</style>