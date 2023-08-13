import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import careers from '../views/careers.vue'
import contactUs from '../views/contactUs.vue'

import newsCenter from '../views/newsCenter.vue'
import newsCenterDetails from '@/views/newCenterDetails.vue'

import productDetails from '@/views/productDetails'
import productsServices from '@/views/products-services'
import manufacturing from '@/views/manufacturing'
import products from '@/views/products'

Vue.use(VueRouter)

const routerPush = VueRouter.prototype.push;
VueRouter.prototype.push = function (location) {
  return routerPush.call(this, location).catch((err) => { }); z
};

const routes = [
  {
    path: '/home',
    redirect: '/',
  },
  {
    path: '/',
    name: 'home',
    component: HomeView,
    meta: {
      keepAlive: true,
    }
  },
  {
    path: '/products-services',
    name: 'products-services',
    component: productsServices,
  },
  {
    path: '/careers',
    name: 'careers',
    component: careers,
    meta: {
      keepAlive: true,
    }
  },
  {
    path: '/contactUs',
    name: 'contactUs',
    component: contactUs,
    meta: {
      keepAlive: true,
    }
  },
  {
    path: '/newsCenter',
    name: 'newsCenter',
    component: newsCenter
  },
  {
    path: '/newsCenterDetails/:id',
    name: 'newsCenterDetails',
    component: newsCenterDetails
  },
  {
    path: '/details/:name',
    name: 'details',
    component: productDetails,
    meta: {
      keepAlive: false,
    }
  },
  {
    path: '/products',
    name: 'products',
    component: products
  },
  {
    path: '/manufacturing',
    name: 'manufacturing',
    component: manufacturing
  },
]

let router = new VueRouter({
  mode: 'hash',
  routes
})





export default router
