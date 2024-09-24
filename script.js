// MENU LATERAL
let menu = document.getElementById('abrir_menu_lateral_icon');
let menuLateral = document.getElementById('menu_lateral');
let overlay = document.getElementById('overlay_menu_lateral');

menu.addEventListener('click', () => {
    menuLateral.classList.toggle('abrir-menu');
    document.body.classList.toggle('no-scroll', menuLateral.classList.contains('abrir-menu'));
});

overlay.addEventListener('click', () => {
    closeMenu();
});


function closeMenu() {
    menuLateral.classList.remove('abrir-menu');
    document.body.classList.remove('no-scroll');
    menu.classList.remove('ativar');
}

const navbarLinks = document.querySelectorAll('#navbar_list li a');
navbarLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault(); 
        const targetId = link.getAttribute('href');
        const targetSection = document.querySelector(targetId); 

        targetSection.scrollIntoView({ behavior: 'smooth' });

        closeMenu();
    });
});

// FIM MENU LATERAL



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