import "firebase/compat/auth";
import firebase from "firebase/compat";

const async logout = ({commit}) => {
    commit('CLEAN_USER', []);
    return  firebase.auth().signOut();
    
  }

  export default {
    logout
}