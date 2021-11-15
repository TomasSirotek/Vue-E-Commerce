<template>
  <div class="front-side">
    <Hero />
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
  </div>
</template>

<script>
import Hero from "@/components/Hero.vue";
import MainCardsDisplay from "@/components/MainCardsDisplay.vue";

export default {
  name: "Home",
  components: {
    Hero,
    MainCardsDisplay,
  },
  computed: {
    gameCards() {
      return this.$store.getters.gameCards;


       if (this.checkedCategories == "") {
        return this.$store.getters.getBundlesItems;
      } else if (
        this.checkedCategories == "Caran d'Ache" ||
        this.checkedCategories == "Kuretake" ||
        this.checkedCategories == "Talens Van Gogh" ||
        this.checkedCategories == "Derwent"
      ) {
        return this.$store.state.bundlesItems.filter(
          (bundlesFilter) =>
            bundlesFilter.brand === this.checkedCategories[0] ||
            this.checkedCategories[1] ||
            this.checkedCategories[2] ||
            this.checkedCategories[3] ||
            this.checkedCategories[4]
        );
      } else {
        return [];
      }
    }
    },

  



  },
};
</script>
