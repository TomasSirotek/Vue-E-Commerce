<template>
  <div class="col-xl-4 col-md-6 mb-4">
    <div class="card h-100 py-2">
      <div class="card-body">
        <div class="row no-gutters align-items-center">
          <div class="col mr-2">
            <div class="text-xs font-weight-bold text-info text-uppercase mb-1">
              Products In Shop
            </div>
            <div class="row no-gutters align-items-center">
              <div class="col-auto">
                <div class="h5 mb-0 mr-3 font-weight-bold">
                  {{ games.length }}
                </div>
              </div>
              <div class="col">
                <div class="progress progress-sm mr-2">
                  <div
                    class="progress-bar bg-info"
                    role="progressbar"
                    style="width: 20%"
                    aria-valuenow="50"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  computed: {
    ...mapState(["games"]),
  },
};
</script>

<style lang="scss" scoped></style>
