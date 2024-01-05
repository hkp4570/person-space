<template>
  <div id="nav">
    <router-link to="/">home</router-link>|
    <router-link to="/news">news</router-link>|
    <UserName />
    <RouterView/>
  </div>
</template>

<script>
import UserName from "@/components/UserName.vue";
export default {
  name: 'App',
  components: {
    UserName
  }
}
</script>

<style>
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
#nav .ml-5 {
  margin-left: 5px;
}
</style>
