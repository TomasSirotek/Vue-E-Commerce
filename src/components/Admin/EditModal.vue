<template>
  <b-modal id="bv-modal-example" hide-footer>
    <template #modal-title>
      Edit product  
    </template>
    <div class="d-block text-center">
      <form class="user">
        <div class="form-group">
          <input
            type="text"
            class="form-control form-control-user"
            id="exampleInputEmail"
            placeholder="title"
            v-model="productSection.title"
          />
        </div>
        <div class="form-group">
          <input
            type="text"
            class="form-control form-control-user"
            id="exampleInputEmail"
            placeholder="category"
            v-model="productSection.category"
          />
        </div>
        <div class="form-group">
          <input
            type="text"
            class="form-control form-control-user"
            id="exampleInputEmail"
            placeholder="onSale"
            v-model="productSection.onSale"
          />
        </div>
        <div class="form-group">
          <input
            type="text"
            class="form-control form-control-user"
            id="exampleInputEmail"
            placeholder="desription"
            v-model="productSection.desription"
          />
        </div>
        <div class="form-group">
          <input
            type="text"
            class="form-control form-control-user"
            id="exampleInputEmail"
            placeholder="In stock"
            v-model="productSection.inStock"
          />
        </div>
      </form>
     
    </div>
    <b-button class="mt-3" block  @click="updateChanges"
      >Safe options</b-button
    >
    <b-button class="mt-3" block @click="$bvModal.hide('bv-modal-example')"
      >Close Me</b-button
    >
  </b-modal>
</template>

<script>
export default {
  name: "EditModal",
  methods: {
    
  }
};
</script>

<style lang="scss" scoped></style>
