import "firebase/compat/auth";
import firebase from "firebase/compat";

export const logout = ({commit}) => {
    commit('SET_CART', []); // clear current cart
    return firebaseAuth().signOut();
  }