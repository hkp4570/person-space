<script>
export default {
  name: "LoadingButton",
  props: {
    click: Function,
  },
  data() {
    return {
      count: 0,
      isLoading: false,
      error: ''
    }
  },
  methods: {
    async handleClick() {
      this.count++;
      this.error = '';
      this.isLoading = true;
      if(this.click){
        const err = await this.click(this.count);
        this.isLoading = false;
        this.error = err;
      }
    }
  }
}
</script>

<template>
  <div>
    <button v-on:click="handleClick" :disabled="isLoading">
      {{ isLoading ? "loading" : 'submit' }}
    </button>
    <div>{{ error }}</div>
  </div>
</template>

<style scoped lang="less">

</style>
