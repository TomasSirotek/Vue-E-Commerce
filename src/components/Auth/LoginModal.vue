<template>
  <div>
    <b-modal id="my-modal" centered no-stacking title="WELCOME">
      <div class="user-modal">
        <div class="container">
          <div class="row justify-content-center">
            <div class="error-div text-center">
              <span class="error " v-show="error">{{ this.errorMsg }}</span>
            </div>
            <div class="col-12 py-4">
              <form class="user">
                <div class="form-group">
                  <label for="exampleInputEmail1">Email</label>
                  <input
                    type="email"
                    class="form-control"
                    v-model="email"
                    aria-describedby="emailHelp"
                    placeholder="Enter email"
                  />
                </div>

                <div class="form-group">
                  <label for="exampleInputEmail1">Password</label>
                  <input
                    type="password"
                    class="form-control"
                    autocomplete="on"
                    v-model="password"
                    aria-describedby="emailHelp"
                    placeholder="Password"
                  />
                </div>

                <div class="login-grup login-btn text-center">
                  <b-button type="submit" id="button" @click.prevent="logIn"
                    >Login</b-button
                  >
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <template #modal-footer>
        <div class="w-100">
          <div class="text-center">
            <a class="small" v-b-modal.modal-multi-3>Forgot Password? </a>
          </div>
          <div class="text-center">
            <a class="small" v-b-modal.modal-multi-2>Create an Account!</a>
          </div>
        </div>
      </template>
    </b-modal>
    <RegisterModal />
    <ResetPassword />
  </div>
</template>

<script>
import "firebase/compat/auth";
import firebase from "firebase/compat";
import RegisterModal from "@/components/Auth/RegisterModal.vue";
import ResetPassword from "@/components/Auth/ResetPassword.vue";
export default {
  name: "Login-modal",
  components: {
    RegisterModal,
    ResetPassword,
  },
  data() {
    return {
      email: "",
      password: "",
      errorMsg: "",
      error: null,
    };
  },
  methods: {
    logIn() {
      if (this.email !== "" && this.password !== "") {
        this.error = false;

        this.errorMsg = "";
        firebase
          .auth()
          .signInWithEmailAndPassword(this.email, this.password)
          .then(() => {
            this.error = false;
            window.location.reload();
          })
          .catch((err) => {
            this.error = true;
            this.errorMsg = err.message;
          });
      }
      
      this.error = true;
      this.errorMsg = "Fill all fields please to log in";
      setTimeout(() => {
          this.error = false;
        }, 3000);
    },
  },
};
</script>

<style lang="scss" scoped>
</style>