<template>
  <div class="auths">
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
        <li class="active">权限中心</li>
      </ul><!-- /.breadcrumb -->

      <!-- 右侧容器路径导航栏 #section:basics/content.searchbox -->
      <div class="nav-search">
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
              :tableList="authList"

              :table-count-data="countData"
              @pageQuery="queryPage"
              ref="table"

            >
              <div class="tables-solo" slot="table-soso">
                <div class="">
                  <router-link tag="button" to="/adminUser/authAddInput" class="btn btn-white btn-default btn-round">
                    <i class="ace-icon glyphicon glyphicon-plus green"></i><font><font class="">
                    添加权限
                                        </font></font></router-link>
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
                <td  v-for="head in tableHeadList" :class="head.hidden">
                  {{ tableBody[head.key]}}
                </td>
                <td>
                  <div class="hidden-sm hidden-xs action-buttons">

                    <router-link tag="button" :to="{ path:'/adminUser/edlitAuth',query:{id:tableBody.id} }" class="btn btn-white btn-default btn-round" >
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
                          <router-link tag="button"  :to="{ path:'/adminUser/edlitAuth',query:{id:tableBody.id} }" class="btn btn-white btn-default btn-round" >
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
            </my-tables>
            <!-- PAGE CONTENT ENDS -->
          </div><!-- /.col -->
        </div><!-- /.row -->
      </div><!-- /.page-content-area -->
    </div><!-- /.page-content -->

  </div>
</template>
<script>
  import rolesTable from './components/tables.vue'
  import { mapState } from 'vuex'
  import api from '../../api/index'
  export default{
    name: 'auths',
    components: {
      "myTables": rolesTable
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
      }
    },
    computed: {
      ...mapState({
        /*当vuex状态仓库使用了模块化 就必须通过模块名才能获取值*/
        authList: state => state.adminAuths.authList
      })
    },
    methods:{
      getAuthList(){
        this.$store.dispatch('getAuthList');
      },
      deleteById(id){//删除用户
        if(window.confirm("确定要删除该条信息?")) {
          this.$store.dispatch('authDelete',id)
          this.queryPage()
        }
      },
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

        this.getAuthList()
      },
    }
  }
</script>
