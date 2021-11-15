
import {  db } from '@/firebase'
import "firebase/compat/auth";
import "firebase/firestore";




// initial state
const state = {
  games:[],
}

// getters
const getters = {
  gameCards(state) {
    return state.games.slice(0, 5);
  },
  gamesos: state => state.games
}

// actions
const actions = {
  

    setMenuItems: context => {
      context.commit('setMenuItems')

    },
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