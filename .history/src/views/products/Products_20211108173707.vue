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
              filteredItems(){
    /*   return this.$store.state.paintingItems.filter(
        (paintfilter) => paintfilter.category === "paint"
      ); */
  if(this.category === "lowest"){
    return this.$store.getters.sortArray;
    
  } else  if(this.category === "highest"){
    return this.$store.getters.sortArray2;
  }else  {
    return this.$store.getters.gameCards;
  }

      /* return this.$store.state.gameCards.sort((a, b) => a.price - b.price ); */
    }
    


  },
            
        }
      
    }
</script>

<style lang="scss" scoped>

</style>