function on_menu(){
    $('.menu-text').css('display','none');
    $('.nav').css('display','block');
}
function off_menu(){
    $('.menu-text').css('display','inline');
    $('.nav').css('display','none');
}
$(document).ready(on_menu);
$(document).ready(off_menu);

$(function(){
    $(".slider").slick({});
});
