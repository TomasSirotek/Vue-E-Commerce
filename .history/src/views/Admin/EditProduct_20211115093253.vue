<template>
  <div>
    <SideBar />
    <div>
      <TopBar />
    </div>
    <div class="container">
      <div class="card border-0 shadow-lg">
        <PreviewWindow />

        <div class="card-body p-0">
          <div class="row">
            <div class="col-lg-12">
              <SuccessAlert v-show="success" />
              <div class="p-4">
                <div class="text-center">
                  <h4 class="h4 text-gray-900 mb-4">Edit Product</h4>
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
                    <div class="col-sm-4 mb-3 mb-sm-0">
                      <b-button
                        id="button"
                        class="btn-block preview"
                        :disabled="!this.$store.state.productPhotoFileUrl"
                        v-b-modal.my-modal
                      >
                        Preview Photo
                      </b-button>
                    </div>
                    <div class="col-sm-4 mb-3 mb-sm-0">
                      <b-button
                        id="button"
                        class="btn-block"
                        @click="deleteGame"
                      >
                        Delete
                      </b-button>
                    </div>
                    <div class="col-sm-4 mb-3 mb-sm-0">
                      <b-button id="button" class="btn-block" @click="update">
                        Update
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
  </div>
</template>

<script>
import Quill from "quill";
window.Quill = Quill;
const ImageResize = require("quill-image-resize-module").default;
Quill.register("modules/imageResize", ImageResize);
import firebase from "firebase/compat/app";
import { db } from "../../firebase";
import "firebase/compat/storage";
import "firebase/compat/firestore";
import SideBar from "@/components/Admin/SideBar.vue";
import TopBar from "@/components/Admin/TopBar.vue";

import PreviewWindow from "@/components/Admin/PreviewWindow.vue";
import SpinnerLoad from "@/components/Admin/Alerts/SpinnerLoad.vue";
import SuccessAlert from "@/components/Admin/Alerts/SuccessAlert.vue";

export default {
  name: "EditProduct",
  components: {
    PreviewWindow,
    SpinnerLoad,
    SuccessAlert,
    SideBar,
    TopBar,
  },
  data() {
    return {
      errorMsg: "",

      error: false,
      file: null,
      loading: false,
      success: false,
      routeID: null,
      currentGame: null,

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
  async mounted() {
    this.routeID = this.$route.params.gameid;
    this.currentGame = await this.$store.state.games.filter((game) => {
      return game.gameID === this.routeID;
    });
    this.$store.commit("setGameState", this.currentGame[0]);
  },

  methods: {
   
    deleteGame() {
      this.boxOne = "";
      this.$bvModal
        .msgBoxConfirm("Please confirm that you want to delete everything.", {
          title: "Please Confirm",
          size: "sm",
          buttonSize: "sm",
          okVariant: "danger",
          okTitle: "YES",
          cancelTitle: "NO",
          footerClass: "p-2",
          hideHeaderClose: false,
          centered: true,
        })
        .then((value) => {
          this.boxOne = value;
          if (value == true) {
            this.$store.dispatch("deleteProduct", this.routeID);
            this.$router.push({ path: "/admin" }); 
            
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },
    async update() {
      const dataBase = await db.collection("menuItems").doc(this.routeID);

      if (this.descriptionHTML.lenght !== 0) {
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

              await dataBase.update({
                title: this.title,
                descriptionHTML: this.descriptionHTML,
                price: this.price,
                category: this.category,
                count: this.count,
                subtitle: this.subtitle,
                imageCover: downloadURL,
                productPhotoName: this.productPhotoName,
              });
              await this.$store.dispatch("updateChanges", this.routeID);
              this.loading = false;
             
            /*   this.$router.push({ path: "/admin" }); */  
             
            }
          );
          return;
        }
        this.loading = true;
        await dataBase.update({
          title: this.title,
          descriptionHTML: this.descriptionHTML,
          price: this.price,
          category: this.category,
          count: this.count,
          subtitle: this.subtitle,

          productPhotoName: this.productPhotoName,
        });
        await this.$store.dispatch("updateChanges", this.routeID);
        this.loading = false;
         this.$bvToast.toast(`Perfect! You will be redirected please refresh the page after`, {
          title: 'Success',
          variant:"warning"
        })
         setTimeout(() => {
        this.$router.push({ path: "/admin" });
      }, 4000);
        

      }
      this.error = true;
      this.errorMsg = "Fill all please";
      setTimeout(() => {
        this.error = false;
      }, 5000);
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

    descriptionHTML: {
      get() {
        return this.$store.state.descriptionHTML;
      },
      set(payload) {
        this.$store.commit("updateDesriptionHTML", payload);
      },
    },
    title: {
      get() {
        return this.$store.state.gameTitle;
      },
      set(payload) {
        this.$store.commit("updateTitle", payload);
      },
    },
    subtitle: {
      get() {
        return this.$store.state.gameSubtitle;
      },
      set(payload) {
        this.$store.commit("updateSubTitle", payload);
      },
    },
    count: {
      get() {
        return this.$store.state.gameCount;
      },
      set(payload) {
        this.$store.commit("updateCount", payload);
      },
    },
    price: {
      get() {
        return this.$store.state.gamePrice;
      },
      set(payload) {
        this.$store.commit("updatePrice", payload);
      },
    },
    category: {
      get() {
        return this.$store.state.gameCategory;
      },
      set(payload) {
        this.$store.commit("updateCategory", payload);
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
