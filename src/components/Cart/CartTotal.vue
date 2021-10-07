<template>
      <div>
        <div class="container">
            <div class="row flex-column">
                <h2>Total Price</h2> 
                <h3>{{  cart_Total.toFixed(2) }} $</h3>
            <b-button @click="addProduct" variant="success">Pay with Credit Bitcoin</b-button>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name:"cartTotal",
        computed: {
            cart_Total(){
                return this.$store.getters.cartTotal
            },
           
        },
        methods:{
             addProduct(){
                this.$store.dispatch("orderedProducts")
            }
        }
        
    }
</script>

<style lang="scss" scoped>

</style>