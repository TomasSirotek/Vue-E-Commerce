import Vue from 'vue'
import './plugins/bootstrap-vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { library } from '@fortawesome/fontawesome-svg-core'
import {  faCartPlus, faFolderOpen,  faSignOutAlt, faUserShield, faEdit, faUserPlus, faEnvelope, faUser, faShoppingCart, faTrashAlt, faCheckCircle, faCog } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import '@/plugins/bootstrap-vue'
import '@/assets/style.scss'
import Vue2Editor from "vue2-editor"
import firebase from 'firebase/compat/app'
import 'firebase/compat/auth';
import Vuelidate from 'vuelidate'






library.add( faCartPlus, faFolderOpen, faSignOutAlt, faUserShield, faEdit, faUserPlus, faEnvelope, faUser, faShoppingCart, faTrashAlt, faCheckCircle, faCog)
Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.use(Vue2Editor);
Vue.use(Vuelidate);






Vue.config.productionTip = false

let app;



firebase.auth().onAuthStateChanged(() => {

  if (!app) {
    app = new Vue({
      router,
      store,
      render: h => h(App)
    }).$mount('#app')
  }
})

