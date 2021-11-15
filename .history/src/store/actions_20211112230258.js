import "firebase/compat/auth";
import firebase from "firebase/compat";

export const logout = ({commit}) => {
    commit
    console.log("work")
    return  firebase.auth().signOut();
    
  }