<template>

 <div class="col">
 <div class="card" style="width: 18rem;">
  <img src="@/assets/images/game-gta.jpg" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">{{card.title}}</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">{{ card.price}}</a>
  </div>
</div>
</div> 
</template>

<script>
    export default {
        props: ["card"],
        
    }
</script>

<style lang="scss" scoped>

</style>