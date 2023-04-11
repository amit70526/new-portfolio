/*******************navbar responsive********* */
let icon_bar = document.querySelector('.nav-icon');

let active_menu =document.querySelector('.navbar-menu ');



icon_bar.addEventListener('click' , function(){

    active_menu.classList.toggle("active-menu") 

})


/************typing animation*************/
var typed = new Typed(".auto-input",{
    strings: ["Web Designer","Graphic Designer","Web Developer"],
    typeSpeed:100,
    backSpeed:100,
    loop:true
})


/*******slick slidet*********/ 
// $(document).ready(function(){
//     $('.slider').slick({
//       speed: 500,
//       slidesToShow: 1,
//       slidesToScroll: 1,
//       autoplay: true,
//       autoplaySpeed: 2000,
//       dots:false,
//       loop:true,
//       arrows: false
//     });
//   });


/********particle js***********/ 

