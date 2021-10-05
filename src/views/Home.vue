<template>
  <div class="front-side">
    <Hero/>
    <ProductPage/>
  </div>
</template>

<script>
// @ is an alias to /src
 import Hero from '@/components/Hero.vue'
 import ProductPage from '@/components/Products/ProductPage.vue'

export default {
  name: 'Home',
  components: {
   Hero,
   ProductPage
  }
}
</script>
