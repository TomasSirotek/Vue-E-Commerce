export const logout = ({commit}) => {
    commit('SET_CART', []); // clear current cart
    return firebaseAuth().signOut();
  }