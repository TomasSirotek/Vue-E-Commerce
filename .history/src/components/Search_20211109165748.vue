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
    <button class="btn my-2 my-sm-0" type="submit" @click="search">Search</button>
    <SearchResults 
    v-show="test"
   
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
        console.log("searching")
      
      
    },
 

   
   
    
  },
  computed: {},
};
</script>

<style lang="scss" scoped>


</style>