<template>
  <div id="app">
    <Step1 v-if="this.$store.state.stepNum === 1"/>
    <Step2 v-if="this.$store.state.stepNum === 2"/>
    <Step3 v-if="this.$store.state.stepNum === 3"/>
  </div>
</template>

<script>
import Step1 from './components/Step1.vue'
import Step2 from './components/Step2.vue'
import Step3 from './components/Step3.vue'

export default {
  name: 'App',
  components: {
    Step1, 
    Step2, 
    Step3, 
  }
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
