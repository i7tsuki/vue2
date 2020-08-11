<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
import Step1 from './components/Step1.vue'
import Step2 from './components/Step2.vue'
import Step3 from './components/Step3.vue'

export default {
  name: 'App',
  routes: [
    {
      path: '/',
      redirect: {
        name: 'step1'
      }
    },
    {
      path: '/step1',
      name: 'step1',
      component: Step1,
    },
    {
      path: '/step2',
      name: 'step2',
      component: Step2,
    },
    {
      path: '/step3',
      name: 'step3',
      component: Step3,
    },
  ]
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
