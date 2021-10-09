<template>
  <div>
    <b-navbar toggleable="lg" type="dark" variant="info">
      <b-navbar-brand to="/">Game-shop</b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <b-nav-item href="/cart">Cart <span class="counter ">{{ items}}</span></b-nav-item>
          <b-nav-item v-if="!user" to="/Login">SignIn/Register</b-nav-item>
          <b-nav-item-dropdown right v-if="user">
            <!-- Using 'button-content' slot -->
            <template #button-content >
              <em>Account</em>
            </template>
            <b-dropdown-item to="/about">Profile <span>{{ this.$store.state.profileInitials}}</span> </b-dropdown-item>
            <b-dropdown-item to="/products">All products</b-dropdown-item>
            <b-dropdown-item v-if="user" @click="logOut" >LogOut</b-dropdown-item>
          </b-nav-item-dropdown>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
import "firebase/compat/auth";
import firebase from "firebase/compat";
import "firebase/firestore";

export default {
  name: "Navbar",
  props: {},
   computed: {
     items() {
      return this.$store.getters.tottal
    },
    user(){
      return this.$store.state.user
    }
    
  },
  methods: {
    logOut() {
      firebase.auth().signOut();
      window.location.reload() 
      this.$router.push({ path: "/" });
    },
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.counter{
  color:red;
  border: 3px solid black;
  border-radius: 20px;
}
</style>
