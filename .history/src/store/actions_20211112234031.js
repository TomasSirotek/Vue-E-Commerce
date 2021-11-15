import "firebase/compat/auth";
import firebase from "firebase/compat";

const logout = ({commit}) => {
   
     firebase.auth().signOut();
     commit('L_USER', []);
    
  }

  export default {
    logout
}