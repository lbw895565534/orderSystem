// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import locale from 'element-ui/lib/locale/lang/en'
import Vant from 'vant';
import 'vant/lib/index.css';
import MintUI from 'mint-ui'
import '@/assets/css/my-mint.css';
import '@/assets/libs/font/iconfont.css';
import 'mint-ui/lib/style.css'
import $ from '@/assets/libs/jquery-3.3.1.min.js'
import animate from 'animate.css'
import '@/assets/css/my-element.css';
import 'element-ui/lib/theme-chalk/index.css';

Vue.use(Vant);
Vue.use(ElementUI, { locale })

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
