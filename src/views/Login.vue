<template>
  <form class="card auth-card" @submit.prevent="submitHandler">
    <div class="card-content">
      <span class="card-title">Домашняя бухгалтерия</span>
      <div class="input-field">
        <input  
        id="email"
        type="text"
        v-model.trim="email"
        :class="{invalid: ($v.email.$dirty && !$v.email.required) || ($v.email.$dirty && !$v.email.email)}"
        />
        <label for="email">Email</label>
        <small
        class="helper-text invalid"
        v-if="$v.email.$dirty && !$v.email.required"
        >Обязательное поле</small>
        <small
        class="helper-text invalid"
        v-else-if="$v.email.$dirty && !$v.email.email"
        >Некорректный Email</small>
      </div>
      <div class="input-field">
        <input  
        id="password"
        type="password"
        v-model.trim="password"
        :class="{invalid: ($v.password.$dirty && !$v.password.required) || ($v.password.$dirty && !$v.password.minLength)}"
        />
        <label for="password">Пароль</label>
        <small v-if="$v.password.$dirty && !$v.password.required" class="helper-text invalid">Обязательное поле</small>
        <small v-else-if="$v.password.$dirty && !$v.password.minLength" class="helper-text invalid">Слишком короткий пароль</small>
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
      </p>
      <p class="center">
        <router-link to="/register">Зарегистрироваться</router-link>
        <router-link to="/">Зайти как гость</router-link>
      </p>
    </div>
  </form>
</template> 

<script>
import {email, required, minLength} from 'vuelidate/lib/validators'
import messages from '../utils/messages'
export default {
  name: 'login',
  data: ()=> ({
    email: '',
    password: '',
    info: {},
    error: ''
  }),
  validations: {
    email: {email, required},
    password: {required, minLength: minLength(6)}
  },
  mounted () {
      if(messages[this.$route.query.message]){
        this.$message(messages[this.$route.query.message])
      }
  },
  methods: {
    async submitHandler(){
      if (this.$v.$invalid) {
        this.$v.$touch()
        return
      }
      await this.axios.post('http://imager.flcd.ru/api/login', {
          'email': this.email,
          'password' : this.password
        })
        .then((response) =>{ localStorage.token = response.data.data.token
          this.$router.push('/?message=login')
        })
        .catch(() =>  this.$error("Введены неправильные данные"))
    }
  }
}
</script>