<template>
    <tbody >
              <tr>
                <td>{{ game.title }}</td>
                <td>{{ game.subtitle }}</td>
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
             
            </tbody>
</template>

<script>
    export default {
        props:["game"],
        
    }
</script>

<style lang="scss" scoped>

</style>