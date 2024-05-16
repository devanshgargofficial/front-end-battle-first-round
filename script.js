document.querySelector('.start-project').addEventListener('click', function() {
    console.log('Start a project button clicked');
});

document.addEventListener('DOMContentLoaded', function () {
    var swiper = new Swiper('.swiper-container', {
        slidesPerView: 4,
        spaceBetween: 30,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        loop: true, // Enable looping if needed
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        },
    });
});