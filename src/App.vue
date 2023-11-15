<template>
  <div>
    <h1>app</h1>
    <Icon type="arrowDown"/>
  </div>
</template>

<script>
import Avatar from "@/components/Avatar";
import Icon from '@/components/Icon.vue';

export default {
  name: 'App', // 如果组件在注册的时候没用指定名字，则使用该名字
  components: {
    Avatar,
    Icon,
  }
}
</script>

<style scoped lang="less">

// * 添加scoped之后，父组件的可以影响子组件的样式
//.iconfont{
//  font-size: 26px;
//  color: red;
//}
</style>
