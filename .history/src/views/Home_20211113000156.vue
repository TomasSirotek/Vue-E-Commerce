<template>
    <div class="container py-4">
      <div class="line-bottom heading-text">
        <h1 class="main_title"><span>Recent Products</span></h1>
      </div>

      <div class="row mt-4">
        <MainCardsDisplay
          v-for="item in gameCards"
          :key="item.id"
          :cardsSection="item"
          class=""w-xl-20 col-xxl-3 col-xl-4 col-lg-4 col-md-4 col-sm-4 col-6 mb-30 plr-20  mb-5 py-2"
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
