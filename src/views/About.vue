<template>
  <div class="about">
    <h2>Test page</h2>
    <Box />
    <div v-for="item in all" :key="item.id">
      <p>Order number is {{ item.orderNumber }}</p>

      <tb v-for="subitem in item.orderFromUser" :key="subitem.id">
        <span>{{ subitem.title }}</span> <br />
        <p>{{ subitem.price }}</p>
        <p>{{ subitem.snippet }}</p>
        <br />
      </tb>
    </div>
  </div>
</template>

<script>
import Box from "@/components/Box.vue";
export default {
  name: "about",
  components: {
    Box,
  },

  computed: {
    all() {
      return this.$store.getters.getOrderItems;
    },
  },
  beforeCreate() {
    this.$store.dispatch("setOrderItems");
  },
};
</script>
