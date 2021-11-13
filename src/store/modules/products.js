
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
  async getGames({ state }) {
    const dataBase = await db.collection("menuItems").orderBy("date", "desc");
    const dbResults = await dataBase.get();
    dbResults.forEach((doc) => {
      if (!state.games.some(game => game.gameID === doc.id)) {
        const data = {
          gameID: doc.data().gameId,
          descriptionHTML: doc.data().descriptionHTML,
          imageCover: doc.data().imageCover,
          productPhotoName: doc.data().productPhotoName,
          title: doc.data().title,
          price: doc.data().price,
          category: doc.data().category,
          subtitle: doc.data().subtitle,
          count: doc.data().count,

        };
        state.games.push(data);
        state.productsLoaded = true
       console.log(" => mrdka", state.games)
       
    

      }
    });
    },
    
    
  }

  

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}