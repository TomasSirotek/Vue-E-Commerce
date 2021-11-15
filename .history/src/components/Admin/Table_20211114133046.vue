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
              v-for="game in games"
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
import { mapState} from "vuex";

export default {
  name: "table",
  components: {
BodyItem
  },
  computed: {
    ...mapState(["games"])

    allGames(){
                return this.$store.state.games
            }, 
  },

  methods: {
   
  },
};
</script>

<style lang="scss" scoped></style>
