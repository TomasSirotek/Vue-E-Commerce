<template>
  <div>
      <tr v-for="item in menuItems" :key="item.title">
           <td>  {{ item.title }}</td>
      </tr>

   
  </div>
</template>

<script>
 // import { dbMenuAdd } from '../../firebase'
export default {
  name: "ProductPage",
  computed:{
      menuItems(){
        return this.$store.getters.getMenuItems
      }
  

  },
  beforeCreate() {
      this.$store.dispatch('setMenuItems')
  },

};
</script>

<style lang="scss" scoped></style>
