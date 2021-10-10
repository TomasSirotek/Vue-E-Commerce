<template>
  <div class="container">
    <!-- Outer Row -->
    <div class="row justify-content-center">
      <div class="col-xl-10 col-lg-12 col-md-9">
        <div class="card o-hidden border-0 shadow-lg my-5">
          <div class="card-body p-0">
            <!-- Nested Row within Card Body -->
            <div class="row">
              <div class="col-lg-6 d-none d-lg-block bg-login-image"></div>
              <div class="col-lg-6">
                <div class="p-5">
                  <div class="text-center">
                    <h1 class="h4 text-gray-900 mb-3">Welcome Back!</h1>
                    <span class="error" v-show="error">{{
                      this.errorMsg
                    }}</span>
                  </div>
                  <form class="user">
                    <div class="form-group">
                      <input
                        type="email"
                        class="form-control form-control-user"
                        id="exampleInputEmail"
                        aria-describedby="emailHelp"
                        placeholder="Enter Email Address..."
                        v-model="email"
                      />
                    </div>
                    <div class="form-group">
                      <input
                        type="password"
                        class="form-control form-control-user"
                        id="exampleInputPassword"
                        placeholder="Password"
                        v-model="password"
                      />
                    </div>
                    <div class="form-group">
                      <div class="custom-control custom-checkbox small">
                        <input
                          type="checkbox"
                          class="custom-control-input"
                          id="customCheck"
                        />
                        <label class="custom-control-label" for="customCheck"
                          >Remember Me</label
                        >
                      </div>
                    </div>
                    <b-button
                      class="btn btn-primary btn-user btn-block"
                      type="submit"
                      @click.prevent="logIn"
                      >Login</b-button
                    >
                    <hr />
                    <a href="#" class="btn btn-google btn-user btn-block">
                      <i class="fab fa-google fa-fw"></i> Login with Google
                    </a>
                    <a href="#" class="btn btn-facebook btn-user btn-block">
                      <i class="fab fa-facebook-f fa-fw"></i> Login with
                      Facebook
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
                    <router-link :to="`/register`">
                      <a class="small">Create an Account!</a></router-link
                    >
                  </div>
                  <div class="text-center">
                    <router-link :to="`/`">
                      <a class="small">Go Buy Something Coool</a></router-link
                    >
                  </div>
                </div>
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
export default {
  name: "Login",
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
            this.$router.push({ path: "/" });
            console.log(firebase.auth().currentUser.uid);
          })
          .catch((err) => {
            this.error = true;
            console.log(err);
            this.errorMsg = "Invalid Email or Password";
          });
      }
    },
  },
};
</script>

<style lang="scss" scoped></style>
