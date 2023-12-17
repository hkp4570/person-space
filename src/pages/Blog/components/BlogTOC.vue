<script>
import RightMenu from "@/pages/Blog/components/RightMenu.vue";
export default {
  name: "BlogTOC",
  props: {
    toc: {
      type: Array,
    }
  },
  components: {
    RightMenu
  },
  methods: {
    handleSelect(){
      location.hash = item.anchor;
    }
  }
}
</script>

<template>
<div class="blog-toc-container">
  <h2>目录</h2>
  <RightMenu :list="toc" @select="handleSelect" />
</div>
</template>

<style scoped lang="less">
.blog-toc-container {
  h2 {
    font-weight: bold;
    letter-spacing: 2px;
    font-size: 1em;
    margin: 0;
  }
}
</style>
