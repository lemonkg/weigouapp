// 所有的路由设置
import Vue from 'vue'
import Router from 'vue-router'
import home from '../components/home.vue'
import newslist from '../router/newlist.vue'
import newsinfo from '../router/newsinfo.vue'
import search from '../components/search.vue'
import shoppingcar from '../components/shoppingcar.vue'
import vip from '../components/vip.vue'
import imglist from '../router/imglist.vue'
import videolist from '../router/videolist.vue'
import videoinfo from '../router/videoinfo.vue'

// 全局使用路由
Vue.use(Router)

export default new Router({
  routes: [
    {path: '/home', component: home},
    {path: '/home/newslist', component: newslist},
    {path: '/home/newslist/:id', component: newsinfo},
    {path: '/vip', component: vip},
    {path: '/shoppingcar', component: shoppingcar},
    {path: '/search', component: search},
    {path: '/home/imglist', component: imglist},
    {path: '/home/videolist', component: videolist},
    {path: '/home/videoinfo/:id:uid', component: videoinfo},
    {path: '/', redirect: '/home'}
  ],
  linkActiveClass: 'mui-active'
})
