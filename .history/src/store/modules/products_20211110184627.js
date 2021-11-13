
import {  db } from '@/firebase'



// initial state
const state = {
  games:[],
}

// getters
const getters = {
  gameCards(state) {
    return state.games.slice(0, 5);
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