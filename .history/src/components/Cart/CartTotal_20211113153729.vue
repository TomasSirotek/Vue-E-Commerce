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
        <a type="button" @click="addCheckoutItem" id="button">
          <font-awesome-icon icon="shopping-cart" class="cart" />
          Proceed to Checkout
        </a>
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
      this.orderDone = true;
      this.$store.dispatch("setCheckoutItem");
      this.$store.dispatch("emptyCart");
  const h = this.$createElement
        // Create a ID with a incremented count
        const id = `my-toast-${this.count++}`

        // Create the custom close button
        const $closeButton = h(
          'b-button',
          {
            on: { click: () => this.$bvToast.hide(id) }
          },
          'Close'
        )

        // Create the toast
        this.$bvToast.toast([$closeButton], {
          id: id,
          title: `Toast ${this.count}`,
          noCloseButton: true
        })
      
      
    },
    
  },
};
</script>

<style lang="scss" scoped>
</style>