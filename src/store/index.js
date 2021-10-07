import Vue from 'vue'
import Vuex from 'vuex'
import 'firebase/firestore';
import { dbMenuAdd } from '../firebase'

Vue.use(Vuex)


export default new Vuex.Store({
  state: {
    menuItems: [],
    cart: [],
  },
  mutations: {
    setMenuItems: state => {

      let menuItems = []
      dbMenuAdd.onSnapshot((snapshotItems) => {
        menuItems = []

        snapshotItems.forEach((doc) => {
          console.log("only cards =>", doc.data().cards)
          var menuItemData = doc.data() || doc.data().cards
          var cards = doc.data().cards
          console.log("=> special one ", cards)
          menuItems.push({
            ...menuItemData,
            id: doc.id,
          })
        })
        state.menuItems = menuItems
      })
    },
    addToCart(state, menuItem) {
      let item = state.cart.find(i => i.id === menuItem.id)
      if (item) {
        item.quantity++
      } else {
        state.cart.push({ ...menuItem, quantity: 1 })
      }
      updateLocalStorage(state.cart)
    },
    removeFromCart(state,product){
      let item = state.cart.find(i => i.id === product.id)
      if(item){
          if(item.quantity > 1 ){
              item.quantity--
          }else{
              state.cart = state.cart.filter( i => i.id !== product.id)
          }
      }
      updateLocalStorage(state.cart)
  },
  removeItem(state,product){
      let item = state.cart.find(i => i.id === product.id)
      state.cart.splice(item,1)
      updateLocalStorage(state.cart)

  },
    updateCartFromLocalStorage(state) {
      const cart = localStorage.getItem('cart')
      if (cart) {
        state.cart = JSON.parse(cart)
      }
    }
  },
  actions: {
    setMenuItems: context => {
      context.commit('setMenuItems')
    }
  },
  getters: {
    getMenuItems: state => state.menuItems,

    getProductById: (state) => (id) => {
      return state.menuItems.find(menuItem => menuItem.id == id)

    },
    cartObjects: state => {
      return state.cart
    }, // Total in cart
    cartTotal: state => {
      return state.cart.reduce((a, b) => a + (b.price * b.quantity), 0)
    },
    tottal: state => {
      return state.cart.reduce((a,b) => a + b.quantity,0);
  },
  },


  modules: {

  }
})

function updateLocalStorage(cart) {
  localStorage.setItem('cart', JSON.stringify(cart))

}