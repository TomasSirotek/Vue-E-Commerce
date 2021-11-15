<template>
  <div class="col-xl-4 col-md-6 mb-4">
    <div class="card border-left-primary  h-100 py-2">
      <div class="card-body">
        <div class="row no-gutters align-items-center">
          <div class="col mr-2">
            <div
              class="text-xs font-weight-bold text-primary text-uppercase mb-1"
            >
              Earnings (Total)
            </div>
            <div class="h5 mb-0 font-weight-bold text-gray-800">
              {{ earnings_total }} $
            </div>
          </div>
          <div class="col-auto">
            <i class="fas fa-calendar fa-2x text-gray-300"></i>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Earnings",
  computed: {
    earnings_total() {
      return this.$store.getters.earnings_total;
    },
  },
};
</script>

<style lang="scss" scoped></style>
