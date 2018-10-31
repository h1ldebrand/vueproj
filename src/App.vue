<template>
  <div class="container">
      <ul class="nav">
          <router-link tag="li" class="nav-item" exact to="/" active-class="active">
              <a class="nav-link" >Home</a>
          </router-link>
          <router-link tag="li" class="nav-item" to="/cars" active-class="active">
              <a class="nav-link">Cars</a>
          </router-link>

          <router-link
                  tag="li"
                  class="nav-item"
                  active-class="active"
                  v-for="car in 5"
                  :to="'/car/' + car"
                  :key="car"
          >
              <a class="nav-link">Car {{ car }}</a>
          </router-link>
      </ul>
      <router-view></router-view>
  </div>
</template>

<script>

export default {

}
</script>

<style scoped>
    .nav-item.active .nav-link{
        color: blueviolet;
    }

</style>
