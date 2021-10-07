<template>
    <div>
        <h2>I am your cart</h2>
        <CartItem/>
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
        
    }
</script>

<style lang="scss" scoped>

</style>