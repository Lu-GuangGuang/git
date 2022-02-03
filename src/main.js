import Vue from 'vue'
import App from './App.vue'
import vueaxios from 'vue-axios'
import axios from 'axios'
import router from './routes'
import store from './store'
Vue.use(vueaxios, axios)
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')