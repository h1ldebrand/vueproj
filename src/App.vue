<template>
  <div id="app">
    <img src="./assets/logo.png">
    <h2>{{ title }}</h2>
    <h2>{{ title | lowercase }}</h2>
    <h2>{{ title | uppercase }}</h2>

    <input type="text" v-model="searchName">
    <ul>
        <li v-for="name of filteredNames">{{ name }}</li>
    </ul>

  </div>
</template>

<script>

export default {
    data () {
        return {
            title: "Hello I am Vue!",
            names: ['Vlad', 'Elena', 'Igor', 'Nastya', 'Katya'],
            searchName: ''
        }
    },
    computed:{
        filteredNames(){
            return this.names.filter(name => {
                return name.toLowerCase().indexOf(this.searchName.toLowerCase()) !== -1
            })
        }
    },
    filters: {
        lowercase(value){
            return value.toLowerCase();
        }
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
