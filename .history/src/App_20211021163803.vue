<template>
  <div id="app" v-if="this.$store.state.productsLoaded">
    <TopMenu v-if="!noNav" />
    <Nav-bar v-if="!noNav"></Nav-bar>
    <router-view />
  </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";
import TopMenu from "@/components/TopMenu.vue";

import firebase from "firebase/compat";
import "firebase/compat/auth";
import "firebase/firestore";
export default {
  components: {
    "Nav-bar": Navbar,
    TopMenu
  },
  data() {
    return {
      noNav: null,
    };
  },
  mounted() {
    this.$store.commit("updateCartFromLocalStorage");
  },

  created() {
    firebase.auth().onAuthStateChanged((user) => {
      this.$store.commit("updateUser", user);
      if (user) {
        this.$store.dispatch("getCurrentUser");
      }
    });
    this.checkRoute();
  },

  methods: {
    // checker for routers navigation
    checkRoute() {
      if (
        this.$route.name === "EditProduct" ||
        this.$route.name === "orders" ||
        this.$route.name === "Admin" ||
        this.$route.name === "AddAdmin" ||
        this.$route.name === "ProductCustom" 

      ) {
        this.noNav = true;
        return;
      }
      this.noNav = false;
    },
  },
  watch: {
    // Watcher for routes
    $route() {
      this.checkRoute();
    },
  },
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  margin: 0;
  padding: 0;
  background:#ececec;
}
</style>
