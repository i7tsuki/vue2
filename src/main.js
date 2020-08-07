import Vue from 'vue'
import Vuex from 'vuex'
import VueRouter from 'vue-router'
import App from './App.vue'

Vue.config.productionTip = false
Vue.use(Vuex)
Vue.use(VueRouter)

const store = new Vuex.Store({
  state: {
    gender: null,
    yearOfBirth: null,
    monthOfBirth: null,
    dateOfBirth: null,
    havingLifeInsurance: null,
    hospitalization: null,
    lastFiveYears: null,
    consultationContent: null  
  },
});

const router = new VueRouter({
  mode: 'history',
  routes: App.routes
});

new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app');
