<template>
  <div class="table">
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
                <td>
                  <b-button
                    id="button"
                    :to="{
                      name: 'EditProduct',
                      params: { gameid: item.gameId },
                    }"
                    > <font-awesome-icon icon="edit" /></b-button
                  >

                  <router-link 
                  
                  
                  
                  >
                  
                  
                  </router-link>
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
  methods: {},
};
</script>

<style lang="scss" scoped></style>
