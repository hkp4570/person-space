<!-- 当某个元素width：auto时过渡效果没有解决方案 -->
<script>
import ImageLoader from "@/components/ImageLoader/index.vue";

export default {
  name: "CarouselItem",
  props: ['carousel'],
  components: {
    ImageLoader,
  },
  data() {
    return {
      titleWidth: 0,
      descWidth: 0,
    }
  },
  mounted() {
    this.titleWidth = this.$refs.title.offsetWidth;
    this.descWidth = this.$refs.desc.offsetWidth;
  },
  methods: {
    showWords(){
      this.$refs.title.style.opacity = 1;
      this.$refs.title.style.width = 0;
      this.$refs.title.clientHeight;
      this.$refs.title.style.transition = '1s';
      this.$refs.title.style.width = this.titleWidth + 'px';

      this.$refs.desc.style.opacity = 1;
      this.$refs.desc.style.width = 0;
      // 强制让浏览器渲染一次
      this.$refs.desc.clientWidth; // reflow
      this.$refs.desc.style.transition = "2s 1s";
      this.$refs.desc.style.width = this.descWidth + "px";
    }
  }
}
</script>

<template>
  <div class="carousel-item-container">
    <div class="carousel-container">
      <ImageLoader @load="showWords" :placeholder="carousel.midImg" :src="carousel.bigImg"/>
    </div>
    <div class="title" ref="title">{{ carousel.title }}</div>
    <div class="desc" ref="desc">{{ carousel.description }}</div>
  </div>
</template>

<style scoped lang="less">
@import "~@/styles/var.less";

.carousel-item-container {
  width: 100%;
  height: 100%;
  color: #fff;
  position: relative;
}

.carousel-container {
  height: 100%;
}

.title,
.desc {
  position: absolute;
  letter-spacing: 3px;
  left: 30px;
  color: #fff;
  text-shadow: 1px 0 0 rgba(0, 0, 0, 0.5), -1px 0 0 rgba(0, 0, 0, 0.5),
  0 1px 0 rgba(0, 0, 0, 0.5), 0 -1px 0 rgba(0, 0, 0, 0.5);
  white-space: nowrap;
  overflow: hidden;
  opacity: 0;
}

.title {
  top: calc(50% - 40px);
  font-size: 2em;
}

.desc {
  top: calc(50% + 20px);
  font-size: 1.2em;
  color: lighten(@gray, 20%);
}
</style>
