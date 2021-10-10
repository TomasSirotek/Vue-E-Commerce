<template>
  <div class="container">
    <div class="card o-hidden border-0 shadow-lg my-5">
      <div class="card-body p-0">
        <!-- Nested Row within Card Body -->
        <div class="row">
          <div class="col-lg-5 d-none d-lg-block bg-register-image"></div>
          <div class="col-lg-7">
            <div class="p-5">
              <div class="text-center">
                <h1 class="h4 text-gray-900 mb-4">Create an Account!</h1>
              </div>
              <form class="user">
                <div class="form-group row">
                  <div class="col-sm-6 mb-3 mb-sm-0">
                    <input
                      type="text"
                      class="form-control form-control-user"
                      id="exampleFirstName"
                      placeholder="First Name"
                      v-model="firstName"
                    />
                  </div>
                  <div class="col-sm-6">
                    <input
                      type="text"
                      class="form-control form-control-user"
                      id="exampleLastName"
                      placeholder="Last Name"
                      v-model="lastName"
                    />
                  </div>
                </div>
                <div class="form-group">
                  <input
                    type="email"
                    class="form-control form-control-user"
                    id="exampleInputEmail"
                    placeholder="Email Address"
                    v-model="email"
                  />
                </div>
                <div class="form-group row">
                  <div class="col-sm-6 mb-3 mb-sm-0">
                    <input
                      type="password"
                      class="form-control form-control-user"
                      id="exampleInputPassword"
                      placeholder="Password"
                      v-model="password"
                    />
                  </div>
                  <div class="col-sm-6">
                    <input
                      type="text"
                      class="form-control form-control-user"
                      id="exampleRepeatPassword"
                      placeholder="User Name"
                      v-model="userName"
                    />
                  </div>
                </div>
                <span class="error" v-show="error">{{ this.errorMsg }}</span>
                <b-button
                  class="btn btn-primary btn-user btn-block"
                  type="submit"
                  @click.prevent="register"
                  >Register Account</b-button
                >

                <hr />
                <a href="index.html" class="btn btn-google btn-user btn-block">
                  <i class="fab fa-google fa-fw"></i> Register with Google
                </a>
                <a
                  href="index.html"
                  class="btn btn-facebook btn-user btn-block"
                >
                  <i class="fab fa-facebook-f fa-fw"></i> Register with Facebook
                </a>
              </form>
              <hr />
              <div class="text-center">
                <router-link :to="`/passwordreset`">
                  <a class="small" href="forgot-password.html"
                    >Forgot Password?</a
                  >
                </router-link>
              </div>
              <div class="text-center">
                <router-link :to="`/login`">
                  <a class="small"
                    >Already have an account? Login!</a
                  ></router-link
                >
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import "firebase/compat/auth";
import firebase from "firebase/compat";
import "firebase/firestore";
import { db } from "../../firebase.js";

export default {
  name: "Register",
  data() {
    return {
      email: "",
      password: "",
      firstName: "",
      lastName: "",
      userName: "",
      error: null,
      errorMsg: "",
    };
  },
  methods: {
    register() {
      if (
        this.email !== "" &&
        this.password !== "" &&
        this.firstName !== "" &&
        this.lastName !== "" &&
        this.userName !== ""
      ) {
        this.error = false;
        this.errorMsg = "";

        console.log("working");
        firebase
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
              email: this.email,
            });
            console.log("working");
            this.$router.push({ path: "/" });
          });

        return;
      }
      this.error = true;
      this.errorMsg = "Fill all the fields dude !";
      return;
    },
  },
};
</script>

<style lang="scss" scoped></style>
