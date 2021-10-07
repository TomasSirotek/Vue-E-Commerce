<template>
<div class="container">
    <div class="row align-items-center p-5">
      <div class=" col-lg-7 col-md-7 ">
        <div class="text-area ">
          <img
           src="@/assets/images/game-gta.jpg"
            alt="product-img"
            width="100"
          />
        </div>
      </div>
      <div class="col-lg-5 col-md-5  text-center">
        <h3>Name : </h3>
        <h3>In cart :</h3>
        <h3>Total Cost </h3>
        <p></p>
        <b-button  variant="success">Add</b-button>
        <b-button variant="success">Remove</b-button>
        <b-button  variant="success">X</b-button>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name:"CartItem"
    }
</script>

<style lang="scss" scoped>

</style>