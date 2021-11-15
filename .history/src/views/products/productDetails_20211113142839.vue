<template>
  <div class="product-detail" v-if="currentGame">
    <div class="container py-5">
      <div class="row">
        <div class="col text-center">
          <div class="product-image">
            <img
              :src="this.currentGame[0].imageCover"
              alt="product-img"
              width="300"
            />
          </div>
        </div>
        <div class="col mt-3">
          <div class="product-description">
            <h1>{{ this.currentGame[0].title }}</h1>

            <div class="product-subtitle mt-2">
              <span> {{ this.currentGame[0].subtitle }}</span>
            </div>
          </div>
          <div class="product-sort">
            <div class="product-price py-2">
              <span> {{ this.currentGame[0].price }} $</span>
            </div>
          </div>
          <div class="buy-btn mt-2">
            <a type="button" @click="addToCart" id="button"  :disabled="this.currentGame[0].count == 0">
              <font-awesome-icon icon="shopping-cart" class="cart" />
              Add to cart
            </a>
          

              
          </div>
          <div class="info-text mt-4">
            <span v-if="this.currentGame[0].count == 0">
              <b> Stock</b>
              :

              <a style="color: red"> NOT IN STOCK!</a>
            </span>
            <span v-else>
              <b> Stock</b>
              :
              <a style="color: green">IN STOCK</a>
            </span>

            <span>
              <b> Recommended age</b>
              :
              <a> 18+</a>
            </span>
            <span>
              <b> Category </b>
              :
              <a> {{ this.currentGame[0].category }}</a>
            </span>
          </div>
        </div>
      </div>
    </div>
    <div class="container">
      <div class="line-bottom heading-text mb-4">
        <h1 class="main_title"><span>Product Description</span></h1>
      </div>
      <div class="row mt-5">
        <div class="col">
          <div class="inner-box">
            <div v-html="this.currentGame[0].descriptionHTML"></div>
          </div>
        </div>
      </div>
    </div>
    <InfoModal :details="this.currentGame[0]" />
  </div>
</template>

<script>
import InfoModal from "@/components/InfoModal.vue";
export default {
  name: "productDetails",
  components: {
    InfoModal,
  },
  data() {
    return {
      currentGame: null,
    };
  },
  async mounted() {
    this.currentGame = await this.$store.state.games.filter((game) => {
      return game.gameID === this.$route.params.gameid;
    });
  },
  methods: {
    addToCart() {
      this.$store.commit("addToCart", this.currentGame[0]);
      this.$root.$emit("bv::show::modal", "modal-1", "#btnShow");
    },
  },
  computed: {},
};
</script>

<style lang="scss" scoped></style>
