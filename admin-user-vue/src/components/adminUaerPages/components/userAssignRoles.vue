<!-- 用户分配角色页面  -->

<template>
  <div class="userAssignRoles">
    <!--  右侧容器路径导航栏 #section:basics/content.breadcrumbs -->
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
        <li class="active">分配用户角色</li>
      </ul>
      <!-- 右侧容器路径搜索容器 #section:basics/content.searchbox -->
      <div class="nav-search" id="nav-search">
        <form class="form-search">
							<span class="input-icon">
								<input type="text" placeholder="Search ..." class="nav-search-input" id="nav-search-input"
                       autocomplete="off"/>
								<i class="ace-icon fa fa-search nav-search-icon"></i>
							</span>
        </form>
      </div><!-- /.nav-search -->
    </div>
    <!--  右边容器页面内容容器 -->
    <div class="page-content">
      <!-- 右侧内容容器 /section:settings.box -->
      <div class="page-content-area">
        <div class="row">
          <div class="col-xs-12">
            <!-- PAGE CONTENT BEGINS -->
            <!-- 用户信息表格 -->
            <my-tables
              :tableHeadList="tableHeadList"
              :tableList="roleList"
              :table-count-data="countData"
              @pageQuery="queryPage"
              ref="table"
            >
              <div class="tables-solo" slot="table-soso">
                <div class="">
                  <h4>指定用户：{{ this.$route.query.userId }}</h4>
                </div>
              </div>
              <tbody>
              <tr v-for="tableBody in roleList">
                <td v-for="head in tableHeadList" :class="head.hidden">
                  {{ tableBody[head.key]}}
                </td>
                <td>
                  <div class="hidden-sm hidden-xs action-buttons">
                    <button v-show="!tableBody.exit" @click="setAllotRole(tableBody.id)"
                                 class="btn btn-white btn-default btn-round">
                      <i class="ace-icon fa fa-exchange green"></i><font><font class="">
                      分配
                                          </font></font></button>
                    <button v-show="tableBody.exit" @click="removeUserRole(tableBody.userRoleId)"
                                 class="btn btn-white btn-danger btn-round">
                      <i class="ace-icon fa fa-exchange green"></i><font><font class="">
                      取消分配
                                          </font></font></button>
                  </div>
                  <div class="hidden-md hidden-lg">
                    <div class="inline position-relative">
                      <button class="btn btn-minier btn-yellow dropdown-toggle" data-toggle="dropdown"
                              data-position="auto">
                        <i class="ace-icon fa fa-caret-down icon-only bigger-120"></i>
                      </button>
                      <ul style="text-align: center"
                          class="dropdown-menu dropdown-only-icon dropdown-yellow dropdown-menu-right dropdown-caret dropdown-close">
                        <li>
                          <button v-show="!tableBody.exit" @click="setAllotRole(tableBody.id)" class="btn btn-white btn-default btn-round">
                            <i class="ace-icon fa fa-exchange green"></i><font><font class="">
                            分配
                                                </font></font></button>
                          <button v-show="tableBody.exit" @click="removeUserRole(tableBody.userRoleId)" class="btn btn-white btn-default btn-round">
                            <i class="ace-icon fa fa-exchange green"></i><font><font class="">
                            取消分配
                                                </font></font></button>


                        </li>

                      </ul>
                    </div>
                  </div>
                </td>
              </tr>
              </tbody>
            </my-tables>
            <!-- PAGE CONTENT ENDS -->
          </div><!-- /.col -->
        </div><!-- /.row -->
      </div><!-- /.page-content-area -->
    </div><!-- /.page-content -->
  </div>
</template>
<script>
  import tables from  './tables.vue'
  import { mapState } from 'vuex'
  import api from '../../../api/index'
  export default{
    name: 'userAssignRoles',
    components: {
      "myTables": tables
    },
    data(){
      return {
        tableHeadList: [
          {
            label: '角色ID',
            key: 'id',
            hidden: 'hidden-480'
          },
          {
            label: '角色名称',
            key: 'name',
          },
          {
            label: '角色编号',
            key: 'code',
            hidden: 'hidden-480'
          },
          {
            label: '角色描述',
            key: 'desc',
          },

        ],//表格头部信息
        countData: {},//查询传给分页条数信息
        roleList:{},//角色列表信息
        userRoleList:{},//用户角色信息
      }
    },
    computed: {
    },
    methods: {
     /* getRoleList: function () {//用户列表接口数据调用
        this.$store.dispatch('GetRoleList');
      },*/
      setUserRoleList(userId){
        var _this = this;
        var page = sessionStorage.getItem("pages");
        api.localGetRoleList(page).then(function(data) {
          if(data.data.code == '1001') {
            var roleList = data.data.data;
            _this.userRoleList = {};
            api.locolInfoUserRole(userId).then(function(data) {
                if (data.data.code == '1001'){
                  _this.userRoleList = data.data.data;
                  roleList.forEach(function(role) {
                    role.exit = false;
                    _this.userRoleList.forEach(function(userRole) {
                      if(role.id == userRole.roleId) {
                        role.exit = true;
                        role.userRoleId = userRole.id
                      }
                    })
                  })
                  _this.roleList = roleList
                }else if (data.data.code == '10010010'){
                    alert("非法请求")
                }

            })

          } else if(data.data.code == '10010010') { //非法请求
            alert("非法请求")
          };
        });
      },
      setAllotRole(roleId){
          var userRole = {};
          userRole.userId = this.$route.query.userId;
          userRole.roleId = roleId;
          this.$store.dispatch('setAddUserRole',userRole);
          this.queryPage();
      },
      removeUserRole(userRoleId){
          this.$store.dispatch('userRoledeleteById',userRoleId);
        this.queryPage();
      },
      queryPage(){
        var _this = this;
        api.locolGetRoleCount().then(function (response) {
          if(response.data.code == '1001') {
            _this.countData = response.data;
            _this.$refs.table.getCountPaget(_this.countData);
          } else {
            alert('查询失败');
          };
        })
          .catch(function (error) {
            console.log(error)
          })
        this.setUserRoleList(this.$route.query.userId);
      }
    }
  }
</script>
