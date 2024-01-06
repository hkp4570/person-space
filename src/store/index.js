import Vue from 'vue';
import Vuex from 'vuex';
import banner from "@/store/banner";
import setting from "@/store/setting";
import about from '@/store/about';
import project from "@/store/project";

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        banner,
        setting,
        about,
        project,
    },
    strict: true,
})
