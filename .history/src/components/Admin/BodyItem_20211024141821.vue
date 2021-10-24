<template>
    <tbody >
              <tr>
                <td>{{ game.title }}</td>
                <td>{{ game.subtitle }}</td>
                <td>{{ game.category }}</td>

                <td>${{ game.price }}</td>
                <td>{{ game.count }}x</td>
                <td>
                 <!--  <b-button
                    id="button"
                    :to="{
                      name: 'EditProduct',
                      params: { gameid: this.game.gameID}
                    }"
                    > <font-awesome-icon icon="edit" /></b-button
                  >
             -->
             <button @click></button>
    
           
                </td>
              </tr>
             
            </tbody>
</template>

<script>
    export default {
        props:["game"],
        methods: {
              edit(){
      this.$router.push({ name : 'EditProduct', params: { gameid: this.item.gameID}})
    }
        },
        
    }
</script>

<style lang="scss" scoped>

</style>