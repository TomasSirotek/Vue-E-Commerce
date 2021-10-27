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
                <h2>
                     {{ filtered}}
                </h2>
            </div>
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <!-- <div v-for="blog in filterBlog" :key="blog.id">
                        {{blog.title}}
                       
                    </div> -->
                     <div v-for="item in  filtered" :key="item.id">
                        {{item.title}}
                       
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
                blogs:[
                    { 
                        id:1,
                        title:"Saints Row",
                        },
                    { 
                        id:2,
                        title:"Battlefield",
                        },
                    { 
                        id:3,
                        title:"hnev",
                        },
                    { 
                        id:4,
                        title:"bro",
                        }
                ]

            }
        },
        methods:{
            search(){
                this.$store.commit('setDisplaySearch',this.input)
            },
   
        },
        computed: {
            filterBlog:function(){
                return this.blogs.filter((blog) => {
                    return blog.title.match(this.input)
                })
            }
        },
        filtered(){
          return  this.$store.getters.finalFilter
        }
    }
</script>

<style lang="scss" scoped>
.row{
    background:white;
}

</style>