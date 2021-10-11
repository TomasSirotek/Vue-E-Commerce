<template>
  <div class="front-side">
    <Hero />
    <div class="container py-3">
      <h2> On Sale </h2>
      <div class="row">
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

export default {
  name: "Home",
  components: {
    Hero,
    MainCardsDisplay,
  },
  computed: {
    menuItems() {
      return this.$store.getters.getMenuItems;
     
    },
  },
  beforeCreate() {
    this.$store.dispatch("setMenuItems");
  },
  
};
</script>
