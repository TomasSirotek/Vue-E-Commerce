<template>
 <b-modal id="modal-1">
    <div class="d-block">Hello From My Modal!</div>
    <b-button @click="hideModal">Close Me</b-button>
    <b-button @click="toggleModal">Toggle Me</b-button>
  </b-modal>
</template>

<script>
export default {
  name: "InfoModal",
  methods: {
   
  },
};
</script>

<style lang="scss" scoped>

</style>
