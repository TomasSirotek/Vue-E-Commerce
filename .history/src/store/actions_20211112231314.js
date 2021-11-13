import "firebase/compat/auth";
import firebase from "firebase/compat";

export const logout = ({commit}) => {
    commit('SET_CART', []);
    return  firebase.auth().signOut();
    
  }

  export default {
    logout
}