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
        <a type="button" @click="addCheckoutItem ,showToast" id="button">
          <font-awesome-icon icon="shopping-cart" class="cart" />
          Proceed to Checkout
        </a>
         <b-button @click="toast()">Toast with link</b-button>
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
      
    
      
      
    },
    showToast() {
        // Use a shorter name for this.$createElement
        const h = this.$createElement
        // Increment the toast count
        this.count++
        // Create the message
        const vNodesMsg = h(
          'p',
          { class: ['text-center', 'mb-0'] },
          [
            h('b-spinner', { props: { type: 'grow', small: true } }),
            ' Flashy ',
            h('strong', 'toast'),
            ` message #${this.count} `,
            h('b-spinner', { props: { type: 'grow', small: true } })
          ]
        )
        // Create the title
        const vNodesTitle = h(
          'div',
          { class: ['d-flex', 'flex-grow-1', 'align-items-baseline', 'mr-2'] },
          [
            h('strong', { class: 'mr-2' }, 'The Title'),
            h('small', { class: 'ml-auto text-italics' }, '5 minutes ago')
          ]
        )
        // Pass the VNodes as an array for message and title
        this.$bvToast.toast([vNodesMsg], {
          title: [vNodesTitle],
          solid: true,
          variant: 'info'
        })
      }
    
    
  },
};
</script>

<style lang="scss" scoped>
</style>