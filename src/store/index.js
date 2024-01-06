import Vue from 'vue';
import Vuex from 'vuex';
import banner from "@/store/banner";
import setting from "@/store/setting";

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        banner,
        setting,
    },
    strict: true,
})
