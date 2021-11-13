<template>
  <div class="overview mt-4">
    <div class="row justify-content-between mb-3">
      <div class="col">Overall Items</div>
      <div class="col d-flex justify-content-end">
        {{ cartTotal.toFixed(2) }}$
      </div>
    </div>
    <div class="row justify-content-between mb-3 pt-3 total-overall">
      <div class="col">Total price</div>
      <div class="col total-price d-flex justify-content-end">
        {{ cartTotal.toFixed(2) }}$
      </div>
    </div>
    <div class="row justify-content-center mb-3 pt-3 l">
      <div class="buy-btn mt-2">
        <a type="button"  @click=" addCheckoutItem()"  id="button">
          <font-awesome-icon icon="shopping-cart" class="cart" />
          Proceed to Checkout
        </a>
        <b-button size="sm" @click="showTop = !showTop">
      {{ showTop ? 'Hide' : 'Show' }} Fixed top Alert
    </b-button>
    <b-alert
      v-model="showTop"
      class="position-fixed fixed-top m-0 rounded-0"
      style="z-index: 2000;"
      variant="success"
      dismissible
    >
      Fixed position (top) alert!
    </b-alert>
      
  
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "cartTotal",

  data() {
    return {
      orderDone: false,
      showTop: false
    };
  },

  computed: {
    ...mapGetters(["cartTotal"]),
  },
  beforeCreate() {
    this.$store.dispatch("setOrderItems");
  },
  methods: {
    // Add some modal
    
      addCheckoutItem() {
       this.showTop = true;
  /*  this.orderDone = true;
      this.$store.dispatch("setCheckoutItem");
      this.$store.dispatch("emptyCart");  */
      if(this.showTop == false){
        this.showTop = true;
       
        .then(()=>{
         this.$store.dispatch("emptyCart");
      })
      }


      /* this.orderDone = true;
      this.$store.dispatch("setCheckoutItem");
      this.$store.dispatch("emptyCart"); */

         
      },
      
     
    
      
      
    
    
    
    
  },
};
</script>

<style lang="scss" scoped>
</style>