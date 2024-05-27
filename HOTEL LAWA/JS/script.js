
let navbar = document.querySelector('.header .navbar');

document.querySelector('#menu-btn').onclick = () =>{
   navbar.classList.toggle('active');
}

window.onscroll = () =>{
   navbar.classList.remove('active');
}

document.querySelectorAll('.contact .row .faq .box h3').forEach(faqBox => {
   faqBox.onclick = () =>{
      faqBox.parentElement.classList.toggle('active');
   }
});

document.querySelectorAll('input[type="number"]').forEach(inputNumbmer => {
   inputNumbmer.oninput = () =>{
      if(inputNumbmer.value.length > inputNumbmer.maxLength) inputNumbmer.value = inputNumbmer.value.slice(0, inputNumbmer.maxLength);
   }
});

function checkSend() {
   // alert ('rooms are available');
   swal("Great!", "rooms are available!", "success");
}


function sendMessage() {
   swal("Great!", "message sent successfully!", "success")
}

var swiper = new Swiper(".home-slider", {
   slidesPerView: 3,
   spaceBetween: 45,
   loop: true,
   centerSlide: 'true',
   fade: 'true',
   grabCursor: 'true',
   navigation: {
     nextEl: ".swiper-button-next",
     prevEl: ".swiper-button-prev",
   },
   autoplay:true,

   breakpoints:{
       0: {
           slidesPerView: 1,
       },
       520: {
           slidesPerView: 2,
       },
       950: {
           slidesPerView: 3,
       },
   },
  
 });  

 var swiper = new Swiper(".room-slider", {
   slidesPerView: 3,
   spaceBetween: 40,
   loop: true,
   centerSlide: 'true',
   fade: 'true',
   grabCursor: 'true',
   navigation: {
     nextEl: ".swiper-button-next",
     prevEl: ".swiper-button-prev",
   },
   pagination: {
      el: ".swiper-pagination",
      clickable: true,
      dynamicBullets: true, 
    },
   autoplay:true,

   breakpoints:{
       0: {
           slidesPerView: 1,
       },
       520: {
           slidesPerView: 2,
       },
       950: {
           slidesPerView: 3,
       },
   },
  
 });  


var swiper = new Swiper(".gallery-slider", {
   slidesPerView: 3,
   spaceBetween: 45,
   loop: true,
   centerSlide: 'true',
   fade: 'true',
   grabCursor: 'true',
   navigation: {
     nextEl: ".swiper-button-next",
     prevEl: ".swiper-button-prev",
   },
   autoplay:true,
   pagination: {
      el: ".swiper-pagination",
      clickable: true,
      dynamicBullets: true, 
    },
    breakpoints:{
      0: { 
      slidesPerView: 1,
      },      
      520: { 
      slidesPerView: 2,
       },
      950: {
      slidesPerView: 3,
      },
      }
});

var swiper = new Swiper(".reviews-slider", {
   loop:true,
   slidesPerView: "auto",
   grabCursor: true,
   spaceBetween: 30,
   autoplay: true,
   breakpoints:{
      0: { 
      slidesPerView: 1,
      },      
      520: { 
      slidesPerView: 2,
       },
      950: {
      slidesPerView: 3,
      },
   }
});