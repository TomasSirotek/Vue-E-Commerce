<template>
  <div>
    <b-modal id="modal-multi-3" title="Rest Your Password" hide-footer centered >
        <div class="user-modal">
      <div class="container">
        <div class="row">
        
          <div class="col py-4">
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
              <div class="login-grup login-btn text-center">
                  <b-button
                    id="button"
                    type="submit"
                    @click.prevent="resetPsw"
                    >ResetPassword</b-button
                  >
                </div>
            </form>
          </div>
          </div>
        </div>
      </div>
    </b-modal>
       <b-modal v-model="modalActive" centered ok-only  hide-header>
      <h2>{{ modalMessage }}</h2>
    </b-modal>
  </div>
</template>

<script>
import "firebase/compat/auth";
import firebase from "firebase/compat";

export default {
  name: "PasswordReset",
  components: {},
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
          this.email = "";
        })
        .catch((err) => {
          this.modalMessage = err.message;
          this.loading = false;
          this.modalActive = true;
          console.log(err);
          this.email="";
          
        });
    },
  },
};
</script>

<style lang="scss" scoped>
</style>