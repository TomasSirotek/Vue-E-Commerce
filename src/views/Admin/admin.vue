<template>
  <!-- Page Wrapper -->
  <div id="wrapper">
    <!-- Sidebar -->
    <SideBar />
    <!-- End of Sidebar -->

    <!-- Content Wrapper -->
    <div id="content-wrapper" class="d-flex flex-column">
      <!-- Main Content -->
      <div id="content">
        <!-- Topbar -->
        <TopBar />
        <!-- End of Topbar -->

        <!-- Begin Page Content -->
        <div class="container-fluid">
          <!-- Page Heading -->

          <!-- Content Row -->
          <div class="row">
            <!-- Earnings (Monthly) Card Example -->
            <div class="col-xl-3 col-md-6 mb-4">
              <div class="card border-left-primary shadow h-100 py-2">
                <div class="card-body">
                  <div class="row no-gutters align-items-center">
                    <div class="col mr-2">
                      <div
                        class="text-xs font-weight-bold text-primary text-uppercase mb-1"
                      >
                        Earnings (Total)
                      </div>
                      <div class="h5 mb-0 font-weight-bold text-gray-800">
                        $40,000
                      </div>
                    </div>
                    <div class="col-auto">
                      <i class="fas fa-calendar fa-2x text-gray-300"></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!-- Earnings (Monthly) Card Example -->
            <CompletedOrders/>

            <!-- Earnings (Monthly) Card Example -->
           <ProductsShop/>

            <!-- Pending Requests Card Example -->
            <div class="col-xl-3 col-md-6 mb-4">
              <div class="card border-left-warning shadow h-100 py-2">
                <div class="card-body">
                  <div class="row no-gutters align-items-center">
                    <div class="col mr-2">
                      <div
                        class="text-xs font-weight-bold text-warning text-uppercase mb-1"
                      >
                        Pending Requests
                      </div>
                      <div class="h5 mb-0 font-weight-bold text-gray-800">
                        18
                      </div>
                    </div>
                    <div class="col-auto">
                      <i class="fas fa-comments fa-2x text-gray-300"></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Content Row -->

          <div class="row">
            <!-- Area Chart -->
            <div class="col-xl-12 col-lg-7">
              <div class="card shadow mb-4">
                <!-- Card Header - Dropdown -->
                <div
                  class="card-header py-3 d-flex flex-row align-items-center justify-content-between"
                >
                  <h6 class="m-0 font-weight-bold text-primary">
                    Products in Shop
                  </h6>
                </div>
                <!-- Card Body -->
                <div class="card-body">
                  <Table />
                </div>
              </div>
            </div>

  
        
          </div>

          <!-- Content Row -->
        </div>
      </div>
      <!-- End of Main Content -->

      <!-- Footer -->
      <FooterAdmin />
      <!-- End of Footer -->
    </div>
    <!-- End of Content Wrapper -->
  </div>
</template>

<script>
import Table from "@/components/Admin/Table.vue";
import CompletedOrders from "@/components/Admin/Overview/CompletedOrders.vue";
import ProductsShop from "@/components/Admin/Overview/ProductsShop.vue";
import SideBar from "@/components/Admin/SideBar.vue";
import TopBar from "@/components/Admin/TopBar.vue";
import FooterAdmin from "@/components/Admin/Footer.vue";

export default {
  name: "Users",
  components: {
    Table,
    CompletedOrders,
    ProductsShop,
    SideBar,
    TopBar,
    FooterAdmin,
  },

  
};
</script>

<style lang="scss" scoped></style>
