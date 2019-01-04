import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/main/Home'
import OReport from '@/pages/order/admin/Report'
import OManager from '@/pages/order/admin/Manager'
import OAdd from '@/pages/order/admin/Add'
import ORemove from '@/pages/order/admin/Remove'
import OLogin from '@/pages/order/login/Login'
import OLogin2 from '@/pages/order/login/Login2'
import OSetpassword from '@/pages/order/login/Setpassword'
import Order from '@/pages/order/user/Order'
import ORecord from '@/pages/order/user/Record'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/login',
      name: 'OLogin',
      component: OLogin,
    },
    {
      path: '/login2',
      name: 'OLogin2',
      component: OLogin2,
    },
    {
      path: '/report',
      name: 'OReport',
      component: OReport,
    },
    {
      path: '/manager',
      name: 'OManager',
      component: OManager,
    },
    {
      path: '/add',
      name: 'OAdd',
      component: OAdd,
    },
    {
      path: '/remove',
      name: 'ORemove',
      component: ORemove,
    },
    {
      path: '/setpassword',
      name: 'OSetpassword',
      component: OSetpassword
    },
    {
      path: '/order',
      name: 'Order',
      component: Order,
    },
    {
      path: '/record',
      name: 'ORecord',
      component: ORecord,
    }
  ]
})
