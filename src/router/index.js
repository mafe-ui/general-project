import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [{
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/about',
        name: 'About',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import ( /* webpackChunkName: "about" */ '../views/About.vue')
    },
    // {
    //   // 开户信息
    //   path: '/main/openingInformation',
    //   name: 'openingInformation',
    //   component: resolve => require(['@/views/mine/OpeningInformation.vue'], resolve),
    //   meta: {
    //     requireAuth: true,//每一个都要写此字段
    //     keepAlive: true // 此组件需要被缓存
    //   }
    // },
]
const router = new VueRouter({
    routes,
    scrollBehavior(to, from, savedPosition) { //解决拖动时多个页面互相影响的问题，当切换到新路由时，想要页面滚到顶部

        // return { x: 0, y: 0 }
        if (savedPosition) {
            return savedPosition
        } else {
            return { x: 0, y: 0 }
        }

    }
})

export default router