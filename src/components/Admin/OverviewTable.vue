<template>
  <div class="table">
    <!-- Page Heading -->
    <h1 class="h3 mb-2 text-gray-800">All Products</h1>

    <!-- DataTales Example -->
    <div class="card shadow mb-4">
      <div class="card-body">
        <div class="table-responsive">
          <table
            class="table table-bordered"
            id="dataTable"
            width="100%"
            cellspacing="0"
          >
            <thead>
              <tr>
                <th>Title</th>
                <th>Category</th>
                <th>On sale</th>
                <th>Price</th>

                <th>In stock</th>
              </tr>
            </thead>
            <tbody v-for="item in menuItems" :key="item.id" >
              <tr>
                <td>{{ item.title }}</td>
                <td>{{ item.category }}</td>
                <td>{{ item.onSale }}</td>
                <td>${{ item.price }}</td>
                <td>{{ item.inStock }}x</td>
                <td>
                  <a
                    id="show-btn"
                    @click="$bvModal.show('bv-modal-example')"
                    class="btn btn-primary btn-user btn-block"
                  >
                    Edit
                  </a>
                   <b-button v-b-modal.modal-center>Launch centered modal</b-button>

                <!--   <EditModal /> -->
                
                
                </td>
                <td>
                  <a
                    class="btn btn-primary btn-user btn-block"
                    @click="deleteProduct(item.id)"
                  >
                    Delete
                  </a>
                </td>
              </tr>
              <b-modal id="modal-center" centered title="BootstrapVue">
    <p class="my-4">
        <input
            type="text"
            class="form-control form-control-user"
            id="exampleInputEmail"
            placeholder="In stock"
            v-model="item.inStock"
          />
        <input
            type="text"
            class="form-control form-control-user"
            id="exampleInputEmail"
            placeholder="In stock"
            v-model="item.title"
          />
        <input
            type="text"
            class="form-control form-control-user"
            id="exampleInputEmail"
            placeholder="In stock"
            v-model="item.price"
          />
    </p>
 <b-button @click="updateChanges(item)">Update</b-button>
                </b-modal>
            </tbody>
          </table>
          
        </div>
      </div>
    </div>
  </div>
</template>

<script>
/* import EditModal from "@/components/Admin/EditModal.vue"; */
export default {
  components: {
/*     EditModal, */
  },
  data() {
    return {
        item:[],

    };
  },
  computed: {
    menuItems() {
      return this.$store.getters.getMenuItems;
    },
  },
  beforeCreate() {
    this.$store.dispatch("setMenuItems");
  },
  methods: {
        updateChanges(item) {
         this.item = item
      },
    deleteProduct(id) {
      this.$store.dispatch("deleteProduct", id);
    },
    
  },
};
</script>

<style lang="scss" scoped></style>
