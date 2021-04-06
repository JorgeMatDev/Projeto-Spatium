(function() {

    var carouselImgs = new Carousel ({
        container: '.slide-show .main-section-cards',
        itens: 'figure',
        btnPrev: '.prev',
        btnNext: '.next'
    })

})()

window.addEventListener('scroll', function() {
    let $_header = document.querySelector('.header-main');
    let $_menu = document.querySelector('.menu');
    let windowPosition = window.scrollY > 0;

    $_header.classList.toggle('scroll-menu', windowPosition);
    $_menu.classList.toggle('scroll-menu', windowPosition)
})