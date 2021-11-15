import "firebase/compat/auth";
import firebase from "firebase/compat";

const logout = ({commit}) => {
   
     firebase.auth().signOut();
     commit('CLEAN_USER', []);
    
  }

  export default {
    logout
}