<template>
  <div class="usersAddInput">
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
        <li class="active">添加用户</li>
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
          <form class="form-horizontal" role="form" method="post" @submit.prevent="sum('user-add')" data-vv-scope="user-add">
            <!-- #section:elements.form -->
            <div class="form-group ">
              <label class="col-sm-4 control-label no-padding-right" for="form-userId" ><font><font> 用户名 :</font></font></label>
              <div class="col-sm-7">
                <input name="userId" v-model="user.userId" v-validate="'required|max:6'" :class="{'is-danger': errors.has('user-add.userId') }"  type="text" id="form-userId" placeholder="用户名" class="col-xs-9 col-sm-5">
                <span v-show="errors.has('user-add.userId')" class="red">{{ errors.first('user-add.userId') }}</span>
              </div>
            </div>

            <div class="form-group ">
              <label class="col-sm-4 control-label no-padding-right" for="form-userName"><font><font>姓名 :</font></font></label>
              <div class="col-sm-7">
                <input  name="userName" v-model="user.userName" v-validate="'required|max:4'" :class="{'is-danger': errors.has('user-add.userName') }"  type="text" id="form-userName" placeholder="姓名" class="col-xs-9 col-sm-5">
                <span v-show="errors.has('user-add.userName')" class="red">{{ errors.first('user-add.userName') }}</span>
              </div>
            </div>
            <div class="form-group">
              <div class="radio col-sm-offset-4 col-sm-4">
                <label>
                  <input name="form-field-radio" type="radio" v-model="user.sex"  value="男" class="ace" checked="checked">
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
                <input name="phoneNum" v-model="user.phoneNum" v-validate="'required|mobile'" :class="{'is-danger': errors.has('user-add.phoneNum') }" type="text" id="form-phoneNum" placeholder="手机号" class="col-xs-9 col-sm-5">
                <span v-show="errors.has('user-add.phoneNum')" class="red">{{ errors.first('user-add.phoneNum') }}</span>

              </div>
            </div>
            <div class="form-group ">
              <label class="col-sm-4 control-label no-padding-right" for="form-email"><font><font> 邮箱 :</font></font></label>

              <div class="col-sm-7">
                <input name="email" v-model="user.email" v-validate="'required|email'" :class="{'is-danger': errors.has('user-add.email') }" type="text" id="form-email" placeholder="邮箱" class="col-xs-9 col-sm-5">
                <span v-show="errors.has('user-add.email')" class="red">{{ errors.first('user-add.email') }}</span>

              </div>
            </div>
            <div class="form-group ">
              <label class="col-sm-4 control-label no-padding-right" for="form-address"><font><font> 地址 :</font></font></label>
              <div class="col-sm-7">
                <input name="address" v-model="user.address" v-validate="'required'" :class="{'is-danger': errors.has('user-add.address') }" type="text" id="form-address" placeholder="地址" class="col-xs-12 col-sm-8">
                <span v-show="errors.has('user-add.address')" class="red">{{ errors.first('user-add.address') }}</span>

              </div>
            </div>
            <div class="form-group">
              <div class="col-xs-10 col-xs-offset-1 col-sm-4 col-sm-offset-4" style="margin-top: 30px" >
                <input  type="submit" class="btn btn-sm btn-success" value="提交" />
                <input @click="errors.clear('user-add')" class="btn btn-sm  btn-info" type="button" value="重置"/>

              </div>
            </div>
          </form>
        </div><!-- /.col -->
      </div><!-- /.row -->
    </div>
  </div>
</template>
<script>
  import { Validator,mapFields } from 'vee-validate';
  Validator.extend('mobile', {
    messages: {
      //en:field => field + '必须是11位手机号码',
    },
    validate: value => {
      return value.length == 11 && /^((13|14|15|17|18)[0-9]{1}\d{8})$/.test(value)
    }
  });
  const dictionary = {
    en: {
      messages: {
        required: () => 'no null'
      }
    },
    cn: {
      messages: {
        mobile:() =>'必须是11位的手机号',
        required: () => '不能为空',
        max: () => '超出字符数量',
        email:()=>'请输入正确的邮箱格式'

      }
    }
  };


  export default{
      name:'usersAddInput',
      data(){
          return{
              user:{
                userId:'',
                userName:'',
                sex:'男',
                phoneNum:'',
                email:'',
                address:''
              }
          }
      },
    computed: {
      ...mapFields({
        userNameFlags: 'userId',
        userNameFlags: 'userName',
        phoneNumFlags:'phoneNum',
        emailFlags:'email',
        addressFlags:'address',

      }),
    },
    methods:{
      sum(scope){
        this.$validator.validateAll(scope).then(result => {
          if (result) {
            alert("验证成功！")
            this.$store.dispatch('setAddUser',this.user)
          }
        });
      },
    }
  }
</script>
<style scoped>
  .form-group span{
   position: relative;
    top:5px;
    left: 5px;
  }
  .red{
    color: red;
  }
  .is-danger{
    border: 1px solid red;
  }
</style>
