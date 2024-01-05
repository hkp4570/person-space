<template>
<div>
  loading...
</div>
</template>
<script>
export default {
  name: "Loading",
  created() {
    this.unWatch = this.$store.watch(() => this.$store.getters['loginUser/status'], (status) => {
      if(status !== 'loading'){
        this.$router.push(this.$route.query.returnUrl || '/home').catch(() => {})
      }
    }, {
      immediate: true
    })
  },
  destroyed() {
    this.unWatch();
  }
}
</script>

<style scoped>

</style>