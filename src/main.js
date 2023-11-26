import Vue from 'vue'
import App from './App.vue'
import router from "@/router"
import "./styles/global.less"
import {showMessage} from "./utils/index"
import './mock'

Vue.config.productionTip = false

Vue.prototype.$showMessage = showMessage

import './api/banner';
new Vue({
    router,
    render: h => h(App),
}).$mount('#app')
