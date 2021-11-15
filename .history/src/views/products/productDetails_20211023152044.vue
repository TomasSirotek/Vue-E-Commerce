<template>
<div class="product-detail">
    <div class="container py-5">
    <div class="row">
      <div class="col text-center">
        <div class="product-image">
          <img :src="product.imageCover" alt="product-img" width="300"/>
        {{ this.currentGame}}
        </div>
      </div>
      <div class="col ">
        <div class="product-description">
          <h1>{{ product.title }}</h1>
          <span></span>
          <div class="product-subtitle mt-2">
            
            <span>{{ product.subtitle }}</span>
          </div>
        </div>
        <div class="product-sort ">
          <div class="product-price py-2">
          <span>{{ product.price }} $</span>
          </div>
        </div>
        <div class="buy-btn mt-2">
          <a type="button" @click="addToCart" id="button">
           <font-awesome-icon icon="shopping-cart" class="cart" />
           Add to cart
          </a>

        </div>
        <div class="info-text mt-4">
          <span> <!-- Add to admin add-->
            <b> In stock</b>
            :
            <a> {{ product.count }}</a>
          </span>
          <span> <!-- Add to admin add-->
            <b> Reccomended age</b>
            :
            <a> 18+</a>
          </span>
          <span> <!-- Add to admin add-->
            <b> Category </b>
            :
             <a> {{ product.category}}</a>
          </span>
        </div>
      </div>
    </div>
  </div>
  <div class="container ">
     <div class="line-bottom heading-text mb-4">
        <h1 class="main_title"><span>Product Description</span></h1>
      </div>
    <div class="row mt-5">
      
      <div class="col">
        <div class="inner-box ">
          <div v-html="product.descriptionHTML"></div>
        </div>
         
      </div>
      
    </div>
  </div>
  
</div>  
  
</template>

<script>
export default {
  name: "productDetails",
  data(){
    return{
      currentGame : null,
    }
  },
  async mounted(){
    this.currentGame = await this.$store.state.games.filter(game => {
      return game.gameID === this.$route.params.gameid;
    })
  },
  methods: {
    addToCart() {
      this.$store.commit("addToCart", this.product);
    },
  },
  components: {},
  computed: {
    product() {
      return this.$store.getters.getProductById(this.$route.params.id);
    },
  },
};
</script>

<style lang="scss" scoped></style>
