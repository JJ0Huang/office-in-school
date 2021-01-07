<template>
  <div>
    <label for="user_id">账号</label>
    <input id="user_id" v-model="user_id" type="text">
    <label for="user_password">密码</label>
    <input id="user_password" v-model="user_password" type="password">
    <button @click="login">登录</button>
    <button @click="toNewUser">注册</button>
  </div>
</template>

<script>
/**
 * 登录页的技术难点是 token，利用 token 去实现用户验证
 * 将sign存到cookie中，请求的时候加到header里
 */
export default {
  data(){
    return{
      user_id:1,
      user_password:1
    }
  },
  mounted(){
    let sign = localStorage.getItem('sign')
    if(sign!=null){
      this.$router.push({path:'/home/news',query:{sign}})
    }
  },
  methods:{
    login(){
      this._http.login(this.user_id,this.user_password).then(res=>{
        console.log(res.data)
        localStorage.setItem('sign',res.data)
        this.$router.push({path:'/home/news',query:{sign:res.data}})
      })
    },
    toNewUser(){
      this.$router.push('/newuser')
    }
  },
}
</script>