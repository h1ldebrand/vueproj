<template>
  <div id="app">
    <img src="./assets/logo.png">
    <h1>Parent: {{ carName }}</h1>
    <app-car
     :carName="carName"
     :carYear="carYear"
     :changeFunc="changeNameToAudi"
     @nameChanged="carName = $event"
     @counterUpdated="counter = $event"
     ></app-car>
     <app-counter>
         <h2 slot="title">title tle tle</h2>
         <p slot="text">html ml ml</p>
     </app-counter>
  </div>
</template>

<script>
import Car from './Car.vue';
import Counter from './Counter.vue';

export default {
    name: 'app',
    data () {
        return {
            carName: "Ford from parent",
            carYear: 2015,
            // counter: 0
        }
    },
    components: {
        appCar: Car,
        appCounter: Counter
    },
    methods: {
        changeNameToAudi(){
            this.changeName = "Audi"
        }
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

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
