


const swiper = new Swiper('.opportunities-swiper', {
    spaceBetween: 20,
    loop:true,

    pagination: {
        el: '.opportunities-pagination',
        clickable: true,
    },

    navigation: {
        nextEl: '.opportunities-next',
        prevEl: '.opportunities-prev',
    },
    breakpoints: {
        320: { slidesPerView: 1 },
        490: { slidesPerView: 1.2 },
        620: { slidesPerView: 1.5 },
        810: { slidesPerView: 2 },
        992: { slidesPerView: 2 },
        1263: { slidesPerView: 2.5 },
        1300: { slidesPerView: 3 },
    },


});
const reviewsSwiper = new Swiper('.reviews-swiper', {
    spaceBetween: 20,
    slidesPerView:1,
    loop:true,


    navigation: {
        nextEl: '.reviews-next',
        prevEl: '.reviews-prev',
    },



});


