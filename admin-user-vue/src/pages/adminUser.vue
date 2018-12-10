
<!--管理用户后台主界面-->

<template>
  <div class="adminUser no-skin">
    <!-- 顶部导航条 #section:basics/navbar.layout -->
    <div id="navbar" class="navbar navbar-default">

      <div class="navbar-container" id="navbar-container">
        <!-- #section:basics/sidebar.mobile.toggle -->
        <button type="button" class="navbar-toggle menu-toggler pull-left" @click="navToggler" >
          <span class="sr-only">Toggle sidebar</span>

          <span class="icon-bar"></span>

          <span class="icon-bar"></span>

          <span class="icon-bar"></span>
        </button>

        <!-- /section:basics/sidebar.mobile.toggle -->
        <div class="navbar-header pull-left">
          <!-- #section:basics/navbar.layout.brand -->
          <a href="#" class="navbar-brand">
            <small>
              <i class="fa fa-twitter "></i>
              想飞的猫
                        </small>
          </a>

          <!-- /section:basics/navbar.layout.brand -->

          <!-- #section:basics/navbar.toggle -->

          <!-- /section:basics/navbar.toggle -->
        </div>

        <!-- #section:basics/navbar.dropdown -->
        <div class="navbar-buttons navbar-header pull-right" role="navigation">
          <ul class="nav ace-nav">

            <li class="grey">
              <a data-toggle="dropdown" class="dropdown-toggle" href="#">
                <i class="ace-icon fa fa-tasks"></i>
                <span class="badge badge-grey">4</span>
              </a>

              <ul class="dropdown-menu-right dropdown-navbar dropdown-menu dropdown-caret dropdown-close">
                <li class="dropdown-header">
                  <i class="ace-icon fa fa-check"></i>
                  4 Tasks to complete
                                </li>

                <li>
                  <a href="#">
                    <div class="clearfix">
                      <span class="pull-left">Software Update</span>
                      <span class="pull-right">65%</span>
                    </div>

                    <div class="progress progress-mini">
                      <div style="width:65%" class="progress-bar"></div>
                    </div>
                  </a>
                </li>

                <li>
                  <a href="#">
                    <div class="clearfix">
                      <span class="pull-left">Hardware Upgrade</span>
                      <span class="pull-right">35%</span>
                    </div>

                    <div class="progress progress-mini">
                      <div style="width:35%" class="progress-bar progress-bar-danger"></div>
                    </div>
                  </a>
                </li>

                <li>
                  <a href="#">
                    <div class="clearfix">
                      <span class="pull-left">Unit Testing</span>
                      <span class="pull-right">15%</span>
                    </div>

                    <div class="progress progress-mini">
                      <div style="width:15%" class="progress-bar progress-bar-warning"></div>
                    </div>
                  </a>
                </li>

                <li>
                  <a href="#">
                    <div class="clearfix">
                      <span class="pull-left">Bug Fixes</span>
                      <span class="pull-right">90%</span>
                    </div>

                    <div class="progress progress-mini progress-striped active">
                      <div style="width:90%" class="progress-bar progress-bar-success"></div>
                    </div>
                  </a>
                </li>

                <li class="dropdown-footer">
                  <a href="#">
                    See tasks with details
                                        <i class="ace-icon fa fa-arrow-right"></i>
                  </a>
                </li>
              </ul>
            </li>

            <li class="purple">
              <a data-toggle="dropdown" class="dropdown-toggle" href="#">
                <i class="ace-icon fa fa-bell icon-animated-bell"></i>
                <span class="badge badge-important">8</span>
              </a>

              <ul class="dropdown-menu-right dropdown-navbar navbar-pink dropdown-menu dropdown-caret dropdown-close">
                <li class="dropdown-header">
                  <i class="ace-icon fa fa-exclamation-triangle"></i>
                  8 Notifications
                                </li>

                <li>
                  <a href="#">
                    <div class="clearfix">
											<span class="pull-left">
												<i class="btn btn-xs no-hover btn-pink fa fa-comment"></i>
												New Comments
											</span>
                      <span class="pull-right badge badge-info">+12</span>
                    </div>
                  </a>
                </li>

                <li>
                  <a href="#">
                    <i class="btn btn-xs btn-primary fa fa-user"></i>
                    Bob just signed up as an editor ...
                                    </a>
                </li>

                <li>
                  <a href="#">
                    <div class="clearfix">
											<span class="pull-left">
												<i class="btn btn-xs no-hover btn-success fa fa-shopping-cart"></i>
												New Orders
											</span>
                      <span class="pull-right badge badge-success">+8</span>
                    </div>
                  </a>
                </li>

                <li>
                  <a href="#">
                    <div class="clearfix">
											<span class="pull-left">
												<i class="btn btn-xs no-hover btn-info fa fa-twitter"></i>
												Followers
											</span>
                      <span class="pull-right badge badge-info">+11</span>
                    </div>
                  </a>
                </li>

                <li class="dropdown-footer">
                  <a href="#">
                    See all notifications
                                        <i class="ace-icon fa fa-arrow-right"></i>
                  </a>
                </li>
              </ul>
            </li>

            <li class="green">
              <a data-toggle="dropdown" class="dropdown-toggle" href="#">
                <i class="ace-icon fa fa-envelope icon-animated-vertical"></i>
                <span class="badge badge-success">5</span>
              </a>

              <ul class="dropdown-menu-right dropdown-navbar dropdown-menu dropdown-caret dropdown-close">
                <li class="dropdown-header">
                  <i class="ace-icon fa fa-envelope-o"></i>
                  5 Messages
                                </li>

                <li class="dropdown-content">
                  <ul class="dropdown-menu dropdown-navbar">
                    <li>
                      <a href="#">
                        <span class="msg-body">
													<span class="msg-title">
														<span class="blue">Alex:</span>
														Ciao sociis natoque penatibus et auctor ...
													</span>

													<span class="msg-time">
														<i class="ace-icon fa fa-clock-o"></i>
														<span>a moment ago</span>
													</span>
												</span>
                      </a>
                    </li>

                    <li>
                      <a href="#">
                        <span class="msg-body">
													<span class="msg-title">
														<span class="blue">Susan:</span>
														Vestibulum id ligula porta felis euismod ...
													</span>

													<span class="msg-time">
														<i class="ace-icon fa fa-clock-o"></i>
														<span>20 minutes ago</span>
													</span>
												</span>
                      </a>
                    </li>

                    <li>
                      <a href="#">
                        <span class="msg-body">
													<span class="msg-title">
														<span class="blue">Bob:</span>
														Nullam quis risus eget urna mollis ornare ...
													</span>

													<span class="msg-time">
														<i class="ace-icon fa fa-clock-o"></i>
														<span>3:15 pm</span>
													</span>
												</span>
                      </a>
                    </li>

                    <li>
                      <a href="#">
                        <span class="msg-body">
													<span class="msg-title">
														<span class="blue">Kate:</span>
														Ciao sociis natoque eget urna mollis ornare ...
													</span>

													<span class="msg-time">
														<i class="ace-icon fa fa-clock-o"></i>
														<span>1:33 pm</span>
													</span>
												</span>
                      </a>
                    </li>

                    <li>
                      <a href="#">
                        <span class="msg-body">
													<span class="msg-title">
														<span class="blue">Fred:</span>
														Vestibulum id penatibus et auctor  ...
													</span>

													<span class="msg-time">
														<i class="ace-icon fa fa-clock-o"></i>
														<span>10:09 am</span>
													</span>
												</span>
                      </a>
                    </li>
                  </ul>
                </li>

                <li class="dropdown-footer">
                  <a href="inbox.html">
                    See all messages
                                        <i class="ace-icon fa fa-arrow-right"></i>
                  </a>
                </li>
              </ul>
            </li>

            <!-- #section:basics/navbar.user_menu -->
            <li class="light-blue">
              <a data-toggle="dropdown" href="#" class="dropdown-toggle">
                <span class="user-info">
									<small>Welcome,</small>
									Jason
								</span>

                <i class="ace-icon fa fa-caret-down"></i>
              </a>

              <ul class="user-menu dropdown-menu-right dropdown-menu dropdown-yellow dropdown-caret dropdown-close">
                <li>
                  <a href="#">
                    <i class="ace-icon fa fa-cog"></i>
                    Settings
                                    </a>
                </li>

                <li>
                  <a href="profile.html">
                    <i class="ace-icon fa fa-user"></i>
                    Profile
                                    </a>
                </li>

                <li class="divider"></li>

                <li>
                  <a href="#">
                    <i class="ace-icon fa fa-power-off"></i>
                    Logout
                                    </a>
                </li>
              </ul>
            </li>

            <!-- /section:basics/navbar.user_menu -->
          </ul>
        </div>

        <!-- /section:basics/navbar.dropdown -->
      </div><!-- /.navbar-container -->
    </div>

    <!-- #2 显示内容容器 /section:basics/navbar.layout -->
    <div class="main-container" id="main-container">


      <!-- #2-1 左侧菜单栏 #section:basics/sidebar -->
      <div id="sidebar" class="sidebar responsive" :class="{ display: isDisplay,'menu-min': isMenuMin}" >


        <div class="sidebar-shortcuts" id="sidebar-shortcuts">
          <div class="sidebar-shortcuts-large" id="sidebar-shortcuts-large">
            <button class="btn btn-success">
              <i class="ace-icon fa fa-signal"></i>
            </button>

            <button class="btn btn-info">
              <i class="ace-icon fa fa-pencil"></i>
            </button>

            <!-- #section:basics/sidebar.layout.shortcuts -->
            <button class="btn btn-warning">
              <i class="ace-icon fa fa-users"></i>
            </button>

            <button class="btn btn-danger">
              <i class="ace-icon fa fa-cogs"></i>
            </button>

            <!-- /section:basics/sidebar.layout.shortcuts -->
          </div>

          <div class="sidebar-shortcuts-mini" id="sidebar-shortcuts-mini">
            <span class="btn btn-success"></span>

            <span class="btn btn-info"></span>

            <span class="btn btn-warning"></span>

            <span class="btn btn-danger"></span>
          </div>
        </div><!-- /.sidebar-shortcuts -->

        <ul class="nav nav-list">

          <!-- 个人首页 -->
          <li class="active">
            <router-link to="/adminUser/" tag="a" href="#" >
              <i class="menu-icon glyphicon glyphicon-home"></i>
              <span class="menu-text"> 个人首页 </span>
            </router-link>

            <b class="arrow"></b>
          </li>

          <!-- 用户权限 -->
          <li class="">
            <a href="#" class="dropdown-toggle">
              <i class="menu-icon fa fa-pencil-square-o"></i>
              <span class="menu-text"> 用户权限 </span>

              <b class="arrow fa fa-angle-down"></b>
            </a>

            <b class="arrow"></b>

            <ul class="submenu">
              <li class="">
                <router-link to="/adminUser/users" tag="a" href="#">
                  <i class="menu-icon fa fa-caret-right"></i>
                  用户
                                </router-link>

                <b class="arrow"></b>
              </li>

              <li class="">
                <router-link to="/adminUser/roles" tag="a" href="#">
                  <i class="menu-icon fa fa-caret-right"></i>
                  角色
                                </router-link>

                <b class="arrow"></b>
              </li>

              <li class="">
                <router-link to="/adminUser/auths" tag="a" href="#">
                  <i class="menu-icon fa fa-caret-right"></i>
                  权限
                                </router-link>

                <b class="arrow"></b>
              </li>


            </ul>
          </li>


        </ul><!-- /.nav-list -->

        <!-- #section:basics/sidebar.layout.minimize -->
        <div class="sidebar-toggle sidebar-collapse" @click="menuMinToggler">
          <i class="ace-icon fa fa-angle-double-left" data-icon1="ace-icon fa fa-angle-double-left" data-icon2="ace-icon fa fa-angle-double-right"></i>
        </div>

        <!-- /section:basics/sidebar.layout.minimize -->

      </div>

      <!-- #2-2 右侧内容容器 /section:basics/sidebar -->
      <div class="main-content">
        <div class="ace-settings-container" id="ace-settings-container">
          <div class="btn btn-app btn-xs btn-warning ace-settings-btn" @click="toggleSheZhi()" :class="{open: isOpen}">
            <i class="ace-icon fa fa-cog bigger-150"></i>
          </div>

          <div class="ace-settings-box clearfix" :class="{open:isOpen}">


            <!--              -->

          </div><!-- /.ace-settings-box -->
        </div><!-- /.ace-settings-container -->
          <router-view></router-view>
      </div><!-- /.main-content -->

      <div class="footer">
        <div class="footer-inner">
          <!-- #section:basics/footer -->
          <div class="footer-content">
						<span class="bigger-120">
							<span class="blue bolder">Ace</span>
							Application &copy; 2013-2014
						</span>

            &nbsp; &nbsp;
            <span class="action-buttons">
							<a href="#">
								<i class="ace-icon fa fa-twitter-square light-blue bigger-150"></i>
							</a>

							<a href="#">
								<i class="ace-icon fa fa-facebook-square text-primary bigger-150"></i>
							</a>

							<a href="#">
								<i class="ace-icon fa fa-rss-square orange bigger-150"></i>
							</a>
						</span>
          </div>

          <!-- /section:basics/footer -->
        </div>
      </div>

      <a href="#" id="btn-scroll-up" class="btn-scroll-up btn btn-sm btn-inverse">
        <i class="ace-icon fa fa-angle-double-up icon-only bigger-110"></i>
      </a>
    </div><!-- /.main-container -->



  </div>
</template>
<script>
/* ace settings handler */
  import "../assets/js/ace-extra.min"
  import "../assets/js/html5shiv"
  import "../assets/js/bootstrap.min"
  import "../assets/js/ace-elements.min"
  import "../assets/js/ace.min"

  import { nev } from '../assets/my-assets/js/adminUser'

  export default{
    name: "adminUser",
    components:{
    },
    data(){
          return{
            isDisplay: false,
            isMenuMin:true,
            isOpen:false,
          }
    },
    mounted(){
      nev();
    },
    methods:{
      toggleSheZhi(){
          if (this.isOpen == false){
            this.isOpen = true;
          }else {
            this.isOpen = false;
          }
      },
      navToggler(){//在移动设备时顶上导航条显示左侧菜单栏方法
          if (this.isDisplay) {
            this.isDisplay = false;
          } else {
            this.isDisplay = true;
          }
        },
      menuMinToggler(){//左侧菜单栏显示与隐藏方法
        if (this.isMenuMin){
                this.isMenuMin = false;
            }else {
                this.isMenuMin = true;
            }
      },

    }
  }
</script>
<style scoped>
  .navbar{
    background-color: black;
  }
  /*   bootstrap & fontawesome*/
  @import "../assets/css/bootstrap.min.css";
  @import "../assets/css/font-awesome.min.css";
  /* text fonts */
  @import "../assets/css/ace-fonts.css";
  /* ace styles */
  @import "../assets/css/ace.min.css";
  /* [if lte IE 9 */
  @import "../assets/css/ace-part2.min.css";
  @import "../assets/css/ace-ie.min.css";
  /* [endif] */
  @import "../assets/css/ace-skins.min.css";
  @import "../assets/css/ace-rtl.min.css";

</style>
