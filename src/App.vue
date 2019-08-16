<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld :msg="msg"/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'app',
  data: function () {
    return {
      msg: 'Loading...'
    }
  },
  components: {
    HelloWorld
  },
  methods:  {
    getData: async function () {
      try {
        let data = await (await fetch('api')).json()
        this.msg = data.msg
      } catch (err) {
        throw err
      }
    }
  },
  mounted: function () {
    this.getData()
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
