<template>
<div class="cart-page">
    <div class="container py-4">
      <div class="line-bottom heading-text mb-4">
        <h1 class="main_title"><span>Cart</span></h1>
      </div>
      <div class="row">
        <div class="col-9 sm-12">
          <div class="cart-contain">
            <div class="row header-cart justify-content-between text-center">
              <div class="col-2">Number</div>
              <div class="col-2 d-flex justify-content-start">Product</div>
              <div class="col-2 d-flex justify-content-end">Category</div>
              <div class="col-3">Price</div>
              <div class="col-1"></div>
            </div>
            <div class="row align-items-center text-center body-cart">
              <div class="col-12" v-if="!cartObjects.length">
                This cart is empty! In order to order you need to fill it up!
              </div>
              <div class="col-12 item-cart">
              <CartItem v-for="item in this.items" :key="item.id" :item="item" />
              </div>
                 
             
                
            </div>

          
           <div class="routing-back mt-5">
            <div class="row">
              <div class="col-12">
                <router-link to="/" class="back-nav">
                Go back to products !
                </router-link>
              </div>
            </div>
          </div>
          </div>
          
        </div>
        <div class="col-3 sm-12">
          <div class="cart-contain">
            <h1>Overview</h1>
            <CartTotal v-if="this.items.length > 0" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CartItem from "@/components/Cart/CartItem.vue";
import CartTotal from "@/components/Cart/CartTotal.vue";
/* import { mapGetters } from 'vuex'; */
export default {
  name: "Cart",

    data() {
      return{
        items:[
          { 
            id: 1,
            title:"random",
          }
        ]
          
        
      }
    },
  components: {
    CartItem,
    CartTotal,
  },
  computed: {
  /*   ...mapGetters(['cartObjects']),  */
 
    /* products() {
      return this.$store.getters.cartObjects;
    }, */
  
  },
};
</script>

<style lang="scss" scoped></style>
