const mobile_navbar_btn = document.querySelector(".mobile-navbar-btn");
const header = document.querySelector(".header");
const boxContainer = document.querySelector(".about .box-container");
const button = document.querySelector(".about .btn");

const toggleNavbar = () => {
    header.classList.toggle("active");
}

mobile_navbar_btn.addEventListener('click', () => toggleNavbar());

window.onscroll = () => {
    header.classList.remove("active");
}



function visible() {
    boxContainer.classList.toggle("box-container-readmore");
    if(boxContainer.classList.contains("box-container-readmore")){
        button.innerHTML = "Read less";
    }
    else{
        button.innerHTML = "Read more";
    }
}

// script section for swiper from swiper.js

// for home-slider
var swiper = new Swiper(".home-slider", {
    spaceBetween: 20,
    effect: "fade",
    loop: true,
    centeredSlides: true,
    pagination: {                       //pagination part is for scroll-dots below
        el: ".swiper-pagination",
        clickable: true,
    },
});

// for review-slider
var swiper = new Swiper(".review-slider", {
    spaceBetween: 20,
    grabCursor: true,
    loop: true,
    centeredSlides: true,
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        600: {
            slidesPerView: 2,
        },

    },
});

// for blog-slider
var swiper = new Swiper(".blogs-slider", {
    spaceBetween: 20,
    grabCursor: true,
    loop: true,
    centeredSlides: true,
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 2,
        },
        991: {
            slidesPerView: 3,
        }
    }
});