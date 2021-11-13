import Vue from 'vue'
import Vuex from 'vuex'
import 'firebase/firestore';
import { dbOrders, db } from '../firebase'
import firebase from "firebase/compat";
import "firebase/compat/auth";
import "firebase/firestore";


import cart from './modules/cart'
import products from './modules/products'



Vue.use(Vuex)


export default new Vuex.Store({
  state: {
    games: [], // For Games Module 
     cart: [], 
    
    orderItems: [],
    archivedItems: [],
    counter: 1,
    productsLoaded: null, // products Loaded
    descriptionHTML: "Your description of product write here",
    productPhotoFileUrl: null,
    productPhotoName: "",
    user: null,
    isAdmin:null,
    profileEmail: null,
    profileFirstName: null,
    profileLastName: null,
    profileUserName: null,
    profileId: null,
    profileInitials: null,
    profilePassword: null,

    search:"",
    
  

  },
  mutations: {
  
    
    setDisplaySearch(state,payload){
      state.search = payload;
    },
    // For user
    updateUser(state, payload) {
      state.user = payload;
    },
    // For Adding Product
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
      state.descriptionHTML = payload.descriptionHTML;
      state.productPhotoFileUrl = payload.imageCover;
      state.productPhotoName = payload.productPhotoName;

    },

    // For Cart

    addCheckoutItem: (state) => {

      dbOrders.add({
        archive: false,
        storeOrders: false,
        orderNumber: state.counter++,
        status: "incomplete",
        orderFromUser: state.cart
      })

    }, // order Items push
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
    }, // Admin Handling archive
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

    // Add to cart
    addToCart(state, currentGame) {
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
   },// set details profile// set details profile
    setProfileDetails(state, doc) {
      state.profileId = doc.id;
      state.profileEmail = doc.data().email;
      state.profileFirstName = doc.data().firstName;
      state.profileLastName = doc.data().lastName;
      state.profileUserName = doc.data().userName;
      state.profilePassword = doc.data().userPassword;
      state.isAdmin  = doc.data().isAdmin;
    }, // inititals match profile
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
      state.games = state.games.filter(i => i.gameID !== payload)
    },
    filterOrders(state, payload) {
      state.games = state.orderItems.filter(i => i.id !== payload)
    },
    // for cart
    emptyCart(state) {
      state.cart = [],
        updateLocalStorage(state.cart)
    },
    // Profile Update details Mutations
    changeFirstName(state, payload) {
      state.profileFirstName = payload;
    },
    changeLastName(state, payload) {
      state.profileLastName = payload;
    },
    changeProfileUserName(state, payload) {
      state.profileUserName = payload;
    },


  },
  actions: {

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

     
    },
   





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
      commit("setProfileInitials");
    },
    async updateUserProfile({ commit, state }) {
      const dataBase = await db.collection("users").doc(state.profileId)
      await dataBase.update({
        firstName: state.profileFirstName,
        lastName: state.profileLastName,
        userName: state.profileUserName,
      });
      commit("setProfileInitials");
    },



    // Admin editing
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

    // cart Editing
    emptyCart({ commit }) {
      commit("emptyCart")
    }


  },
  getters: {

    sortArrayLowToHigh(state){
      return state.games.sort((a, b) => a.price - b.price );
      
      
    },
    sortArrayHighToLow(state){
      return state.games.sort((a, b) => b.price - a.price );
      
      
    },
    

     finalFilter(state){
       return state.games.filter((game) =>{
        return game.title.toLowerCase().includes(state.search.toLowerCase())
      });
     
    }, 

    gamesCategoryPS5(state) {
     
      return state.games.filter(i => i.category === "PS5")
    },
    gamesCategoryXbox(state) {
     
      return state.games.filter(i => i.category === "XBOX")
    },
    gamesCategoryPS4(state) {
     
      return state.games.filter(i => i.category === "PS4")
    },
    gameCards(state) {
      return state.games.slice(0, 5);
    },
     cartObjects: state => {
      return state.cart
    },  


    /* getMenuItems: state => state.menuItems,  */
    getOrderItems: state => state.orderItems,




    user: (state) => state.user,
    // Total in cart
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
    cart,
    products,
  }
})

function updateLocalStorage(cart) {
  localStorage.setItem('cart', JSON.stringify(cart))

}