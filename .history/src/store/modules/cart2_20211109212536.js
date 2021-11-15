/* 


 const state = {
   cart2 : ["test"],
   counter2:3
 }


const getters = {
  cartObjects: state => {
    return state.cart
    
  },
  
}


const actions = {
   
}


const mutations = {
       addToCart(state, menuItem) {
        let item = state.cart.find(i => i.id === menuItem.id)
        if (item) {
          item.quantity++
        } else {
          state.cart.push({ ...menuItem, quantity: 1 })
        }
        updateLocalStorage(state.cart)
        console.log("tip")
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
  
      },  
      emptyCart(state) {
        state.cart = [],
          updateLocalStorage(state.cart)
      },
   
  }

  

export default {
  namespaced: true,
  state,
	mutations,
	actions,
	getters
}

 function updateLocalStorage(cart) {
    localStorage.setItem('cart', JSON.stringify(cart))
  
  }   */

  export default {
    state:{
      testCounter: 2,
    }
  }

  mutations:{
    
  }