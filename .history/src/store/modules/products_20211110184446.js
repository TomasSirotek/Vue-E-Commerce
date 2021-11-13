




// initial state
const state = {

}

// getters
const getters = {
  
}

// actions
const actions = {
  
 
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
      //  console.log(" => allGames", state.games)
    

      }
    });
    {}

    
    
  }

  

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}