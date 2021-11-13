<template>
  <!-- <div class="row item-cart-inner justify-content-between text-center"> -->
    <!-- <div class="col-2 d-flex counter"> -->
      <button
        type="button"
        class="btn-grey btn-number-itm btn_minus"
        @click="addToCart()"
      >
        +
      </button>
      <input
        class="input-items"
        type="text"
        min="1"
        maxlength="1"
        max="5"
        readonly
        v-model="item.quantity"
      />

      <button
        type="button"
        class="btn-grey btn-number-itm btn_plus"
        data-pocet="2"
        @click="removeFromCart()"
      >
        -
      </button>
    </div>
    <div class="col-2 d-flex">
      <div class="single-item-pic">
        <img :src="item.imageCover" alt="product-img" width="50" />
      </div>
      <div class="single-item-text">
        <div class="item-name">
          <span> {{ item.title }} </span>
        </div>
      </div>
    </div>
    <div class="col-2 d-flex justify-content-center">
      <div class="item-categ">({{ item.category }})</div>
    </div>
    <div class="col-3">
      <div class="item-price">
        <span> {{ item_cost.toFixed(2) }}$ </span>
        <span> </span>
      </div>
    </div>
    <div class="col-1 d-flex justify-content-center">
      <a @click="removeItem()" class="remove-item">
        <font-awesome-icon icon="trash-alt" class="cart" />
      </a>
    <!-- </div> -->
<!--   </div> -->
</template>

<script>
export default {
  name: "CartItem",
  props: ["item"],
  data() {
    return {};
  },
  methods: {
    addToCart() {
      this.$store.commit("addToCart", this.item);
    },
    removeFromCart() {
      this.$store.commit("removeFromCart", this.item);
    },
    removeItem() {
      this.$store.commit("removeItem",this.item
      );
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
