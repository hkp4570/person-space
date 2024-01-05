<template>
<div class="block">
  <p>{{$store.state.count}}</p>
  <button v-on:click="increase">加</button>
  <button v-on:click="asyncIncrease">异步加</button>
  <button @click="power">2次幂</button>
  <button @click="asyncPower">异步2次幂</button>
</div>
</template>

<script>
  export default {
    methods: {
      increase(){
        this.$store.commit('increase');
      },
      asyncIncrease(){
        this.$store.dispatch('asyncIncrease');
      },
      power(){
        this.$store.commit('power', 2);
      },
      asyncPower(){
        this.$store.dispatch('asyncPower', 2);
      }
    }
  }
</script>