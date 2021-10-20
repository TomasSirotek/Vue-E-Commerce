import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import ProductDetails from '../views/products/productDetails.vue'
import Products from '../views/products/Products.vue'
import EditProduct from '../views/products/EditProduct.vue'
import firebase from 'firebase/compat/app'
import 'firebase/compat/auth';



Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      title: "Home",
      requiresAuth: false,
    },
  },
  {
    path: '/admin',
    name: 'Admin',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "admin" */ '../views/Admin/admin.vue'),
    meta: {
      title: "Admin",
      requiresAuth: true,
    },
  },
  {
    path: '/admin/orders',
    name: 'orders',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "orders" */ '../views/Admin/orders.vue'),
    meta: {
      title: "Orders",
      requiresAuth: true,
    },
  },
  {
    path: '/admin/productCustom',
    name: 'ProductCustom',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "productCustom" */ '../views/Admin/productCustom.vue'),
    meta: {
      title: "ProductCustom",
      requiresAuth: true,
    },
  },
  {
    path: '/cart',
    name: 'Cart',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "cart" */ '../views/Cart.vue'),
    meta: {
      title: "Cart",
      requiresAuth: false,
    },
  },
  {
    path: '/profile',
    name: 'Profile',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "profile" */ '../views/Auth/Profile.vue'),
    meta: {
      title: "Profile",
      requiresAuth: true,
    },
  },


  {
    path: '/products',
    name: 'Products',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: Products,
    meta: {
      title: "Products",
      requiresAuth: false,
    },
  },
  {
    path: '/products/:id',
    name: 'productDetails',
    component: ProductDetails,
    params: true,
    meta: {
      title: "ProductsDetails",
      requiresAuth: false,
    },
  },
  {
    path: '/EditProduct/:gameid',
    name: 'EditProduct',
    component: EditProduct,
    params: true,
    meta: {
      title: "EditProduct",
      requiresAuth: true,
    },
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

router.beforeEach((to, from, next) => {
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth);
  const isAuthenticated = firebase.auth().currentUser;
  if (requiresAuth && !isAuthenticated) {
    next("/");
  } else {
    next();
  }
})

export default router
