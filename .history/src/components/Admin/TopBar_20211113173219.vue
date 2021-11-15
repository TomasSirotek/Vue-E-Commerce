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
         <b-button v-b-toggle.sidebar-1>Panelk</b-button>
      </div>
      <button class="icons-right-nav" @click="logOut">
                  <font-awesome-icon icon="sign-out-alt" class="user" />
                </button>

    
    </ul>
  </nav>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped></style>
