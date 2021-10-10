<template>
  <div class="table">
    <!-- Page Heading -->
    <h1 class="h3 mb-2 text-gray-800">Orders</h1>

    <!-- DataTales Example -->
    <div class="card shadow mb-4">
      <div class="card-body">
        <div class="table-responsive" v-for="item in all" :key="item.id">
          <table
            class="table table-bordered"
            id="dataTable"
            width="100%"
            cellspacing="0"
          >
            <thead>
              <tr>
                <th>Order</th>
                <th>Products</th>
                <th>Price</th>
              </tr>
            </thead>
            <tbody v-for="subitem in item.orderFromUser" :key="subitem.id">
              <tr>
                <td>{{ item.orderNumber }}</td>
                <td>{{ subitem.title }}</td>
                <td>{{ subitem.price }}</td>
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
  name: "SoldTable",
 
   computed: {
    all() {
      return this.$store.getters.getOrderItems;
    },
  },
  beforeCreate() {
    this.$store.dispatch("setOrderItems");
  }, 
};
</script>

<style lang="scss" scoped></style>
