<template>
 <b-modal id="modal-1">
    <div class="d-block">
      <h1>IT IS IN THE BASKET</h1>
    </div>
  <div class="modal-picture">
 <img
              :src="details.imageCover"
              alt="product-img"
              width="300"
            />

      

  </div>

  </b-modal>
</template>

<script>
export default {
  name: "InfoModal",
  props:["details"],
  methods: {
   
  },
};
</script>

<style lang="scss" scoped>

</style>
