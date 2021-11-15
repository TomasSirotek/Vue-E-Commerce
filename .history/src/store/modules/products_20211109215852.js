
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
  
  async getGames({ commit,state }) {
    const dataBase = await db.collection("menuItems").orderBy("date", "desc");
    const dbResults = await dataBase.get();
    console.log(dbResults)
    console.log(state)
     dbResults.forEach((doc) => {
      if (!state.games2.some(game => game.gameID === doc.id)) {
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
        state.games2.push(data);
        console.log("=> mrdko ",data)
        state.productsLoaded = true
        console.log(" => NewStuf", state.games2)
        this.$store.dispatch
    

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