<template>
  <div>
    <h1>app</h1>
    <Pager :total="total" :current="current" @pageChange="handlePageChange" />
  </div>
</template>

<script>
import Avatar from "@/components/Avatar";
import Icon from '@/components/Icon.vue';
import Pager from "@/components/Pager.vue";

export default {
  name: 'App', // 如果组件在注册的时候没用指定名字，则使用该名字
  components: {
    Avatar,
    Icon,
    Pager,
  },
  data(){
    return {
      current: 1,
      total: 100,
    }
  },
  methods: {
    handlePageChange(newPage){
      this.current = newPage;
    }
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
