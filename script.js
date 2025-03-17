//pop for go to the coffee logo

const logo_text=document.querySelector(".logo-text")


let mouseovertriggered=false

logo_text.addEventListener("mouseover",function()
{
  if(!mouseovertriggered){
    confirm("you like coffee !")
    mouseovertriggered=true
  }
})



// for mobile 

const menuopenbutton=document.querySelector("#menu-open-button");
const menuclosebutton=document.querySelector("#menu-close-button");

menuopenbutton.addEventListener("click",()=>{
  //toggle mobile menu visibilty
  document.body.classList.toggle("show-mobile-menu");
});

//close menu when the close button is clicked
menuclosebutton.addEventListener("click",()=>menuopenbutton.click());


// intialize swipper
const swiper = new Swiper('.slider-wrapper', {

  loop: true,
  grabCursor:true,
  spaceBetween: 25,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    dynamicBullets: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  breakpoints:{
    0:{
      slidesPerView:1
    },

    768:{
      slidesPerView:2
    },

    1024:{
      slidesPerView:3
    },
  }

})

