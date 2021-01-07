<template>
  <div>
    <div id="menu">
      <router-link to="/home/news">最新消息</router-link>
      <button @click="signOff">注销</button>
      <!-- <router-link>我的云盘</router-link> -->
    </div>
    <div>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
/**
 * 主页部分，没什么技术难点
 */
export default {
  mounted(){
    let sign = this.$route.query.sign
    this._http.loginBySign(sign).then(res=>{
      console.log(res.data)
    })
  },
  methods:{
    signOff(){
      localStorage.removeItem('sign')
      this.$router.push('/')
    }
  }
}
</script>