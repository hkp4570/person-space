<script>
import Contact from "@/components/SiteAside/Contact/index.vue";
import Menu from "@/components/SiteAside/Menu/index.vue";
import Avatar from "@/components/Avatar/index.vue";
import {mapState} from 'vuex';

export default {
  components: {
    Contact,
    Menu,
    Avatar,
  },
  computed: {
    ...mapState('setting', ['data']),
  }
}
</script>

<template>
  <div class="site-aside-container">
    <Avatar url="https://tse2-mm.cn.bing.net/th/id/OIP-C.JuSM25g1b2eEYu-2KbGpVwHaHI?rs=1&pid=ImgDetMain" :size="199"/>
    <h1 class="title">{{ data?.siteTitle }}</h1>
    <Menu/>
    <Contact/>
    <p class="footer">
      {{ data?.icp }}
    </p>
  </div>
</template>

<style scoped lang="less">
@import "~@/styles/var.less";

.site-aside-container {
  width: 100%;
  height: 100%;
  background: @dark;
  padding: 20px 0;
  box-sizing: border-box;
  overflow-x: hidden;
  overflow-y: auto;
}

.avatar_img {
  margin: 0 auto;
}

.iconfont {
  margin: 0 auto;
}

.footer {
  text-align: center;
  font-size: 12px;
}

.title {
  font-size: 1.2em;
  color: #fff;
  text-align: center;
}
</style>
