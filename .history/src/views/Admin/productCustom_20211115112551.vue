<template>

  <div id="wrapper">
    <SideBar />

    
    <div id="content-wrapper" class="d-flex flex-column">
    
      <div id="content">
        
        <TopBar />
       
        <div class="container-fluid">
       
          
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
