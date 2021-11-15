import "firebase/compat/auth";
import firebase from "firebase/compat";

const logout = ({commit}) => {
    commit('CLEAN_USER', []);
    return  firebase.auth().signOut();
    
  }

  export default {
    logout
}