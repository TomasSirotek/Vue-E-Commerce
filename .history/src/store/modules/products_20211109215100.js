
/* import { db } from '../../firebase'
import "firebase/compat/auth"; */



// initial state
const state = () => ({
    /* games: [],
    productsLoaded: null,  */
    
})

// getters
const getters = {
  gameCards(state) {
    return state.games.slice(0, 5);
  },
}

// actions
const actions = {
  
  async getGames({ state }) {
    const dataBase = await db.collection("menuItems").orderBy("date", "desc");
    const dbResults = await dataBase.get();
    console.log(dbResults)
    console.log(state)
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
        console.log(" => allGames", state.games)
    

      }
    }); 

   
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