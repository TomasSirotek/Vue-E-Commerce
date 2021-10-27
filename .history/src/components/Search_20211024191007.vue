<template>
   <div class="search">
       <input
                  class="form-control mr-sm-2"
                  type="search"
                  placeholder="Search for your game"
                  aria-label="Search"
                  v-model="input"
                  v-on:input="search()"
                  ref="input"
                 
                />
                <button class="btn my-2 my-sm-0" type="submit">Search</button>
            <div>
                <!-- <h2>
                     {{ filtered}}
                </h2> -->
            </div>
        <div class="container">
            <div class="row test">
                <div class="col-12">
                   
                      <div class="ui-menu" v-for="item in  filtered" :key="item.id">
            <ul>
                <li>{{item.title}}</li>
            </ul>
        </div> 

                 
                </div>
            </div>
        </div>
      
   </div>
</template>

<script>
    export default {
        name:"Search",
        data(){
            return{
                input: '',


            }
        },
        methods:{
            search(){
                this.$store.commit('setDisplaySearch',this.input)
            },
   
        },
        computed: {
            filtered(){
          return  this.$store.getters.finalFilter
        }
        },
        
    }
</script>

<style lang="scss" scoped>
.row,.ul-menu{
    color:black;
    background:white;
}
li{
    color:black;
    &:hover{
        color:orange;
    }
}

</style>