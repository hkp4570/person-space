import Vue from 'vue';
import VueRouter from "vue-router";
import {setRouterTitle} from "@/utils/titleController";

if (!window.VueRouter) {
    Vue.use(VueRouter);
}

const router = new VueRouter({
    routes: [
        {
            name: 'Home',
            path: '/',
            component: () => import(/* webpackChunkName: "home" */ "@/pages/Home"),
            meta: {title: '首页'}
        },
        {
            name: 'About',
            path: '/about',
            component: () => import(/* webpackChunkName: "about" */ "@/pages/About"),
            meta: {title: '关于我'}
        },
        {
            name: 'Blog',
            path: '/blog',
            component: () => import(/* webpackChunkName: "blog" */ "@/pages/Blog"),
            meta: {title: '文章'}
        },
        {
            name: 'CategoryBlog',
            path: '/blog/cate/:categoryId',
            component: () => import(/* webpackChunkName: "categoryBlog" */ "@/pages/Blog"),
            meta: {title: '文章分类'}
        }, // 动态路由
        {
            name: 'BlogDetail',
            path: '/blog/:id',
            component: () => import(/* webpackChunkName: "blogDetail" */ "@/pages/Blog/Detail.vue"),
            meta: {title: '文章详情'}
        },
        {
            name: 'Message',
            path: '/message',
            component: () => import(/* webpackChunkName: "message" */ "@/pages/Message"),
            meta: {title: '留言板'}
        },
        {
            name: 'Project',
            path: '/project',
            component: () => import(/* webpackChunkName: "project" */ "@/pages/Project"),
            meta: {title: '项目&效果'}
        },
        {
            name: 'Demo',
            path: '/demo',
            component: () => import(/* webpackChunkName: "demo" */ "@/pages/Demo"),
            meta: {title: '组件通信demo'}
        },
    ],
    mode: 'history'
})

router.afterEach((to, from) => {
    setRouterTitle(to.meta.title);
})

export default router;
