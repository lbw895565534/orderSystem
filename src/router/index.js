import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/main/Home'
import Menu from '@/pages/order/admin/Menu'
import OReport from '@/pages/order/admin/Report'
import OManager from '@/pages/order/admin/Manager'
import OAdd from '@/pages/order/admin/Add'
import ONotice from '@/pages/order/admin/Notice'
import ORemove from '@/pages/order/admin/Remove'
import OLogin from '@/pages/order/login/Login'
import OSetpassword from '@/pages/order/login/Setpassword'
import Order from '@/pages/order/user/Order'
import ORecord from '@/pages/order/user/Record'
import Swiper1 from '@/pages/media/swiper1'
import Swiper from '@/pages/media/swiper'
import Shift from '@/pages/shift/index'
import AlbumLantern from '@/pages/media/album-Lantern'
import Firework from '@/pages/media/firework'

Vue.use(Router)

export default new Router({
  routes: [
    
    {
      path: '/login',
      name: 'OLogin',
      component: OLogin,
      alias: '/'
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
    },
    {
      path: '/swiper1',
      name: 'Swiper1',
      component: Swiper1,
    },
    {
      path: '/swiper',
      name: 'Swiper',
      component: Swiper,
    },
    {
      path: '/shift',
      name: 'Shift',
      component: Shift,
    },
    {
      path: '/album-lantern',
      name: 'AlbumLantern',
      component: AlbumLantern,
    },
    {
      path: '/firework',
      name: 'Firework',
      component: Firework,
    },
    {
      path: '/omenu',
      name: 'Menu',
      component: Menu
    },
    {
      path: '/omanager',
      name: 'OManager',
      component: OManager,
    },
    {
      path: '/oadd',
      name: 'OAdd',
      component: OAdd,
    },
    {
      path: '/oremove',
      name: 'ORemove',
      component: ORemove,
    },
    {
      path: '/onotice',
      name: 'ONotice',
      component: ONotice,
    },
  ]
})
