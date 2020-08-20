import Vue from 'vue';
import VueRouter from 'vue-router'

import Home from '../components/Home.vue'
import User from '../components/User.vue'
import Order from '../components/Order.vue'
import Goods from '../components/Goods.vue'
import Login from '../components/Login.vue'
import Reg from '../components/Reg.vue'
import NotFound from '../components/NotFound.vue'

// 2.使用vue-router
Vue.use(VueRouter);
// 实例化router并配置参数
const router = new VueRouter({
    routes:[
        {
            path:'/',
            redirect:'/home'
        },
        {
            path:'/home',
            component: Home
        },{
            path:'/goods',
            component: Goods

        },{
            path:'/order',
            component: Order

        },{
            path:'/user',
            component: User

        },{
            path:'/login',
            component: Login

        },{
            path:'/reg',
            component: Reg

        },{
            path:'/404',
            component: NotFound

        },{
            path:'*',
            redirect:'/404'

        }
    ]
})

export default router;
