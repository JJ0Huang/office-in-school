/**
 * 本项目主要完成以下功能：
 * 1. 账户登录，分为教师和学生两部分
 */
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import _http from './http/_http.js'
import qs from 'qs'

Vue.config.productionTip = false
Vue.prototype._http = _http
Vue.prototype._qs = qs

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
