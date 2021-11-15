<template>
  <div class="front-side">
    <div class="container py-4">
      <div class="line-bottom heading-text">
        <h1 class="main_title"><span>All game</span></h1>
      </div>


 <div class="row">
        <div class="col">
          <b-form-select
            v-model="category"
            :options="options"
            class="mb-3 category"
          ></b-form-select>
          <div>CHOSED{{ this.category }}</div>
          <div v-if="category === 'test' ">
            bitch
          </div>

        </div>
      </div>



      <div class="row mt-4">
        <MainCardsDisplay
          v-for="item in filteredItems"
          :key="item.id"
          :cardsSection="item"
        />
      </div>
    </div>
  </div>
</template>

<script>
import MainCardsDisplay from "@/components/MainCardsDisplay.vue";
export default {
  name: "Products",
  components: {
    MainCardsDisplay,
  },
  data() {
    return{
      category:null,
       options: [
        { value: null, text: "Please select an option" },
        { value: "lowest", text: "1" },
        { value: "highest", text: "2" },
      
      ],
    }
  },
  computed: {
    allGames() {
      return this.$store.state.games;
    },
    filteredItems() {
      /*   return this.$store.state.paintingItems.filter(
        (paintfilter) => paintfilter.category === "paint"
      ); */
      if (this.category === "lowest") {
        return this.$store.getters.sortArray;
      } else if (this.category === "highest") {
        return this.$store.getters.sortArray2;
      } else {
       /*  return this.$store.getters.gameCards; */
        return this.$store.state.games;
      }

      /* return this.$store.state.gameCards.sort((a, b) => a.price - b.price ); */
    },
  },
};
</script>

<style lang="scss" scoped>
</style>