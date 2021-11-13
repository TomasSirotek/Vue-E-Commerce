<template>
    <div class="container py-4">
      <div class="line-bottom heading-text">
        <h1 class="main_title"><span>Recent Products</span></h1>
      </div>

      <div class="row mt-4 p-5">
        <MainCardsDisplay
          v-for="item in gameCards"
          :key="item.id"
          :cardsSection="item"
          class="col-12 col-md-12 col-sm-3 mb-3"
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
