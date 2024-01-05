<template>
<div class="block">
  <p>{{$store.state.count}}</p>
  <button @click="$store.commit('decrease')">减</button>
  <button @click="$store.dispatch('asyncDecrease')">异步减</button>
</div>
</template>

<script>

</script>