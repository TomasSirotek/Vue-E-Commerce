<template>
 <div class="profile-form">
    <div class="container py-4">
      <div class="row justify-content-center mt-4">
        <div class="col-12 col-md-6">
            <div class="header-title ">
            <h2>
              PC GAMES
            </h2>
          </div>
        
        </div>
        <div class="col-12 col-md-6 mt-2">
          
          </div>
         
        
      </div>
    </div>
  </div>
</template>

<script>
import {  db } from '../firebase'
    export default {
        name:"TestPage",
        data(){
            return{
                game : "",
            }
        },
        created() {
            const querySnapshott =  db.collection("menuItems").where('category', '==', 'PC').get().then;
            querySnapshot.forEach((doc) => {
            console.log(doc.id, ' => ', doc.data());
            console.log(this.querySnapshot)
            console.log(this.querySnapshott)
        });


        }

 
    
    
    }
</script>

<style lang="scss" scoped>

</style>