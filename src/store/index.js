import Vue from 'vue'
import Vuex from 'vuex'
import 'firebase/firestore';
import { dbMenuAdd, dbOrders, db } from '../firebase'
import firebase from "firebase/compat";
import "firebase/compat/auth";
import "firebase/firestore";

Vue.use(Vuex)


export default new Vuex.Store({
  state: {
    menuItems: [],
    cart: [],
    orderItems: [],
    archivedItems: [],
    counter: 1,
    collectionOfUsers: [],
    /*   productLoaded:null, */
    descriptionHTML: "Your description of product write here",
    productPhotoFileUrl: null,
    productPhotoName: "",
    user: null,
    profileEmail: null,
    profileFirstName: null,
    profileLastName: null,
    profileUserName: null,
    profileId: null,
    profileInitials: null,

  },
  mutations: {
    updateUser(state, payload) {
      state.user = payload;
    },
    fileNameChange(state, payload) {
      state.productPhotoName = payload
    },
    createFileURL(state, payload) {
      state.productPhotoFileUrl = payload
    },
    updateDesriptionHTML(state, payload) {
      state.descriptionHTML = payload
    },
    setGameState(state, payload) {
      state.descriptionHTML = payload.descriptionHTML,
        state.productPhotoFileUrl = payload.imageCover,
        state.productPhotoName = payload.productPhotoName

    },


    addCheckoutItem: (state) => {

      dbOrders.add({
        archive: false,
        storeOrders: false,
        orderNumber: state.counter++,
        status: "incomplete",
        orderFromUser: state.cart
      })

    },
    setMenuItems: state => {

      let menuItems = []
      dbMenuAdd.onSnapshot((snapshotItems) => {
        menuItems = []

        snapshotItems.forEach((doc) => {
          var menuItemData = doc.data()
          /*  console.log(doc.data()) */
          menuItems.push({
            ...menuItemData,
            id: doc.id,
          })
        })
        /*  state.productLoaded = true */
        state.menuItems = menuItems
        console.log(state.menuItems)
      })
    },
    setOrderItems: state => {

      let orderItems = []
      dbOrders.onSnapshot((snapshotItems) => {
        orderItems = []

        snapshotItems.forEach((doc) => {
          var orderItemData = doc.data()
          console.log(doc.data())
          orderItems.push({
            ...orderItemData,
            id: doc.id,
          })
        })

        state.orderItems = orderItems

      })
    },
    statusChange(state, id) {
      let selectedOrderItem = state.orderItems.filter(item => item.id === id)[0];
      if (selectedOrderItem.status === "inprogress") {
        dbOrders.doc(id).update({ status: "complete" })
          .then(() => {

          })

      }
      else if (selectedOrderItem.status === "incomplete") {
        dbOrders.doc(id).update({ status: "inprogress" })
          .then(() => {

          })

      }
      else if (selectedOrderItem.status === "complete") {
        dbOrders.doc(id).update({ status: "incomplete" })
          .then(() => {

          })

      }
    },
    archiveProducts(state, id) {
      let archiveItems = state.orderItems.filter(item => item.id === id)[0];
      if (archiveItems.archive === false && archiveItems.storeOrders === false) {
        dbOrders.doc(id).update({ archive: true, storeOrders: true })
          .then(() => {
            state.archivedItems.push()
          })
      }

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

    },// set details
    setProfileDetails(state, doc) {
      state.profileId = doc.id;
      state.profileEmail = doc.data().email;
      state.profileFirstName = doc.data().firstName;
      state.profileLastName = doc.data().lastName;
      state.profileUserName = doc.data().userName;
    }, // inititals match
    setProfileInitials(state) {
      state.profileInitials =
        state.profileFirstName.match(/(\b\S)?/g).join("") +
        state.profileLastName.match(/(\b\S)?/g).join("");
    },

    updateCartFromLocalStorage(state) {
      const cart = localStorage.getItem('cart')
      if (cart) {
        state.cart = JSON.parse(cart)
      }
    },

    filterProducts(state, payload) {
      state.menuItems = state.menuItems.filter(i => i.id !== payload)
    },
    filterOrders(state, payload) {
      state.menuItems = state.orderItems.filter(i => i.id !== payload)
    },

    emptyCart(state){
      state.cart = [],
      updateLocalStorage(state.cart)
    }

  },
  actions: {
    setMenuItems: context => {
      context.commit('setMenuItems')

    },
    setOrderItems: (context) => {
      context.commit('setOrderItems')
    },
    // Setting from db 
    setCheckoutItem: (context) => {
      context.commit('addCheckoutItem')
     
    }, // Auth here 
    async getCurrentUser({ commit }) {
      const dataBase = await db.collection("users").doc(firebase.auth().currentUser.uid);
      const dbFinal = await dataBase.get();
      commit("setProfileDetails", dbFinal);
      commit("setProfileInitials")
    },




    async deleteProduct({ commit }, payload) {
      const getProduct = await db.collection("menuItems").doc(payload);
      await getProduct.delete();
      commit("filterProducts", payload)
    },
    async deleteOrder({ commit }, payload) {
      const getProduct = await db.collection("orderedItems").doc(payload);
      await getProduct.delete();
      commit("filterOrders", payload)
    },
    /* Redo */
    async updateChanges({ commit }, payload) {

      commit("updateProducts", payload)
      await this.dispatch("setMenuItems")
    },


    emptyCart({ commit}){
      commit("emptyCart")
    }
  

  },
  getters: {
    getMenuItems: state => state.menuItems,
    getOrderItems: state => state.orderItems,
    user: (state) => state.user,

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
      return state.cart.reduce((a, b) => a + b.quantity, 0);
    },
    earnings_total: state => {
      let totalIncome = 0
      state.orderItems.forEach(a => {
        if (a.archive == true) {
          a.orderFromUser.forEach(b => {
            totalIncome += b.price * b.quantity
          })
        }
      });
      console.log(totalIncome)
      return totalIncome;
    },

  },


  modules: {

  }
})

function updateLocalStorage(cart) {
  localStorage.setItem('cart', JSON.stringify(cart))

}