import Vue from 'vue'
import App from './App.vue'
import createRouter from './router'
import vuetify from './plugins/vuetify'
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.use(VueAxios, axios)
const state = {
  user: {}
}

Vue.config.productionTip = false

new Vue({
  data: state,
  router: createRouter(state),
  vuetify,
  render: h => h(App)
}).$mount('#app')
