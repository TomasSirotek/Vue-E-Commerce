<template>
  <!--   <ul class="navbar-nav sidebar sidebar-dark">
    <a class="sidebar-brand d-flex align-items-center justify-content-center">
      <div class="sidebar-brand-icon">
        <i> <font-awesome-icon icon="user-shield" /></i>
      </div>
      <div class="sidebar-brand-text mx-3">Game Shop</div>
    </a>

    <hr class="sidebar-divider my-0" />

    <li class="nav-item active">
      <router-link :to="adminRoute" class="nav-link">
        <span>Dashboard</span>
      </router-link>
    </li>

    <hr class="sidebar-divider" />

    <div class="sidebar-heading">Tool bar</div>

    <li class="nav-item">
      <router-link :to="addProduct" class="nav-link">
        <i> <font-awesome-icon icon="cart-plus" /></i>
        <span>Add product</span>
      </router-link>
    </li>

    <li class="nav-item">
      <router-link :to="orders" class="nav-link">
        <i> <font-awesome-icon icon="folder-open" /></i>

        <span>Orders</span>
      </router-link>
    </li>

    <hr class="sidebar-divider" />

    <div class="sidebar-heading">Options</div>

    <li class="nav-item">
      <a class="nav-link" @click="logOut">
        <i> <font-awesome-icon icon="sign-out-alt" /></i>
        <span>Log out</span>
      </a>
    </li>
  </ul> -->
  <b-sidebar id="sidebar-1" shadow>
    <div class="px-3 py-2">
      <a class="sidebar-brand d-flex align-items-center justify-content-center">
        <div class="sidebar-brand-icon">
          <i> <font-awesome-icon icon="user-shield" /></i>
        </div>
        <div class="sidebar-brand-text mx-3"><h1>Game Shop</h1></div>
      </a>
      <hr class="sidebar-divider my-0" />
      <div class="header-picture text-center mt-4">
        <b-avatar
          src="https://avatars.dicebear.com/api/pixel-art/:seed.svg"
          size="6rem"
        ></b-avatar>
        <div class="role-status mt-5"></div>
      </div>
    </div>
    <div class="container">
      <div class="row text-center">
        <!-- <div class="col" v-for="(navLink, index) in navItems" :key="index" ></div>
         <router-link :to="navLink.link">
                {{ navLink.title }}
              </router-link> -->
        <!-- <div class="col" >
          <div class="text">
            <router-link :to="adminRoute" class="nav-link">
              <span>Dashboard</span>
            </router-link>
          </div>
          <div class="text">
            <router-link :to="addProduct" class="nav-link">
              <i> <font-awesome-icon icon="cart-plus" /></i>
              <span>Add product</span>
            </router-link>
          </div>
          <div class="text">
            <router-link :to="orders" class="nav-link">
              <i> <font-awesome-icon icon="folder-open" /></i>

              <span>Orders</span>
            </router-link>
          </div>
          <hr class="sidebar-divider" />
           <div class="text">
             <router-link :to="home" class="nav-link">
              <span>Home Page</span>
            </router-link>
           </div>
          <div class="text">
            <a class="nav-link" @click="logOut">
              <i> <font-awesome-icon icon="sign-out-alt" /></i>
              <span>Log out</span>
            </a>
          </div> -->
        <!-- </div> -->
    <!--   </div> -->
    </div>
  </b-sidebar>
</template>

<script>
import firebase from "firebase/compat";
import { routes } from "@/helpers/constans.js";

export default {
  data() {
    return {
    /*   adminRoute: routes.admin,
      addProduct: routes.productCustom,
      orders: routes.orders,
      home:routes.home, */

      navItems: [
        { title: "DashBoard", link: routes.admin },
        { title: "Add Product", link: routes.productCustom},
        { title: "Orders", link: routes.orders},
        { title: "HomePage", link: routes.home },
      ],
    };
  },
  methods: {
    logOut() {
      firebase.auth().signOut();
      this.$router.push({ path: "/" });
    },
  },
};
</script>

<style lang="scss" scoped>
a {
  cursor: pointer;
}
</style>