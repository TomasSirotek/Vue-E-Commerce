<template>
  <nav
    class="
      navbar navbar-expand navbar-light
      bg-white
      topbar
      mb-4
      static-top
      shadow
    "
  >
    <ul class="navbar-nav ml-auto">
      <div class="d-block mr-4">
        <b-button v-b-toggle.sidebar-1 variant="info">Admin Panel</b-button>
        <b-button @click="logOut" variant="dark" class="ml-3">
          <font-awesome-icon icon="sign-out-alt" class="user"
        /></b-button>
      </div>
    </ul>
  </nav>
</template>

<script>
import firebase from "firebase/compat";
export default {
  methods: {
    logOut() {
      firebase.auth().signOut();
      this.$router.push({ path: "/" });
      this.$store.dispatch("emptyCart");

    },
  },
};
</script>

<style lang="scss" scoped></style>
