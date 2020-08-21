import Vue from 'vue'
import App from './App.vue'
// 1.引入vue-router
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';
import echarts from 'echarts'
Vue.prototype.$echarts = echarts

Vue.use(ElementUI)

new Vue({
  //4. 把router注入Vue实例
  router,
  render: h => h(App),
}).$mount('#app')

console.log(router);