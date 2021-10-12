<template>
  <div>
    <b-modal id="my-modal" centered hide-footer>
      <img :src="this.previewPhoto" alt="" width="300"/>
    </b-modal>
  </div>
</template>

<script>
export default {
  name: "PreviewWindow",
  computed: {
    previewPhoto() {
      return this.$store.state.productPhotoFileUrl;
    },
  },
};
</script>

<style lang="scss" scoped>
</style>
