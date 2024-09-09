
window.addEventListener("scroll", function(){
    let header = document.querySelector('#header')
    header.classList.toggle('rolagem', window.scrollY > 0)
})

window.addEventListener('scroll', function(){
    const image = document.getElementById('image');
    if (window.scrollY > 1){
        image.src = 'image/logo2.png';
    }
    else{
        image.src = 'image/logo1.png'
    }
});

const header = document.getElementById('header');

function updateImage() {
    if (window.scrollY > 1 || header.matches(':hover')){
        image.src = 'image/logo2.png';
    }
    else{
        image.src = 'image/logo1.png'
    }
}

window.addEventListener('scroll', updateImage);
header.addEventListener('mouseover', updateImage);
header.addEventListener('mouseout', updateImage)