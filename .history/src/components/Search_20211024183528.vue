<template>
   <div class="search">
       <input
                  class="form-control mr-sm-2"
                  type="search"
                  placeholder="Search for your game"
                  aria-label="Search"
                  v-model.trim="input"
                  v-on:input="search()"
                  ref="input"
                 
                />
                <button class="btn my-2 my-sm-0" type="submit">Search</button>

        <div class="container">
            <div class="row ">
                <div class="col-12">
                    <div v-for="blog in blogs">

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
                input: ''
                
            }
        },
        methods:{
            search(){
                console.log(this.input)
            },
   
        },
    }
</script>

<style lang="scss" scoped>
.row{
    background:white;
}
</style>