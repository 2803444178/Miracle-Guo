<!--欢迎页面-->

<template>
  <div class="Hailo">
    <img src="../assets/logo.png" height="200" width="200"/>
    <h1>{{ msg }}</h1>
    <router-link to="/login" tag="button" type="button" class="btn btn-success">临时入口-登录</router-link>
    <h2>应用入口</h2>

    <ul class="yinYongRuKou">
      <li><router-link to="/adminUser" tag="a">临时入口-用户管理界面</router-link></li>
    </ul>
    <h2>Ecosystem</h2>
    <ul class="yinYongRuKou">
      <li><a href="http://router.vuejs.org/" target="_blank">vue-router 路由文档</a></li>
      <li><a href="http://vuex.vuejs.org/" target="_blank">vuex 状态管理模式</a></li>
      <li><a href="http://vue-loader.vuejs.org/" target="_blank">vue-loader</a></li>
      <li><a href="https://github.com/vuejs/awesome-vue" target="_blank">awesome-vue 插件集合</a></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      msg: '欢迎，来到我的 Vue 世界'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .Hailo{
    text-align: center;

  }
  .yinYongRuKou{
    margin: 25px 0px;
  }
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  font-size: 14px ;
  color: #42b983;
}
</style>
