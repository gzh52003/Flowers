import Vue from 'vue';
import VueRouter from 'vue-router'

import Home from '../components/Home.vue'
import User from '../components/user/UserIndex.vue'
import UserList from '../components/user/UserList.vue'
import UserAdd from '../components/user/UserAdd.vue'
import UserEdit from '../components/user/UserEdit.vue'

import Order from '../components/order/OrderIndex.vue'
import OrderList from '../components/order/OrderList.vue'

import Goods from '../components/goods/GoodsIndex.vue'

import GoodsList from '../components/goods/GoodsList.vue'
import Add from '../components/goods/goodslist/add.vue'
import Add1 from '../components/goods/goodslist/add1.vue'
import Add2 from "../components/goods/goodslist/add2.vue"
import Add3 from '../components/goods/goodslist/add3.vue'
import Add4 from "../components/goods/goodslist/add4.vue"
import Add5 from "../components/goods/goodslist/add5.vue"

import GoodsMsg from '../components/goods/GoodsMsg.vue'
import GoodsSort from '../components/goods/GoodsSort.vue'
import GoodsAdd from '../components/goods/goodslist/add.vue'

import AdminManage from '../components/admin/AdminIndex.vue'
import AdminList from '../components/admin/AdminList.vue'

import Data from '../components/data/Data.vue'

import NotFound from '../components/NotFound.vue'

import Public from "../components/Public.vue"
import Login from "../components/Login.vue"

// 2.使用vue-router
Vue.use(VueRouter);
// 实例化router并配置参数
const router = new VueRouter({
    routes: [
        {
            path: '/',
            redirect: '/login'
        }, {
            path: "/public",
            component: Public,
            children: [
                {
                    path: '/home',
                    component: Home
                }, {
                    path: '/goods',
                    component: Goods,
                    children: [{
                        path: 'goodslist',
                        component: GoodsList,
                    }, {
                        path: "/add",
                        component: GoodsAdd
                    }, {
                        path: 'goodsmsg',
                        component: GoodsMsg,
                        children:[{
                            path:"add5",
                            component: Add5,
                        }]
                    }, {
                        path: 'goodssort',
                        component: GoodsSort,
                    }]

                },
                {
                    path: "/add",
                    component: Add,
                    children: [{
                        path: "add1",
                        component: Add1
                    }, {
                        path: "add2",
                        component: Add2
                    },
                    {
                        path: "add3",
                        component: Add3
                    }, {
                        path: "add4",
                        component: Add4
                    },
                    ]
                }, {
                    path: '/order',
                    component: Order,
                    children: [{
                        path: 'orderlist',
                        component: OrderList,
                    }]
                }, {
                    path: '/user',
                    component: User,
                    children: [{
                        path: 'userlist',
                        component: UserList,
                    },{
                        path:'useradd',
                        component: UserAdd,
                    },{
                        name:'userEdit',
                        path:'useredit/:id',
                        component: UserEdit,
                    }]

                }, {
                    path: '/adminmanage',
                    component: AdminManage,
                    children: [{
                        path: 'adminList',
                        component: AdminList
                    }]

                }, {
                    path: '/data',
                    component: Data
                },
            ]
        },
        {
            path: "/login",
            component: Login
        },


        {
            path: '/404',
            component: NotFound

        }, {
            path: '*',
            redirect: '/404'

        }
    ]
})

export default router;
