<script>
export default {
  props: {
    src: {
      type: String,
      required: true,
    },
    placeholder: {
      type: String,
      required: true,
    },
    duration: {
      type: Number,
      default: 500
    },
    load: Function,
  },
  data(){
    return {
      originLoaded: false,
      everythingDone: false, // 图片加载完成，并且动画过渡完成
    }
  },
  computed: {
    originOpacity(){
      return this.originLoaded ? 1 : 0;
    }
  },
  methods: {
    handleLoad(){
      this.originLoaded = true;
      setTimeout(() => {
        this.everythingDone = true;
        this.$emit('load');
      }, this.duration)
    }
  }
}
</script>

<template>
  <div class="image-loader-container">
    <img :src="placeholder" class="placeholder" alt="">
    <img :src="src" @load="handleLoad" :style="{opacity: originOpacity, transition: `${duration}ms`}"  alt="">
  </div>
</template>

<style scoped lang="less">
@import "~@/styles/mixin.less";
.image-loader-container{
  width: 100%;
  height: 100%;
  position: relative;
  overflow: hidden;
  img{
    .self-fill();
    object-fit: cover;
  }
  .placeholder{
    filter: blur(2vw);
  }
}
</style>
