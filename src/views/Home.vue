<template>
  <div class="front-side">
    <Hero/>
   <!--  <ProductPage/>  -->
    <MainCardsDisplay
    v-for="item in menuItems" 
    :key="item.id"
    :cardsSection="item"
/>
  </div>
</template>

<script>
// @ is an alias to /src
 import Hero from '@/components/Hero.vue'
 // import ProductPage from '@/components/Products/ProductPage.vue'
 import MainCardsDisplay from '@/components/MainCardsDisplay.vue'

export default {
  name: 'Home',
  components: {
   Hero,
  // ProductPage,
   MainCardsDisplay
  },
  computed:{
      menuItems(){
        return this.$store.getters.getMenuItems
    
      }
  

  },
  beforeCreate() {
      this.$store.dispatch('setMenuItems')
  },
}
</script>
