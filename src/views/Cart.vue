<template>
    <div>
        <h2>I am your cart</h2>
        <CartItem
        v-for="item in products" :key="item.id" :item="item" 
        />
        <CartTotal/>
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