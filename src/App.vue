<template>
  <div id="app">
    <Nav-bar v-if="!noNav"></Nav-bar>
    <router-view />
  </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";
export default {
  components: {
    "Nav-bar": Navbar,
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
    this.checkRoute();
  },

  methods: {  // checker for routers navigation
    checkRoute() {
      if (
        this.$route.name === "Login" ||
        this.$route.name === "Register" ||
        this.$route.name === "PasswordReset"
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
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
