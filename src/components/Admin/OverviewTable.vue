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
            <tbody>
              <tr v-for="item in menuItems" :key="item.id">
                <td>{{ item.title }}</td>
                <td>{{ item.category }}</td>
                <td>{{ item.onSale }}</td>
                <td>${{ item.price }}</td>
                <td>{{ item.inStock }}x</td>
                <td><a class="btn btn-primary btn-user btn-block"  @click="updateChanges(item),modalShow=true">Edit</a>
                </td>
                <td><a class="btn btn-primary btn-user btn-block" @click="deleteProduct(item.id)">Delete</a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
       <b-modal v-model="modalShow">
           <h2>Edit Your Item</h2>
             <form ref="form">
        <b-form-group
          label="Name"
          label-for="name-input"
         
        >
          <b-form-input
            id="name-input"
            v-model="item.title"
          ></b-form-input>
          <b-form-input
            id="name-input"
            v-model="item.snippet"
          ></b-form-input>
          <b-form-input
            id="name-input"
            v-model="item.category"
          ></b-form-input>
          <b-form-input
            id="name-input"
            v-model="item.price"
          ></b-form-input>
        </b-form-group>
      </form>
       <b-button @click="updateFb(item),modalShow=false" >UpdateChanges</b-button>
       </b-modal>
    </div>
  </div>
</template>

<script>
/* import EditModal from "@/components/Admin/EditModal.vue"; */
import { dbMenuAdd } from "../../firebase.js"
export default {
  components: {
    /*  EditModal, */
  },
  data() {
    return {
      item: [],
      modalShow:false,
      editActiveItem:null,
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
      this.item = item;
      this.editActiveItem = item.id
    },
    updateFb() {
       dbMenuAdd.doc(this.editActiveItem).update(this.item);
    },
    deleteProduct(id) {
      this.$store.dispatch("deleteProduct", id);
    },
  },
};
</script>

<style lang="scss" scoped></style>
