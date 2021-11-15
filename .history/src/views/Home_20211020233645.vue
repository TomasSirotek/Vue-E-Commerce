<template>
  <div class="front-side">
    <Hero />
    <div class="container py-4">
      <div class="line-bottom heading-text">
        <h1 class="main_title"><span>Recent Products</span></h1>
      </div>

      <div class="row mt-4">
        <MainCardsDisplay
          v-for="item in menuItems"
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
import { mapState } from 'vuex'

export default {
  name: "Home",
  components: {
    Hero,
    MainCardsDisplay,
  },
  computed: {
    /* menuItems() {
      return this.$store.getters.getMenuItems;
    }, */
    computed: mapState({
    products: state => state.products.menuItems
  }),
  },
  beforeCreate() {
    /* this.$store.dispatch("setMenuItems"); */
      this.$store.dispatch('products/setMenuItems')
  },
};
</script>
