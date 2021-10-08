<template>
      <div class="container text-center py-5">
   <h2>Rest Your Password</h2> 
<InfoModal
v-if="modalActive"
v-on:close-btn="closeBtn"
:modalMessage="modalMessage"
/>

    <form >
      <div class="email">
        <input type="text" placeholder="email" v-model="email"/>
      </div>
    <b-button variant="outline-primary" type="submit"  @click.prevent="resetPsw"
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
import "firebase/compat/auth";
import firebase from "firebase/compat";
import "firebase/firestore";
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
            resetPsw(){
                this.loading = true;
                firebase
                .auth()
                .sendPasswordResetEmail(this.email)
                .then(()=>{
                    this.modalMessage = "If you are with us check your mail !";
                    this.loading = false;
                    this.modalActive = true;
                }).catch( err =>{
                    this.modalMessage = err.message;
                    this.loading = false;
                    this.modalActive = true
                    console.log(err)
                })
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