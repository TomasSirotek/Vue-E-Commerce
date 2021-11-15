<template>
  <div class="w-xl-20 col-xxl-3 col-xl-4 col-lg-4 col-md-4 col-sm-4 col-6 mb-30 plr-20  mb-5 py-2 mx-3 product-card">
    <router-link
      :to="{
        name: 'productDetails',
        params: { gameid: this.cardsSection.gameID },
      }"
    >
      <div class="card h-100" style="width: 12rem">
        <!-- Product image-->
        <img class="card-img-top" :src="cardsSection.imageCover" alt="..." />
        <!-- Product details-->
        <div class="card-body p-4">
          <div class="inner-sticker text-center">
            <div class="sticker">
              <div class="category_card mb-2">
                {{ cardsSection.category }}
              </div>
            </div>
          </div>
          <div class="text-center p-3">
            <!-- Product name-->
            <h5 class="fw-bolder">{{ cardsSection.title }}</h5>
            <div class="snippet">
              <span>{{ cardsSection.subtitle }}</span>
            </div>
          </div>
        </div>
        <!-- Product price-->
        <div class="card-footer border-top-0">
          <div class="text-center">
            <div class="price mt-auto">
              <span>{{ cardsSection.price }}$</span>
            </div>
          </div>
        </div>
      </div>
    </router-link>
  </div>
</template>

<script>
export default {
  props: ["cardsSection"],
  name: "MainCardsDisplay",
  components: {},
  computed: {},
};
</script>

<style lang="scss" scoped></style>
