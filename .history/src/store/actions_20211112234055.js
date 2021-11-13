import "firebase/compat/auth";
import firebase from "firebase/compat";

const logout = ({commit}) => {
   
     firebase.auth().signOut();
     commit('LOGOUT_USER', []);
     rou
    
  }

  export default {
    logout
}