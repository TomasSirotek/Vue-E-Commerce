<template>
  <div class="col-xl-4 col-md-6 mb-4">
    <div class="card h-100 py-2">
      <div class="card-body">
        <div class="row no-gutters align-items-center">
          <div class="col mr-2">
            <div
              class="text-xs font-weight-bold text-success text-uppercase mb-1"
            >
              All orders (Total)
            </div>
            <div class="h5 mb-0 font-weight-bold">
              {{ getOrderItems.length }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "CompletedOrders",
  computed: {
    ...mapGetters(["getOrderItems"]),
  },
  beforeCreate() {
    this.$store.dispatch("setOrderItems");
  },
};
</script>

<style lang="scss" scoped></style>
