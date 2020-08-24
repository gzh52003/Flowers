import Vue from 'vue'
import App from './App.vue'
// 1.引入vue-router
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';
import echarts from 'echarts'
import request from "./utils/request"

import md5 from 'js-md5'

// import Vuex from "vuex"

Vue.prototype.$md5 = md5

Vue.prototype.$echarts = echarts
Vue.prototype.$request = request

Vue.use(ElementUI)


new Vue({
  //4. 把router注入Vue实例
  router,
  render: h => h(App),
}).$mount('#app')

// console.log(router);s