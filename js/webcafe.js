var menu_item = $('.menu > li');
var btn_menu = $('.menu > li > a');
var sub_link = $('.sub-menu a');
var tab_list_link = $('.board li a');
var tab_section = $('.board section');
var tab =$('.tab a');

menu_item.addClass('menu-item');
btn_menu.addClass('btn-menu');
sub_link.addClass('icon-dot-circled');
tab_list_link.addClass('icon-dot-circled');

//메인 메뉴
btn_menu.click(function(e){
  var current_class = $(this).parent().hasClass('menu-act')
  e.preventDefault();
  menu_item.removeClass('menu-act')
  if(current_class){
 $(this).parent().removeClass('menu-act')
  }else{
    $(this).parent().addClass('menu-act');
  }
});
// 탭 메뉴
tab.click(function(e){
  e.preventDefault();
  tab_section.removeClass('tab-act');
  $(this).parent().parent().addClass('tab-act');
});