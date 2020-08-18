import Vue from 'vue'
import BootstrapVue from "bootstrap-vue"
import router from './router'
import App from './App.vue'

// import css files
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

import { BootstrapVueIcons } from 'bootstrap-vue'
import 'bootstrap-vue/dist/bootstrap-vue-icons.min.css'



Vue.config.productionTip = false

Vue.use(BootstrapVue);
Vue.use(BootstrapVueIcons)

new Vue({
  render: h => h(App),
  router,         
}).$mount('#app')
