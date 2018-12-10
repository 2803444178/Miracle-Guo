
        <!--表格组件-->

<template>
  <div class="tables">
    <div class="row">
      <div class="col-xs-12">
        <!-- PAGE CONTENT BEGINS -->
        <div class="row">
          <div class="col-xs-12">
            <!--  表格头部搜索容器 卡槽 -->
            <slot name="table-soso"></slot>
            <table id="sample-table-1" class="table table-striped table-bordered table-hover">
              <thead>
              <tr>
                <!--<<th class="center">
                  <label class="position-relative">
                    <input type="checkbox" class="ace" />
                    <span class="lbl"></span>
                  </label>
                </th>-->
                <th v-for="table in tableHeadList" :class="table.hidden">
                  {{ table.label }}
                </th>
                <th>操作</th>

              </tr>
              </thead>

              <slot></slot>
            </table>
            <div class="table-pages">
                 <my-page
                   @pageQuerys="tableQuery"
                   ref="page"
                 >
                 </my-page>
            </div>
          </div><!-- /.span -->
        </div>
      </div><!-- /.col -->
    </div><!-- /.row -->

    </div>
</template>
<script>
  import myPages from './pages.vue'
  export default{
      name:"users",
      components:{
        "myPage":myPages,
      },
    props:[
      'tableHeadList',
      'tableList',

    ],
      data(){
          return{
              tableCaoZuoUsers:true,
          }
      },
    mounted(){

    },
    methods:{
        tableQuery(){
            this.$emit("pageQuery")
        },
      getCountPaget(data){
            console.log('已经在表格getCountPaget函数里面，正在进去分页函数')
            this.$refs.page.pageQueryCount(data);
      }
    }
  }
</script>
<style scoped>
  .table{
    margin-bottom: 0px;
  }
  .table-pages,.tables-solo{
    border-bottom: 1px solid #e0e0e0;
    background-color: #EFF3F8;
    overflow:hidden;
    zoom:1;
    padding: 0px 20px;
  }
  .table .btn{
    padding: 2px 5px;
  }
  .tables-solo{
    padding: 10px 10px;
  }
</style>
