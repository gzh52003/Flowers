import Vue from 'vue';
import VueRouter from 'vue-router'

import Home from '../components/Home.vue'
import User from '../components/user/UserIndex.vue'
import UserList from '../components/user/UserList.vue'

import Order from '../components/order/OrderIndex.vue'
import OrderList from '../components/order/OrderList.vue'

import Goods from '../components/goods/GoodsIndex.vue'
import GoodsList from '../components/goods/GoodsList.vue'
import GoodsMsg from '../components/goods/GoodsMsg.vue'
import GoodsSort from '../components/goods/GoodsSort.vue'

import AdminManage from '../components/admin/AdminIndex.vue'
import AdminList from '../components/admin/AdminList.vue'
import RoleList from '../components/admin/RoleList.vue'
import Data from '../components/data/Data.vue'

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
            component:Goods,
            children:[{
                path:'goodslist',
                component: GoodsList,
            },{
                path:'goodsmsg',
                component: GoodsMsg,
            },{
                path:'goodssort',
                component: GoodsSort,
            }]

        },{
            path:'/order',
            component:Order,
            children:[{
                path:'orderlist',
                component: OrderList,
            }]
        },{
            path:'/user',
            component:User,
            children:[{
                path:'userlist',
                component: UserList,
            }]

        },{
            path:'/adminmanage',
            component: AdminManage,
            children:[{
                path:'adminList',
                component:AdminList
            },{
                path:'rolelist',
                component:RoleList
            }]

        },{
            path:'/data',
            component:Data
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
