<template>
  <div id="app">
    <img src="./assets/logo.png">
    <h2>Формы</h2>
    <input type="text" v-model="name"><br><br>
    <textarea v-model="textarea"></textarea><br><br>
    <label>
        <span>instagram</span>
        <input type="checkbox" value="instagram" v-model="social">
    </label>
    <label>
        <span>vk</span>
        <input type="checkbox" value="vk" v-model="social">
    </label>
    <label>
        <span>facebook</span>
        <input type="checkbox" value="facebook" v-model="social">
    </label><br><br>
    <select v-model="defaultSocial">
        <option v-for="s in socialList">{{ s }}</option>
    </select>
    <hr>
    <p>{{ name }}</p>
    <p>{{ textarea }}</p>
    <div class="">
        {{ social }}
    </div>
    <app-onoff v-model="switched"></app-onoff>
    <div class="">
        <h3 v-if="switched">Component is enabled</h3>
        <h3 v-else="switched">Component is disabled</h3>
    </div>
  </div>
</template>

<script>
import Onoff from './Onoff.vue'
export default {

    data () {
        return {
            name: '',
            textarea: '',
            social: [],
            defaultSocial: '',
            socialList: ['vk', 'facebook', 'instagram'],
            switched: false,
        }
    },
    components: {
        'app-onoff' : Onoff
    }
}
</script>

<style scoped>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
