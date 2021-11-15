import "firebase/compat/auth";
import firebase from "firebase/compat";

const logout({commit}) {
    return new Promise((resolve, reject) => {
      try {
        commit('logout');
        resolve("done");
      } catch (e) {
        reject(e);
      }
    });
  }

  export default {
    logout
}