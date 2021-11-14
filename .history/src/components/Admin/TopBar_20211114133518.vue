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
      <div class="d-block mr-4 ">
         <!-- <b-button v-b-toggle.sidebar-1>
             <font-awesome-icon icon="cog" class="user" />Admin Panel Panel</b-button>
 -->
              <b-button v-b-toggle.sidebar-1 variant="info" 
                    >Admin Panel</b-button
                  >
      </div>
      <button class="icons-right-nav" @click="logOut">
                  <font-awesome-icon icon="sign-out-alt" class="user" />
                </button>

    
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
    },
  }
};
</script>

<style lang="scss" scoped></style>
