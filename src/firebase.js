import firebase from 'firebase/compat/app'
import 'firebase/compat/firestore';
import 'firebase/compat/auth';
import 'firebase/compat/storage';

const firebaseConfig = {
    apiKey: "AIzaSyCfkUKHdwlvHqO5Sx7HcNlQgJ0R7g4K_Ic",
    authDomain: "vue-e-commerce-e01af.firebaseapp.com",
    projectId: "vue-e-commerce-e01af",
    storageBucket: "vue-e-commerce-e01af.appspot.com",
    messagingSenderId: "482335117020",
    appId: "1:482335117020:web:8f0101f52c0abf7ecdae19"
  };
firebase.initializeApp(firebaseConfig);

  
export const db = firebase.firestore()
export const dbMenuAdd = db.collection("menuItems") 
export const dbOrders = db.collection("orderedItems")


