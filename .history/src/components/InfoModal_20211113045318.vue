<template>
 <b-modal id="modal-1">
    <div class="d-block">It is in the basket</div>
  <div class="div">
      <h1>{{ this.currentGame[0].title }}</h1>

  </div>

  </b-modal>
</template>

<script>
export default {
  name: "InfoModal",
  props:[]
  methods: {
   
  },
};
</script>

<style lang="scss" scoped>

</style>
