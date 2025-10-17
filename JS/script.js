var swiper = new Swiper(".mySwiper", {
    pagination: {
        el: ".swiper-pagination",
    },
});
let menuBar = document.querySelector(".menu-bar");
let navigation = document.querySelector(".navigation");
menuBar.addEventListener("click", function () {

})
var swiper = new Swiper(".Swiper-com", {
    slidesPerView: 1,
    spaceBetween: 10,
    pagination: {
        el: ".pagination",
        clickable: true,
    },
    breakpoints: {
        640: {
            slidesPerView: 2,
            spaceBetween: 0,
        },
        768: {
            slidesPerView: 3,
            spaceBetween: 0,
        },
        1024: {
            slidesPerView: 4,
            spaceBetween: 0,
        },
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});
var swiper = new Swiper(".Swiper-featured", {
    slidesPerView: 1,
    spaceBetween: 10,
    // pagination: {
    //     el: ".swiper-pagination",
    //     clickable: true,
    // }, 
    breakpoints: {
        615: {
            slidesPerView: 2,
            spaceBetween: 0,
        },
        768: {
            slidesPerView: 3,
            spaceBetween: 0,
        },
        1024: {
            slidesPerView: 4,
            spaceBetween: 0,
        },
    },
    navigation: {
        nextEl: ".Swiper-featured-next",
        prevEl: ".Swiper-featured-prev",
    },
});
  var swiper = new Swiper(".text-swiper", {
      navigation: {
        nextEl: ".Swiper-text-next",
        prevEl: ".Swiper-text-prev",
      },
    });