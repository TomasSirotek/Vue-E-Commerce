<template>
  <div class="table">
    <!-- Page Heading -->
    <h1 class="h3 mb-2 text-gray-800">Describe your Product</h1>

    <!-- DataTales Example -->
    <div class="card shadow mb-4">
      <div class="card-body">
          <div>
              {{ this.errorMsg}}
          </div>
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
                <th>Description</th>
                <th>Count</th>
                <th>Price</th>
                <th>Category</th>
                <th>Picture</th>
                <th>Make it final</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <form class="user">
                    <div class="form-group">
                      <input
                        type="text"
                        class="form-control form-control-user"
                        id="exampleInputEmail"
                        aria-describedby="emailHelp"
                        placeholder="Title here"
                        v-model="title"
                      />
                    </div>
                  </form>
                </td>
                <td>
                  <form class="user">
                    <div class="form-group">
                      <input
                        type="text"
                        class="form-control form-control-user"
                        id="exampleInputEmail"
                        aria-describedby="emailHelp"
                        placeholder="Description"
                        v-model="description"
                      />
                    </div>
                  </form>
                </td>
                <td>
                  <form class="user">
                    <div class="form-group">
                      <input
                        type="text"
                        class="form-control form-control-user"
                        id="exampleInputEmail"
                        aria-describedby="emailHelp"
                        placeholder="Count"
                         v-model="count"
                      />
                    </div>
                  </form>
                </td>
                <td>
                  <form class="user">
                    <div class="form-group">
                      <input
                        type="text"
                        class="form-control form-control-user"
                        id="exampleInputEmail"
                        aria-describedby="emailHelp"
                        placeholder="price"
                         v-model="price"
                      />
                    </div>
                  </form>
                </td>
                <td>
                  <form class="user">
                    <div class="form-group">
                      <input
                        type="text"
                        class="form-control form-control-user"
                        id="exampleInputEmail"
                        aria-describedby="emailHelp"
                        placeholder="category"
                         v-model="category"
                      />
                    </div>
                  </form>
                </td>
                <td>
                  <a
                    href="login.html"
                    class="btn btn-primary btn-user btn-block"
                  >
                    Upload Picture
                  </a>
                </td>
                <td>
                  <a class="btn btn-primary btn-user btn-block" @click="addProduct">
                    Add Product
                  </a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { dbMenuAdd } from "../../firebase.js"
export default {
    data(){
        return{
            title: "",
            description: "",
            count: "",
            errorMsg: "",
            price: "",
            category: "",
            error:null,
        }
    },
    methods: {
        addProduct() {
            if(
                this.title !== "" &&
                this.description !== "" &&
                this.count !== "" &&
                this.price !== "" &&
                this.category !== ""
            ){
                this.error = false;
                this.errorMsg = "";
                 dbMenuAdd.add({
                title: this.title,
                snippet: this.description,
                inStock: this.count,
                price: this.price,
                category: this.category,

            });
            this.reset();
            console.log("added to db")
              return;
            }
            this.errorMsg = "Fill all the field to add"
            this.error = true
            return;
           

        },
        reset(){
            Object.assign(this.$data, this.$options.data.apply(this));
        }
    }
};
</script>

<style lang="scss" scoped></style>
