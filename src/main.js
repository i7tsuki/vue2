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
  mutations: {
    setStateStep1(state, argument) {
      state.gender = argument.gender;
      state.yearOfBirth = argument.inputYear;
      state.monthOfBirth = argument.inputMonth;
      state.dateOfBirth = argument.inputDay;
    }, 
    setStateStep2(state, argument) {
      state.havingLifeInsurance = argument.havingLifeInsurance;
      state.hospitalization = argument.hospitalization;
      state.lastFiveYears = argument.lastFiveYears;
    }, 
    setStateStep3(state, argument) {
      state.consultationContent = argument.consultationContent;
    }, 
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
