<template>
  <div class="front-side">
    <div class="container py-4">
      <div class="line-bottom heading-text">
        <h1 class="main_title"><span>All game</span></h1>
      </div>

      <div class="row mt-4">
        <div class="col-xxl-2 col-xl-3 col-lg-3 mb-15">
          <b-form-select
            v-model="category"
            :options="options"
            class="mb-3 category"
          ></b-form-select>

          <b-form-group id="input-group-4" v-slot="{ ariaDescribedby }">
            <b-form-checkbox-group
              v-model="form.checked"
              id="checkboxes-4"
              :aria-describedby="ariaDescribedby"
            >
              <b-form-checkbox value="en">A-Z</b-form-checkbox>
              <b-form-checkbox value="ps">Z-A</b-form-checkbox>
            </b-form-checkbox-group>
        
          </b-form-group>
        </div>
        <div class="col-xxl-10 col-xl-9 col-lg-9 mb-15">
          <div class="row">
            <MainCardsDisplay
              v-for="item in filteredItems"
              :key="item.id"
              :cardsSection="item"
            />
          </div>
        </div>
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
    return {
      category: null,
      options: [
        { value: null, text: "Sort By Pric" },
        { value: "lowest", text: "Low pris" },
        { value: "highest", text: "High pris" },
      ],
        form: {
          checked: []
        },
    };
  },
  computed: {
    allGames() {
      return this.$store.state.games;
    },
    filteredItems() {
      if (this.category === "lowest") {
        return this.$store.getters.sortArrayLowToHigh;
      } else if (this.category === "highest") {
        return this.$store.getters.sortArrayHighToLow;
      } else if(this.category=== "ps"){
        return this.$store.getters.sortArrayHighToLow;

      } else {
         return this.$store.state.games; 
        
      }
    },
 
  },
};
</script>

<style lang="scss" scoped>
</style>