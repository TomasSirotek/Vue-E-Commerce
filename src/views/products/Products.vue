<template>
  <div class="container py-4">
    <div class="line-bottom heading-text">
      <h1 class="main_title"><span>All Games</span></h1>
    </div>

    <div class="row">
      <div class="col-xxl-2 col-xl-3 col-lg-3 mb-15">
        <div class="row flex-column mt-4">
          <b-button variant="dark" class="buttonSort" @click="sortBy('title')"
            >A-Z</b-button
          >
          <b-button variant="dark"  @click="sortBy4('title')" class="mt-3 buttonSort"
            >Z-A</b-button
          >
          <b-button variant="dark" @click="sortBy2('price')" class="mt-3 buttonSort"
            >Sort By High To Low</b-button
          >
          <b-button variant="dark" @click="sortBy3('price')" class="mt-3 buttonSort"
            >Sort By Low To High</b-button
          >
        </div>
      </div>
      <div class="col-xxl-10 col-xl-9 col-lg-9 mb-15">
        <div class="row">
          <MainCardsDisplay
            v-for="item in games"
            :key="item.id"
            :cardsSection="item"
            class="col-12 col-md-4 col-sm-4 mb-3 p-4"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import MainCardsDisplay from "@/components/MainCardsDisplay.vue";

import { mapState } from "vuex";
export default {
  name: "Products",
  components: {
    MainCardsDisplay,
  },

  data() {
    return {};
  },
  methods: {
    sortBy(prop) {
      this.$store.state.games.sort((a, b) => (a[prop] < b[prop] ? -1 : 1));
    },
    sortBy2(prop) {
      this.$store.state.games.sort((a, b) => b[prop] - a[prop]);
    },
    sortBy3(prop) {
      this.$store.state.games.sort((a, b) => a[prop] - b[prop]);
    },
    sortBy4(prop) {
      this.$store.state.games
        .sort((a, b) => (a[prop] < b[prop] ? -1 : 1))
        .reverse();
    },
  },
  computed: {
    ...mapState(["games"]),
  },
};
</script>

<style lang="scss" scoped>
</style>