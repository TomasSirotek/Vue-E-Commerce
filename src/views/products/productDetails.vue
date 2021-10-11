<template>
 <div class="container py-5">
    <div class="row">
      <div class="col-lg-5 col-md-5 text-center">
        <div class="img-product">
          <img
            :src="product.imageCover"
            alt="product-img"
            width="200"
          />
        </div>
      </div>
      <div class="col-lg-7 col-md-7">
        <div class="product-description">
          <h2>{{ product.title }}</h2>
          <p>{{ product.snippet }} </p>
        </div>
        <!-- Redo component export-->
        <div class="product-sort my-3 ">
          <div class="row flex-column">
            <h3>{{ product.price}} $
            </h3>
           
          </div>
          <!-- Export component -->
        </div>
        <b-button @click="addToCart" variant="success">Add To Basket</b-button>
        <div class="test-block">
          <h2></h2>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "productDetails",
  methods: {
    addToCart() {
      this.$store.commit("addToCart", this.product);
    },
  },
  components: {

  },
  computed: {
     product() {
      return this.$store.getters.getProductById(this.$route.params.id);
    }, 
  },
};
</script>

<style lang="scss" scoped></style>
