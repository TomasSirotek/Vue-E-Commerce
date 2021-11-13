
 import { db } from '../../firebase'
import "firebase/compat/auth"; 
import "firebase/firestore";



// initial state
const state = () => ({
     games2: [],
    productsLoaded: null,  
    
})

// getters
const getters = {
  gameCards(state) {
    return state.games2.slice(0, 5);
  },
}

// actions
const actions = {
  
 
}

// mutations
const mutations = {
  

    
    
  }

  

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}