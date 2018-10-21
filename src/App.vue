<template>
  <div id="app" class="container">
    <img src="./assets/logo.png">
    <div class="container">
      <form action="" @submit.prevent="onSubmit()">
        <div class="form-group">
          <label for="email">email</label>
          <input
                  type="email"
                  id="email"
                  class="form-control"
                  :class="{'is-invalid' : $v.email.$error}"
                  v-model="email"
                  @blur="$v.email.$touch()"
          >
          <div class="invalid-feedback" v-if="!$v.email.required">Email field is required</div>
          <div class="invalid-feedback" v-if="!$v.email.email">This field should be an email</div>
        </div>
        <div class="form-group">
          <label for="email">password</label>
          <input
                  type="password"
                  id="password"
                  class="form-control"
                  :class="{'is-invalid' : $v.password.$error}"
                  v-model="password"
                  @blur="$v.password.$touch()"
          >
          <div class="invalid-feedback" v-if="!$v.password.minLength">
            Min lenght of password is {{ $v.password.$params.minLength.min }} Now is it {{ password.length }}
          </div>
        </div>
        <div class="form-group">
          <label for="email">password</label>
          <input
                  type="password"
                  id="confirm"
                  class="form-control"
                  :class="{'is-invalid' : $v.confirmPassword.$error}"
                  v-model="confirmPassword"
                  @blur="$v.confirmPassword.$touch()"
          >
          <div class="invalid-feedback" v-if="!$v.confirmPassword.sameAs">
            Password should match
          </div>
        </div>
        <button
                class="btn btn-success"
                :disabled="$v.$invalid"
        >submit</button>
      </form>
    </div>

  </div>
</template>

<script>
    import { required, email, minLength, sameAs } from 'vuelidate/lib/validators'
export default {
  data(){
      return {
          email: '',
          password: '',
          confirmPassword: ''

      }
  },
  methods: {
      onSubmit() {
          console.log(this.email);
          console.log(this.password);
      }
  },
  validations: {
      email: {
          required,
          email,
          uniqueEmail(newEmail) {
              if(newEmail === '') return true;
              return new Promise(function (resolve) {
                  setTimeout(function () {
                      const value = newEmail !== 'vdh1ldebrand@i.ua';
                      resolve(value);
                  }, 3000)

              })

          }
      },
      password: {
        minLength: minLength(6)
      },
      confirmPassword: {
          sameAs: sameAs('password')
      }
  }
}
</script>

<style scoped>
#app {
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
