<template>
  <!--  <div>
    <b-navbar toggleable="lg" type="dark" variant="info" class="px-4 px-lg-5">
      <b-navbar-brand to="/">Game-shop</b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav class="ml-auto">
          <b-nav-item href="/cart"
            >Cart <span class="counter">{{ items }}</span></b-nav-item
          >
          <b-nav-item v-if="!user" to="/Login">SignIn/Register</b-nav-item>
          <b-nav-item-dropdown right v-if="user">
            <template #button-content>
              <em>Account</em>
            </template>
            <b-dropdown-item to="/about"
              >Profile <span>{{ this.$store.state.profileInitials }}</span>
            </b-dropdown-item>
            <b-dropdown-item to="/products">All products</b-dropdown-item>

            <b-dropdown-item to="/admin">Admin</b-dropdown-item>
            <b-dropdown-item v-if="user" @click="logOut"
              >LogOut</b-dropdown-item
            >
          </b-nav-item-dropdown>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div> 
 -->
  <div class="nav-mid">
    <nav class="navbar navbar-expand-lg navbar-dark py-4">
      <div class="container">
        <a class="navbar-brand" href="/">
          <img
            src="@/assets/images/game-logo.png"
            alt="cover-photo"
            width="150"
          />
        </a>
        <!-- Search form -->

        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarResponsive"
          aria-controls="navbarResponsive"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarResponsive">
          <ul class="navbar-nav ml-auto">
            <form class="form-inline my-2 my-lg-0">
              <input
                class="form-control mr-sm-2"
                type="search"
                placeholder="Search for your game"
                aria-label="Search"
              />
              <button class="btn my-2 my-sm-0" type="submit">Search</button>
            </form>
          </ul>
          <ul class="navbar-nav ml-auto">
            <div class="d-flex">
              <button class="icons-right-nav">
                <font-awesome-icon icon="user" class="user" />
              </button>
            </div>
          </ul>
          <ul class="navbar-nav">
            <a href="/cart">
              <button class="icons-right-nav">
                <font-awesome-icon icon="shopping-cart" class="cart " />
                <span v-if="!items"> Empty cart </span>
                <span v-else class="colored-if"> {{ items.toFixed(2) }} $</span>
              </button>
            </a>
          </ul>
        </div>
      </div>
    </nav>
    <div class="bottom">
      <div class="container text-center">
        <div class="row justify-content-center p-2 categories">
          <div class="col">
            <router-link to="/products">PC</router-link>
          </div>
          <div class="col">
            <router-link to="/products">XBOX</router-link>
          </div>
          <div class="col">
            <router-link to="/products">PS4</router-link>
          </div>
          <div class="col">
            <router-link to="/products">PS5</router-link>
          </div>
          <div class="col">
            <router-link to="/products">FAR CRY 6</router-link>
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
  name: "Navbar",
  props: {},
  computed: {
    items() {
      return this.$store.getters.cartTotal;
    },
    user() {
      return this.$store.state.user;
    },
  },
  methods: {
    logOut() {
      firebase.auth().signOut();

      this.$router.push({ path: "/login" });
      window.location.reload() 
      this.$router.push({ path: "/" });

    },
  },
};
</script>


<style  lang="scss">
</style>
