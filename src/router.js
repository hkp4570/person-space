import Vue from 'vue';
import VueRouter from "vue-router";
import Home from '@/pages/Home';
import About from "@/pages/About";
import Blog from "@/pages/Blog/index.vue";
import Message from "@/pages/Message/index.vue";
import Project from "@/pages/Project/index.vue";

Vue.use(VueRouter);

const router = new VueRouter({
    routes: [
        {name: 'Home', path: '/', component: Home},
        {name: 'About', path: '/about', component: About},
        {name: 'Blog', path: '/blog', component: Blog},
        {name: 'Message', path: '/message', component: Message},
        {name: 'Project', path: '/project', component: Project},
    ],
    mode: 'history'
})

export default router;
