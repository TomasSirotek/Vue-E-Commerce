import Vue from 'vue'
import Vuex from 'vuex'
import 'firebase/firestore';
import { dbMenuAdd } from '../firebase'



Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    menuItems: [],
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
  },
  actions: {
    setMenuItems: context => {
      context.commit('setMenuItems')
    }
  },
  getters: {
    getMenuItems: state => state.menuItems,

    getProductById: (state) => (id) => {
      return state.menuItems.map(menuItem => menuItem.id == id)


    },
  },
  modules: {
  }
})