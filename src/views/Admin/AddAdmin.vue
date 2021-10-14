<template>
  <div id="wrapper">
    <SideBar />
    <div id="content-wrapper" class="d-flex flex-column">
      <div id="content">
        <TopBar />
        <div class="container-fluid">
          <div class="row"></div>
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
                  <h6 class="m-0 font-weight-bold text-primary">
                    Administration
                  </h6>
                </div>
                <div class="card-body">
                  <AddNewAdmin />

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <FooterAdmin />
    </div>
  </div>
</template>

<script>
import SideBar from "@/components/Admin/SideBar.vue";
import TopBar from "@/components/Admin/TopBar.vue";
import FooterAdmin from "@/components/Admin/Footer.vue";
import AddNewAdmin from "@/components/Admin/AddNewAdmin.vue";

export default {
  name: "AddAdmin",
  components: {
    SideBar,
    TopBar,
    FooterAdmin,
    AddNewAdmin,
  },
};
</script>

<style lang="scss" scoped>
</style>