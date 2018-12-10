
<!-- 角色分配权限页面  -->

<template>
  <div class="roleAssignRoles">
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
          <a href="#">权限中心</a>
        </li>
        <li class="active">分配角色权限</li>
      </ul>

      <!-- 右侧容器路径搜索容器 #section:basics/content.searchbox -->
      <div class="nav-search">
        <form class="form-search">
							<span class="input-icon">
								<input type="text" placeholder="Search ..." class="nav-search-input"
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
              :tableList="authList"

              :table-count-data="countData"
              @pageQuery="queryPage"

              ref="table"

            >
              <div class="tables-solo" slot="table-soso">
                <div class="">
                  <h4>指定角色Id：{{ this.$route.query.id }}</h4>
                </div>
              </div>
              <tbody>
              <tr v-for="tableBody in authList">
                <!--<td class="center">
                  <label class="position-relative">
                    <input type="checkbox" class="ace" />
                    <span class="lbl"></span>
                  </label>
                </td>-->
                <td v-for="head in tableHeadList" :class="head.hidden">
                  {{ tableBody[head.key]}}


                </td>
                <td>
                  <div class="hidden-sm hidden-xs action-buttons">
                    <button v-show="!tableBody.exit" @click="setAllotAuth(tableBody.id)"
                            class="btn btn-white btn-default btn-round">
                      <i class="ace-icon fa fa-exchange green"></i><font><font class="">
                      分配
                                          </font></font></button>
                    <button v-show="tableBody.exit" @click="removeRoleAuth(tableBody.roleAuthId)"
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
                          <button v-show="!tableBody.exit" @click="setAllotAuth(tableBody.id)"
                                  class="btn btn-white btn-default btn-round">
                            <i class="ace-icon fa fa-exchange green"></i><font><font class="">
                            分配
                                                </font></font></button>
                          <button v-show="tableBody.exit" @click="removeRoleAuth(tableBody.roleAuthId)"
                                  class="btn btn-white btn-danger btn-round">
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
  import api from '../../../api/index'
  export default{
    name: 'roleAssignRoles',
    components: {
      "myTables": tables
    },
    data(){
      return {
        tableHeadList:[
          {
            label: '权限ID',
            key: 'id',
            hidden: 'hidden-480'
          },
          {
            label: '权限名称',
            key: 'name',
          },
          {
            label: '权限编号',
            key: 'code',
            hidden: 'hidden-480'
          },
          {
            label: '权限描述',
            key: 'desc',
          },

        ],
        countData: {},//查询传给分页条数信息
        authList:{},//角色列表信息
        roleAuthList:{},//角色权限信息
      }
    },
    methods:{
      queryPage(){
        api.locolGetAuthCount().then((response)=> {
          if(response.data.code == '1001') {
              console.log(response);
            this.countData = response.data;
            this.$refs.table.getCountPaget(this.countData);
          } else {
            alert('查询失败');
          };
        })
          .catch(function (error) {
            console.log(error)
          })

        this.setRoleAuthList(this.$route.query.id)
      },
      setRoleAuthList(roleId){
        var _this = this;
        api.localGetAuthList().then(function(data){
          if(data.data.code == '1001') {
            var authList = data.data.data;

            api.locolInfoRoleAuth(roleId).then(function(data){
              if (data.data.code== '1001'){
                _this.roleAuthList = data.data.data;
                console.log(authList);
                authList.forEach(function(auth) {
                  auth.exit = false;
                  _this.roleAuthList.forEach(function(roleAuth) {
                    if(auth.id == roleAuth.authId) {
                      auth.exit = true;
                      auth.roleAuthId = roleAuth.id;
                    }
                  })
                })
                _this.authList = authList
                console.log(authList)
              }else if (data.data.code=='10010010'){
                  alert("非法请求")
              }
            })
          } else if(data.data.code == '10010010') { //非法请求
            alert("非法请求")
          };
        });
      },

      setAllotAuth(authId){
        var roleAuth = {};
        roleAuth.roleId = this.$route.query.id;
        roleAuth.authId = authId;
        this.$store.dispatch('setAllotAuth',roleAuth);
        this.queryPage();
      },
      removeRoleAuth(roleAuthId){
        this.$store.dispatch('roleAuthdeleteById',roleAuthId);
        this.queryPage();
      },

    }

  }
</script>
