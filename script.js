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