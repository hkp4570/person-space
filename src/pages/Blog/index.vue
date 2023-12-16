<script>
import Layout from "@/components/Layout/index.vue";
import BlogList from "@/pages/Blog/components/BlogList.vue";
import BlogCategory from "@/pages/Blog/components/BlogCategory.vue";
export default {
  components: {
    Layout,
    BlogList,
    BlogCategory
  },
}
</script>

<template>
  <Layout>
    <BlogList />
    <template #right>
      <BlogCategory/>
    </template>
  </Layout>
</template>

<style scoped lang="less">

</style>
