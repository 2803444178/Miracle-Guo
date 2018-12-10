<template>
  <div id="login"  style="padding-bottom:40px" class="login-layout light-login">
    <div class="main-container">
      <div class="main-content">
        <div class="row">
          <div class="col-sm-10 col-sm-offset-1">
            <div class="login-container">
              <div class="center">!
                <h1>
                  <i class="ace-icon fa fa-leaf green"></i>
                  <span class="red">Ace</span>
                  <span class="white" id="id-text2">Web应用程序</span>
                </h1>
                <h4 class="blue" id="id-company-text">&copy; 想飞的猫</h4>
              </div>

              <div class="space-6"></div>

              <div class="position-relative">
                <div id="login-box" class="login-box visible widget-box no-border">
                  <div class="widget-body">
                    <div class="widget-main">
                      <h4 class="header blue lighter bigger">
                        <i class="ace-icon fa fa-coffee green"></i>
                        登录
                                            </h4>

                      <div class="space-6"></div>

                      <form method="post" @submit.prevent="sub()">
                        <fieldset>
                          <label class="block clearfix">
														<span class="block input-icon input-icon-right">
															<input v-model="user.userId" type="text" class="form-control" placeholder="用户名/手机号/邮箱" />
															<i class="ace-icon fa fa-user"></i>
														</span>
                          </label>

                          <label class="block clearfix">
														<span class="block input-icon input-icon-right">
															<input v-model="user.password" type="password" class="form-control" placeholder="密码" />
															<i class="ace-icon fa fa-lock"></i>
														</span>
                          </label>

                          <div class="space"></div>

                          <div class="clearfix">
                            <label class="inline">
                              <input type="checkbox" class="ace" />
                              <span class="lbl">记住密码</span>
                            </label>
                            <input type="submit" value="登录" class="width-35 pull-right btn btn-sm btn-primary">

                          </div>

                          <div class="space-4"></div>
                        </fieldset>
                      </form>

                      <div class="social-or-login center">
                        <span class="bigger-110">或使用一下方式登录</span>
                      </div>

                      <div class="space-6"></div>

                      <div class="social-login center">
                        <a class="btn btn-primary">
                          <i class="ace-icon fa fa-facebook"></i>
                        </a>

                        <a class="btn btn-info">
                          <i class="ace-icon fa fa-twitter"></i>
                        </a>

                        <a class="btn btn-danger">
                          <i class="ace-icon fa fa-google-plus"></i>
                        </a>
                      </div>
                    </div><!-- /.widget-main -->

                    <div class="toolbar clearfix">
                      <div>
                        <a href="#" data-target="#forgot-box" class="forgot-password-link">
                          <i class="ace-icon fa fa-arrow-left"></i>
                          忘记密码
                                                </a>
                      </div>

                      <div>
                        <a href="#" data-target="#signup-box" class="user-signup-link">
                          注册
                                                    <i class="ace-icon fa fa-arrow-right"></i>
                        </a>
                      </div>
                    </div>
                  </div><!-- /.widget-body -->
                </div><!-- /.login-box -->

                <div id="forgot-box" class="forgot-box widget-box no-border">
                  <div class="widget-body">
                    <div class="widget-main">
                      <h4 class="header red lighter bigger">
                        <i class="ace-icon fa fa-key"></i>
                        忘记密码
                                            </h4>

                      <div class="space-6"></div>
                      <p>
                        请输入你绑定的邮箱
                                            </p>

                      <form>
                        <fieldset>
                          <label class="block clearfix">
														<span class="block input-icon input-icon-right">
															<input type="email" class="form-control" placeholder="Email" />
															<i class="ace-icon fa fa-envelope"></i>
														</span>
                          </label>

                          <div class="clearfix">
                            <button type="button" class="width-35 pull-right btn btn-sm btn-danger">
                              <i class="ace-icon fa fa-lightbulb-o"></i>
                              <span class="bigger-110">提交</span>
                            </button>
                          </div>
                        </fieldset>
                      </form>
                    </div><!-- /.widget-main -->

                    <div class="toolbar center">
                      <a href="#" data-target="#login-box" class="back-to-login-link">
                        重新登录
                                                <i class="ace-icon fa fa-arrow-right"></i>
                      </a>
                    </div>
                  </div><!-- /.widget-body -->
                </div><!-- /.forgot-box -->

                <div id="signup-box" class="signup-box widget-box no-border">
                  <div class="widget-body">
                    <div class="widget-main">
                      <h4 class="header green lighter bigger">
                        <i class="ace-icon fa fa-users blue"></i>
                        用户注册
                                            </h4>

                      <div class="space-6"></div>
                      <p> 请输入注册信息： </p>

                      <form>
                        <fieldset>
                          <label class="block clearfix">
														<span class="block input-icon input-icon-right">
															<input type="email" class="form-control" placeholder="邮箱" />
															<i class="ace-icon fa fa-envelope"></i>
														</span>
                          </label>

                          <label class="block clearfix">
														<span class="block input-icon input-icon-right">
															<input type="text" class="form-control" placeholder="用户名" />
															<i class="ace-icon fa fa-user"></i>
														</span>
                          </label>

                          <label class="block clearfix">
														<span class="block input-icon input-icon-right">
															<input type="password" class="form-control" placeholder="密码" />
															<i class="ace-icon fa fa-lock"></i>
														</span>
                          </label>

                          <label class="block clearfix">
														<span class="block input-icon input-icon-right">
															<input type="password" class="form-control" placeholder="确认密码" />
															<i class="ace-icon fa fa-retweet"></i>
														</span>
                          </label>

                          <label class="block">
                            <input type="checkbox" class="ace" />
                            <span class="lbl">
															我接受
															<a href="#">用户协议</a>
														</span>
                          </label>

                          <div class="space-24"></div>

                          <div class="clearfix">
                            <button type="reset" class="width-30 pull-left btn btn-sm">
                              <i class="ace-icon fa fa-refresh"></i>
                              <span class="bigger-110">重置</span>
                            </button>

                            <button type="button" class="width-65 pull-right btn btn-sm btn-success">
                              <span class="bigger-110">注册</span>

                              <i class="ace-icon fa fa-arrow-right icon-on-right"></i>
                            </button>
                          </div>
                        </fieldset>
                      </form>
                    </div>

                    <div class="toolbar center">
                      <a href="#" data-target="#login-box" class="back-to-login-link">
                        <i class="ace-icon fa fa-arrow-left"></i>
                        重新登录
                                            </a>
                    </div>
                  </div><!-- /.widget-body -->
                </div><!-- /.signup-box -->
              </div><!-- /.position-relative -->

              <div class="navbar-fixed-top align-right">
                <br />
                &nbsp;
                <a id="btn-login-dark" href="#">Dark</a>
                &nbsp;
                <span class="blue">/</span>
                &nbsp;
                <a id="btn-login-blur" href="#">Blur</a>
                &nbsp;
                <span class="blue">/</span>
                &nbsp;
                <a id="btn-login-light" href="#">Light</a>
                &nbsp; &nbsp; &nbsp;
              </div>
            </div>
          </div><!-- /.col -->
        </div><!-- /.row -->
      </div><!-- /.main-content -->
    </div><!-- /.main-container -->
  </div>
</template>

<script>
import login from '../assets/my-assets/js/login/login'

import { mapActions } from 'vuex'
  export default{
    name:'login',
    data(){
        return{
            user:{
              userId:'',
              password:''
            }
        }
    },
    computed: {
      ...mapActions({
        UserLogin: 'UserLogin',
      })
    },
    mounted(){
      login();
    },
    methods:{
      sub(){

        this.$store.dispatch('UserLogin',this.user)
      }
    },

 }
</script>
<style scoped>
@import "../assets/css/ace.onpage-help.css";
.center h1{
  font-size: 36px;
    margin-top:20px ;
    margin-bottom: 10px;
}
fieldset{
  border:none;
}
</style>
