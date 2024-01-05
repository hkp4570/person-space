<template>
  <div class="user-name">
    <span v-if="status === 'loading'">loading...</span>
    <div v-else-if="status==='login'">
      <router-link to="/user">{{ user.name }}</router-link>
      <a href="" @click.op.prevent="handleLogOut">退出</a>
    </div>
    <router-link v-else to="/login" exact-path>login</router-link>
  </div>
</template>
<script>
import {mapGetters, mapState} from 'vuex';

export default {
  name: "UserName",
  computed: {
    ...mapGetters("loginUser", ['status']),
    ...mapState('loginUser', ['user']),
  },
  methods: {
    handleLogOut() {
      this.$store.dispatch('loginUser/logOut');
    }
  }
}
</script>

<style scoped>
.user-name {
  display: inline-block;
}

.user-name a,
.user-name span {
  margin-right: 15px;
}
</style>