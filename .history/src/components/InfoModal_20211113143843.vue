<template>
  <b-modal id="modal-1" hide-footer size="xl">
    <!--  <div class="d-block">
      <h1>IT IS IN THE BASKET</h1>
    </div>
    <div class="modal_picture">
      <img :src="details.imageCover" alt="product-img" width="300" />
    </div>
    <div class="modal_title">
      <h1>{{ details.title }}</h1>
    </div>
    <div class="modal_price">
      <span>{{ details.price }}</span>
    </div>
    <div class="modal_button">
      <a type="button" @click="toBasket" id="button">
        <font-awesome-icon icon="shopping-cart" class="cart" />
        Finish your order
      </a>
    </div>
    <div class="modal_back">
      <a @click="hideModal">
        I want more !
      </a>
    </div> -->
    <div class="container">
      <div class="row">
        <div class="col-12 col-md-6">
         
          <div class="modal_picture">
            <img :src="details.imageCover" alt="product-img" width="300" />
          </div>
           <div class="modal_title">
      <h1>{{ details.title }}</h1>
    </div>
        </div>
        <div class="col-12 col-md-6">
           <div class="d-block">
             <font-awesome-icon icon="check-circle" class="cart" style="font-size:1.5rem;"  />
            <h1>IT IS IN THE BASKET</h1>
          </div>
             <div class="modal_price">
      <span>{{ details.price }}</span>
    </div>

<div class="modal_button">
      <a type="button" @click="toBasket" id="button">
        <font-awesome-icon icon="shopping-cart" class="cart" />
        Finish your order
      </a>
    </div>
    <div class="modal_back">
      <a @click="hideModal">
        I want more !
      </a>
    </div>

        </div>
      </div>
    </div>
  </b-modal>
</template>

<script>
export default {
  name: "InfoModal",
  props: ["details"],
  methods: {
    toBasket() {
      this.$router.push({ path: "/cart" });
    },
    hideModal() {
      this.$root.$emit("bv::hide::modal", "modal-1", "#btnShow");
    },
  },
};
</script>

<style lang="scss" scoped>
</style>
