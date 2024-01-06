import Vue from 'vue';
import VueRouter from "vue-router";
import Home from '@/pages/Home';
import About from "@/pages/About";
import Blog from "@/pages/Blog/index.vue";
import Message from "@/pages/Message/index.vue";
import Project from "@/pages/Project/index.vue";
import BlogDetail from '@/pages/Blog/Detail.vue';
import Demo from "@/pages/Demo/index.vue";
import {setRouterTitle} from "@/utils/titleController";

Vue.use(VueRouter);

const router = new VueRouter({
    routes: [
        {
            name: 'Home', path: '/', component: Home, meta: {title: '首页'}
        },
        {name: 'About', path: '/about', component: About, meta: {title: '关于我'}},
        {name: 'Blog', path: '/blog', component: Blog, meta: {title: '文章'}},
        {name: 'CategoryBlog', path: '/blog/cate/:categoryId', component: Blog, meta: {title: '文章分类'}}, // 动态路由
        {name: 'BlogDetail', path: '/blog/:id', component: BlogDetail, meta: {title: '文章详情'}},
        {name: 'Message', path: '/message', component: Message, meta: {title: '留言板'}},
        {name: 'Project', path: '/project', component: Project, meta: {title: '项目&效果'}},
        {name: 'Demo', path: '/demo', component: Demo, meta: {title: '组件通信demo'}},
    ],
    mode: 'history'
})

router.afterEach((to, from) => {
    setRouterTitle(to.meta.title);
})

export default router;
