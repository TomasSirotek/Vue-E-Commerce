<template>
  <div class="container">
    <h1 class="h3 mb-4 text-gray-800">Welcome to Product Customization</h1>
    <div class="card o-hidden border-0 shadow-lg my-5">
      <div class="card-body p-0">
        <div class="row">
          <div class="col-lg-12">
            <SuccessAlert v-show="success" />
            <div class="p-5">
              <div class="text-center">
                <h1 class="h4 text-gray-900 mb-4">Add New Product</h1>
              </div>
              <form class="user">
                <div class="form-group row">
                  <div class="col-sm-12 mb-3 mb-sm-0">
                    <input
                      type="email"
                      class="form-control form-control-user"
                      placeholder="Add Admin Email in order to make him Admin"
                      v-model="adminEmail"
                    />
                    <div class="mt-3">
                      <span>{{ this.functionMsg }}</span>
                      <b-button class="btn btn-primary btn-user btn-block">
                        Add Admin
                      </b-button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    data(){
        return{
            adminEmail:"",
            functionMsg: null,
        }
    }
};
</script>

<style lang="scss" scoped>
</style>