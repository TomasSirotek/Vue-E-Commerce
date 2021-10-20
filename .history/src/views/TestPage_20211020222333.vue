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
           /*  const querySnapshot =  dbMenuAdd.collection("menuItems").where('category', '==', 'PC').get().then((querySnapshot)=>{
            querySnapshot.forEach((doc) => {
            console.log(doc.id, ' => ', doc.data());
            console.log(querySnapshot)
            console.log(querySnapshott)
        });
            }); */

            /* dbMenuAdd.get().then((querySnapshot) =>{
                querySnapshot.forEach((doc) => {
                    console.log(doc.id ,"=>",doc.data())
                })
            }) */
             const categories = {
 "cat1-id": []
}
            Object.keys(categories).forEach(cat => {
   const res = db.collection('products').where('cats', 'array-contains', cat).get()
   // Resolve and put (push) in categories[cat]
   res.push.this.game(() =>{
       
   })
})
         


        }

 
    
    
    }
</script>

<style lang="scss" scoped>

</style>