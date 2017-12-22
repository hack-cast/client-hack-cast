// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import store from './vuex/index'
import axios from 'axios'

import {
  Vuetify,
  VApp,
  VNavigationDrawer,
  VCard,
  VList,
  VBtn,
  VIcon,
  VGrid,
  VToolbar,
  VMenu,
  VAvatar,
  VProgressLinear,
  VDialog,
  transitions
} from 'vuetify'
import '../node_modules/vuetify/src/stylus/app.styl'

import App from './App'
import router from './router'

Vue.use(Vuetify, {
  components: {
    VApp,
    VNavigationDrawer,
    VCard,
    VList,
    VBtn,
    VIcon,
    VGrid,
    VToolbar,
    VMenu,
    VAvatar,
    VProgressLinear,
    VDialog,
    transitions
  }
})

Vue.config.productionTip = false

Vue.prototype.$axios = axios.create({
  baseURL: 'http://api.hackcast.tk'
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
