import {getAbout} from "@/api/about";

export default {
    namespaced: true,
    state: {
        loading: false,
        data: '',
    },
    mutations: {
        setState(state, payload = []) {
            for (const {type, value} of payload) {
                state[type] = value;
            }
        }
    },
    actions: {
        async fetchAbout(ctx) {
            ctx.commit('setState', [{type: 'loading', value: true}]);
            const resp = await getAbout();
            ctx.commit('setState', [
                {type: 'loading', value: false},
                {type: 'data', value: resp},
            ])
        }
    }
}
