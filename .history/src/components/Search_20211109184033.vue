<template>
  <div class="search">
    <input
      class="form-control mr-sm-2"
      type="search"
      placeholder="Search for your game"
      aria-label="Search"
      v-model.trim="input"
      v-on:input="search()"
      ref="input"
      @keyup.enter='search'
    
    />
    <button class="btn my-2 my-sm-0" type="submit">Search</button>
    <SearchResults 
    v-show="test"
    v-for="item in tryThis" :key="item.id"
    :card="item"
   
    />
  </div>
</template>

<script>
/* import { mapMutations } from 'vuex';  */
import SearchResults from "@/components/SearchResults.vue";
export default {
  name: "Search",
  components: {
    SearchResults,
  },
  data() {
    return {
      input: "",
      test:true,
      
    };
  },
  methods: {
    search() {
       
        this.$store.commit("setDisplaySearch", this.input);
        console.log("searching")
        
      
    },
    /*  ...mapMutations(['finalFilter'])  */
   
 

   
   
    
  },
  async mounted
  computed: {
    tryThis(){
      return this.$store.getters.finalFilter
    }
 
  },
};
</script>

<style lang="scss" scoped>


</style>