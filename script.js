// SCROLL
window.addEventListener("scroll", function(){
    let header = document.querySelector('#header')
    header.classList.toggle('rolagem', window.scrollY > 0)
})

window.addEventListener('scroll', function(){
    const image = document.getElementById('image');
    if (window.scrollY > 1){
        image.src = 'image/logo2.png';
    } else{
        image.src = 'image/logo1.png'
    }
});
// FIM SCROLL



// HOVER
const header = document.getElementById('header');

function updateImage() {
    if (window.scrollY > 1 || header.matches(':hover')){
        image.src = 'image/logo2.png';
    } else{
        image.src = 'image/logo1.png'
    }
}

window.addEventListener('scroll', updateImage);
header.addEventListener('mouseover', updateImage);
header.addEventListener('mouseout', updateImage)

function animar(){
    const menu = document.getElementById('abrir_menu_lateral_icon')
    menu.classList.toggle('ativar')
}
// FIM HOVER



//CARROSSEL
const slider = document.querySelectorAll('.image-slides');
const btnPrev = document.getElementById('voltar_btn');
const btnNext = document.getElementById('avancar_btn');

let currentSlide = 0;

function hideSlider() {
    slider.forEach(item => item.classList.remove('on'))
  }
  
  
  function showSlider() {
    slider[currentSlide].classList.add('on')
  }
  
  
  function nextSlider() {
    hideSlider()
    if(currentSlide === slider.length -1) {
      currentSlide = 0
    } else {
      currentSlide++
    }
    showSlider()
  }
  
  
  function prevSlider() {
    hideSlider()
    if(currentSlide === 0) {
      currentSlide = slider.length -1
    } else {
      currentSlide--
    }
    showSlider()
  }
  
  
  btnNext.addEventListener('click', nextSlider)
  btnPrev.addEventListener('click', prevSlider)
  
  
  showSlider();
  
// FIM CARROSSEL

// const swiper = new Swiper('.swiper' , {

//     direction: 'vertical',
//     loop: true,

//     pagination: {
//         el: '.swiper-pagination',
//     },

//     navigation: {
//         nextEl: '.swiper-button-next',
//         prevEl: '.swiper-button-prev',
//     },

//     scrollbar: {
//         el: '.swiper-scrollbar',
         
//     },
// } ,
    

// );