<template>
  <div class="container">
    <div class="card o-hidden border-0 shadow-lg my-5">
      <PreviewWindow />

      <div class="card-body p-0">
        <div class="row">
          <div class="col-lg-12">
            <SuccessAlert v-show="success" />
            <div class="p-5">
              <div class="text-right row justify-content-between">
                <div class="creeated">
                  <p>
                    <b>Created on:</b>
                    {{
                      new Date(this.currentGame[0].date).toLocaleString(
                        "en-us",
                        {
                          dataStyles: "long",
                        }
                      )
                    }}
                  </p>
                </div>
                <div class="created-by">
                  <p>
                    <b>Created by:</b> {{ this.$store.state.profileUserName }}
                  </p>
                </div>
              </div>
              <div class="text-center">
                <h4 class="h4 mb-4">Edit your product</h4>
                <SpinnerLoad v-show="loading" />
              </div>

              <form class="user">
                <div class="form-group row">
                  <div class="col-sm-4 mb-3 mb-sm-0">
                    <input
                      type="text"
                      class="form-control form-control-user"
                      placeholder="Title"
                      v-model="title"
                    />
                  </div>
                  <div class="col-sm-4">
                    <input
                      type="text"
                      class="form-control form-control-user"
                      placeholder="Subtitle"
                      v-model="subtitle"
                    />
                  </div>
                  <div class="col-sm-4">
                   <!--  <b-form-select
                      v-model="this.currentGame[0].category"
                      :options="options"
                      class="mb-3 category"
                      value-field="item"
                      text-field="category"
                      disabled-field="notEnabled"
                    ></b-form-select> -->

                    <b-form-select
                      v-model="category"
                      :options="options"
                      class="mb-3 category"
                    ></b-form-select>
                    <div>{{ category}}</div>
                  </div>
                </div>
                <div class="form-group row">
                  <div class="col-sm-4 mb-3 mb-sm-0">
                    <input
                      type="number"
                      class="form-control form-control-user"
                      placeholder="How many you want to add ?"
                      v-model="this.currentGame.count"
                    />
                  </div>
                  <div class="col-sm-4">
                    <input
                      type="number"
                      class="form-control form-control-user"
                      placeholder="Price in USD"
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
                      class="btn btn-primary btn-user btn-block preview"
                      :disabled="!this.$store.state.productPhotoFileUrl"
                      v-b-modal.my-modal
                    >
                      Preview Photo
                    </b-button>
                  </div>
                  <div class="col-sm-4 mb-3 mb-sm-0">
                    <b-button
                      class="btn btn-primary btn-user btn-block"
                      @click="deleteProduct"
                    >
                      Delete Product
                    </b-button>
                  </div>
                  <div class="col-sm-4 mb-3 mb-sm-0">
                    <b-button
                      class="btn btn-primary btn-user btn-block"
                      @click="updateChanges"
                    >
                      Update changes
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
  name: "EditProductItem",
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
      loading: false,
      success: false,
      subtitle: "",
      error: false,
      file: null,
    
      routeID: null,
      currentGame: null,
      category: "PC",
      options: [
       
        { value: null, text: "Empty" },
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
    this.currentGame = await this.$store.state.games.filter((item) => {
      return game.gameId === this.routeID;
    });
    this.$store.commit("setGameState", this.currentGame[0]);
  }, 
/* 
   async mounted(){
    this.currentGame = await this.$store.state.games.filter(game => {
      return game.gameID === this.$route.params.gameid;
    })
  }, */
  methods: {
    deleteProduct() {
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
            this.$store.dispatch("deleteProduct", this.currentGame[0].gameId);
            this.$router.push({ path: "/admin" });
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },
    async updateChanges() {
      const dataBase = await firebase
        .firestore()
        .collection("menuItems")
        .doc(this.routeID);
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
              this.reset();
              this.loading = false;
              this.success = true;
            }
          );
          return;
        }
        this.loading = true;
        this.success = false;
        await dataBase.update({
          title: this.title,
          descriptionHTML: this.descriptionHTML,
          price: this.price,
          category: this.category,
          count: this.count,
          subtitle: this.subtitle,
          productPhotoName: this.productPhotoName,
          profileId: this.profileId,
        });
        await this.$store.dispatch("updateChanges", this.routeID);
        this.loading = false;
        this.error = false;
        this.success = true;
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
.category {
  border-radius: 10rem;
}

.button-disabled {
}
</style>
