 
const state =  {
  
    cart:[],
  }
  
const getters = {
  cartObjects: state => {
    return state.cart
  }, 
  cartTotal: state => {
    return state.cart.reduce((a, b) => a + (b.price * b.quantity), 0)
  }, 
  tottal: state => {
    return state.cart.reduce((a, b) => a + b.quantity, 0);
  },
}



 
  





const actions = {
  emptyCart({ commit }) {
    commit("emptyCart")
  }
   
}


const mutations = { 
  
       addToCart(state, menuItem) {
        let item = this.state.cart.find(i => i.id === menuItem.id)
        if (item) {
          item.quantity++
        } else {
          state.cart.push({ ...menuItem, quantity: 1 })
        }
        updateLocalStorage(state.cart)
        console.log("tip")
      },
      removeFromCart(state, product) {
        let item = this.state.cart.find(i => i.id === product.id)
        if (item) {
          if (item.quantity > 1) {
            item.quantity--
          } else {
            this.state.cart = this.state.cart.filter(i => i.id !== product.id)
          }
        }
        updateLocalStorage(state.cart)
      },
      removeItem(state, product) {
        let item = state.cart.find(i => i.id === product.id)
        this.state.cart.splice(item, 1)
        updateLocalStorage(state.cart)
  
      },  
      emptyCart(state) {
        this.state.cart = [],
          updateLocalStorage(state.cart)
      },
      updateCartFromLocalStorage(state) {
        const cart = localStorage.getItem('cart')
        if (cart) {
          this.state.cart = JSON.parse(cart)
        }
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
  
  }  
 
 