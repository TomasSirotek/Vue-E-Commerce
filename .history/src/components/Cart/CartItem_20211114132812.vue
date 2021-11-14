<template>

  <div class="inner-cart-component">
    <div class="row justify-content-between align-items-center mt-4 mb-3">
      <div class="col-12 col-sm-2">
        <div class="single-item-pic">
          <img :src="item.imageCover" alt="product-img" width="50" />
        </div>
      </div>
      <div class="col-12 col-sm-2">
        <div class="counter do">
          <button
            type="button"
            class="btn-grey btn-number-itm btn_minus"
            @click="addToCart()"
          >
            +
          </button>
          <input
            class="input-items col-md-5 text-center"
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
      </div>
      <div class="col-12 col-sm-2">
        <div class="item-name">
          <span> {{ item.title }} </span>
        </div>
      </div>
      <div class="col-12 col-sm-2">
        <div class="item-categ">({{ item.category }})</div>
      </div>
      <div class="col-12 col-sm-2">
        <div class="product-price product-price-small">
          <span> {{ item_cost.toFixed(2) }}$ </span>
        </div>
      </div>
      <div class="col-12 col-sm-2">
        <div>
          <a @click="removeItem()">
            <font-awesome-icon
              icon="trash-alt"
              class="cart"
              style="font-size: 1.5rem"
            />
          </a>
        </div>
      </div>
    </div>
  </div>


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

<style lang="scss" scoped>
a{ 
  cursor: po;
}
</style>
