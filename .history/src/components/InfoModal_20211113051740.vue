<template>
  <b-modal id="modal-1" hide-footer>
    <div class="d-block">
      <h1>IT IS IN THE BASKET</h1>
    </div>
    <div class="modal-picture">
      <img :src="details.imageCover" alt="product-img" width="300" />
    </div>
    <div class="modal-title">
      <h1>{{ details.title }}</h1>
    </div>
    <div class="modal-price">
      <span>{{ details.price }}</span>
    </div>
    <div class="modal-button">
      <a type="button" @click="toBasket" id="button">
        <font-awesome-icon icon="shopping-cart" class="cart" />
        Finish your order
      </a>
    </div>
    <div class="modal-back">
      <a @click="@click="hideModal""></a>
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
  },
};
</script>

<style lang="scss" scoped>
</style>
