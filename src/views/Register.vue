<template>
  <form class="card auth-card" @submit.prevent="submitHandler">
    <div class="card-content">
      <span class="card-title">Регистрация</span>

      <div class="input-field">
        <input v-model="name" id="name" type="text"
        :class="{invalid: ($v.name.$dirty && !$v.name.required)}"
        />
        <label for="name">Имя</label>
        <small v-if="$v.name.$dirty && !$v.name.required" class="helper-text invalid">Обязательное поле</small>
      </div>

      <div class="input-field">
        <input v-model="email" id="email" type="text" 
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
        <input v-model="password" id="password" type="password"
        :class="{invalid: ($v.password.$dirty && !$v.password.required) || ($v.password.$dirty && !$v.password.minLength)}"
        />
        <label for="password">Пароль</label>
        <small v-if="$v.password.$dirty && !$v.password.required" class="helper-text invalid">Обязательное поле</small>
        <small v-else-if="$v.password.$dirty && !$v.password.minLength" class="helper-text invalid">Слишком короткий пароль</small>
      </div>
      
      <div class="input-field">
        <input v-model="c_password" id="c_password" type="password"
        :class="{invalid: ($v.c_password.$dirty && !$v.c_password.required)}"
        />
        <label for="c_password">Повторите пароль</label>
        <small v-if="$v.c_password.$dirty && !$v.c_password.required" class="helper-text invalid">Обязательное поле</small>
        <small v-else-if="c_password !== password" class="helper-text invalid">Пароли не совпадают</small>

      </div>


      <div class="input-field">
        <input v-model="address" id="address" type="text"
        :class="{invalid: ($v.address.$dirty && !$v.address.required)}"
        />
        <label for="address">Адресс</label>
        <small v-if="$v.address.$dirty && !$v.address.required" class="helper-text invalid">Обязательное поле</small>
      </div>
      <p>
        <label>
          <input v-model="agree" type="checkbox"/>
          <span>С правилами согласен</span>
        </label>
      </p>
    </div>
    <div class="card-action">
      <div>
        <button class="btn waves-effect waves-light auth-submit" type="submit">
          Зарегистрироваться
          <i class="material-icons right">send</i>
        </button>
      </div>

      <p class="center">
        Уже есть аккаунт?
        <router-link to="/login">Войти!</router-link>
      </p>
    </div>
  </form>
</template>


<script>
import {email, required, minLength} from 'vuelidate/lib/validators'
export default {
  name: 'register',
  data: ()=> ({
    email: '',
    password: '',
    c_password: '',
    address: '',
    name: '',
    agree: false   
  }),
  validations: {
    email: {email, required},
    password: {required, minLength: minLength(6)},
    c_password: {required},
    name: {required},
    address: {required},
    agree: {checked: v => v}
  },
  methods: {
    async submitHandler(){
      if (this.$v.$invalid) {
        this.$v.$touch()
        return
      }
      await this.axios.post('http://imager.flcd.ru/api/register', {
          'name': this.name,
          'email': this.email,
          'password': this.password,
          'c_password': this.c_password,
          'address': this.address,
        })
        .then((response) =>{ localStorage.token = response.data.data.token
          this.$router.push('/?message=register')
        })
        .catch(() => this.$error("Не удалось авторизоваться, пользователь с таким email уже существует"))
    }
  }
}
</script>