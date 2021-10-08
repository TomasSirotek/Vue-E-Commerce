<template>
  <div class="container text-center py-5">
    Register
    <form>
      <div class="error" v-show="error">{{ this.errorMsg }}</div>

      <div class="input">
        <input type="text" placeholder="firstName" v-model="firstName" />
      </div>

      <div class="input">
        <input type="text" placeholder="lastName" v-model="lastName" />
      </div>

      <div class="input">
        <input type="text" placeholder="UserName" v-model="userName" />
      </div>

      <div class="input">
        <input type="text" placeholder="email" v-model="email" />
      </div>

      <div class="input">
        <input
          type="password"
          placeholder="password"
          autocomplete="cc-number"
          v-model="password"
        />
      </div>

      <b-button
        variant="outline-primary"
        type="submit"
        @click.prevent="register"
        >Register</b-button
      >
    </form>

    <span
      >Your are with us ?
      <router-link :to="`/login`">Login</router-link>
    </span>
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
            });
            console.log(user);
            console.log("working");

            // ...
          })
          .catch((error) => {
            /*  var errorCode = error.code;
    var errorMessage = error.message; */
            console.log(error);
            // ..
          });

        return;
      }
      this.error = true;
      this.errroMsg = "Fill all the fields !";
      return;
    },
  },
};
</script>

<style lang="scss" scoped>
input {
  width: 400px;
  padding: 30px;
  margin: 20px;
  font-size: 21px;
}
button {
  width: 400px;
  height: 75px;
  font-size: 100%;
}
</style>
