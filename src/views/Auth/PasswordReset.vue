<template>
  <div class="container">
    <!-- Outer Row -->
    <div class="row justify-content-center">
      <div class="col-xl-10 col-lg-12 col-md-9">
        <div class="card o-hidden border-0 shadow-lg my-5">
          <div class="card-body p-0">
            <!-- Nested Row within Card Body -->
            <div class="row">
              <div class="col-lg-6 d-none d-lg-block bg-password-image"></div>
              <div class="col-lg-6">
                <div class="p-5">
                  <div class="text-center">
                    <h1 class="h4 text-gray-900 mb-2">Forgot Your Password?</h1>
                    <p class="mb-4">
                      We get it, stuff happens. Just enter your email address
                      below and we'll send you a link to reset your password!
                    </p>
                    <Loading v-if="loading" />
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
                    <b-button
                      class="btn btn-primary btn-user btn-block"
                      type="submit"
                      @click.prevent="resetPsw"
                      >Reset Password</b-button
                    >
                  </form>
                  <hr />
                  <div class="text-center">
                    <router-link :to="`/register`">
                      <a class="small">Create an Account!</a></router-link
                    >
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
    </div>
    <b-modal v-model="modalActive">
      <h2>{{ modalMessage }}</h2>
    </b-modal>
  </div>
</template>

<script>
/* import InfoModal from "@/components/InfoModal.vue"  */
import Loading from "@/components/Loading.vue";
import "firebase/compat/auth";
import firebase from "firebase/compat";
import "firebase/firestore";
export default {
  name: "PasswordReset",
  components: {
    /* InfoModal, */
    Loading,
  },
  data() {
    return {
      email: null,
      modalActive: false,
      loading: false,
      modalMessage: "",
    };
  },
  methods: {
    resetPsw() {
      this.loading = true;
      firebase
        .auth()
        .sendPasswordResetEmail(this.email)
        .then(() => {
          (this.boxOne = ""),
            (this.modalMessage = "If you are with us check your email !");
          this.loading = false;
          this.modalActive = true;
        })
        .catch((err) => {
          this.modalMessage = err.message;
          this.loading = false;
          this.modalActive = true;
          console.log(err);
        });
    },
  },
};
</script>

<style lang="scss"></style>
