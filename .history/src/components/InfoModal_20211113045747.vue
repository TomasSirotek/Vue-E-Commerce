<template>
  <b-modal id="modal-1">
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
      <span>{{ details.price}}</span>
    </div>
    .modal
  </b-modal>
</template>

<script>
export default {
  name: "InfoModal",
  props: ["details"],
  methods: {},
};
</script>

<style lang="scss" scoped>
</style>
