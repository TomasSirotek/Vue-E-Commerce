<template>
  <div class="table">
    <!-- Page Heading -->
    <h1 class="h3 mb-2 text-gray-800">All Products</h1>

    <!-- DataTales Example -->
    <div class="card shadow mb-4">
      <div class="card-body">
        <div class="table-responsive">
          <table
            class="table table-bordered"
            id="dataTable"
            width="100%"
            cellspacing="0"
          >
            <thead>
              <tr>
                <th>Title</th>
                <th>Subtitle</th>
                <th>Category</th>

                <th>Price</th>

                <th>In stock</th>
                <th>Make changes</th>
              </tr>
            </thead>
            <tbody v-for="item in menuItems" :key="item.id">
              <tr>
                <td>{{ item.title }}</td>
                <td>{{ item.subtitle }}</td>
                <td>{{ item.category }}</td>

                <td>${{ item.price }}</td>
                <td>{{ item.count }}x</td>
                <td><!-- <a class="btn btn-primary btn-user btn-block"  @click="updateChanges(item),modalShow=true">Edit</a> -->
                <b-button  :to="{name:'EditProduct', params:{gameid: item.gameId}}"  >Edit</b-button>
                </td>
              </tr>
            </tbody>
          </table>
          <div></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "table",
  computed: {
    menuItems() {
      return this.$store.getters.getMenuItems;
    },
  },
  beforeCreate() {
    this.$store.dispatch("setMenuItems");
  },
methods: {

}
};
</script>

<style lang="scss" scoped></style>
