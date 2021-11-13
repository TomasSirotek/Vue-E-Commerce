<template>
  <div class="container p-4 ">
    <div class="row test">
      <div class="col-12" >
         <div  >
          <router-link
            :to="{
              name: 'productDetails',
              params: { gameid: item.gameID },
            }"
          >
            <ul >
              <li>{{ card.title }}</li>
              <li><img :src="card.imageCover" alt="" width="30"></li>
            </ul>
          </router-link>
         </div> 
      </div>
    </div>
  </div>
</template>

<script>
/*  import { mapGetters } from 'vuex';  */
export default {

  name: "searchResult",
  props:["card"],
  data(){
      return{
         
      }
  },
  /* computed: {
     filtered() {
     return this.$store.state.games.filter((item) => {
       return item.title.toLowerCase().includes(this.$store.state.search.toLowerCase())
     })   
     
        
   /
     return this.$store.getters.finalFilter; 
  
    } 
    
  
  }, */

  computed: {
 /*  ...mapGetters(['finalFilter'])  */ 
 /* returnal(){
    return this.$store.state.games
 } */
 
}
 
};
</script>

<style lang="scss" scoped>

</style>