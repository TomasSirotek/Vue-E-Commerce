

// initial state
const state = () => ({
  cart:[],
})

// getters
const getters = {
    
}

// actions
const actions = {
   
}

// mutations
const mutations = {
     /* addToCart(state, menuItem) {
        let item = state.cart.find(i => i.id === menuItem.id)
        if (item) {
          item.quantity++
        } else {
          state.cart.push({ ...menuItem, quantity: 1 })
        }
        updateLocalStorage(state.cart)
      },
      removeFromCart(state, product) {
        let item = state.cart.find(i => i.id === product.id)
        if (item) {
          if (item.quantity > 1) {
            item.quantity--
          } else {
            state.cart = state.cart.filter(i => i.id !== product.id)
          }
        }
        updateLocalStorage(state.cart)
      },
      removeItem(state, product) {
        let item = state.cart.find(i => i.id === product.id)
        state.cart.splice(item, 1)
        updateLocalStorage(state.cart)
  
      },  */
    
    
  }

  

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}

/* function updateLocalStorage(cart) {
    localStorage.setItem('cart', JSON.stringify(cart))
  
  }  */