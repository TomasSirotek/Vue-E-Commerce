<template>
    <div class="resultos">
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
    </div>
</template>

<script>
    export default {
        name: "searchResult",
        computed: {
            filtered() {
      return this.$store.getters.finalFilter;
    },
        }
        
    }
</script>

<style lang="scss" scoped>

</style>