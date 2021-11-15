<template>
     <b-modal ref="my-modal" hide-footer title="Using Component Methods">
      <div class="d-block text-center">
        <h3>Hello From My Modal!</h3>
      </div>
      <b-button class="mt-3" variant="outline-danger" block @click="hideModal">Close Me</b-button>
      <b-button class="mt-2" variant="outline-warning" block @click="toggleModal">Toggle Me</b-button>
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
