<template>
 <b-modal id="modal-1">
    <div class="d-block">It is in the basket</div>
  <div class="div">
      <h1>{{ details.title }}</h1>

  </div>

  </b-modal>
</template>

<script>
export default {
  name: "InfoModal",
  props:[details"],
  methods: {
   
  },
};
</script>

<style lang="scss" scoped>

</style>
