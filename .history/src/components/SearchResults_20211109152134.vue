<template>
  <div class="container p-4 ">
    <div class="row test">
      <div class="col-12" >
        <!-- <div v-for="item in filtered" :key="item.id" > -->
          <router-link
            :to="{
              name: 'productDetails',
              params: { gameid: this.test.gameID },
            }"
          >
            <ul >
              <li>{{ test.title }}</li>
              <li><img :src="test.imageCover" alt="" width="30"></li>
            </ul>
          </router-link>
      <!--   </div> -->
      </div>
    </div>
  </div>
</template>

<script>
/* import { mapGetters } from 'vuex'; */
export default {
  props:["test"],
  name: "searchResult",
  data(){
      return{
         
      }
  },
  computed: {
    filtered() {
    /  return item.title.toLowerCase().includes(this.$store.state.search.toLowerCase())
     })   
     
        
     
      return this.$store.getters.finalFilter; 
    }
    /*  ...mapGetters(['finalFilter']) */
    
  },
  methods: {
  }
};
</script>

<style lang="scss" scoped>
.ui-menu{
    width: 559.984px;
    top: 81px;
    left: 672.5px;
    
}
.container{
        background: wheat;
    position: absolute;
    z-index: 2;
    max-width: 382px;
}

</style>