<template>
  <div class="col-xl-4 col-md-6 mb-4">
    <div class="card  h-100 py-2">
      <div class="card-body">
        <div class="row no-gutters align-items-center">
          <div class="col mr-2">
            <div
              class="text-xs font-weight-bold text-uppercase mb-1"
            >
              All orders (Total)
            </div>
            <div class="h5 mb-0 font-weight-bold ">
              {{ all.length }}
            </div>
          </div>
          <div class="col-auto">
            <i class="fas fa-dollar-sign fa-2x "></i>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CompletedOrders",
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

<style lang="scss" scoped></style>
