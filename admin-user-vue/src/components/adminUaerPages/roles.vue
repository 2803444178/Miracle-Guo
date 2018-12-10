<template>
  <div class="roles">
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
        <li class="active">角色中心</li>
      </ul><!-- /.breadcrumb -->

      <!-- 右侧容器路径导航栏 #section:basics/content.searchbox -->
      <div class="nav-search" >
        <form class="form-search">
							<span class="input-icon">
								<input type="text" placeholder="Search ..." class="nav-search-input" autocomplete="off" />
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
            <my-tables
              :tableHeadList="tableHeadList"
              :tableList="roleList"

              :table-count-data="countData"
              @pageQuery="queryPage"
              ref="table"

            >
              <div class="tables-solo" slot="table-soso">
                <div class="">
                  <router-link tag="button" to="/adminUser/roleAdd"  class="btn btn-white btn-default btn-round">
                    <i class="ace-icon glyphicon glyphicon-plus green"></i><font><font class="">
                    添加角色
                                        </font></font></router-link>
                </div>
              </div>
              <tbody>
              <tr v-for="tableBody in roleList">
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
                    <router-link :to="{path:'/adminUser/roleAssignAuth',query:{id:tableBody.id} }" tag="button" class="btn btn-white btn-default btn-round" >
                      <i class="ace-icon fa fa-exchange green"></i><font><font class="">
                      分配权限
                                          </font></font></router-link>


                    <router-link tag="button" :to="{ path:'/adminUser/editRole',query:{id:tableBody.id} }" class="btn btn-white btn-default btn-round" >
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
                          <router-link :to="{ path:'/adminUser/roleAssignAuth',query:{id:tableBody.id} }" tag="button" class="btn btn-white btn-default btn-round" >
                            <i class="ace-icon fa fa-exchange green"></i><font><font class="">
                            分配权限
                                                </font></font></router-link>
                        </li>

                        <li>
                          <router-link tag="button" :to="{ path:'/adminUser/editRole',query:{id:tableBody.id} }" class="btn btn-white btn-default btn-round" >
                            <i class="ace-icon fa fa-pencil green"></i><font><font class="">
                            编辑
                                                </font></font></router-link>
                        </li>
                        <li>
                          <button @click="deleteById(tableBody.id)"  class="btn btn-white btn-default btn-round">
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
            </my-tables>
            <!-- PAGE CONTENT ENDS -->
          </div><!-- /.col -->
        </div><!-- /.row -->
      </div><!-- /.page-content-area -->
    </div><!-- /.page-content -->

  </div>
</template>
<script>
  import table from './components/tables.vue'
  import { mapState } from 'vuex'
  import api from '../../api/index'
  export default{
    name: 'roles',
    components: {
      "myTables": table
    },
    data(){
      return {
        countData:{},
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

        ],
      }
    },
    computed:{
        ...mapState({
          /*当vuex状态仓库使用了模块化 就必须通过模块名才能获取值*/
          roleList: state => state.adminRoles.roleList
        })
    },
    mounted(){
    },
    methods:{
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
        this.getRoleList();
      },
      getRoleList(){
          this.$store.dispatch('getRoleList')
      },
      deleteById(id){
        if(window.confirm("确定要删除该角色信息?")) {
          this.$store.dispatch('roleDelete',id)
          this.queryPage()
        }
      }

    }
  }
</script>
