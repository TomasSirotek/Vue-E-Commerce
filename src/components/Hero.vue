<template>
  <!--  <section class="home">
    <div class="container">
      <div class="row align-items-center">
        <div class=" col-lg-7 col-md-7 ">
          <div class="text-area ">
            <h1>
              Grand Theft Auto 5 
            </h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe,
              facere? <br />
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe,
              facere?
            </p>

            <a href="#" class="link-primary">Light link</a>
          </div>
        </div>
        <div class="col-lg-5 col-md-5  text-center">
          <div class="img-area">
            <img src="@/assets/images/game-gta.jpg" alt="cover-photo" />
          </div>
        </div>
      </div>
    </div>
  </section> 

  
 -->
 <!--  <div class="home">
    <div class="container px-4 px-lg-5 my-5"></div>
  </div> -->
    <!--  <header class="bg-light py-5">
            <div class="container px-4 px-lg-5 my-5">
                <div class="text-center text-white">
                    <h1 class="display-4 fw-bolder">Shop in style</h1>
                    <p class="lead fw-normal text-white-50 mb-0">With this shop hompeage template</p>
                </div>
            </div>
        </header> -->

        <div>
    <b-carousel
      id="carousel-1"
      v-model="slide"
      :interval="4000"
      controls
      indicators
      background="#ababab"
      img-width="1024"
      img-height="80vh"
      style="text-shadow: 1px 1px 2px #333;"
      @sliding-start="onSlideStart"
      @sliding-end="onSlideEnd"
      height="80vh"
    >

  
      <b-carousel-slide>
        <template #img>
          <img
            class="d-block img-fluid w-100"
            width="1024"
            height="200"
              src="@/assets/images/nintendo.jpeg" 
           
            alt="image slot"
          >
        </template>
      </b-carousel-slide>
      <b-carousel-slide>
        <template #img>
          <img
            class="d-block img-fluid w-100"
            width="1024"
            height="300"
            src="@/assets/images/bloood.jpeg" 
            alt="image slot"
          >
        </template>
      </b-carousel-slide>
      <!-- Slide with blank fluid image to maintain slide aspect ratio -->
   
    </b-carousel>

   
  </div>
</template>

<script>
export default {
  name: "Hero",
  components: {},
};
</script>

<style>
</style>
