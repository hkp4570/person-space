<template>
<div>
  <input placeholder="用户名" type="text" v-model="loginId" @change="handleChange('loginId', $event)">
  <input placeholder="密码" type="password" v-model="loginPwd" @change="handleChange('loginPwd', $event)">
  <button @click="handleSubmit">提交</button>
</div>
</template>
<script>
export default {
  data(){
    return {
      loginId: '',
      loginPwd: '',
    }
  },
  methods: {
    handleChange(type, ev){
      this[type] = ev.target.value;
    },
    async handleSubmit(){
      const resp = await this.$store.dispatch('loginUser/login', {
        loginId: this.loginId,
        loginPwd: this.loginPwd,
      })
      if(resp){
        const path = this.$route.query.returnUrl || '/';
        this.$router.push(path);
      }else {
        alert('账号或密码错误');
      }
    }
  }
}
</script>

<style scoped>

</style>