<template>
  <div class="container">
    <Increase/>
    <Decrease/>
  </div>
</template>

<script>
import Increase from "@/components/Increase.vue";
import Decrease from "@/components/Decrease.vue";

export default {
  name: 'App',
  components: {
    Increase,
    Decrease,
  }
}
</script>

<style>
</style>
