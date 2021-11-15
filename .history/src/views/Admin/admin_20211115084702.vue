<template>
  <div>
    <SideBar />

    <div class="d-flex flex-column">
      <div>
        <TopBar />
        <div class="container-fluid">
          <div class="row">
            <Earnings />
            <CompletedOrders />
            <ProductsShop />
          </div>
          <div class="row">
            <div class="col-xl-12 col-lg-7">
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
                >
                  <h4 class="m-0 font-weight-bold">Products in Shop</h4>
                </div>
                <div >
                  <Table />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <router-view></router-view>
    <b-toast id="updateToast" variant="success" solid>
      <template #toast-title>
        <div class="d-flex flex-grow-1 align-items-baseline">
          <b-img
            blank
            blank-color="#ff5555"
            class="mr-2"
            width="12"
            height="12"
          ></b-img>
          <strong class="mr-auto">Success!</strong>
          <small class="text-muted mr-2">2 seconds ago</small>
        </div>
      </template>
      Product was update please refresh thew pa
    </b-toast>
  </div>
</template>

<script>
import Table from "@/components/Admin/Table.vue";
import CompletedOrders from "@/components/Admin/Overview/CompletedOrders.vue";
import ProductsShop from "@/components/Admin/Overview/ProductsShop.vue";
import SideBar from "@/components/Admin/SideBar.vue";
import TopBar from "@/components/Admin/TopBar.vue";

import Earnings from "@/components/Admin/Overview/Earnings.vue";

export default {
  name: "Admin",
  components: {
    Table,
    Earnings,
    CompletedOrders,
    ProductsShop,
    SideBar,
    TopBar,
  },
  computed: {},
};
</script>

<style lang="scss" scoped></style>
