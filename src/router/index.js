import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import ProductDetails from '../views/products/productDetails.vue'
import Products from '../views/products/Products.vue'
import EditProduct from '../views/products/EditProduct.vue'



Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta:{
      title: "Home",
      requiresAuth:false,
    },
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
    meta:{
      title: "Profile",
      requiresAuth:false,
    },
  },
  {
    path: '/admin',
    name: 'Admin',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "admin" */ '../views/Admin/admin.vue'),
    meta:{
      title: "Admin",
      requiresAuth:true,
    },
  },
  {
    path: '/admin/orders',
    name: 'orders',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "orders" */ '../views/Admin/orders.vue'),
    meta:{
      title: "Orders",
      requiresAuth:false,
    },
  },
  {
    path: '/admin/productCustom',
    name: 'ProductCustom',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "productCustom" */ '../views/Admin/productCustom.vue'),
    meta:{
      title: "ProductCustom",
      requiresAuth:false,
    },
  },
  {
    path: '/admin/addAdmin',
    name: 'AddAdmin',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "addAdmin" */ '../views/Admin/AddAdmin.vue'),
    meta:{
      title: "AddAdmin",
      requiresAuth:false,
    },
  },
  {
    path: '/cart',
    name: 'Cart',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "cart" */ '../views/Cart.vue'),
    meta:{
      title: "Cart",
      requiresAuth:false,
    },
  },
  {
    path: '/login',
    name: 'Login',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "login" */ '../views/Auth/Login.vue'),
    meta:{
      title: "Login",
      requiresAuth:false,
    },
  },
  {
    path: '/register',
    name: 'Register',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "register" */ '../views/Auth/Register.vue'),
    meta:{
      title: "Register",
      requiresAuth:false,
    },
  },
  {
    path: '/passwordReset',
    name: 'PasswordReset',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "passwordReset" */ '../views/Auth/PasswordReset.vue'),
    meta:{
      title: "PasswordReset",
      requiresAuth:false,
    },
  },

  {
    path: '/products',
    name: 'Products',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: Products,
    meta:{
      title: "Products",
      requiresAuth:false,
    },
  },
  {
    path: '/products/:id',
    name: 'productDetails',
    component: ProductDetails,
    meta:{
      title: "ProductsDetails",
      requiresAuth:false,
    },
  },
  {
    path: '/EditProduct/:gameid',
    name: 'EditProduct',
    component: EditProduct,
    meta:{
      title: "EditProduct",
      requiresAuth:false,
    },
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});


export default router
