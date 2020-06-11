import Vue from 'vue'
import App from './App.vue'
import router from './router/router'
import store from './store/store'
import ElementUI from 'element-ui'
import './directive/index'
import './styles.scss'
import * as filters from './filters/index'
Object.keys(filters).forEach(key=> {
  Vue.filter(key,filters[key]);
})
Vue.use(ElementUI)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
