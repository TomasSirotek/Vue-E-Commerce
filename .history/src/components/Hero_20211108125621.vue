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
<div class="row">
    <div class="col">
                    <b-form-select
                      v-model="category"
                      :options="options"
                      class="mb-3 category"
                    ></b-form-select>
                    <div>CHOSED{{this.category}}</div>
                  </div>

</div>
   

    <div v-for="item in sort" :key="item.id">
     
      <div>{{ item.name }}</div>
       <div>{{ item.price }}</div>
     
    </div>


  </div>
</template>

<script>
export default {
  name: "Hero",
  components: {},
  data() {
    return{
      category:null,
       options: [
        { value: null, text: "Please select an option" },
        { value: "HIGHEST", text: "HIGHEST" },
        { value: "LOWEST", text: "LOWEST" },
      
      ],
    }
  },
  computed: {

     sort(){

       if(this.category === "HIGHEST")

      return this.$store.getters.sortArray;
    
    }
  }
  
};
</script>

<style>
</style>
