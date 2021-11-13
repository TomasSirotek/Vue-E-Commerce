import "firebase/compat/auth";
import firebase from "firebase/compat";

const logout = ({commit}) => {
   
     firebase.auth().signOut();
     commit('LOGOUT_USER', []);
     router.push({ path: "/" });
    
  }

  export default {
    logout
}