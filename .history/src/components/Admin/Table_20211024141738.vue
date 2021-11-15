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
    
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BodyItem from "@/components/Admin/BodyItem.vue"

export default {
  name: "table",
  components: {
BodyItem
  },
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
