<template>
 <div class="front-side">
 
    <div class="container py-4">
      <div class="line-bottom heading-text">
        <h1 class="main_title"><span>XBOX GAMES</span></h1>
      </div>

      <div class="row mt-4">
        <MainCardsDisplay
          v-for="game in sort"
          :key="game.id"
          :cardsSection="game"
        />
      </div>

      <div class="row">
        <div v-for="test in users" :key="test.id">
          <div>{{ test.firstName}}</div>
          <div>{{ test.lastName}}</div>
          <div>{{ test.isAdminName}}</div>
        </div>
      </div>
     
    </div>
  </div>

</template>

<script>
import MainCardsDisplay from "@/components/MainCardsDisplay.vue";
    export default {
        name:"CategoryPS5",
        components: {
            MainCardsDisplay
        },
        computed: {

            sort(){
                return this.$store.getters.gamesCategoryXbox;
            },
            users(){
                return this.$store.state.collectionOfUsers;
            }
            
        }
      
    }
</script>

<style lang="scss" scoped>

</style>