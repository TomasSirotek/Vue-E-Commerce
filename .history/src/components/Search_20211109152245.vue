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
      @keyup='search'
    
    />
    <button class="btn my-2 my-sm-0" type="submit" >Search</button>
    <SearchResults 
    v-show="test"
       v-for="item in filtered" :key="item.id" :test="item"
   
    />
  </div>
</template>

<script>
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
      
      
    },
      filtered() {
    /*  return this.$store.state.games.filter((item) => {
       return item.title.toLowerCase().includes(this.$store.state.search.toLowerCase())
     })   */
     
        
     
      return this.$store.getters.finalFilter; 
    }

   
   
    
  },
  computed: {},
};
</script>

<style lang="scss" scoped>


</style>