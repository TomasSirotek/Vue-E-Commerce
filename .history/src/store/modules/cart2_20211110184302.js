 
/*  function updateLocalStorage(cart) {
  localStorage.setItem('cart', JSON.stringify(cart))

}   */
 const state =  {
  
    /* cart:[
      { 
        id: 1,
        title:"random object",
      }
    ], */
  }
  
const getters = {
/*   cartObjects: state => {
    return state.cart
  }, 
  cartTotal: state => {
    return state.cart.reduce((a, b) => a + (b.price * b.quantity), 0)
  }, 
  tottal: state => {
    return state.cart.reduce((a, b) => a + b.quantity, 0);
  }, */
} 



 
  





 const actions = {
/*   emptyCart({ commit }) {
    commit("emptyCart")
  } ,
  setMenuItems: context => {
    context.commit('setMenuItems')

  },
  setOrderItems: (context) => {
    context.commit('setOrderItems')
  },
  // Setting from db 
  setCheckoutItem: (context) => {
    context.commit('addCheckoutItem')

  },
    */
 } 


 const mutations = { 
  
 /*  addToCart(state, currentGame) {
    let item = state.cart.find(i => i.gameID === currentGame.gameID)
    if (item) {
      item.quantity++
    } else {
      state.cart.push({ ...currentGame, quantity: 1 })
    }
    updateLocalStorage(state.cart)
  },
  removeFromCart(state, currentGame) {
    let item = state.cart.find(i => i.gameID === currentGame.gameID)
    if (item) {
      if (item.quantity > 1) {
        item.quantity--
      } else {
        state.cart = state.cart.filter(i => i.gameID !== currentGame.gameID)
      }
    }
    updateLocalStorage(state.cart)
  },
  removeItem(state, currentGame) {
    let indexItem = state.cart.indexOf(currentGame)
    console.log("test", indexItem)
    if(indexItem || indexItem == 0) {
      state.cart.splice(indexItem, 1) 
    }
  
    else {
      console.log("unable to delete")
    }

    updateLocalStorage(state.cart) 
 },
      emptyCart(state) {
        state.cart = [],
          updateLocalStorage(state.cart)
      },
      updateCartFromLocalStorage(state) {
        const cart = localStorage.getItem('cart')
        if (cart) {
          state.cart = JSON.parse(cart)
        }
      },  */
  }  

  

 export default {
  namespaced: true,
  state,
	mutations,
	actions, 
	getters
} 
 
 
 