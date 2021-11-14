<template>
  <div>
    <b-modal
      id="modal-multi-2"
      title="REGISTER WITH US!"
      ok-only
      centered
      hide-footer
    >
      <div class="user-modal">
        <div class="container">
          <div class="row justify-content-center">
            <div class="error-div text-center">
              <span class="error" v-show="error">{{ this.errorMsg }}</span>
            </div>
            <div class="col-12 py-4">
              <form class="user">
                <div class="form-group">
                  <label for="exampleInputEmail1">User Name</label>
                  <input
                    type="text"
                    class="form-control"
                    v-model="userName"
                    aria-describedby="emailHelp"
                    placeholder="Cool User Name"
                  />
                </div>
                <div
                  class="form-group"
                  :class="{ 'form-group--error': $v.firstName.$error }"
                >
                  <label for="exampleInputEmail1">First Name</label>

                  <input
                    type="text"
                    class="form-control"
                    v-model.trim="firstName"
                   
                    aria-describedby="emailHelp"
                    placeholder="First Name"
                  />
                  <div class="error" v-if="!$v.firstName.required">
                    Field is required
                  </div>
                  <div class="error" v-if="!$v.firstName.minLength">
                    First Name must have at least
                    {{ $v.firstName.$params.minLength.min }} letters.
                  </div>
                </div>
                <div
                  class="form-group"
                  :class="{ 'form-group--error': $v.lastName.$error }"
                >
                  <label for="exampleInputEmail1">Last Name</label>

                  <input
                    type="text"
                    class="form-control"
                    v-model.trim="lastName"
        
                    aria-describedby="emailHelp"
                    placeholder="Last Name"
                  />
                  <div class="error" v-if="!$v.lastName.required">
                    Field is required
                  </div>
                  <div class="error" v-if="!$v.lastName.minLength">
                   Last Name must have at least
                    {{ $v.lastName.$params.minLength.min }} letters.
                  </div>
                </div>



                <div class="form-group">
                  <label for="exampleInputEmail1">Email</label>
                  <input
                    type="email"
                    class="form-control"
                    v-model="email"
                    aria-describedby="emailHelp"
                    placeholder="Email"
                  />
                </div>
                <div class="form-group mb-3" :class="{ 'form-group--error': $v.password.$error }">
                  <label for="exampleInputEmail1">Password</label>
                  <input
                    :type="type"
                    class="form-control"
                    placeholder="********"
                   v-model.trim="$v.password.$model"
                    aria-describedby="emailHelp"
                  />
                  <div class="error" v-if="!$v.password.required">Password is required.</div>
                  <div class="error" v-if="!$v.password.minLength">Password must have at least {{ $v.password.$params.minLength.min }} letters.</div>
                </div>
                <div class="form-group mb-3"  :class="{ 'form-group--error': $v.repeatPassword.$error }">
                  <label for="exampleInputEmail1">Repeat Password</label>
                  <input
                    :type="type"
                    class="form-control"
                    placeholder="********"
                    v-model.trim="$v.repeatPassword.$model"
                    aria-describedby="emailHelp"
                  />
                   <div class="error" v-if="!$v.repeatPassword.sameAsPassword">Passwords must be identical.</div>
  <tree-view :data="$v" :options="{rootObjectKey: '$v', maxDepth: 2}"></tree-view>
                </div>

                <div class="login-grup login-btn text-center">
                  <b-button
                    type="submit"
                    @click.prevent="showPsw"
                    id="button"
                    >{{ btnText }}</b-button
                  >
                  <b-button
                    type="submit"
                    class="ml-3"
                    @click.prevent="register"
                    id="button"
                    >Register</b-button
                  >
                  <div class="spinner">
                    <SpinnerLoad v-show="loading" />
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      <div>
      </div>



    </b-modal>
    <b-toast id="registerConfirm" variant="success" solid>
      <template #toast-title>
        <div class="d-flex flex-grow-1 align-items-baseline">
          <b-img
            blank
            blank-color="#ff5555"
            class="mr-2"
            width="12"
            height="12"
          ></b-img>
          <strong class="mr-auto">Success!</strong>
          <small class="text-muted mr-2">2 seconds ago</small>
        </div>
      </template>
      You Have Been Registered
    </b-toast>
  </div>
</template>

<script>
/* import "firebase/compat/auth";
import firebase from "firebase/compat";
import "firebase/firestore"; */
/* import { db } from "../../firebase.js"; */
import SpinnerLoad from "@/components/Admin/Alerts/SpinnerLoad.vue";
import { required, minLength, sameAs} from "vuelidate/lib/validators";

export default {
  name: "Register",
  components: {
    SpinnerLoad,
  },
  data() {
    return {
      email: "",
      password: "",
      firstName: "",
      lastName: "",
      userName: "",
      repeatPassword: "",
      error: null,
      errorMsg: "",
      loading: false,
      type: "password",
      btnText: "ShowPassword",
      submitStatus: null
    };
  },
  validations: {
    firstName: {
      required,
      minLength: minLength(4),
    },
    lastName: {
      required,
      minLength: minLength(4),
    },
    password: {
      required,
      minLength: minLength(8)
    },
    repeatPassword: {
      sameAsPassword: sameAs('password')
    }
  },
  methods: {
   
    showPsw() {
      if (this.type === "password") {
        this.type = "text";
        this.btnText = "Hide Password";
      } else {
        this.type = "password";
        this.btnText = "Show Password";
      }
    },
    register() {
      if (
        /* this.email !== "" &&
        this.password !== "" &&
        this.firstName !== "" &&
        this.lastName !== "" &&
        this.userName !== "" */
      this.$v.$invalid) {
        console.log("invalid")
        this.error = false;
        this.errorMsg = "";
        this.loading = true;

        /* firebase
          .auth()
          .createUserWithEmailAndPassword(this.email, this.password)
          .then((userCredential) => {
            // Signed in
            var user = userCredential.user;
            const users = db.collection("users").doc(user.uid);
            users.set({
              firstName: this.firstName,
              lastName: this.lastName,
              userName: this.userName,
              userPassword: this.password,
              email: this.email,
              isAdmin: false,
            }); */
  
            this.$bvToast.show("registerConfirm");

            setTimeout(() => {
              window.location.reload();
            }, 1000);
         /*  }); */

        return;
      }
      this.error = true;
      this.errorMsg = "Fill all the fields please !";
      return;
    },
  },
};
</script>

<style lang="scss" scoped>
</style>