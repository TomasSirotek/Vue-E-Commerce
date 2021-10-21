<template>
  <ul class="navbar-nav sidebar sidebar-dark">
    <a class="sidebar-brand d-flex align-items-center justify-content-center">
      <div class="sidebar-brand-icon ">
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
      <a class="nav-link" href="/admin/productCustom">
        <i> <font-awesome-icon icon="cart-plus" /></i>
        <span>Add Product</span>
      </a>
    </li>

    <li class="nav-item">
      <a class="nav-link" href="/admin/orders">
       
        <i> <font-awesome-icon icon="folder-open" /></i>

        <span>Orders</span>
      </a>
    </li>

    <hr class="sidebar-divider" />

    <div class="sidebar-heading">Options</div>

    <li class="nav-item">
    
     <a class="nav-link" @click="logOut" >
        <i> <font-awesome-icon icon="sign-out-alt" /></i>
        <span>Log out</span>
      </a>
    </li>
  </ul>
</template>

<script>
import firebase from "firebase/compat";
import { routes } from "@/helpers/constans.js";
export default {
  data(){
    return{ 
      adminRoute: routes.admin
    }
  },
  methods:{
    logOut() {
      firebase.auth().signOut();
      this.$router.push({ path: "/" });
    },
  }
};
</script>

<style lang="scss" scoped>
a {
  cursor: pointer;
}
</style>