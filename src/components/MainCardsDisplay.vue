<template>
  <div class="product-card">
    <div class="card">
      <router-link
        :to="{
          name: 'productDetails',
          params: { gameid: this.cardsSection.gameID },
        }"
      >
        <!-- Product image-->
        <img class="card-img-top" :src="cardsSection.imageCover" alt="..." />
        <!-- Product details-->
        <div class="card-body ">
          <div class="inner-sticker text-center">
            <div class="sticker">
              <div class="category_card mb-2">
                {{ cardsSection.category }}
              </div>
            </div>
          </div>
          <div class="text-center p-3 title" >
            <!-- Product name-->
            <span class="title">{{ cardsSection.title }}</span>
           
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
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  props: ["cardsSection"],
  name: "MainCardsDisplay",
  components: {},
};
</script>

<style lang="scss" scoped>
.orange {
  background: blue;
}
</style>
