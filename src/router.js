import Vue from 'vue';
import VueRouter from "vue-router";
import Home from "@/views/Home.vue";
import News from "@/views/News.vue";
import Loading from "@/views/Loading.vue";
import Login from "@/views/Login.vue";
import User from "@/views/User.vue";
import store from '@/store/index';

Vue.use(VueRouter);

const router = new VueRouter({
    routes: [
        {path: '/', component: Home},
        {path: '/news', component: News, meta: {auth: true}},
        {path: '/loading', component: Loading},
        {path: '/login', component: Login},
        {path: '/User', component: User, meta: {auth: true}},
    ],
    mode: 'history'
})

router.beforeEach((to, from, next) => {
    if (to.meta.auth) {
        const status = store.getters['loginUser/status'];
        if (status === 'loading') {
            next({
                path: '/loading',
                query: {
                    returnUrl: to.fullPath
                }
            })
        } else if (status === 'login') {
            next();
        } else {
            alert('该页面需要登录，请先登录');
            next({
                path: '/login',
                query: {
                    returnUrl: to.fullPath
                }
            })
        }
    } else {
        next();
    }
})

export default router;