<template>
  <b-sidebar id="sidebar-1" shadow>
    <div class="px-3 py-2">
      <a class=" d-flex align-items-center justify-content-center">
        <div >
          <font-awesome-icon icon="user-shield" style="font-size:2rem color:black;" />
        </div>
        <div class="sidebar-brand-text mx-3"><h1>Game Shop</h1></div>
      </a>
      <hr class="sidebar-divider my-0" />
      <div class="header-picture text-center mt-4">
        <b-avatar
          src="https://avatars.dicebear.com/api/pixel-art/:seed.svg"
          size="6rem"
        ></b-avatar>
        <div class="d-block mb-3">
          <div class="role-status mt-3">
            {{ profileFirstName }} {{ profileFirstName }}
          </div>
          <div >
            {{ profileEmail }}
          </div>
        </div>
      </div>
    </div>
    <div class="container">
      <div class="row text-center flex-column">
        <div class="col" v-for="(navLink, index) in navItems" :key="index">
          <div>
            <router-link :to="navLink.link" >
              {{ navLink.title }}
            </router-link>
          </div>
          <hr class="sidebar-divider" />
        </div>
      </div>
    </div>
  </b-sidebar>
</template>

<script>
import { mapState } from "vuex";

import { routes } from "@/helpers/constans.js";

export default {
  data() {
    return {
      navItems: [
        { title: "DashBoard", link: routes.admin },
        { title: "Add Product", link: routes.productCustom },
        { title: "Orders", link: routes.orders },
        { title: "HomePage", link: routes.home },
      ],
    };
  },

  computed: {
    ...mapState(["profileEmail", "profileFirstName", "profilLastName"]),
  },
};
</script>

<style lang="scss" scoped>
</style>