<template>
  <div>
    <!--  Default for all  -->
    <h2>{{ product }}</h2>
  </div>
</template>

<script>
export default {
  name: "productDetails",
  data(){
      return{

      }
     
  },
  components: {},
  computed: {
     product() {
      return this.$store.getters.getProductById(this.$route.params.id);
    }, 
  },
};
</script>

<style lang="scss" scoped></style>
