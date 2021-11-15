<template>
  <div class="container py-4">
    <div class="line-bottom heading-text">
      <h1 class="main_title"><span>All Games</span></h1>
    </div>

    <div class="row mt-4 fel">
      <div class="col-xxl-2 col-xl-3 col-lg-3 mb-15">
         <b-button variant="info" @click='sortBy("title")'>Sort By Name</b-button> <br>
         <b-button variant="info" @click='sortBy("price")' class="mt-3">Sort By Price</b-button>
         <b-button variant="info" @click='sortBy2("price")' class="mt-3">Sort By Price</b-button>
     
      </div>
      <div class="col-xxl-10 col-xl-9 col-lg-9 mb-15">
        <div class="row ">
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
    return {
      category: null,
      filter: 'date',
      options: [
        { value: null, text: "Sort By Pris" },
        { value: "lowest", text: "Low pris" },
        { value: "highest", text: "High pris" },
        { value: "ps", text: "Test" },
      ],

      form: {
        checked: [],
      },
    };
  },
  methods:{ 
     sortBy(prop){
      this.$store.state.games.sort((a,b) => a[prop] < b[prop] ? -1 : 1)
    },
     sortBy2(prop){
      this.$store.state.games.sort((a, b) => b[prop] - a[prop] );
    }
  },
  computed: {
    ...mapState(["games"]),
   
  },
};
</script>

<style lang="scss" scoped>
</style>