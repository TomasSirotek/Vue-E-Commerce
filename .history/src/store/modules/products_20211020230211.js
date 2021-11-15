const state = () => ({
    all: []
  })

  const getters = {}

  // actions
  const actions = {
   
  }
  
  // mutations
  const mutations = {
    
    },
  
    decrementProductInventory (state, { id }) {
      const product = state.all.find(product => product.id === id)
      product.inventory--
    }
  }

  
  
  export default {
    namespaced: true,
    state,
  }