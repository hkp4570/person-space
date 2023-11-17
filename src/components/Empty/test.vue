<script>
import Empty from "@/components/Empty/index.vue";
export default {
  name: "test",
  components: {
    Empty
  }
}
</script>

<template>
  <div class="test-container">
    <Empty />
  </div>
</template>

<style scoped lang="less">
.test-container{
  width: 500px;
  height: 400px;
  border: 1px solid;
  position: relative;
}
</style>
