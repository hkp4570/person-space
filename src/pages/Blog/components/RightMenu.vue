<!-- 文章右侧面板 -->
<script>
export default {
  name: "RightMenu",
  props: {
    list: {
      type: Array,
      default: () => [],
    },
    select: Function,
  },
  methods: {
    handleClick(item) {
      this.$emit('select', item);
    }
  }
}
</script>

<template>
  <ul class="right-menu-container">
    <li v-for="(item,index) in list" v-bind:key="index" @click="handleClick(item)">
      <span v-bind:class="{active: item.isSelect}">{{ item.name }}</span>
      <RightMenu :list="item.children" :select="handleClick" />
    </li>
  </ul>
</template>

<style scoped lang="less">
@import "~@/styles/var.less";
.right-menu-container {
  list-style: none;
  padding: 0;
  .right-menu-container {
    margin-left: 1em;
  }
  li {
    min-height: 40px;
    line-height: 40px;
    cursor: pointer;
    .active {
      color: @warn;
      font-weight: bold;
    }
  }
}
</style>
