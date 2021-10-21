<template>
  <div id="wrapper">
    <SideBar />
 <div id="content-wrapper" class="d-flex flex-column">
      <div id="content">
        <TopBar />

        <div class="container-fluid"></div>
        <div>
          <EditProductItem />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import EditProductItem from "@/components/Admin/EditProductItem.vue";
import SideBar from "@/components/Admin/SideBar.vue";
import TopBar from "@/components/Admin/TopBar.vue";

export default {
  name: "EditProduct",
  components: {
    EditProductItem,
    SideBar,
    TopBar,
  },
};
</script>

<style lang="scss" scoped></style>
