<template>
 <router-link :to="`/products/${cardsSection.id}`">
  <div class="col align-self-center">
    <div class="card" style="width:15rem;">
      <img src="@/assets/images/game-gta.jpg" class="card-img-top" alt="..." />
      <div class="card-body">
        <h5 class="card-title">{{ cardsSection.title }}</h5>
        <p class="card-text">{{ cardsSection.snippet }}</p>
        <a href="#" class="btn btn-primary">{{ cardsSection.price }}</a>
      </div>
    </div>
  </div>
  </router-link>
</template>

<script>
export default {
  props: ["cardsSection"],
  name: "MainCardsDisplay",
  components: {
  },
 
  
};
</script>

<style lang="scss" scoped></style>
