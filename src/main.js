import Vue from 'vue'
import Vuelidate from 'vuelidate'
import App from './App.vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import router from './router'
import store from './store'
import dateFilter from './filters/datefilter'
import messagePlugin from './utils/message.plugin'
import 'materialize-css/dist/js/materialize.min.js'

Vue.config.productionTip = false

Vue.use(Vuelidate)
Vue.use(VueAxios, axios)
Vue.filter('date', dateFilter)
Vue.use(messagePlugin)
Vue.prototype.$axios = axios


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
