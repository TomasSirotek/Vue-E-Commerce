import "firebase/compat/auth";
import firebase from "firebase/compat";

export const logout => {
    
    return  firebase.auth().signOut();
    
  }