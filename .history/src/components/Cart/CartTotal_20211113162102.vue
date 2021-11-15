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
        <b-button variant="success" @click="$bvToast.show('my-toast')" class="mb-2">Success</b-button>
      
  <b-toast id="my-toast" variant="warning" solid>
      <template #toast-title>
        <div class="d-flex flex-grow-1 align-items-baseline">
          <b-img blank blank-color="#ff5555" class="mr-2" width="12" height="12"></b-img>
          <strong class="mr-auto">Notice!</strong>
          <small class="text-muted mr-2">42 seconds ago</small>
        </div>
      </template>
      This is the content of the toast.
      It is short and to the point.
    </b-toast>

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
      toastCount: 0
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
       
  /* this.orderDone = true;
      this.$store.dispatch("setCheckoutItem");
      this.$store.dispatch("emptyCart"); */


      /* this.orderDone = true;
      this.$store.dispatch("setCheckoutItem");
      this.$store.dispatch("emptyCart"); */

          this.boxOne = "";
      this.$bvModal
        .msgBoxConfirm("Please confirm that you want to really delete this", {
          title: "Please Confirm",
          size: "sm",
          buttonSize: "sm",
          okVariant: "danger",
          okTitle: "YES",
          cancelTitle: "NO",
          footerClass: "p-2",
          hideHeaderClose: false,
          centered: true,
        })
        .then((value) => {
          this.boxOne = value;
          if (value == true) {
            console.
          }
        })
        .catch((err) => {
          console.log(err);
        });
      
      },
      
     
    
      
      
    
    
    
    
  },
};
</script>

<style lang="scss" scoped>
</style>