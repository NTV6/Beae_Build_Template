const swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    breakpoints: {
        344: {
            slidesPerView: 1.2,
            spaceBetween: 20
        },
        992: {
            slidesPerView: 3,
            spaceBetween: 20
        },
    },
});

const thumbSwiper = new Swiper(".thumb-swiper", {
    slidesPerView: 9,
    spaceBetween: 8,
});

const mainSwiper = new Swiper(".main-swiper", {
    speed: 600,
    navigation: {
        nextEl: null,
        prevEl: null,
    },
    thumbs: {
        swiper: thumbSwiper,
    },
});

const swiperModal = new Swiper(".swiperModal", {
    loop: true,
    slidesPerView: 1,
    speed: 600,
    on: {
        init: function () {
            updateCustomPagination(this);
        },
        slideChange: function () {
            updateCustomPagination(this);
        },
    },
});

function updateCustomPagination(swiper) {
    const current = (swiper.realIndex || 0) + 1;
    const total = swiper.slides.length;
    document.querySelector(".custom-pagination .page-info").textContent = `${current} / ${total}`;
}

document.querySelector(".custom-pagination .prev").addEventListener("click", function () {
    swiperModal.slidePrev();
});
document.querySelector(".custom-pagination .next").addEventListener("click", function () {
    swiperModal.slideNext();
});