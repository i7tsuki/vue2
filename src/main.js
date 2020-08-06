import Vue from 'vue'
import Vuex from 'vuex'
import App from './App.vue'

Vue.config.productionTip = false
Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    stepNum: 1
  }, 
  mutations: {
    StepNumIncrement(state) {
      state.stepNum++
    },
    StepNumDecrement(state) {
      state.stepNum--
    }
  }
});

new Vue({
  store,
  render: h => h(App),
}).$mount('#app');
