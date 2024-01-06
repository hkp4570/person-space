import { getSetting } from "@/api/setting";
import {setSiteTitle} from "@/utils/titleController";

export default {
    namespaced: true,
    state: {
        loading: false,
        data: null,
    },
    mutations: {
        setLoading(state, payload) {
            state.loading = payload;
        },
        setData(state, payload) {
            state.data = payload;
        },
    },
    actions: {
        async fetchSetting(ctx){
            ctx.commit('setLoading', true);
            const resp = await getSetting();
            ctx.commit('setLoading', false);
            ctx.commit('setData', resp);
            if(resp.siteTitle){
                setSiteTitle(resp.siteTitle);
            }
        }
    }
}
