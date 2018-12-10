<template>
  <div class="authAddInput">
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
        <li class="active">添加权限</li>
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
    <div class="page-content-area">
      <div class="page-header">
        <h1><font><font>
          添加权限
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
              <label class="col-sm-4 control-label no-padding-right" for="form-name" ><font><font> 权限名称 :</font></font></label>

              <div class="col-sm-7">
                <input v-model="auth.name" type="text" id="form-name" placeholder="角色名称" class="col-xs-9 col-sm-5">
              </div>
            </div>
            <div class="form-group ">
              <label class="col-sm-4 control-label no-padding-right" for="form-code"><font><font>权限编号 :</font></font></label>

              <div class="col-sm-7">
                <input v-model="auth.code" type="text" id="form-code" placeholder="权限编号" class="col-xs-9 col-sm-5">
              </div>
            </div>
            <div class="form-group ">
              <label class="col-sm-4 control-label no-padding-right" for="form-desc"><font><font> 权限描述 :</font></font></label>

              <div class="col-sm-5">
                <textarea v-model="auth.desc" style="height: 100px" class="form-control " placeholder="权限描述"></textarea>
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
  export default{
    name:'authAddInput',
    data(){
      return{
        auth:{
          name:'',
          code:'',
          desc:'',
        }
      }
    },
    methods:{
          sum(){
              this.$store.dispatch('setAddAuth',this.auth)
          }
    },
  }
</script>
<style scoped>

</style>
