export function nev() {

  $('.nav-list a').on('click',function (e) {
    if ($(e.target).hasClass('dropdown-toggle') || $(e.target).parent().hasClass('dropdown-toggle')) {//判断标签上是否有这个class
      return;
    } else {
      $('.nav-list').find('li').removeClass('active')//遍历所有后代li 移除掉class
      $(e.target).parent().addClass('active')//遍历当前点击父级元素添加class
      $(e.target).parents('.nav-list>li').addClass('active')//遍历当前元素所有的父级并设置局部选择添加class
    }
  });

}
