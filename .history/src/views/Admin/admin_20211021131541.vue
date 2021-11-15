<template>
  <div id="wrapper">
    <SideBar />
    <div id="content-wrapper" class="d-flex flex-column">
      <div id="content">
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
                  class="card-header py-3 d-flex flex-row align-items-center justify-content-between"
                >
                  <h6 class="m-0 font-weight-bold ">
                    Products in Shop
                  </h6>
                </div>
                <div class="card-body">
                  <Table />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <FooterAdmin />
    </div>
     <router-view></router-view>
  </div>
 
</template>

<script>
import Table from "@/components/Admin/Table.vue";
import CompletedOrders from "@/components/Admin/Overview/CompletedOrders.vue";
import ProductsShop from "@/components/Admin/Overview/ProductsShop.vue";
import SideBar from "@/components/Admin/SideBar.vue";
import TopBar from "@/components/Admin/TopBar.vue";
import FooterAdmin from "@/components/Admin/Footer.vue";
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
    FooterAdmin,
  },
};
</script>

<style lang="scss" scoped></style>
