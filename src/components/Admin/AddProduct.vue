<template>
 <div class="row justify-content-center">
            <!-- Area Chart -->
            <div class="col-xl-10 col-lg-10">
              <div class="card shadow mb-4">
                <!-- Card Header - Dropdown -->
                <div
                  class="card-header py-3 d-flex flex-row align-items-center justify-content-between"
                >
                  <h6 class="m-0 font-weight-bold text-primary">
                    You are about to ADD New Product
                  </h6>
                </div>
                <!-- Card Body -->
                <div class="card-body">
                    <AddTable/>
                </div>
              </div>
            </div>

       
          </div>
</template>

<script>
import AddTable from "@/components/Admin/AddTable.vue"
    export default {
        components:{
            AddTable,
        }
        
    }
</script>

<style lang="scss" scoped>

</style>