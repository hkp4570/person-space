import Vue from 'vue';
import {Store, install} from 'vuex';
import banner from "@/store/banner";
import setting from "@/store/setting";
import about from '@/store/about';
import project from "@/store/project";

if(!window.Vuex) {
install(Vue);
}

export default new Store({
    modules: {
        banner,
        setting,
        about,
        project,
    },
    strict: true,
})
