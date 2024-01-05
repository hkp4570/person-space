import {login, logOut, whoAmI} from '@/api/user';

export default {
    namespaced: true,
    state: {
        loading: false,
        user: null,
    },
    getters: {
        status(state) {
            if (state.loading) {
                return 'loading';
            } else if (state.user) {
                return 'login';
            } else {
                return 'unlogin';
            }
        }
    },
    mutations: {
        setLoading(state, payload) {
            state.loading = payload;
        },
        setUser(state, payload) {
            state.user = payload;
        }
    },
    actions: {
        async login(ctx, payload) {
            ctx.commit('setLoading', true);
            const response = await login(payload.loginId, payload.loginPwd);
            ctx.commit('setLoading', false);
            ctx.commit('setUser', response);
            return response;
        },
        async logOut(ctx) {
            ctx.commit('setLoading', true);
            await logOut();
            ctx.commit('setLoading', false);
            ctx.commit('setUser', null);
        },
        async whoAmI(ctx) {
            ctx.commit('setLoading', true);
            const response = await whoAmI();
            ctx.commit('setLoading', false);
            ctx.commit('setUser', response);
        }
    }
}