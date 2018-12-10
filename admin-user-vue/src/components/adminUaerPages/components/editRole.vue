<template>
  <div class="roleCompileInput">
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
          <a href="#">角色中心</a>
        </li>
        <li class="active">编辑角色</li>
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
          编辑角色
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
              <label class="col-sm-4 control-label no-padding-right" for="form-name" ><font><font> 角色名称 :</font></font></label>

              <div class="col-sm-7">
                <input v-model="role.name" type="text" id="form-name" placeholder="角色名称" class="col-xs-9 col-sm-5">
              </div>
            </div>
            <div class="form-group ">
              <label class="col-sm-4 control-label no-padding-right" for="form-code"><font><font>角色编号 :</font></font></label>

              <div class="col-sm-7">
                <input v-model="role.code" type="text" id="form-code" placeholder="角色编号" class="col-xs-9 col-sm-5">
              </div>
            </div>
            <div class="form-group ">
              <label class="col-sm-4 control-label no-padding-right" for="form-desc"><font><font> 角色描述 :</font></font></label>

              <div class="col-sm-5">
                <textarea v-model="role.desc" style="height: 100px" class="form-control " placeholder="角色描述"></textarea>
              </div>
            </div>
            <div class="form-group">
              <div class="col-xs-10 col-xs-offset-1 col-sm-4 col-sm-offset-4" style="margin-top: 30px" >
                <button class="btn btn-sm btn-success">
                  <i class="ace-icon fa fa-check"></i><font><font>
                  提交
                                      </font></font></button>
                <button class="btn btn-sm  btn-info">
                  <i class="ace-icon fa fa-check"></i><font><font>
                  重置
                                      </font></font></button>
              </div>
            </div>
          </form>
        </div><!-- /.col -->
      </div><!-- /.row -->
    </div>
  </div>
</template>
<script>
  import api from '../../../api/index'
  export default{
    name:'roleCompileInput',
    data(){
      return{
        role:{
          name:'',
          code:'',
          desc:'',
        }
      }
    },
    mounted(){
      this.initial();
    },
    methods:{
      initial(){
        var id = this.$route.query.id;
        api.localGetRole(id ).then((response)=> {
          console.log(response);
          if(response.data.code == '1001') {
            this.role = response.data.data;
          } else {
            alert('查询失败');
          };
        })
          .catch(function (error) {
            console.log(error)
          })
      },
      sum(){
        this.$store.dispatch('updateRole',this.role)
      }
    },
  }
</script>
<style scoped>

</style>
