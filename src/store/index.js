import Vue from 'vue'
import Vuex from 'vuex'

// import firebase from '../firebase' 
import 'firebase/firestore';
import {dbMenuAdd} from '../firebase'



Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    menuItems: [],
  },
  mutations: {
    setMenuItems : state => {

      let menuItems = []
    
      dbMenuAdd.onSnapshot((snapshotItems)=> {
        menuItems = []
        snapshotItems.forEach((doc) =>{
          var menuItemData = doc.data();
          console.log(doc.data())
           menuItems.push({
             ...menuItemData,
             id:doc.id
             
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
  getters:{
    getMenuItems: state => state.menuItems
   },
  modules: {
  }
})