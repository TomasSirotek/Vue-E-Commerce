<template>
    <div>
        <h2>I am your cart</h2> <!-- put another component  -->
       <div class="container text-center" v-if="!products.length ">
           <h2>Staart Shopping pleeeease</h2>
       </div>
        
        <CartItem
        v-for="item in products" :key="item.id" :item="item" 
        />
        <CartTotal v-if="products.length > 0 "/>
    </div>
</template>

<script>
import CartItem from "@/components/Cart/CartItem.vue"
import CartTotal from "@/components/Cart/CartTotal.vue"
    export default {
        name:"Cart",
        components: {
            CartItem,
            CartTotal,
        },
         computed: {
    products() {
      return this.$store.getters.cartObjects;
    }
  },
  
        
    }
</script>

<style lang="scss" scoped>

</style>