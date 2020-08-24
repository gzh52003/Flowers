import Vue from 'vue'
import App from './App.vue'
// 1.引入vue-router
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';
import echarts from 'echarts'
import request from "./utils/request"

import md5 from 'js-md5'

import Vuex from "vuex"

Vue.prototype.$md5 = md5

Vue.prototype.$echarts = echarts
Vue.prototype.$request = request

Vue.use(ElementUI)
Vue.use(Vuex)

var store = new Vuex.Store({
  state: {  //  这里相当于Vue实例中的data，用于存放数据
    msg: ''
  },
  mutations: { //  这里相当于Vue实例中的methods，用于定义方法 所有的方法都过来拿
    getMsg(state) {  // state是个形参 是state对象里面的数据都可以拿到 不通过this来拿
      state.msg
    }
  },
  getters: {
    // 这里可以监听state的值 直接返回出去 只读取值 如果需要修改值 找mutations  需要return出去
    readMsg(state) {
      return '我是store里面的数据' + state.msg

    }
  }
})

new Vue({
  //4. 把router注入Vue实例
  router,
  store,
  render: h => h(App),
}).$mount('#app')

// console.log(router);s