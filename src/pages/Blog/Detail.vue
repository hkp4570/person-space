<script>
import Layout from '@/components/Layout';
import BlogDetail from "@/pages/Blog/components/BlogDetail.vue";
import BlogTOC from "@/pages/Blog/components/BlogTOC.vue";
import BlogComment from "@/pages/Blog/components/BlogComment.vue";
import fetchData from "@/mixins/fetchData";
import {getBlog} from "@/api/blog";
import mainScroll from "@/mixins/mainScroll";
import {setSiteTitle} from "@/utils/titleController";

export default {
  name: "Detail",
  mixins: [fetchData(null), mainScroll('mainContainer')],
  components: {
    Layout,
    BlogDetail,
    BlogTOC,
    BlogComment,
  },
  methods: {
    async fetchData() {
      const resp = await getBlog(this.$route.params.id);
      if(!resp){
        this.$router.push("/404");
        return;
      }
      setSiteTitle(resp.title);
      return resp;
    },
  },
  // 刷新页面回到原先锚点位置
  updated() {
    const hash = location.hash;
    location.hash = "";
    setTimeout(() => {
      location.hash = hash;
    }, 50);
  },
}
</script>

<template>
  <Layout>
    <div ref="mainContainer" class="main-container" v-loading="isLoading">
      <BlogDetail :blog="data" v-if="data"/>
      <BlogComment v-if="!isLoading"/>
    </div>
    <template #right>
      <div class="right-container" v-loading="isLoading">
        <BlogTOC :toc="data.toc" v-if="data"/>
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
