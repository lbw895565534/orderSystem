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
import Shift from '@/pages/shift/index'
import Upload from '@/pages/practice/upload'
// 娱乐
import Showlove from '@/pages/media/showlove'
import Article from '@/pages/media/article/article'
import Addarticle from '@/pages/media/article/add-article'
import Alterarticle from '@/pages/media/article/alter-article'


Vue.use(Router)

export default new Router({
  routes: [
    // 主业务
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
      path: '/upload',
      name: 'Upload',
      component: Upload,
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
      path: '/shift',
      name: 'Shift',
      component: Shift,
    },

    // 后台管理页面
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

    // 娱乐页面
    {
      path: '/showlove',
      name: 'Showlove',
      component: Showlove,
    },
    {
      path: '/article',
      name: 'Article',
      component: Article,
    },
    {
      path: '/article/add',
      name: 'Addarticle',
      component: Addarticle,
    },
    {
      path: '/article/alter',
      name: 'Alterarticle',
      component: Alterarticle,
    },
  ]
})
