<template>
  <div class="container py-4">
    <div class="line-bottom heading-text">
      <h1 class="main_title"><span>All Games</span></h1>
    </div>

    <div class="row mt-4">
      <div class="col-xxl-2 col-xl-3 col-lg-3 mb-15">
         <b-button variant="info" @click="edit">SortBy</b-button>
     
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
    handleFilter: function(val) {
      switch (val) {
        case 'title':
          this.$store.commit('test')
          console.log("do you work")
          break
        case 'date':
          /* this.$store.commit('ORDER_BY_DATE') */
          
          break
        case 'length short':
          /* this.$store.commit('ORDER_LENGTH_SHORT') */
          /* this.$store.getters.sortArrayLowToHigh; */
          
          break
        case 'length long':
          this.$store.commit('ORDER_LENGTH_LONG')
          break
        default:
          break
      }
    }
  },
  computed: {
    ...mapState(["games"]),
   /*  products(){
      switch (this.category) {
  case "all":
    return games.slice().sort((a, b) => a.order - b.order);
  case "subscriptions":
    return productItems.filter(product => product.type === "recurring");
  case "onetime":
    return productItems.filter(product => product.type === "onetime");
  case "purchased":
    return productItems.filter(product => product.purchased);
  case "unpurchased":
    return productItems.filter(product => !product.purchased);
  default:
    return [];
}
    } */
  },
};
</script>

<style lang="scss" scoped>
</style>