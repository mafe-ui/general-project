import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './plugins/axios'
// 国际化
import i18n from '@/assets/js/locale/i18n.js'

//引入公共篩選方法
import vueFilter from '@/assets/js/computedFilter'
for (let key in vueFilter) {
    Vue.filter(key, vueFilter[key])
}

// 挂在原型链上的函数
import prototypes from '@/assets/js/prototype.js'
Vue.use(prototypes)

//限制重复点击
import repeatclick from '@/assets/js/repeat-click.js'
Vue.use(repeatclick)

// cookie
import VueCookies from 'vue-cookies'
Vue.use(VueCookies)

//引入rem
import rem from './assets/js/rem.js'
Vue.use(rem)
    // websocket
    // import '@/assets/js/socket'

Vue.config.productionTip = false

// 路由守卫
router.beforeEach((to, from, next) => {
    console.log('sfsf')
    if (to.meta.requireAuth) { // 判断该路由是否需要登录权限
        if (localStorage.hasOwnProperty('Token')) { // 判断本地是否存在access_token
            next()
        } else {
            next({
                path: '/login'
            })
        }
    } else {
        next()
    }
    /*如果本地 存在 token 则 不允许直接跳转到 登录页面*/
    if (to.fullPath == '/login') {
        if (localStorage.hasOwnProperty('Token')) {
            next({
                path: from.fullPath
            })
        } else {
            next()
        }
    }
})
new Vue({
    router,
    store,
    i18n,
    render: h => h(App)
}).$mount('#app')