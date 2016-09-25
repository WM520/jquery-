/**
 * Created by wm on 16/9/25.
 */
$(document).ready(function () {
   $(".main > a").click(function () {
       // alert("1111111");
       var ulNode = $(this).next("ul");
       // if (ulNode.css("display") == "none") {
       //     ulNode.css("display", "block");
       // } else {
       //     ulNode.css("display", "none");
       // }
       // ulNode.css("display") == "none" ? ulNode.show(): url.hide();
       // ulNode.toggle(500); // 数字,等参数
       // ulNode.slideDown();
       // ulNode.slideUp();
       ulNode.slideToggle();
   }) ;
    $(".hmain").hover(function () {
        $(this).children("ul").slideDown();
    }, function () {
      $(this).children("ul").slideUp();
    });
});