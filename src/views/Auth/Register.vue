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

      <b-button variant="outline-primary" type="submit">Register</b-button>
    </form>

    <span
      >Your are with us ?
      <router-link :to="`/login`">Login</router-link>
    </span>
  </div>
</template>

<script>
export default {
  name: "Register",
  data() {
    return {
      email: null,
      password: null,
      firstName: null,
      lastName: null,
      userName: null,
      error: null,
      errroMsg: "",
    };
  },
  methods: {
    register() {
      if (
        this.email !== "" ||
        this.password !== "" ||
        this.firstName !== "" ||
        this.lastName !== "" ||
        this.userName !== ""
      ) {
          this.error= false;
          this.errroMsg= "";
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
