<!-- 分页组件  -->

<template>
  <div class="pages row" >
    <div class=" pagination col-xs-2 col-sm-3" >
      <select @change="clickPage(1)" v-model="page.pageSize" class="form-control" style="height: 30px;width: 70px ">
        <option v-for="x in page.perPageOptions" :value="x" >{{x}}</option>
      </select>
    </div>
    <div class="col-xs-8 col-sm-9" >
      <nav aria-label="Page navigation" class="col-xs-offset-2 col-xs-10 col-sm-offset-5 col-sm-7">
        <ul class="pagination ">
          <li>
            <span class="">共有{{page.totalSize}}条，每页显示：{{page.pageSize}}条</span>
          </li>
          <li :class="preButtonClass">
            <a @click="clickPage(page.pageNo-1)" aria-label="Previous">
              <span aria-hidden="true">&laquo;</span>
            </a>
          </li>
          <li v-for="pageButton in page.pageButtons" :class="{active: pageButton == page.pageNo}">
            <a @click="clickPage(pageButton)">{{ pageButton }}</a>
          </li>
          <li :class="nextButtonClass">
            <a @click="clickPage(page.pageNo+1)" aria-label="Next">
              <span aria-hidden="true">&raquo;</span>
            </a>
          </li>
        </ul>
      </nav>
    </div>
  </div>
</template>
<script>
  export default{
    name: 'pages',
    props: [],
    data(){
      return {
        countData: {},
        page: {
          "pageSize": 5,       // 每页多少条
          "pageNo": 1,			// 当前页
          "totalPage": 0,      // 总共多少页
          "totalSize": 0,		// 总共多少条记录
          "pagesLength": 7,    //每页的长度
          "perPageOptions": [5, 10, 20, 30, 40, 50],
          "pageButtons": []
        },
        preButtonClass: "",//上一页按钮的样式
        nextButtonClass: "",//下一页按钮的样式
      }
    },
    computed: {//计算属性

    },
    mounted(){//页面渲染完成之前执行
      this.initialPage()
    },
    methods: {//函数定义
      initialPage(){//分页初始化函数
        console.log('分页初始化成功!');
        sessionStorage.setItem('page.pageNo', this.page.pageNo)//将page保存在浏览器上
        sessionStorage.setItem('page.pageSize', this.page.pageSize)//将page保存在浏览器上
        this.$emit('pageQuerys');//子父通信，通知父级组件
      },
      getTotalPage(pages){// 根据定义的page对象，计算出分页总数
        var totalPage = 0;
        if (pages.totalSize % pages.pageSize > 0) {  //取余，比如7%3 会余1   如果有余，则页数应该是7除以3取整为2再加上1等于3
          totalPage = Math.floor(pages.totalSize / pages.pageSize) + 1;
        } else {//如果总条数为6条，每页3条，则6%3等于0，则页数应该是6除以3等于2
          totalPage = pages.totalSize / pages.pageSize
        }
        return totalPage;
      },
      getPageButtonss(pages){//根据定义的page对象，得到分页按钮列表

        var pageButtonss = [];
        if (pages.totalPage <= pages.pagesLength) {
          for (var i = 1; i <= pages.totalPage; i++) {
            pageButtonss.push(i);
          }
        } else {
          var offset = (pages.pagesLength - 1) / 2;
          if (pages.pageNo <= offset) {
            //第一种情况：左边没有...
            for (i = 1; i <= offset + 1; i++) {
              pageButtonss.push(i);
            }

            pageButtonss.push('...');
            pageButtonss.push(pages.totalPage);

          } else if (pages.pageNo > pages.totalPage - offset) {
            pageButtonss.push(1);
            pageButtonss.push('...');
            for (i = offset + 1; i >= 1; i--) {
              pageButtonss.push(pages.totalPage - i);
            }
            pageButtonss.push(pages.totalPage);

          } else {
            //最后的一种情况，两边都有...
            pageButtonss.push(1);
            pageButtonss.push('...');

            for (i = Math.ceil(offset / 2); i >= 1; i--) {
              pageButtonss.push(pages.pageNo - i);
            }
            pageButtonss.push(pages.pageNo);
            for (i = 1; i <= offset / 2; i++) {
              pageButtonss.push(pages.pageNo + i);
            }

          }
        }
        return pageButtonss;
      },
      pageQueryCounts(data){//父组件触发该函数
        this.page.totalSize = data.data;
        this.page.totalPage = this.getTotalPage(this.page);
        this.page.pageButtons = this.getPageButtonss(this.page);
        if (this.page.pageNo == 1) {//如果当前页等于1，则不能按上一页的按钮
          this.preButtonClass = "disabled";
        }
        if (this.page.pageNo == this.page.totalPage) {//如果当前页等于总共的页数，则表示没有下一页按钮
          this.nextButtonClass = "disabled";
        }

      },
      pageQueryCount(data){
        console.log('分页数据获取完成，正在执行计算分页函数');
        this.pageQueryCounts(data)
      },
      clickPage(pageNo){
        if (pageNo < 1 || pageNo > this.page.totalPage || pageNo == '...') return;
        this.page.pageNo = pageNo;
        sessionStorage.setItem('page.pageNo', this.page.pageNo)//将page保存在浏览器上
        sessionStorage.setItem('page.pageSize', this.page.pageSize)//将page保存在浏览器上
        this.$emit("pageQuerys");//触发绑定父组件上的函数
      },



    }

  }

</script>
