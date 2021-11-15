import Vue from 'vue'
import './plugins/bootstrap-vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faUserSecret,faCartPlus,faFolderOpen,faIdCard,faSignOutAlt,faUserShield,faEdit,faUserPlus,faEnvelope,faUser,faShoppingCart,faTrashAlt } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import '@/plugins/bootstrap-vue'
import '@/assets/style.scss'
import Vue2Editor from "vue2-editor"
import firebase from 'firebase/compat/app'
import 'firebase/compat/auth';
/* import InstantSearch from 'vue-instantsearch'; */



library.add(faUserSecret,faCartPlus,faFolderOpen,faIdCard,faSignOutAlt,faUserShield,faEdit,faUserPlus,faEnvelope,faUser,faShoppingCart,faTrashAlt)
Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.use(Vue2Editor);




Vue.config.productionTip = false

let app;



firebase.auth().onAuthStateChanged(user=>{
  console.log(user);
  if(!app){
    app = new Vue({
      router,
      store,
      render: h => h(App)
    }).$mount('#app')
  }
})

