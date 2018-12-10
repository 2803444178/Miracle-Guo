<template>
  <div class="users">
    <!-- #section:basics/content.breadcrumbs -->
    <div class="breadcrumbs" id="breadcrumbs">

      <ul class="breadcrumb">
        <li>
          <i class="ace-icon fa fa-home home-icon"></i>
          <a href="#">Home</a>
        </li>

        <li>
          <a href="#">用户权限</a>
        </li>
        <li class="active">个人中心</li>
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

    <!-- /section:basics/content.breadcrumbs -->
    <div class="page-content">

          <!-- 右侧内容容器 /section:settings.box -->
      <div class="page-content-area">
        <div class="row">
          <div class="col-xs-12">
            <!-- PAGE CONTENT BEGINS -->
            <!-- 用户信息表格 -->
            <users-table
              :table-head-list="tableHeadList"
              :table-list="usersList"
              :table-count-data="countData"
              @pageQuery="queryPage"
              ref="table"
            >
              <div class="tables-solo" slot="table-soso">
                <div class="">
                  <router-link tag="button" to="/adminUser/tableUserAddInput" class="btn btn-white btn-default btn-round">
                    <i class="ace-icon glyphicon glyphicon-plus green"></i><font><font class="">
                    添加用户
                                        </font></font></router-link>
                </div>
              </div>
              <tbody>
              <tr v-for="tableBody in usersList">
                <!--<td class="center">
                  <label class="position-relative">
                    <input type="checkbox" class="ace" />
                    <span class="lbl"></span>
                  </label>
                </td>-->
                <td  v-for="head in tableHeadList" :class="head.hidden">
                  {{ tableBody[head.key]}}
                </td>
                <td>
                  <div class="hidden-sm hidden-xs action-buttons">
                    <router-link :to="{ path:'/adminUser/userAssignRoles',query:{userId:tableBody.userId} }" tag="button" class="btn btn-white btn-default btn-round" >
                      <i class="ace-icon fa fa-exchange green"></i><font><font class="">
                      分配角色
                                          </font></font></router-link>


                    <router-link :to="{ path:'/adminUser/editUser',query:{id:tableBody.id} }" tag="button" class="btn btn-white btn-default btn-round" >
                      <i class="ace-icon fa fa-pencil green"></i><font><font class="">
                      编辑
                                          </font></font></router-link>

                    <button @click="deleteById(tableBody.id)" class="btn btn-white btn-default btn-round">
                      <i class="ace-icon fa fa-trash-o red2"></i><font><font class="">
                      删除
                                          </font></font></button>
                  </div>

                  <div class="hidden-md hidden-lg">
                    <div class="inline position-relative">
                      <button class="btn btn-minier btn-yellow dropdown-toggle" data-toggle="dropdown" data-position="auto">
                        <i class="ace-icon fa fa-caret-down icon-only bigger-120"></i>
                      </button>

                      <ul style="text-align: center" class="dropdown-menu dropdown-only-icon dropdown-yellow dropdown-menu-right dropdown-caret dropdown-close">
                        <li>
                        <router-link :to="{ path:'/adminUser/userAssignRoles',query:{userId:tableBody.userId} }"  tag="button" class="btn btn-white btn-default btn-round" >
                          <i class="ace-icon fa fa-exchange green"></i><font><font class="">
                          分配角色
                                              </font></font></router-link>
                        </li>

                        <li>
                          <router-link :to="{ path:'/adminUser/editUser',query:{id:tableBody.id} }" tag="button"  class="btn btn-white btn-default btn-round" >
                            <i class="ace-icon fa fa-pencil green"></i><font><font class="">
                            编辑
                                                </font></font></router-link>
                        </li>
                        <li>
                          <button @click="deleteById(tableBody.id)" class="btn btn-white btn-default btn-round">
                            <i class="ace-icon fa fa-trash-o red2"></i><font><font class="">
                            删除
                                                </font></font></button>
                        </li>
                      </ul>
                    </div>
                  </div>
                </td>
              </tr>
              </tbody>
            </users-table>
            <!-- PAGE CONTENT ENDS -->
          </div><!-- /.col -->
        </div><!-- /.row -->
      </div><!-- /.page-content-area -->
    </div><!-- /.page-content -->

  </div>
</template>
<script>
  import usersTable from './components/tables.vue'
  import api from '../../api/index'
  import { mapState } from 'vuex'
  export default{
      name:'users',
      components:{
        "usersTable":usersTable
      },
    props:{
    },
    data(){
      return{
        tableHeadList:[
          {
            label:'id',
            key:'id',
            hidden:'hidden-480'
          },
          {
            label:'用户名',
            key:'userId',
          },

          {
            label:'姓名',
            key:'userName',
            hidden:'hidden-480'
          },
          {
            label:'性别',
            key:'sex',
          },
          {
            label:'手机号',
            key:'phoneNum',
            hidden:'',
          },
          {
            label:'邮箱',
            key:'email',
            hidden:'hidden-480',
          },
          {
            label:'地址',
            key:'address',
            hidden:'hidden-480',
          },
        ],
        countData:{}
      }
    },
    computed: {
        /*计算中属性和data属性不能同时定义*/
      ...mapState({
        /*当vuex状态仓库使用了模块化 就必须通过模块名才能获取值*/
        usersList: state => state.adminUsers.usersList
      })
    },
    mounted(){
    },
    methods:{
      getUserList:function () {//用户列表接口数据调用
          this.$store.dispatch('GetUserList');
        },
      deleteById(id){//删除用户
        if(window.confirm("确定要删除该条信息?")) {
          this.$store.dispatch('userDelete',id)
          this.queryPage()
        }
      },
      queryPage(){
        var _this = this;
        api.locolGetUserCount().then(function (response) {
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

        this.getUserList();
      }
    }
  }
</script>
