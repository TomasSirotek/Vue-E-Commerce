<template>
  <div class="navigation-option">
    <div class="nav-mid">
      <nav class="navbar navbar-expand-lg navbar-dark py-4">
        <div class="container">
          <router-link :to="homeRoute" class="navbar-brand">
            <img
              src="@/assets/images/game-logo.png"
              alt="cover-photo"
              width="150"
          /></router-link>

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
              <form class="form-inline my-2 my-lg-0 main-form">
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
             

                <button class="icons-right-nav" v-if="!user" v-b-modal.my-modal>
                  <font-awesome-icon icon="user" class="user" />
                </button>
              </div>

              <div class="d-flex">
                <router-link :to="profileRoute" v-if="user">
                  <button class="icons-right-nav account-user">
                    <span>{{ this.$store.state.profileInitials }} </span>
                  </button>
                </router-link>
              </div>
              <div class="d-flex" v-if="user">
                <button class="icons-right-nav" @click="logOut">
                  <font-awesome-icon icon="sign-out-alt" class="user" />
                </button>
              </div>
            </ul>
            <ul class="navbar-nav">
              <router-link :to="cartRoute">
                <button class="icons-right-nav">
                  <font-awesome-icon icon="shopping-cart" class="cart" />
                  <span v-if="!items"> Empty cart </span>
                  <span v-else class="colored-if">
                    {{ items.toFixed(2) }} $</span
                  >
                </button>
              </router-link>
            </ul>
          </div>
        </div>
      </nav>
      <div class="bottom">
        <div class="container text-center">
          <div class="row justify-content-center p-2 categories">
            <div class="col" v-for="(navLink, index) in navItems" :key="index">
              <router-link :to="navLink.link">
                {{ navLink.title }}
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
    <LoginModal />
  </div>
</template>

<script>
import "firebase/compat/auth";
import firebase from "firebase/compat";
import "firebase/firestore";
import LoginModal from "@/components/Auth/LoginModal.vue";
import { routes } from "@/helpers/constans.js";

export default {
  name: "Navbar",
  data() {
    return {
      login_modal: false,
      homeRoute: routes.home,
      profileRoute: routes.profile,
      cartRoute: routes.cart,
      navItems: [
        { title: "G", link: routes.products },
        { title: "XBOX", link: routes.products },
        { title: "PS4", link: routes.products },
        { title: "PS5", link: routes.products },
      ],
    };
  },
  props: {},
  components: {
    LoginModal,
  },
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
      this.$router.push({ path: "/" });
    },
  },
};
</script>


<style  lang="scss">
</style>
