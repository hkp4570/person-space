<template>
  <div>
    <h1>app</h1>
    <Avatar
      url="https://ts1.cn.mm.bing.net/th/id/R-C.823270fc68b9c58f0d9b3feb92b7b172?rik=aubbEBMSC86e%2bw&riu=http%3a%2f%2fimg95.699pic.com%2fphoto%2f50038%2f1181.jpg_wh860.jpg&ehk=iQboj4JMLLfDitOL7VJtSktED0AE%2f7Fyxfik0GTJkyQ%3d&risl=&pid=ImgRaw&r=0"
      :size="100"
      ></Avatar>
  </div>
</template>

<script>
import Avatar from "@/components/Avatar";

export default {
  name: 'App', // 如果组件在注册的时候没用指定名字，则使用该名字
  components: {
    Avatar,
  }
}
</script>

<style lang="less">
</style>
