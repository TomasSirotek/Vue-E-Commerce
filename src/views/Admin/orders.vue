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

          <div class="row">
            <!-- Area Chart -->
            <div class="col-xl-12 col-lg-7">
              <div class="card shadow mb-4">
                <!-- Card Header - Dropdown -->
                <div
                  class="card-header py-3 d-flex flex-row align-items-center justify-content-between"
                >
                  <h6 class="m-0 font-weight-bold text-primary">
                    Your current orders
                  </h6>
                </div>
                <!-- Card Body -->
                <div class="card-body">
               
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

import SideBar from "@/components/Admin/SideBar.vue";
import TopBar from "@/components/Admin/TopBar.vue";
import FooterAdmin from "@/components/Admin/Footer.vue";

export default {
  name: "Orders",
  components: {


    SideBar,
    TopBar,
    FooterAdmin,
  },
};
</script>

<style lang="scss" scoped></style>
