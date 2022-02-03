import Vue from "vue";
import VueRouter from 'vue-router'

// 懒加载
const lz = () => import('../view/lz.vue')
const ch = () => import('../view/超会.vue')

import permission from '../view/permission.vue';

// import lz from '../view/lz.vue'
// import ch from '../view/超会.vue'

Vue.use(VueRouter)

const routes=[
    {path:'/',component:permission},
    {path:'/lz',component:lz},
    {path:'/ch',component:ch}
]

export default new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
  })