<template>
      <div class="container text-center py-5">
    LOGIN
    <form >
      <div class="login">
        <input type="text" placeholder="email" v-model="email"/>
      </div>

      <div class="password">
        <input type="password" placeholder="password" v-model="password" />
      </div>

      <b-button variant="outline-primary" type="submit" 
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
    export default {
        name:"Login",
        data(){
            return{
                email: null,
                password:null,
            }
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