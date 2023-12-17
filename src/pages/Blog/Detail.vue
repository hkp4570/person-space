<script>
import Layout from '@/components/Layout';
import BlogDetail from "@/pages/Blog/components/BlogDetail.vue";
import BlogTOC from "@/pages/Blog/components/BlogTOC.vue";
import fetchData from "@/mixins/fetchData";
import {getBlog} from "@/api/blog";

export default {
  name: "Detail",
  mixins: [fetchData(null)],
  components: {
    Layout,
    BlogDetail,
    BlogTOC
  },
  methods:{
    async fetchData(){
      return await getBlog(this.$route.params.id);
    }
  }
}
</script>

<template>
<Layout>
  <div class="main-container" v-loading="isLoading">
    <BlogDetail :blog="data" v-if="data" />
  </div>
  <template #right>
    <div class="right-container" v-loading="isLoading">
      <BlogTOC :toc="data.toc" v-if="data" />
    </div>
  </template>
</Layout>
</template>

<style scoped lang="less">
.main-container {
  overflow-y: scroll;
  height: 100%;
  box-sizing: border-box;
  padding: 20px;
  position: relative;
  width: 100%;
  overflow-x: hidden;
  scroll-behavior: smooth;
}
.right-container {
  width: 300px;
  height: 100%;
  overflow-y: scroll;
  box-sizing: border-box;
  position: relative;
  padding: 20px;
}
</style>
