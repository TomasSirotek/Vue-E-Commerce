<template>
  <div>
    <div class="container">
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

  methods: {

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