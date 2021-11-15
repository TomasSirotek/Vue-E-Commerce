<template>
     <div class="ui-menu" v-for="item in filtered" :key="item.id">
            <router-link
              :to="{
                name: 'productDetails',
                params: { gameid: item.gameID },
              }"
            >
              <ul>
                <li>{{ item.title }}</li>
                <li></li>
              </ul>
            </router-link>
          </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>

</style>