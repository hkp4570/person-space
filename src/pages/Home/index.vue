<template>
  <div class="home-container" ref="homeContainer" @wheel="handleWheel">
    <ul class="carousel-container" :style="{marginTop}" @transitionend="handleTransitionEnd">
      <li v-for="item in banners" :key="item.id">
        <CarouselItem :carousel="item" />
      </li>
    </ul>
    <!--    上按钮-->
    <div v-show="index >= 1" class="icon icon-up" @click="switchTo(index - 1)">
      <Icon type="arrowUp"/>
    </div>
    <!--    下按钮-->
    <div v-show="index < banners.length -1" class="icon icon-down" @click="switchTo(index + 1)">
      <Icon type="arrowDown"/>
    </div>
    <!--  指示器-->
    <ul class="indicator">
      <li :class="{active: i === index}" v-for="(item, i) in banners" :key="item.id" @click="switchTo(i)"></li>
    </ul>
  </div>
</template>

<script>
import {getBanner} from '@/api/banner.js';
import CarouselItem from "@/pages/Home/CarouselItem.vue";
import Icon from "@/components/Icon/index.vue";

export default {
  components: {
    CarouselItem,
    Icon,
  },
  data() {
    return {
      banners: [],
      index: 1,
      containerHeight: 0,
      switching: false,
    }
  },
  created() {
    getBanner().then(resp => {
      this.banners = resp;
    })
  },
  mounted() {
    this.containerHeight = this.$refs.homeContainer.clientHeight;
    window.addEventListener('resize', this.handleResize);
  },
  destroyed() {
    window.removeEventListener('resize', this.handleResize);
  },
  computed: {
    marginTop(){
      return -this.index * this.containerHeight + 'px';
    }
  },
  methods: {
    switchTo(i){
      this.index = i;
    },
    handleWheel(e){
      if(this.switching) return;
      if(e.deltaY > 5 && this.index < this.banners.length - 1){
        this.switching = true;
        this.index++;
      }
      if(e.deltaY < -5 && this.index > 0){
        this.switching = true;
        this.index--;
      }
    },
    handleTransitionEnd(){
      this.switching = false;
    },
    handleResize(){
      this.containerHeight = this.$refs.homeContainer.clientHeight;
    }
  }
}
</script>

<style scoped lang="less">
@import "~@/styles/var.less";

.home-container {
  width: 100%;
  height: 100%;
  position: relative;
  overflow: hidden;
}

.carousel-container {
  width: 100%;
  height: 100%;
  transition: .5s;

  li {
    width: 100%;
    height: 100%;
  }
}

.icon {
  position: absolute;
  left: 50%;
  font-size: 30px;
  @gap: 25px;
  color: @gray;
  cursor: pointer;
  transform: translateX(-50%);

  &.icon-up {
    top: @gap;
    animation: jump-up 2s infinite;
  }

  &.icon-down {
    top: auto;
    bottom: @gap;
    animation: jump-down 2s infinite;
  }

  @jump: 5px;
  @keyframes jump-up {
    0% {
      transform: translate(-50%, @jump);
    }
    50% {
      transform: translate(-50%, -@jump);
    }
    100% {
      transform: translate(-50%, @jump);
    }
  }
  @keyframes jump-down {
    0% {
      transform: translate(-50%, -@jump);
    }
    50% {
      transform: translate(-50%, @jump);
    }
    100% {
      transform: translate(-50%, -@jump);
    }
  }
}
.indicator {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  left: auto;

  right: 20px;
  li {
    width: 7px;
    height: 7px;
    border-radius: 50%;
    background: @words;
    cursor: pointer;
    margin-bottom: 10px;
    border: 1px solid #fff;
    box-sizing: border-box;
    &.active {
      background: #fff;
    }
  }
}
</style>
