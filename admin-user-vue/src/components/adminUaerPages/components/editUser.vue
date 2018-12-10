<template>
  <div class="userCompileInput">
    <div class="breadcrumbs" id="">

      <ul class="breadcrumb">
        <li>
          <i class="ace-icon fa fa-home home-icon"></i>
          <a href="#">Home</a>
        </li>

        <li>
          <a href="#">用户权限</a>
        </li>
        <li>
          <a href="#">用户中心</a>
        </li>
        <li class="active">编辑用户</li>
      </ul><!-- /.breadcrumb -->
      <!-- 右侧容器路径导航栏 #section:basics/content.searchbox -->
      <div class="nav-search" id="nav-search">
        <form class="form-search">
							<span class="input-icon">
								<input type="text" placeholder="Search ..." class="nav-search-input" id="nav-search-input" autocomplete="off" />
								<i class="ace-icon fa fa-search nav-search-icon"></i>
							</span>
        </form>
      </div><!-- /.nav-search -->
    </div>
    <div class="page-content-area">
      <div class="page-header">
        <h1><font><font>
          表单元素
                          </font></font><small>
          <i class="ace-icon fa fa-angle-double-right"></i><font><font>
          常见的表单元素和布局
                        </font></font></small>
        </h1>
      </div>

      <div class="row">
        <div class="col-xs-8  col-xs-offset-2 ">
          <!-- PAGE CONTENT BEGINS -->
          <form class="form-horizontal" role="form" method="post" @submit.prevent="sum()">
            <!-- #section:elements.form -->
            <div class="form-group ">
              <label class="col-sm-4 control-label no-padding-right" for="form-userId" ><font><font> 用户名 :</font></font></label>

              <div class="col-sm-7">
                <input v-model="user.userId" type="text" id="form-userId" placeholder="用户名" class="col-xs-9 col-sm-5">
              </div>
            </div>

            <div class="form-group ">
              <label class="col-sm-4 control-label no-padding-right" for="form-userName"><font><font>姓名 :</font></font></label>

              <div class="col-sm-7">
                <input v-model="user.userName" type="text" id="form-userName" placeholder="姓名" class="col-xs-9 col-sm-5">
              </div>
            </div>
            <div class="form-group">
              <div class="radio col-sm-offset-4 col-sm-4">
                <label>
                  <input name="form-field-radio" type="radio" v-model="user.sex"  value="男" class="ace">
                  <span class="lbl"><font >男</font></span>
                </label>
              </div>

              <div class="radio col-sm-offset-4 col-sm-4">
                <label>
                  <input name="form-field-radio" type="radio" v-model="user.sex" value="女" class="ace">
                  <span class="lbl"><font >女</font></span>
                </label>
              </div>
            </div>
            <div class="form-group ">
              <label class="col-sm-4 control-label no-padding-right" for="form-phoneNum"><font><font> 手机号 :</font></font></label>

              <div class="col-sm-7">
                <input v-model="user.phoneNum" type="text" id="form-phoneNum" placeholder="手机号" class="col-xs-9 col-sm-5">
              </div>
            </div>
            <div class="form-group ">
              <label class="col-sm-4 control-label no-padding-right" for="form-email"><font><font> 邮箱 :</font></font></label>

              <div class="col-sm-7">
                <input v-model="user.email" type="text" id="form-email" placeholder="邮箱" class="col-xs-9 col-sm-5">
              </div>
            </div>
            <div class="form-group ">
              <label class="col-sm-4 control-label no-padding-right" for="form-address"><font><font> 地址 :</font></font></label>

              <div class="col-sm-7">
                <input v-model="user.address" type="text" id="form-address" placeholder="地址" class="col-xs-12 col-sm-8">
              </div>
            </div>
            <div class="form-group">
              <div class="col-xs-10 col-xs-offset-1 col-sm-4 col-sm-offset-4" style="margin-top: 30px" >
                <input type="submit" class="btn btn-sm btn-success" value="提交" />
                <input @click="qingKong()" class="btn btn-sm  btn-info" type="button" value="重置"/>


              </div>
            </div>
          </form>
        </div><!-- /.col -->
      </div><!-- /.row -->
    </div>
  </div>
</template>
<script>
  import { mapState } from 'vuex'
  import api from '../../../api/index'
  export default{

    name:'userCompileInput',
    data(){
      return{
        user:{
          id:null,
          userId:'',
          userName:'',
          sex:'',
          phoneNum:'',
          email:'',
          address:''
        }
      }
    },
    computed: {
      /*...mapState({
        queryUser: state => state.adminUsers.queryUser
      })*/
    },
    mounted(){//页面渲染之前执行
      this.chax();
    },
    methods:{//函数方法定义
      chax(){
          /*this.$store.dispatch("getUser",this.$route.query.id)
          this.user  = this.queryUser*/
        var _this = this;
        var id = this.$route.query.id;
        api.localGetUser(id).then(function (response) {
          console.log(response);
          if(response.data.code == '1001') {
              _this.user = response.data.data;
          } else {
            alert('查询失败');
          };
        })
          .catch(function (error) {
            console.log(error)
          })

      },
      sum(){
       this.$store.dispatch('updateUser',this.user)
      },
      qingKong(){
        alert("重置操作");
        this.chax();
      }
    }
  }
</script>
<style scoped>

</style>
