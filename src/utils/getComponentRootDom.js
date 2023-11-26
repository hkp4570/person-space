import Vue from 'vue';

/**
 * 获取comp（Vue组件）的原生DOM
 * @param comp  Vue组件实例
 * @param props 组件props
 * @returns {Element}
 */
export default function (comp, props = {}){
    const vm = new Vue({
        render: h => h(comp, {props})
    })
    vm.$mount(); // 如果没有提供参数，模板将被渲染为文档之外的的元素，并且你必须使用原生 DOM API 把它插入文档中。
    return vm.$el;
}
