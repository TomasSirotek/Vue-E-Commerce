import "firebase/compat/auth";
import firebase from "firebase/compat";

export const logout = ({commit}) => {
    return  firebase.auth().signOut();
    commit
  }