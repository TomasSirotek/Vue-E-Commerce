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
      <div class="topbar-divider d-none d-sm-block">
         <b-button v-b-toggle.sidebar-1>Toggle Sidebar</b-button>
      </div>
      <button class="icons-right-nav" @click="logOut">
                  <font-awesome-icon icon="sign-out-alt" class="user" />
                </button>

      <li class="nav-item dropdown no-arrow">
        <a class="nav-link dropdown-toggle">
          <span class="mr-2 d-none d-lg-inline text-gray-600 small"
            >Tomas Admin</span
          >
          <img
            class="img-profile rounded-circle"
            src="@/assets/images/undraw_profile.svg"
          />
        </a>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped></style>
