/*Abrir e fechar o menu*/
const nav = document.querySelector('#header nav')
const toggle = document.querySelectorAll('nav .toggle')

for(const element of toggle){
    element.addEventListener('click', function() {
        nav.classList.toggle('show')
    })
}

/*Quando clicar em um item do menu, esconder o menu*/
const links = document.querySelectorAll('nav ul li a')

for(const link of links){
    link.addEventListener('click', function(){
        nav.classList.remove('show')
    })
}

/*Mudar oheader da pág quando der scroll*/
const header = document.querySelector('#header')
const navHeight = header.offsetHeight

window.addEventListener('scroll', function(){
    if(this.window.scrollY >= navHeight) {
        //maior que a altura do header
        header.classList.add('scroll')
    }else{
        //menor que a altura do header
        header.classList.remove('scroll')
    }
})

//Testimonials Sliders swiper
const swiper = new Swiper('.swiper-container', {
    slidesPerView: 1,
    pagination: {
        el: '.swiper-pagination'
    },
    mousewheel: true,
    keyboard: true,
});

//Scrollreveiw Mostrar elementos quando der scroll na página
const scroll = ScrollReveal({
    origin:'top',
    distance: '30px',
    duration: 700,
    reset: true
})

scroll.reveal(`#home .text, #home .image`, {interval: 100})