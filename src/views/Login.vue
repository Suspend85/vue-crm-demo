<template>
  <form class="card auth-card" @submit.prevent="submitHandler">
    <div class="card-content">
      <span class="card-title">Домашняя бухгалтерия</span>
      <div class="input-field">
        <input
            id="email"
            type="text"
            class="validate"
            v-model.trim="email"
            :class="{invalid: (v$.email.$dirty && !v$.email.required) || (v$.email.$dirty && !v$.email.email)}"
        >

        <label for="email">Email</label>
        <small class="helper-text invalid" v-if="v$.email.$error">{{ v$.email.$errors[0].$message }}</small>
<!--        <small class="helper-text invalid" v-else-if="v$.email.$dirty && !v$.email.email">Поле email не должно быть пустым</small>-->
      </div>
      <div class="input-field">
        <input
            id="password"
            type="password"
            class="validate"
            :class="{invalid: (v$.password.$dirty && !v$.password.required) || (v$.password.$dirty && !v$.password.minLength)}"
            v-model="password">

        <label for="password">Пароль</label>
        <small class="helper-text invalid" v-if="v$.password.$error">{{ v$.password.$errors[0].$message }}</small>
      </div>
    </div>
    <div class="card-action">
      <div>
        <button class="btn waves-effect waves-light auth-submit" type="submit">
          Войти
          <i class="material-icons right">send</i>
        </button>
      </div>

      <p class="center">
        Нет аккаунта?
        <router-link to="/register">Зарегистрироваться</router-link>
      </p>
    </div>
  </form>
</template>

<script>
import {email, required, minLength} from '@vuelidate/validators';
import useVuelidate from '@vuelidate/core';
// const v$ = require('@vuelidate/validators/dist/raw');

export default {
  name: 'login',
  // setup () {
  //   return {v$: useVuelidate()};
  // },
  data: () => ({
    v$: useVuelidate(),
    email: '',
    password: ''
  }),
  validations: () => ({
    email: {required, email},
    password: {required, minLength: minLength(6)}
  }),
  methods: {
    submitHandler() {
      // console.log(this.v$.password.minLength.$params.min);
      // this.v$.$validate();
      if (this.v$.$invalid) {
        this.v$.$touch()
        return
      }
      const formData = {
        email: this.email,
        password: this.password
      }
      console.log(formData);
      this.$router.push('/');
    }
  }
};
</script>

<style scoped>

</style>