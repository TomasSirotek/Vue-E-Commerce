<template>
  <div class="front-side">
    <div class="container py-4">
      <div class="line-bottom heading-text">
        <h1 class="main_title"><span>Recent Products</span></h1>
      </div>

      <div class="row mt-4">
        <MainCardsDisplay
          v-for="item in gameCards"
          :key="item.id"
          :cardsSection="item"
        />
      </div>
    </div>
 
</template>

<script>
import MainCardsDisplay from "@/components/MainCardsDisplay.vue";

export default {
  name: "Home",
  components: {
    MainCardsDisplay,
  },

  computed: {
    gameCards() {
      return this.$store.getters.gameCards;
    },
  },
};
</script>
