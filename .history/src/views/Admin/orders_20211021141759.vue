<template>
  <div id="wrapper">
    <SideBar />
    <div id="content-wrapper" class="d-flex flex-column">
      <div id="content">
        <TopBar />
        <div class="container-fluid">
          <div class="row">
            <div class="col-xl-12 col-lg-7">
              <div class="card shadow mb-4">
                <div
                  class="card-header py-3 d-flex flex-row align-items-center justify-content-between"
                >
                  <h4 class="m-0 font-weight-bold text-primary">
                    Previe
                  </h4>
                </div>
                <div class="card-body">
                  <SoldTable />
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
import SoldTable from "@/components/Admin/SoldTable.vue";
import SideBar from "@/components/Admin/SideBar.vue";
import TopBar from "@/components/Admin/TopBar.vue";


export default {
  name: "Orders",
  components: {
    SoldTable,
    SideBar,
    TopBar,
  
  },
};
</script>

<style lang="scss" scoped></style>
