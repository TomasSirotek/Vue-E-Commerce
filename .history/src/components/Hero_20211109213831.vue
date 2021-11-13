<template>
       <div> 
  <!--   <b-carousel
      id="carousel-1"
      v-model="slide"
      :interval="4000"
      controls
      indicators
      background="#ababab"
      img-width="1024"
      img-height="80vh"
      style="text-shadow: 1px 1px 2px #333;"
      @sliding-start="onSlideStart"
      @sliding-end="onSlideEnd"
      height="80vh"
    >

  
      <b-carousel-slide>
        <template #img>
          <img
            class="d-block img-fluid w-100"
            width="1024"
            height="200"
              src="@/assets/images/nintendo.jpeg" 
           
            alt="image slot"
          >
        </template>
      </b-carousel-slide>
      <b-carousel-slide>
        <template #img>
          <img
            class="d-block img-fluid w-100"
            width="1024"
            height="300"
            src="@/assets/images/bloood.jpeg" 
            alt="image slot"
          >
        </template>
      </b-carousel-slide>
     
   
    </b-carousel> -->

   <div v-for="item in CartObjects" :key="item">
     div
   </div>



   </div>



</template>

<script>

import { mapGetters } from 'vuex';
export default {
  name: "Hero",
  components: {},
  data() {
    return{
      
    }
  },
  computed: {
     ...mapGetters(['cartObjects']), 
 
  }
 
};
</script>

<style>

</style>
