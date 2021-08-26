import Vue from 'vue'
import App from './App.vue'
import './assets/tailwind.css'
import Api from './api'

Vue.config.productionTip = false

Vue.prototype.$api = new Api()

new Vue({
  render: h => h(App)
}).$mount('#app')
