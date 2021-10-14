<template>
  <div class="row justify-content-center">
    <div class="col-xl-12 col-lg-12">
      <div class="card shadow mb-4">
        <div
          class="
            card-header
            py-3
            d-flex
            flex-row
            align-items-center
            justify-content-between
          "
        ></div>

        <div class="card-body">
          <AddProductItem />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import AddProductItem from "@/components/Admin/AddProductItem.vue";

export default {
  components: {
    AddProductItem,
  },
};
</script>

<style lang="scss" scoped></style>
