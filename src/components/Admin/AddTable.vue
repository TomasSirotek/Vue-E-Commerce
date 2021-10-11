<template>
  <div class="table">
    <!-- Page Heading -->
    <h1 class="h3 mb-2 text-gray-800">Describe your Product</h1>

    <!-- DataTales Example -->
    <div class="card shadow mb-4">
      <div class="card-body">
        <div>
          {{ this.errorMsg }}
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
                <th>Upload Picture</th>
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
                  <label
                    class="btn btn-primary btn-user btn-block"
                    for="product-picture"
                    >Upload Picture</label
                  >
                  <input
                    type="file"
                    ref="productPicture"
                    id="product-picture"
                    accept=".png,.jpg,.jpeg"
                    @change="fileChange"
                  />
                  <button
                    class="btn btn-primary btn-user btn-block preview"
                    :class="{
                      'button-inactive': !this.$store.state.productPhotoFileUrl,
                    }"
                  >
                    Preview Photo
                  </button>
                  <span
                    >Picture Chosen :
                    {{ this.$store.state.productPhotoName }}</span
                  >
                </td>
                <td>
                  <a
                    class="btn btn-primary btn-user btn-block"
                    @click="addProduct"
                  >
                    Add Product
                  </a>
                  <a class="btn btn-primary btn-user btn-block">
                    Add pic
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
 /*  import {db} from "../../firebase.js";   */
 import firebase from "firebase/compat/app"
import "firebase/compat/storage"; 

import 'firebase/compat/firestore';
export default {
  data() {
    return {
      title: "",
      description: "",
      count: "",
      errorMsg: "",
      price: "",
      category: "",
      error: false,
      file: null,

    };
  },
  methods: {
    addProduct() {
      if (
        this.title !== "" &&
        this.description !== "" &&
        this.count !== "" &&
        this.price !== "" &&
        this.category !== "" 
      ) {
        if (this.file) {
          const storageRef = firebase.storage().ref();
          const docRef = storageRef.child(
            `documents/ProductPhotos/${this.$store.state.productPhotoName}`
          );
          docRef.put(this.file).on(
            "state_changed",
            (snapshot) => {
              console.log(snapshot);
            },
            (err) => {
              console.log(err);
            }, async () => {
              const downloadURL = await docRef.getDownloadURL();
              const timestamp = await Date.now();
              const dataBase = await firebase.firestore().collection("menuItems").doc();

              await dataBase.set({
                gameId: dataBase.id,
                title: this.title,
                description: this.description, 
                price: this.price,
                category: this.category,
                count: this.count,
                imageCover: downloadURL,
               /*  productPhotoName : this.productPhotoName, */
                profileId: this.profileId,
                date: timestamp,

              })
            
            }
          );
          /* this.reset(); that is the problem xdd */ 
          console.log("done to db");
          return;

        }
        this.error = true;
        this.errorMsg = "Upload file photo";
        setTimeout(() => {
          this.error = false;
        }, 5000);

        return;
      }
      this.error = true;
      this.errorMsg = "Fill all please";
      setTimeout(() => {
        this.error = false;
      }, 5000);
    },
    reset() {
      Object.assign(this.$data, this.$options.data.apply(this));
    },
    fileChange() {
      this.file = this.$refs.productPicture.files[0];
      const fileName = this.file.name;
      this.$store.commit("fileNameChange", fileName);
      this.$store.commit("createFileURL", URL.createObjectURL(this.file));
    },
  },
  computed: {
    productPictureName() {
      return this.$store.state.productPictureName;
    },
    profileId(){
      return this.$store.state.profileId;
    }

  },
};
</script>

<style lang="scss" scoped>
#product-picture {
  display: none;
}
</style>
