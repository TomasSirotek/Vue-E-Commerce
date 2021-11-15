<template>
  <!--  <router-link :to="`/products/${cardsSection.id}`">
   <div class="col align-self-center">
    <div class="card" style="width:15rem;">
      <img :src="cardsSection.imageCover" class="card-img-top" alt="..." />
      <div class="card-body">
        <h5 class="card-title">{{ cardsSection.title }}</h5>
        <p class="card-text">{{ cardsSection.snippet }}</p>
        <a href="#" class="btn btn-primary">{{ cardsSection.price }}</a>
      </div>
    </div>
  </div> 
   
  </router-link> -->
  
 
  <div class="col-2 mb-5 py-4 mx-3" >
    <router-link :to="`/products/${cardsSection.id}`" >
    <div class="card h-100"  style="width:12rem;" id="reload" >
      <!-- Product image-->
      <img class="card-img-top" :src="cardsSection.imageCover" alt="..." />
      <!-- Product details-->
      <div class="card-body p-4">
        <div class="inner-sticker text-center">
          <div class="sticker">
            <div class="category_card mb-2">
              {{ cardsSection.category }}
            </div>
          </div>
        </div>
        <div class="text-center p-3">
          <!-- Product name-->
          <h5 class="fw-bolder">{{ cardsSection.title }}</h5>
          <div class="snippet">
            <span>{{cardsSection.subtitle }}</span>
          </div>
        
        </div>
      </div>
      <!-- Product price-->
      <div class="card-footer   border-top-0 ">
        <div class="text-center">
         <div class="price mt-auto">
           <span>{{ cardsSection.price }}$</span>
         </div>
           
          
        </div>
      </div>
    </div>
    </router-link>
  </div>

</template>

<script>
export default {
  props: ["cardsSection"],
  name: "MainCardsDisplay",
  components: {},
  computed: {},
};
</script>

<style lang="scss" scoped></style>
