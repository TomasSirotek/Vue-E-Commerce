<template>
  <b-modal id="modal-1" hide-footer size="xl">
    <div class="container">
      <div class="row">
        <div class="col-12 col-md-6">
          <div class="modal_picture">
            <img :src="details.imageCover" alt="product-img" width="300" />
          </div>
          <div class="modal_title mt-4">
            <h1>{{ details.title }}</h1>
          </div>
          <div class="modal_category">
            <h1>{{ details.category }}</h1>
          </div>
        </div>
        <div class="col-12 col-md-6 mt-5">
          <div class="d-block mb-4">
            <font-awesome-icon
              icon="check-circle"
              class="cart mb-3"
              style="font-size: 2.5rem; color: green"
            />
            <h1 style="font-size: 2.5rem">IT IS IN THE BASKET !</h1>
          </div>
          <div class="product-price mb-4 mt-3 d-block">
            <span>{{ details.price }}$</span>
          </div>
          <div class="mb-4 d-block">
            <b-button id="button" class="btn-block" @click="toBasket">
              Finish Order
            </b-button>
          </div>
          <div class="back-nav mt-5">
            <a @click="hideModal" class="modal_back"> I want more ! </a>
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
