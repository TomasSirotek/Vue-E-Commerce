import "firebase/compat/auth";
import firebase from "firebase/compat";

export const logout = ({commit}) => {
    commit
    return  firebase.auth().signOut();
    console.log("work")
  }