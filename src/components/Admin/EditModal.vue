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
            v-model="test.title"
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

  data() {
      return{
          title:"",
          category:"",
          onSale:"",
          description:"",
          inStock:"",
          
      }
  },
  methods: {
    
  }
};
</script>

<style lang="scss" scoped></style>
