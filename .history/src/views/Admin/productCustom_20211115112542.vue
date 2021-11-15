<template>
  <!-- Page Wrapper -->
  <div id="wrapper">
    <SideBar />

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
          
        </div>
        <div>
          <AddProduct />
        </div>

      </div>

      
    </div>
  
  </div>
 
</template>

<script>
import SideBar from "@/components/Admin/SideBar.vue";
import TopBar from "@/components/Admin/TopBar.vue";

import AddProduct from "@/components/Admin/AddProduct.vue";

export default {
  name: "ProductCustom",
  components: {
    SideBar,
    TopBar,
    
    AddProduct,
  },
};
</script>

<style lang="scss" scoped></style>
