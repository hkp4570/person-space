<template>
  <div class="app-container">
    <Layout>
      <template v-slot:left>
        <div class="aside">
          <SiteAside/>
        </div>
      </template>
      <template v-slot:default>
        <RouterView/>
      </template>
    </Layout>
    <ToTop />
  </div>
</template>

<script>
import Layout from "@/components/Layout/index.vue";
import SiteAside from "@/components/SiteAside/index.vue";
import ToTop from "@/components/ToTop/index.vue";

export default {
  name: 'App', // 如果组件在注册的时候没用指定名字，则使用该名字
  components: {
    Layout,
    SiteAside,
    ToTop
  }
}
</script>

<style scoped lang="less">
.app-container {
  height: 100%;
  .aside {
    width: 250px;
    height: 100%;
  }
}
</style>
