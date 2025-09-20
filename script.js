
const scroll = new LocomotiveScroll({
    el: document.querySelector("#main"),
    smooth: true
});
function page4animation(){
    
var elemc=document.querySelector("#elem-container");
var fixed=document.querySelector("#fixed-image");
elemc.addEventListener('mouseenter',function(){
      fixed.style.display='block';
});
elemc.addEventListener('mouseleave',function(){
        fixed.style.display='none';
});
var elems=document.querySelectorAll(".elem");
elems.forEach(function(e){
    e.addEventListener("mouseenter",function(){
        var image=e.getAttribute('data-image');
        fixed.style.backgroundImage=`url(${image})`;
    })
})
}

function swiperanimation(){
     var swiper = new Swiper(".mySwiper", {
      slidesPerView: "auto",
      centeredSlides: true,
      spaceBetween: 100,
        pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
   
    });
};
function menuanimation(){
    var menu=document.querySelector("nav h3");
var fullscr=document.querySelector("#full-scr");
var navimg=document.querySelector("nav img");
var flag=0;
menu.addEventListener("click",function(){
    
   if(flag==0){
     fullscr.style.top=0
    navimg.style.opacity=0
    flag=1
    }   
    else{
        fullscr.style.top="-100%"
        navimg.style.opacity=1
        flag=0
    }
}

);


}
var loader=document.querySelector("#loader");
setTimeout(function(){
    loader.style.top="-100%";
},5000);

swiperanimation();
page4animation();

menuanimation();
    