<template>
    <tbody >
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
                      params: { gameid: this.item.gameID}
                    }"
                    > <font-awesome-icon icon="edit" /></b-button
                  >
            
    
           
                </td>
              </tr>
              <BodyItem
              v-for="game in allGames"
               :key="item.id"
               :game="item"
              />
            </tbody>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>

</style>