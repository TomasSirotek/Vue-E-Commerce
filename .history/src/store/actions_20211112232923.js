import "firebase/compat/auth";
import firebase from "firebase/compat";

const logout = ({commit}) => {
    commit('SET_CART', []);
    return  firebase.auth().signOut();
    
  }

  export default {
    logout
}