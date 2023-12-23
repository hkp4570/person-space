// 事件总线 跨组件，js模块通信 观察者模式

const listeners = {}

export default {
    $on(eventName, handler) {
        if (!listeners[eventName]) {
            listeners[eventName] = new Set();
        }
        listeners[eventName].add(handler);
    },
    $off(eventName, handler) {
        if (!listeners[eventName]) {
            return;
        }
        listeners[eventName].remove(handler);
    },
    $emit(eventName, ...args) {
        if (!listeners[eventName]) {
            return;
        }
        for (const handler of listeners[eventName]) {
            handler(...args);
        }
    },
}


// import Vue from "vue";
//
// export default new Vue({});
