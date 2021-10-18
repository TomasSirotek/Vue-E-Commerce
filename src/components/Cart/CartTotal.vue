<template>
 <!--  <div class="overview">
    <div class="container">
      <h1>Overview</h1>
      <div class="row flex-column">
        <h2>Total Price</h2>
        <h3>{{ cart_Total.toFixed(2) }} $</h3>
        <b-button @click="addCheckoutItem" variant="success">Buy all</b-button>
      </div>
    </div>
    <div v-for="item in orderItems" :key="item.id">
      <span>{{ item.title }}</span>
      <span>{{ item.price }}</span>
    </div>


    <div v-if="orderDone"><h2>Order done</h2></div>

  </div> -->

  <div class="overview mt-4">
    <div class="row justify-content-between mb-3 ">
      <div class="col">Overall Items</div>
      <div class="col  d-flex justify-content-end">{{ cart_Total.toFixed(2) }}$</div>
    </div>
    <div class="row justify-content-between mb-3 pt-3 total-overall">
      <div class="col ">Total price</div>
      <div class="col  total-price d-flex justify-content-end">{{ cart_Total.toFixed(2) }}$</div>
    </div>
    <div class="row justify-content-center mb-3 pt-3 l">
      <div class="buy-btn mt-2">
          <a type="button"  @click="addCheckoutItem" id="button">
           <font-awesome-icon icon="shopping-cart" class="cart" />
           Proceed to Checkout
          </a>

        </div>
    </div>
    
  </div>
</template>

<script>
export default {
  name: "cartTotal",


  data() {
    return {
      orderDone: false,
    };
  },


  computed: {
    cart_Total() {
      return this.$store.getters.cartTotal;
    },
    orderItems() {
      return this.$store.getters.orderItems;
    },
  },
  beforeCreate() {
    this.$store.dispatch("setOrderItems");
  },
  methods: { // Add some modal
    addCheckoutItem() {
      this.orderDone = true;
      this.$store.dispatch("setCheckoutItem");
      this.$store.dispatch("emptyCart");

    },
  },
};
</script>

<style lang="scss" scoped>
</style>