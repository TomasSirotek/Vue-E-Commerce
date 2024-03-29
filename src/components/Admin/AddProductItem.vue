<template>
  <div class="container">
    <div class="card border-0 shadow-lg">
      <PreviewWindow />

      <div class="card-body p-0">
        <div class="row">
          <div class="col-lg-12">
            <SuccessAlert v-show="success" />
            <div class="p-4">
              <div class="text-center">
                <h4 class="h4 text-gray-900 mb-4">Add New Product</h4>
                <SpinnerLoad v-show="loading" />
              </div>

              <div>
                {{ this.errorMsg }}
              </div>

              <form class="user">
                <div class="form-group row">
                  <div class="col-sm-4 mb-3 mb-sm-0">
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Title"
                      v-model="title"
                    />
                  </div>
                  <div class="col-sm-4">
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Subtitle"
                      v-model="subtitle"
                    />
                  </div>
                  <div class="col-sm-4">
                    <b-form-select
                      v-model="category"
                      :options="options"
                      class="mb-3 category"
                    ></b-form-select>
                  </div>
                </div>
                <div class="form-group row">
                  <div class="col-sm-4 mb-3 mb-sm-0">
                    <input
                      type="number"
                      class="form-control"
                      placeholder="How many you want to add ?"
                      v-model="count"
                    />
                  </div>
                  <div class="col-sm-4">
                    <input
                      type="number"
                      class="form-control"
                      placeholder="Price in USD"
                      v-model="price"
                    />
                  </div>
                  <div class="col-sm-4">
                    <label
                      id="button"
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
                      >Picture you choose :
                      {{ this.$store.state.productPhotoName }}</span
                    >
                  </div>
                </div>
                <span class="error" v-show="error">{{ this.errorMsg }}</span>
                <div class="form-group row">
                  <div class="col-sm-12 mb-3 mb-sm-0">
                    <vue-editor
                      :editorOptions="editorSetting"
                      v-model="descriptionHTML"
                      useCustomImageEditor
                      @image-added="imageHandler"
                    />
                  </div>
                </div>
                <div class="form-group row">
                  <div class="col-sm-6 mb-3 mb-sm-0">
                    <b-button
                      id="button"
                      class="btn-block preview"
                      :disabled="!this.$store.state.productPhotoFileUrl"
                      v-b-modal.my-modal
                    >
                      Preview Photo
                    </b-button>
                  </div>
                  <div class="col-sm-6 mb-3 mb-sm-0">
                    <b-button id="button" class="btn-block" @click="addProduct">
                      Add Product
                    </b-button>
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
import Quill from "quill";
window.Quill = Quill;
const ImageResize = require("quill-image-resize-module").default;
Quill.register("modules/imageResize", ImageResize);
import firebase from "firebase/compat/app";
import "firebase/compat/storage";
import "firebase/compat/firestore";
import PreviewWindow from "@/components/Admin/PreviewWindow.vue";
import SpinnerLoad from "@/components/Admin/Alerts/SpinnerLoad.vue";
import SuccessAlert from "@/components/Admin/Alerts/SuccessAlert.vue";

export default {
  name: "AddProductItem",
  components: {
    PreviewWindow,
    SpinnerLoad,
    SuccessAlert,
  },
  data() {
    return {
      title: "",
      count: "",
      errorMsg: "",
      price: "",
      subtitle: "",
      error: false,
      file: null,
      loading: false,
      success: false,
      category: null,
      options: [
        { value: null, text: "Please select an option" },
        { value: "PC", text: "PC" },
        { value: "XBOX", text: "XBOX" },
        { value: "PS4", text: "PS4" },
        { value: "PS5", text: "PS5" },
      ],

      editorSetting: {
        modules: {
          imageResize: {},
        },
      },
    };
  },
  methods: {
    addProduct() {
      if (
        this.title !== "" &&
        this.descriptionHTML !== "" &&
        this.count !== "" &&
        this.price !== "" &&
        this.subtitle !== "" &&
        this.category !== ""
      ) {
        if (this.file) {
          this.loading = true;
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
              this.loading = false;
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
                descriptionHTML: this.descriptionHTML,
                price: this.price,
                category: this.category,
                count: this.count,
                subtitle: this.subtitle,
                imageCover: downloadURL,
                productPhotoName: this.productPhotoName,
                profileId: this.profileId,
                date: timestamp,
              });
              this.reset();
              this.descriptionHTML = "";
              this.loading = false;
              this.success = true;
              setTimeout(() => {
                this.$router.push({ path: "/admin" });
              }, 2000);
            }
          );
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
    imageHandler(file, Editor, cursorLocation, resetUploader) {
      const storageRef = firebase.storage().ref();
      const docRef = storageRef.child(`documents/HtmlFiles/${file.name}`);
      docRef.put(file).on(
        "state_changed",
        (snapshot) => {
          console.log(snapshot);
        },
        (err) => {
          console.log(err);
        },
        async () => {
          const downloadURL = await docRef.getDownloadURL();
          Editor.insertEmbed(cursorLocation, "image", downloadURL);
          resetUploader();
        }
      );
    },
  },
  computed: {
    productPhotoName() {
      return this.$store.state.productPhotoName;
    },
    profileId() {
      return this.$store.state.profileId;
    },
    descriptionHTML: {
      get() {
        return this.$store.state.descriptionHTML;
      },
      set(payload) {
        this.$store.commit("updateDesriptionHTML", payload);
      },
    },
  },
};
</script>

<style lang="scss" scoped>
#product-picture {
  display: none;
}
</style>
