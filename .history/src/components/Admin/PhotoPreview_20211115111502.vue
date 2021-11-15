<template>
  <b-modal id="modalPopover" title="Modal with Popover" ok-only>
    <img :src="this.productPictureName" alt="" />
  </b-modal>
</template>

<script>
import { map}
export default {
  computed: {
    productPictureName() {
      return this.$store.state.productPictureName;
    },
  },
};
</script>

<style lang="scss" scoped>
</style>