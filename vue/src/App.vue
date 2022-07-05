<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <div>Hello</div>
  <HelloWorld msg="Welcome to Your Vue.js App"/>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    HelloWorld
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



<!-- <template>
	<div id="app">
		<router-link class="link" :to="{ path: '/hello', query: { name: 'Foo' }}">Say hello</router-link>
		<router-link class="link" :to="{ path: '/goodbye', query: { name: 'Foo' }}">Say goodbye</router-link>
		<br>
		<router-view></router-view>
	</div>
</template>

<script>
	export default {
    name: 'app'
  }
</script>

<style>
	#app {
		margin: 60px;
	}

	.link {
		display: inline-block;
		padding: 10px;
	}

	.router-link-active {
		color: green;
	}
</style> -->
