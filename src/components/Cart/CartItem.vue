<template>
  <div class="container">
    <div class="row align-items-center p-5">
      <div class=" col-lg-7 col-md-7 ">
        <div class="text-area ">
          <img
            src="@/assets/images/game-gta.jpg"
            alt="product-img"
            width="100"
          />
        </div>
      </div>
      <div class="col-lg-5 col-md-5  text-center">
        <h3>Name => {{ item.title }}</h3>
        <h3>In cart =>{{ item.quantity }}</h3>
        <h3>Total Cost => {{ item_cost.toFixed(2) }}$</h3>
        <p></p>
        <b-button @click="addToCart" variant="success">Add</b-button>
        <b-button @click="removeFromCart" variant="success">Remove</b-button>
        <b-button @click="removeItem" variant="success">X</b-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CartItem",
  props: ["item"],
  methods: {
    addToCart() {
      this.$store.commit("addToCart", this.item);
    },
    removeFromCart() {
      this.$store.commit("removeFromCart", this.item);
    },
    removeItem() {
      this.$store.commit("removeItem", this.item);
    },
  },

  computed: {
    item_cost() {
      return this.item.price * this.item.quantity;
    },
  },
};
</script>

<style lang="scss" scoped></style>
