<script>
export default {
  props: {
    'url': {
      type: String,
      required: true,
    },
    size: {
      type: Number,
    }
  },
}
</script>

<template>
  <img class="avatar_img" v-bind:src="url" :style="{
    width:`${size}px`,
    height:`${size}px`
  }" alt="">
</template>

<style scoped lang="less">
.avatar_img{
  border-radius: 50%;
  display: block;
  object-fit: cover;
}
</style>
