import Vue from 'vue'
import App from './App.vue'
import 'bootstrap/scss/bootstrap.scss'
import router from './routes'

Vue.config.productionTip = false


new Vue({
  render: h => h(App),
  router: router,
}).$mount('#app')
