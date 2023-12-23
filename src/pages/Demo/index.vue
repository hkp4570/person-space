<!--
父子组件通信，子组件抛出一个事件，父组件执行完之后，子组件获取到对应的状态
三种方法：回调函数、$listeners、父组件不通过@click绑定事件，而是通过:click传递函数
 -->
<script>
import LoadingButton from "@/pages/Demo/LoadingButton.vue";
export default {
  name: "index",
  components: {
    LoadingButton
  },
  methods: {
    handleClick(count){
      console.log('父组件', count);
      return new Promise(resolve => {
        setTimeout(() => {
          resolve('错误信息');
        }, 2000)
      });
    }
  }
}
</script>

<template>
<div>
  <LoadingButton :click="handleClick"/>
</div>
</template>

<style scoped lang="less">

</style>
