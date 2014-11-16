$(document).ready(function() {
  // most hight
  function res_w(){
    $('#most-h').each(function(){
      var maxHeight = 0;
      $(this).find(".fn-list-item").each(function(){ 
        var boxheight=$(this).innerHeight();
        if( boxheight !== undefined && boxheight > maxHeight) maxHeight = boxheight;
      });

      $(this).find(".fn-list-item").css("height", maxHeight - 10);
    });
  }
  res_w();
  // $(window).resize(function(){
  //       res_w();
  // });
});
// tab
$(function () {
    $('#qTab a:last').tab('show')
    $('#hTab a:last').tab('show')
});