<template>
  <div>
    <b-modal id="my-modal" centered no-stacking title="WELCOME">
      <div class="user-modal">
        <div class="container">
          <div class="row">
            <div class="error-div text-center">
              <span class="error" v-show="error">{{ this.errorMsg }}</span>
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

                <div class="form-group" :class="{ 'form-group--error': $v.password.$error }">
                  <label for="exampleInputEmail1">Password</label>
                  <input
                    type="password"
                    class="form-control"
                    v-model.trim="$v.password.$model"
                    aria-describedby="emailHelp"
                    placeholder="Password"
                  />
                  <div class="error" v-if="!$v.password.required">
                    Password is required.
                  </div>
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
import { required, minLength, } from "vuelidate/lib/validators";
export default {
  name: "Login-modal",
  components: {
    RegisterModal,
    ResetPassword,
  },
  validations: {
  
    password: {
      required,
      minLength: minLength(8),
    },
    
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
    },
  },
};
</script>

<style lang="scss" scoped>
</style>