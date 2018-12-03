import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/main/Home'
import OReport from '@/pages/order/admin/Report'
import OLogin from '@/pages/order/login/Login'
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
      path: '/report',
      name: 'OReport',
      component: OReport,
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
