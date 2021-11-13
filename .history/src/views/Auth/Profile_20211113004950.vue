<template>
  <div class="profile-form">
    <div class="container py-4">
      <div class="row justify-content-center mt-4">
        <div class="col-12 col-md-6">
            <div class="header-title ">
            <h2>
              Profile Page
            </h2>
          </div>
          <form class="user">
            <div class="form-group">
              <label for="exampleInputEmail1">User Name</label>
              <input
                type="text"
                class="form-control"
                v-model="userName"
                aria-describedby="emailHelp"
              />
            </div>
            <div class="form-group">
              <label for="exampleInputEmail1">First Name</label>
              <input
                type="text"
                class="form-control"
                v-model="firstName"
                aria-describedby="emailHelp"
              />
            </div>

            <div class="form-group">
              <label for="exampleInputEmail1">Last Name</label>
              <input
                type="text"
                class="form-control"
                v-model="lastName"
                aria-describedby="emailHelp"
              />
            </div>
            <div class="form-group">
              <label for="exampleInputEmail1">Email</label>
              <input
                disabled
                type="email"
                class="form-control"
                v-model="email"
                aria-describedby="emailHelp"
              />
            </div>
            <div class="form-group">
              <label for="exampleInputEmail1">Password</label>
              <input
                :type="type"
                class="form-control"
                disabled
                v-model="password"
                aria-describedby="emailHelp"
              />
            </div>

            <div class="login-grup login-btn mt-4">
              <b-button type="submit" @click.prevent="updateProfile" id="button"
                >Update</b-button
              >
              <b-button class="ml-3"  @click.prevent="showPsw" id="button"
                >{{btnText}}</b-button
              >
              <router-link to="/admin" v-if="isAdmin">
                <button id="button" class="ml-3">
                  <span>Admin Page </span>
                </button>
              </router-link>

            </div>
          </form>
        </div>
        <div class="col-12 col-md-6 mt-2">
          <div class="header-title text-center">
            <h2>
              Welcome back <b>{{ firstName }}</b>
            </h2>
          </div>
          <div class="header-picture text-center mt-4">
            <b-avatar
              src="https://avatars.dicebear.com/api/pixel-art/:seed.svg"
              size="6rem"
            ></b-avatar>
           <div class="role-status mt-5">
               <span id="button" v-if="isAdmin" >Admin</span>
               <span id="button" v-else >User</span>
                
           </div>
          
           
            
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
    data(){
        return{
         btnText: "ShowPassword",
         type: "password",
         isAdmin:this.$store.state.isAdmin,
        }
    },
    methods: {
        updateProfile() {
            this.$store.dispatch("updateUserProfile");
            this.boxOne = ''
        this.$bvModal.msgBoxOk('Your changes were update !',{
            size:"md",
            centered: true,
        })
          .then(value => {
            this.boxOne = value
          })
          .catch(err => {
            this.boxOne = err.message
          })
        },
        showPsw(){
            if(this.type === "password") {
          this.type = "text"
          this.btnText = "Hide Password"
       } else {
          this.type = "password"
          this.btnText = "Show Password"
       }
        }
    },
    computed:{
        // Two way binding
        firstName: {
            get(){
                return this.$store.state.profileFirstName
                  ...mapGetters(["gamesCategoryPS4"]),
            },
            set(payload){
                this.$store.commit("changeFirstName",payload)
            }
        },
        lastName: {
            get(){
                return this.$store.state.profileLastName
            },
            set(payload){
                this.$store.commit("changeLastName",payload)
            }
        },
        userName: {
            get(){
                return this.$store.state.profileUserName
            },
            set(payload){
                this.$store.commit("changeProfileUserName",payload)
            }
        },
      
        email(){
            return this.$store.state.profileEmail
        },
        password(){
            return this.$store.state.profilePassword
        },

        
    },
};
</script>

<style lang="scss" scoped>
</style>