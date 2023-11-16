<script>
export default {
  props: {
    current: {
      type: Number,
      default: 1,
    },
    total: {
      type: Number,
      default: 0,
    },
    limit: {
      type: Number,
      default: 10,
    },
    visibleNumber: {
      type: Number,
      default: 10
    },
    pageChange: Function,
  },
  computed: {
    pageNumber() {
      return Math.ceil(this.total / this.limit);
    },
    visibleMin() {
      let min = this.current - Math.floor(this.visibleNumber / 2);
      if (min < 1) {
        min = 1;
      }
      return min;
    },
    visibleMax() {
      let max = this.visibleMin + this.visibleNumber - 1;
      if (max > this.pageNumber) {
        max = this.pageNumber;
      }
      return max;
    },
    numbers() {
      const nums = [];
      for (let i = this.visibleMin; i <= this.visibleMax; i++) {
        nums.push(i);
      }
      return nums;
    }
  },
  methods: {
    handleClick(newPage) {
      let _newPage = newPage;
      if(newPage < 1){
        _newPage = 1;
      }
      if(newPage > this.pageNumber){
        _newPage = this.pageNumber;
      }
      if(_newPage === this.current){
        return;
      }
      this.$emit('pageChange', newPage);
    }
  }
}
</script>

<template>
  <div class="pager-container" v-if="pageNumber > 1">
    <div @click="handleClick(1)" v-bind:class="{disabled: current === 1}">首页</div>
    <div @click="handleClick(current - 1)" v-bind:class="{disabled: current === 1}">上一页</div>
    <div @click="handleClick(n)" v-for="(n,i) in numbers" :key="i" :class="{active: n === current}">{{ n }}</div>
    <div @click="handleClick(current + 1)" v-bind:class="{disabled: current === pageNumber}">下一页</div>
    <div @click="handleClick(pageNumber)" v-bind:class="{disabled: current === pageNumber}">尾页</div>
  </div>
</template>

<style scoped lang="less">
@import "~@/styles/var.less";

.pager-container {
  display: flex;
  justify-content: center;
  margin: 20px 0;

  div {
    cursor: pointer;
    border: 1px solid;
    margin: 0 10px;
    color: @primary;

    &.disabled {
      cursor: not-allowed;
      color: @lightWords;
    }

    &.active {
      font-weight: bold;
      color: @dark;
    }
  }
}
</style>
