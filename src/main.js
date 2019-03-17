// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import goods from './components/tabs/goods.vue'
import ratings from './components/tabs/ratings.vue'
import seller from './components/tabs/seller.vue'

import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
Vue.use(VueRouter)
Vue.use(VueResource)
Vue.config.productionTip = false

/* eslint-disable no-new */
const routes = [
  { path: '/', component: goods },
  { path: '/goods', component: goods },
  { path: '/ratings', component: ratings },
  { path: '/seller', component: seller },

]
const router = new VueRouter({
  routes ,
  linkActiveClass:'active'
})

new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
