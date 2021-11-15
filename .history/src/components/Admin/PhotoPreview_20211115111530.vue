<template>
  <b-modal id="modalPopover" title="Modal with Popover" ok-only>
    <img :src="this.productPictureName" alt="" />
  </b-modal>
</template>

<script>
import { mapState } from "vuex";
export default {
  computed: {
      ...mapState(["productPictureName"])
    /* productPictureName() {
      return this.$store.state.productPictureName;
    }, */
  },
};
</script>

<style lang="scss" scoped>
</style>