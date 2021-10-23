import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import ProductDetails from '../views/products/productDetails.vue'
import Products from '../views/products/Products.vue'
import EditProduct from '../views/products/EditProduct.vue'
import firebase from 'firebase/compat/app'
import 'firebase/compat/auth';
 import { routes } from '@/helpers/constans.js'; 

Vue.use(VueRouter)
const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  scrollBehavior (to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { x: 0, y: 0 }
    }
  },
  routes:[
    {
      path: routes.allGames,
      name: 'Products',
      component: Products,
    },
    {
      path: routes.home,
      name: 'Home',
      component: Home,
      meta: {
        title: "Home",
        requiresAuth: false,
      },
    },
    {
      path: routes.admin,
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
      path: routes.orders,
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
      path: routes.productCustom,
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
      path: routes.cart,
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
      path: routes.profile,
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
      path: routes.products,
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
      path: `${routes.products}/:id`,
      name: 'productDetails',
      component: ProductDetails,
      params: true,
      meta: {
        title: "ProductsDetails",
        requiresAuth: false,
      },
    },
    {
      path: `${routes.editProduct}/:gameid`,
      name: 'EditProduct',
      component: EditProduct,
      params: true,
      meta: {
        title: "EditProduct",
        requiresAuth: true,
      },
    }

  ]

  
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
