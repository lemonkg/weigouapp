/* eslint-disable import/first */
// 公共js文件
import Vue from 'vue'
import app from './App.vue'
import routerObj from './router/index.js' // 引入路由文件
import vueResouce from 'vue-resource'
Vue.use(vueResouce)
// 导入mui框架
import './lib/mui/css/mui.css'
import './lib/mui/css/icons-extra.css'
import './lib/mui/fonts/mui-icons-extra.ttf'
import './assets/index.css'
// var mui=require('./lib/mui/js/mui.js')
import mui from './lib/mui/js/mui.js'
Vue.prototype.$mui = mui

// 导入mint-ui,并按需引入
import 'mint-ui/lib/style.css'
import {Tabbar, TabItem, Header, Swipe, SwipeItem, Button, Lazyload} from 'mint-ui' // 暴露mint-ui组件在入口js中,可全局使用mint-ui
Vue.component(Tabbar.name, Tabbar)
Vue.component(TabItem.name, TabItem)
Vue.component(Header.name, Header)
Vue.component(Swipe.name, Swipe)
Vue.component(SwipeItem.name, SwipeItem)
Vue.component(Button.name, Button)
Vue.use(Lazyload)

// 全局设置时间格式
import moment from 'moment'
Vue.filter('dateFormat', function (datastr, pattern = 'Y年MM月DD日') {
  return moment(datastr).format(pattern)
})

// 跨域请求
import axios from 'axios'
Vue.prototype.$axios = axios

// eslint-disable-next-line no-new
new Vue({
  el: '#app',
  data: {
    masg: 'zkg'
  },
  methods: {},
  render: c => c(app),
  router: routerObj
})
