<template>
  <div class="container">
    <h1 class="h3 mb-4 text-gray-800">
            Welcome to Product Customization
          </h1>
    <div class="card o-hidden border-0 shadow-lg my-5">
      <div class="card-body p-0">
        <!-- Nested Row within Card Body -->
        <div class="row">
          <div class="col-lg-12">
            <div class="p-5">
              <div class="text-center">
                <h1 class="h4 text-gray-900 mb-4">Add New Product</h1>
              </div>
              <div>
                {{ this.errorMsg }}
              </div>

              <form class="user">
                <div class="form-group row">
                  <div class="col-sm-4 mb-3 mb-sm-0">
                    <input
                      type="text"
                      class="form-control form-control-user"
                      id="exampleFirstName"
                      placeholder="Title"
                      v-model="title"
                    />
                  </div>
                  <div class="col-sm-4">
                    <input
                      type="text"
                      class="form-control form-control-user"
                      id="exampleLastName"
                      placeholder="SubTitle"
                      v-model="subtitle"
                    />
                  </div>
                  <div class="col-sm-4">
                    <input
                      type="text"
                      class="form-control form-control-user"
                      id="exampleLastName"
                      placeholder="Category"
                      v-model="category"
                    />
                  </div>
                </div>
                <div class="form-group row">
                  <div class="col-sm-4 mb-3 mb-sm-0">
                    <input
                      type="text"
                      class="form-control form-control-user"
                      id="exampleInputPassword"
                      placeholder="Count"
                      v-model="count"
                    />
                  </div>
                  <div class="col-sm-4">
                    <input
                      type="text"
                      class="form-control form-control-user"
                      id="exampleRepeatPassword"
                      placeholder="Price"
                      v-model="price"
                    />
                  </div>
                  <div class="col-sm-4">
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
                    <span
                      >Picture Chosen :
                      {{ this.$store.state.productPhotoName }}</span
                    >
                  </div>
                </div>
                <span class="error" v-show="error">{{ this.errorMsg }}</span>
                <div class="form-group row">
                  <div class="col-sm-12 mb-3 mb-sm-0">
                    <input
                      type="text"
                      class="form-control form-control-user"
                      id="exampleInputPassword"
                      placeholder="description"
                      v-model="description"
                    />
                  </div>
                </div>
                <div class="form-group row ">
                  <div class="col-sm-6 mb-3 mb-sm-0">
                    <button
                    disabled
                      class="btn btn-primary btn-user btn-block preview"
                      :class="{
                        'disabled': !this.$store.state
                          .productPhotoFileUrl,
                      }"
                    >
                      Preview Photo
                    </button>
                  </div>
                  <div class="col-sm-6 mb-3 mb-sm-0">
                    <a
                      class="btn btn-primary btn-user btn-block"
                      @click="addProduct"
                    >
                      Add Product
                    </a>
                  </div>
                </div>
              </form>

              <hr />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import firebase from "firebase/compat/app";
import "firebase/compat/storage";
import "firebase/compat/firestore";

export default {
  name: "AddProductItem",
  data() {
    return {
      title: "",
      description: "",
      count: "",
      errorMsg: "",
      price: "",
      category: "",
      subtitle: "",
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
        this.subtitle !== "" &&
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
            },
            async () => {
              const downloadURL = await docRef.getDownloadURL();
              const timestamp = await Date.now();
              const dataBase = await firebase
                .firestore()
                .collection("menuItems")
                .doc();

              await dataBase.set({
                gameId: dataBase.id,
                title: this.title,
                description: this.description,
                price: this.price,
                category: this.category,
                count: this.count,
                subtitle: this.subtitle,
                imageCover: downloadURL,
                /*  productPhotoName : this.productPhotoName, */
                profileId: this.profileId,
                date: timestamp,
              });
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
    profileId() {
      return this.$store.state.profileId;
    },
  },
};
</script>

<style lang="scss" scoped>
#product-picture {
  display: none;
}
</style>
