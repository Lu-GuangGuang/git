import Vue from 'vue'
import App from './App.vue'
import vueaxios from'vue-axios'
import axios from 'axios'
Vue.use(vueaxios,axios)
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
