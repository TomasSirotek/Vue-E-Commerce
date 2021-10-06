<template>
 <div class="col">
       <router-link
       :to="`/products/${card.id}`"
       >Reroute
       </router-link> 
    <div class="card" style="width:15rem;">
      <img src="@/assets/images/game-gta.jpg" class="card-img-top" alt="..." />
      <div class="card-body">
        <h5 class="card-title">{{ card.title }}</h5>
        <p class="card-text">{{ card.snippet }}</p>
        <a href="#" class="btn btn-primary">{{ card.price }}</a>
      </div>
    </div>
    
  </div>
</template>

<script>
export default {
  props: ["card"],
  methods:{
    
  }
};
</script>

<style lang="scss" scoped></style>
