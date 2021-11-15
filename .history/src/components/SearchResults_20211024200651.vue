<template>
  <div class="container p-4 ">
    <div class="row test">
      <div class="col-12" >
        <div v-for="item in filtered" :key="item.id" @click="reset">
          <router-link
            :to="{
              name: 'productDetails',
              params: { gameid: item.gameID },
            }"
          >
            <ul >
              <li>{{ item.title }}</li>
              <li><img :src="item.imageCover" alt="" width="30"></li>
            </ul>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "searchResult",
  data(){
      return{
          
      }
  },
  computed: {
    filtered() {
      return this.$store.getters.finalFilter;
    },
    
  },
  methods: {
   reset(){
       window.reload()
   }
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