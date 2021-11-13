<template>
<!--   <div class="row text-center item-cart-inner justify-content-between text-center">
    <div class="col-12 d-flex counter text-center">
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
    <div class="col-12 d-flex">
      <div class="single-item-pic">
        <img :src="item.imageCover" alt="product-img" width="50" />
      </div>
      <div class="single-item-text">
        <div class="item-name">
          <span> {{ item.title }} </span>
        </div>
      </div>
    </div>
    <div class="col-12 d-flex justify-content-center">
      <div class="item-categ">({{ item.category }})</div>
    </div>
    <div class="col-12">
      <div class="item-price">
        <span> {{ item_cost.toFixed(2) }}$ </span>
        <span> </span>
      </div>
    </div>
    <div class="col-12 d-flex justify-content-center">
      <a @click="removeItem()" class="remove-item">
        <font-awesome-icon icon="trash-alt" class="cart" />
      </a>
    </div>
  </div> -->
  
  <div class="inner-cart-component">
    <div class="row justify-content-between align-items-center mt-4">
      <div class="col-12 col-sm-2">
         <div class="single-item-pic">
        <img :src="item.imageCover" alt="product-img" width="50" />
      </div>
      </div>
      <div class="col-xxl-1 col-xl-2 col-lg-2 col-md-2 col-12 order-xl-0 order-lg-0 order-md-0 order-1 d-flex align-items-center justify-content-center">
         <div class=" counter text-center">
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
        <div class="product-price">
        <span> {{ item_cost.toFixed(2) }}$ </span>
       
      </div>
      </div>
      <div class="col-12 col-sm-2">
        <div>
           <a @click="removeItem()" >
        <font-awesome-icon icon="trash-alt" class="cart" style="font-size:1.5rem;"  />
      </a>
        </div>
      </div>
    </div>
      </div>


      

  

 <!--     <div class="col-12 col-md-2 ">
      <div class="single-item-pic">
        <img :src="item.imageCover" alt="product-img" width="50" />
      </div>
      <div class=" col-12 col-md-2 single-item-text">
        <div class="item-name">
          <span> {{ item.title }} </span>
        </div>
      </div>
    </div>
    <div class="col-12 col-md-2">
      <div class="item-categ">({{ item.category }})</div>
    </div>
    <div class="col-12 col-md-2">
      <div class="product-price">
        <span> {{ item_cost.toFixed(2) }}$ </span>
       
      </div>
    </div>
    <div class="col-12 col-md-2 remove-item">
      <a @click="removeItem()" >
        <font-awesome-icon icon="trash-alt" class="cart" style="font-size:1.5rem;"  />
      </a>
    </div> -->

 
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
