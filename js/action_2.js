/* menu */
var menutxt=document.getElementsByClassName("menu-text");
var nav=document.getElementsByClassName("nav");
function on_menu(){
    menutxt[0].style.display="none";
    for(var i=0;i<nav.length;i++)
        nav[i].style.display="block";
}
function off_menu(){
    menutxt[0].style.display="inline";
    for(var i=0;i<nav.length;i++)
        nav[i].style.display="none";
}
/* arrow */
var left=document.getElementsByClassName("prev");
var right=document.getElementsByClassName("next");
function on_arrow(){
    left[0].style.display="block";
    right[0].style.display="block";
}
function off_arrow(){
    left[0].style.display="none";
    right[0].style.display="none";
}

/* carousel */

var slideIdx=0;
var slides = document.getElementsByClassName("slide");
showSlides(slideIdx);

function plusSlides(n){
    showSlides(slideIdx+=n);
}

function showSlides(n){
    var i;
    if (n > slides.length-1) {slideIdx = 0}
    if(n < 0) {slideIdx=slides.length-1}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIdx].style.display = "block";
}