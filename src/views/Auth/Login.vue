<template>
      <div class="container text-center py-5">
    LOGIN
    <form >
        <div class="error" v-show="error">{{ this.errorMsg }}</div>
      <div class="login">
        <input type="text" placeholder="email" v-model="email"/>
      </div>

      <div class="password">
        <input type="password" placeholder="password" v-model="password" />
      </div>

      <b-button variant="outline-primary" type="submit" @click.prevent="logIn" 
        >Login</b-button
      >
    </form>
    <div class="error" ></div>
    <span
      >Not a member and want to get discount ?
      <router-link  :to="`/register`">Register</router-link>
       </span>
    <span
      > <br> Forgot your password again = 
      <router-link  :to="`/passwordreset`">Rest PSW</router-link>
       </span>
 
  </div>


  
</template>

<script>
import "firebase/compat/auth";
import firebase from "firebase/compat";
import "firebase/firestore";
    export default {
        name:"Login",
        data(){
            return{
                email: "",
                password:"",
                errorMsg:"",
                error:null,
            }
        },
        methods: {
           logIn() {
      if (
        this.email !== "" &&
        this.password !== ""
        ) {
        this.error = false;
        this.errorMsg = "";
        firebase
          .auth()
          .signInWithEmailAndPassword(this.email, this.password)
          .then(() =>{
                 
            
            this.$router.push({ path: "/" });
            console.log(firebase.auth().currentUser.uid);
          }).catch((err) => {
               this.error = true;
              this.errorMsg = err.message;
          })

      }
     
     
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

 