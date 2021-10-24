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
          
              <BodyItem
              v-for="game in allGames"
               :key="game.id"
               :game="game"
              />
         
          </table>
        <!--      <b-button
                    id="button"
                    :to="{
                      name: 'EditProduct',
                      params: { gameid: item.gameId },
                    }"
                    > <font-awesome-icon icon="edit" /></b-button
                  > -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "table",
  props:['itemSection'],
  computed: {


    allGames(){
                return this.$store.state.games
            }, 
  },

  methods: {
    /* edit(){
      this.$router.push({ name : 'EditProduct', params: { gameid: this.item.gameID}})
    } */
  },
};
</script>

<style lang="scss" scoped></style>
