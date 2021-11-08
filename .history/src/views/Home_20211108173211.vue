<template>
  <div class="front-side">
    <Hero />
    <div class="container py-4">
      <div class="line-bottom heading-text">
        <h1 class="main_title"><span>Recent Products</span></h1>
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

        <!--   <div v-for="item in sort" :key="item.id">
            <div>{{ item.name }}</div>
            <div>{{ item.price }}</div>
          </div> -->
        </div>
      </div>

      <div class="row mt-4" v-if="this.category === 'test' ">
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
import Hero from "@/components/Hero.vue";
import MainCardsDisplay from "@/components/MainCardsDisplay.vue";

export default {
  name: "Home",
  components: {
    Hero,
    MainCardsDisplay,
  },
  data() {
    return{
      category:null,
       options: [
        { value: null, text: "Please select an option" },
        { value: "test", text: "Lowest" },
        { value: "Highest", text: "Highest" },
      
      ],
    }
  },
  computed: {
    gameCards() {
      /* return this.$store.getters.gameCards; */
     return this.$store.getters.gameCards;
        

       
    },
    filteredItems(){
    /*   return this.$store.state.paintingItems.filter(
        (paintfilter) => paintfilter.category === "paint"
      ); */
  if(this.category === "lowest"){
    return this.$store.getters.sortArray;
    
  } else {
    return this.$store.getters.gameCards;
  }

      /* return this.$store.state.gameCards.sort((a, b) => a.price - b.price ); */
    }
    


  },
  
};
</script>
