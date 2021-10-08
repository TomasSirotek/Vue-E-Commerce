<template>
      <div class="container text-center py-5">
   <h2>Rest Your Password</h2> 
<InfoModal
v-if="modalActive"
v-on:close-btn="closeBtn"
/>

    <form >
      <div class="email">
        <input type="text" placeholder="email" v-model="email"/>
      </div>
    <b-button variant="outline-primary" type="submit" 
        >Reset</b-button
      >
        <Loading
        v-if="loading"
        />
    </form>

  </div>
</template>

<script>
import InfoModal from "@/components/InfoModal.vue"
import Loading from "@/components/Loading.vue"
    export default {
        name:"PasswordReset",
        components: {
            InfoModal,
            Loading,
        },
        data(){
            return{
                email: null,
                modalActive: false,
                loading: false,
                modalMessage : "",
                
            
            }
        },
        methods: {
            closeBtn(){
                this.modalActive = !this.modalActive;
                this.email = "";
            },
         
        }
    }
</script>

<style lang="scss" scoped>
input {
  width: 400px;
  padding: 30px;
  margin: 20px;
  font-size: 21px;
}
button {
  width: 400px;
  height: 75px;
  font-size: 100%;
}
</style>