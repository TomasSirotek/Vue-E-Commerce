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
            <thead >
              <tr >
                <th>Title</th>
                <th>Category</th>
                <th>On sale</th>
                <th>Price</th>
            
                <th>In stock</th>
              </tr>
            </thead>
            <tbody v-for="item in menuItems " :key="item.id">
              <tr>
                <td> {{ item.title}}</td>
                <td>{{ item.category}}</td>
                <td>{{ item.onSale}}</td>
                <td>${{ item.price}}</td>
                <td>{{ item.inStock}}x</td>
                <td> <a class="btn btn-primary btn-user btn-block" >
                    Edit
                  </a></td>
                <td> <a class="btn btn-primary btn-user btn-block" @click="deleteProduct(item.id)">
                    Delete
                  </a></td>
              </tr>
            </tbody>
          </table>
          <div >
             
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
import { dbMenuAdd } from "../../firebase.js"

    export default {
        computed: {
    menuItems() {
      return this.$store.getters.getMenuItems;
    },
  },
  beforeCreate() {
    this.$store.dispatch("setMenuItems");
  },
  methods:{
      deleteProduct(id){
          dbMenuAdd.doc(id).delete().then(() =>{
              console.log("delete from db")

          })
      }
  }
        
    }
</script>

<style lang="scss" scoped>

</style>