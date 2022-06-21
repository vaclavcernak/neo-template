import {Modal} from "bootstrap";

function FeaturedCarousel() {

    let carousel = $(".featured-carousel");

    let settings;
    if (carousel.length) {
        settings = {
            dots: true,
            arrows: true,
            infinite: false,
            slidesToShow: 1,
            slidesToScroll: 1,
            prevArrow: '<div class="slick-custom-arrow slick-custom-arrow--prev"><i class="neo-back"></i></div>',
            nextArrow: '<div class="slick-custom-arrow slick-custom-arrow--next"><i class="neo-forward"></i></div>',
            focusOnSelect: true,
            mobileFirst: true,
            responsive: [
                {
                    breakpoint: 992,
                    settings: "unslick"
                },
                {
                    breakpoint: 576,
                    settings: {
                        slidesToShow: 2,
                    }
                },
            ]
        };

        const sl =  carousel.slick(settings);

        $(window).on('resize', function() {
            if( $(window).width() < 991.5 && !sl.hasClass('slick-initialized')) {
                carousel.slick(settings);
            }
        });
    }
}

function FeaturedCategoriesSlider() {

    let carousel = $(".featured-categories--images");

    if (carousel.length) {
        carousel.slick({
            dots: true,
            arrows: true,
            infinite: false,
            slidesToShow: 1,
            prevArrow: '<div class="slick-custom-arrow slick-custom-arrow--prev"><i class="neo-back"></i></div>',
            nextArrow: '<div class="slick-custom-arrow slick-custom-arrow--next"><i class="neo-forward"></i></div>',
            lazyLoad: 'progressive',
            focusOnSelect: true,
            mobileFirst: true,
            responsive: [
                {
                    breakpoint: 1199,
                    settings: {
                        slidesToShow: 5,
                    }
                },
                {
                    breakpoint: 991,
                    settings: {
                        slidesToShow: 4,
                    }
                },
                {
                    breakpoint: 767,
                    settings: {
                        slidesToShow: 3,
                    }
                },
                {
                    breakpoint: 575,
                    settings: {
                        slidesToShow: 2,
                    }
                },
            ],
        });
    }
}

function BrandsSlider() {

    let carousel = $(".brands--slider");

    if (carousel.length) {
        carousel.slick({
            dots: true,
            arrows: true,
            infinite: false,
            slidesToShow: 1.5,
            prevArrow: '<div class="slick-custom-arrow slick-custom-arrow--prev"><i class="neo-back"></i></div>',
            nextArrow: '<div class="slick-custom-arrow slick-custom-arrow--next"><i class="neo-forward"></i></div>',
            lazyLoad: 'progressive',
            focusOnSelect: true,
            mobileFirst: true,
            responsive: [
                {
                    breakpoint: 1199,
                    settings: {
                        slidesToShow: 7,
                    }
                },
                {
                    breakpoint: 991,
                    settings: {
                        slidesToShow: 5,
                    }
                },
                {
                    breakpoint: 767,
                    settings: {
                        slidesToShow: 3,
                    }
                },
                {
                    breakpoint: 575,
                    settings: {
                        slidesToShow: 2,
                    }
                },
            ],
        });
    }
}

function LatestNewsSlider() {

    let carousel = $(".latest-news");

    if (carousel.length) {
        carousel.slick({
            dots: true,
            arrows: true,
            infinite: false,
            slidesToShow: 1,
            prevArrow: '<div class="slick-custom-arrow slick-custom-arrow--prev"><i class="neo-back"></i></div>',
            nextArrow: '<div class="slick-custom-arrow slick-custom-arrow--next"><i class="neo-forward"></i></div>',
            lazyLoad: 'progressive',
            focusOnSelect: true,
            mobileFirst: true,
            responsive: [
                {
                    breakpoint: 1199,
                    settings: {
                        slidesToShow: 4,
                    }
                },
                {
                    breakpoint: 991,
                    settings: {
                        slidesToShow: 3,
                    }
                },
                {
                    breakpoint: 767,
                    settings: {
                        slidesToShow: 2,
                    }
                },
                {
                    breakpoint: 575,
                    settings: {
                        slidesToShow: 2,
                    }
                },
            ],
        });
    }
}

function ProductsGridCarousel() {

    let carousel = $(".pruducts-grid--grid");

    let settings;
    if (carousel.length) {
        settings = {
            dots: true,
            arrows: true,
            infinite: false,
            slidesToShow: 1,
            slidesToScroll: 1,
            prevArrow: '<div class="slick-custom-arrow slick-custom-arrow--prev"><i class="neo-back"></i></div>',
            nextArrow: '<div class="slick-custom-arrow slick-custom-arrow--next"><i class="neo-forward"></i></div>',
            focusOnSelect: true,
            mobileFirst: true,
            adaptiveHeight: true,
            responsive: [
                {
                    breakpoint: 1199,
                    settings: "unslick"
                },
                {
                    breakpoint: 991,
                    settings: {
                        slidesToShow: 3,
                    }
                },
                {
                    breakpoint: 575,
                    settings: {
                        slidesToShow: 2,
                    }
                },
            ]
        };

        const sl = carousel.slick(settings);

        $(window).on('resize', function () {
            if ($(window).width() < 1199.5 && !sl.hasClass('slick-initialized')) {
                carousel.slick(settings);
            }
        });
    }
}


function QuickviewCarousel() {

    let carouselMain = $(".carousel__main-image--quickview"),
        carouselThumbnails = $(".carousel__thumbnails--quickview");

    if (carouselMain.length) {
        carouselMain.slick({
            dots: false,
            arrows: false,
            infinite: false,
            slidesToShow: 1,
            lazyLoad: 'progressive',
            asNavFor: '.carousel__thumbnails',
        });
    }

    if (carouselThumbnails.length) {
        carouselThumbnails.slick({
            dots: true,
            arrows: true,
            infinite: false,
            slidesToShow: 1,
            prevArrow: '<div class="slick-custom-arrow slick-custom-arrow--prev"><i class="neo-back"></i></div>',
            nextArrow: '<div class="slick-custom-arrow slick-custom-arrow--next"><i class="neo-forward"></i></div>',
            lazyLoad: 'progressive',
            focusOnSelect: true,
            mobileFirst: true,
            asNavFor: '.carousel__main-image',
            responsive: [
                {
                    breakpoint: 991,
                    settings: {
                        slidesToShow: 4,
                    }
                },
                {
                    breakpoint: 767,
                    settings: {
                        slidesToShow: 3,
                    }
                },
                {
                    breakpoint: 575,
                    settings: {
                        slidesToShow: 4,
                    }
                },
            ],
        });
    }
}

let popupWithCasrousel = $('.popup-modal-carousel');
if (popupWithCasrousel.length) {
    popupWithCasrousel.magnificPopup({
        type:'inline',
        callbacks: {
            open: function() {
                $('.carousel__main-image').slick('setPosition');
                $('.carousel__thumbnails').slick('setPosition');
            },
        }
    });
}

$('.carousel__main-image').on('click', '.slick-slide', function(){
    let productDetailGalleryModalInit = new Modal(document.getElementById("productDetailGalleryModal"), {});
    // This click event will not trigger when you drag the carousel
    productDetailGalleryModalInit.show();
})

function ProductDetailCarousel() {

    let carouselMain = $(".carousel__main-image--detail"),
        carouselThumbnails = $(".carousel__thumbnails--detail");

    if (carouselMain.length) {
        carouselMain.slick({
            dots: false,
            arrows: false,
            infinite: false,
            slidesToShow: 1,
            lazyLoad: 'progressive',
            asNavFor: '.carousel__thumbnails',
        });
    }

    if (carouselThumbnails.length) {
        carouselThumbnails.slick({
            dots: true,
            arrows: true,
            infinite: false,
            slidesToShow: 1,
            prevArrow: '<div class="slick-custom-arrow slick-custom-arrow--prev"><i class="neo-back"></i></div>',
            nextArrow: '<div class="slick-custom-arrow slick-custom-arrow--next"><i class="neo-forward"></i></div>',
            lazyLoad: 'progressive',
            focusOnSelect: true,
            mobileFirst: true,
            asNavFor: '.carousel__main-image',
            responsive: [
                {
                    breakpoint: 1199,
                    settings: {
                        slidesToShow: 5,
                    }
                },
                {
                    breakpoint: 991,
                    settings: {
                        slidesToShow: 4,
                    }
                },
                {
                    breakpoint: 767,
                    settings: {
                        slidesToShow: 5,
                    }
                },
                {
                    breakpoint: 575,
                    settings: {
                        slidesToShow: 4,
                    }
                },
            ],
        });
    }
}

let productDetailGalleryModal = document.getElementById('productDetailGalleryModal')

if (productDetailGalleryModal) {
    productDetailGalleryModal.addEventListener('shown.bs.modal', function (event) {
        ProductDetailModalCarousel();
        $('.carousel__main-image--modal').slick('setPosition');
        $('.carousel__thumbnails--modal').slick('setPosition');
    })
}

function ProductDetailModalCarousel() {

    let carouselMain = $(".carousel__main-image--modal"),
        carouselThumbnails = $(".carousel__thumbnails--modal"),
        status = $('.slide-number');

    carouselMain.on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
        //currentSlide is undefined on init -- set it to 0 in this case (currentSlide is 0 based)
        let i = (currentSlide ? currentSlide : 0) + 1;
        status.text(i + '/' + slick.slideCount);
    });

    if (carouselMain.length) {
        carouselMain.slick({
            dots: false,
            arrows: true,
            infinite: false,
            slidesToShow: 1,
            prevArrow: '<div class="slick-custom-arrow slick-custom-arrow--prev"><i class="neo-back"></i></div>',
            nextArrow: '<div class="slick-custom-arrow slick-custom-arrow--next"><i class="neo-forward"></i></div>',
            lazyLoad: 'progressive',
            asNavFor: '.carousel__thumbnails--modal',
        });
    }

    if (carouselThumbnails.length) {
        carouselThumbnails.slick({
            dots: false,
            arrows: true,
            infinite: false,
            slidesToShow: 4,
            prevArrow: '<div class="slick-custom-arrow slick-custom-arrow--prev"><i class="neo-back"></i></div>',
            nextArrow: '<div class="slick-custom-arrow slick-custom-arrow--next"><i class="neo-forward"></i></div>',
            lazyLoad: 'progressive',
            focusOnSelect: true,
            mobileFirst: true,
            asNavFor: '.carousel__main-image--modal',
            vertical: false,
            verticalSwiping: false,
            responsive: [
                {
                    breakpoint: 767,
                    settings: {
                        vertical: true,
                        verticalSwiping: true,
                        slidesToShow: 5,
                        arrows: false,
                    }
                },
                {
                    breakpoint: 575,
                    settings: {
                        slidesToShow: 5,
                    }
                },
            ],
        });
    }
}

function ProductsGridSlider() {

    let carousel = $(".pruducts-grid--slider");

    if (carousel.length) {
        carousel.slick({
            dots: true,
            arrows: true,
            infinite: false,
            slidesToShow: 1,
            prevArrow: '<div class="slick-custom-arrow slick-custom-arrow--prev"><i class="neo-back"></i></div>',
            nextArrow: '<div class="slick-custom-arrow slick-custom-arrow--next"><i class="neo-forward"></i></div>',
            lazyLoad: 'progressive',
            focusOnSelect: true,
            mobileFirst: true,
            adaptiveHeight: true,
            responsive: [
                {
                    breakpoint: 1399,
                    settings: {
                        slidesToShow: 4,
                    }
                },
                {
                    breakpoint: 991,
                    settings: {
                        slidesToShow: 3,
                    }
                },
                {
                    breakpoint: 575,
                    settings: {
                        slidesToShow: 2,
                    }
                },
            ],
        });
    }
}

function ProductsGridAlternativeSlider() {

    let carousel = $(".pruducts-grid--alternative");

    if (carousel.length) {
        carousel.slick({
            dots: true,
            arrows: true,
            infinite: false,
            slidesToShow: 1,
            prevArrow: '<div class="slick-custom-arrow slick-custom-arrow--prev"><i class="neo-back"></i></div>',
            nextArrow: '<div class="slick-custom-arrow slick-custom-arrow--next"><i class="neo-forward"></i></div>',
            lazyLoad: 'progressive',
            focusOnSelect: true,
            mobileFirst: true,
            responsive: [
                {
                    breakpoint: 1399,
                    settings: {
                        slidesToShow: 5,
                    }
                },
                {
                    breakpoint: 991,
                    settings: {
                        slidesToShow: 3,
                    }
                },
                {
                    breakpoint: 575,
                    settings: {
                        slidesToShow: 2,
                    }
                },
            ],
        });
    }
}

function MainBannerSlider() {

    let carousel = $("#mainBanner");

    if (carousel.length) {
        carousel.slick({
            dots: true,
            arrows: true,
            infinite: false,
            slidesToShow: 1,
            prevArrow: '<div class="slick-custom-arrow slick-custom-arrow--prev"><i class="neo-back-2"></i></div>',
            nextArrow: '<div class="slick-custom-arrow slick-custom-arrow--next"><i class="neo-forward-2"></i></div>',
            lazyLoad: 'progressive',
            focusOnSelect: true,
        });
    }
}

function MainBannerSecondarySlider() {

    let carousel = $(".main-banner--secondary");

    let settings;
    if (carousel.length) {
        settings = {
            dots: true,
            arrows: true,
            infinite: false,
            slidesToShow: 1,
            slidesToScroll: 1,
            prevArrow: '<div class="slick-custom-arrow slick-custom-arrow--prev"><i class="neo-back-2"></i></div>',
            nextArrow: '<div class="slick-custom-arrow slick-custom-arrow--next"><i class="neo-forward-2"></i></div>',
            focusOnSelect: true,
            mobileFirst: true,
            responsive: [
                {
                    breakpoint: 992,
                    settings: "unslick"
                },
            ]
        };

        const sl = carousel.slick(settings);

        $(window).on('resize', function () {
            if ($(window).width() < 991.5 && !sl.hasClass('slick-initialized')) {
                carousel.slick(settings);
            }
        });
    }
}

$(document).ready(function() {
    // Slick carousels dots limit
    let slickSlider = $('.slick-slider'),
        maxDots = 6,
        transformXIntervalNext = -25,
        transformXIntervalPrev = 25;



    function setBoundries(slick, state) {
        if (state === 'default') {
            slick.find('ul.slick-dots li').eq(maxDots).addClass('n-small-1');
        }
    }

    slickSlider.on('init', function (event, slick) {
        let totalCount = $(this).find('.slick-dots li').length;

        if (totalCount <= maxDots + 1) {
            return;
        }

        $(this).find('ul.slick-dots').wrap("<div class='slick-dots-container-wrap'><div class='slick-dots-container'></div></div>");
        $(this).find('ul.slick-dots li').each(function (index) {
            $(this).addClass('dot-index-' + index);
        });
        $(this).find('ul.slick-dots').css('transform', 'translateX(0)');
        setBoundries($(this),'default');
    });

    let transformCount = 0;
    slickSlider.on('beforeChange', function (event, slick, currentSlide, nextSlide) {
        let totalCount = $(this).find('.slick-dots li').length;
        if (totalCount > maxDots) {
            if (nextSlide > currentSlide) {
                if ($(this).find('ul.slick-dots li.dot-index-' + nextSlide).hasClass('n-small-1')) {
                    if (!$(this).find('ul.slick-dots li:last-child').hasClass('n-small-1')) {
                        transformCount = transformCount + transformXIntervalNext;
                        $(this).find('ul.slick-dots li.dot-index-' + nextSlide).removeClass('n-small-1');
                        let nextSlidePlusOne = nextSlide + 1;
                        $(this).find('ul.slick-dots li.dot-index-' + nextSlidePlusOne).addClass('n-small-1');
                        $(this).find('ul.slick-dots').css('transform', 'translateX(' + transformCount + 'px)');
                        let pPointer = nextSlide - (maxDots - 1);
                        let pPointerMinusOne = pPointer - 1;
                        $(this).find('ul.slick-dots li').eq(pPointerMinusOne).removeClass('p-small-1');
                        $(this).find('ul.slick-dots li').eq(pPointer).addClass('p-small-1');
                    }
                }
            }
            else {
                if ($(this).find('ul.slick-dots li.dot-index-' + nextSlide).hasClass('p-small-1')) {
                    if (!$(this).find('ul.slick-dots li:first-child').hasClass('p-small-1')) {
                        transformCount = transformCount + transformXIntervalPrev;
                        $(this).find('ul.slick-dots li.dot-index-' + nextSlide).removeClass('p-small-1');
                        let nextSlidePlusOne = nextSlide - 1;
                        $(this).find('ul.slick-dots li.dot-index-' + nextSlidePlusOne).addClass('p-small-1');
                        $(this).find('ul.slick-dots').css('transform', 'translateX(' + transformCount + 'px)');
                        let nPointer = currentSlide + (maxDots - 1);
                        let nPointerMinusOne = nPointer - 1;
                        $(this).find('ul.slick-dots li').eq(nPointer).removeClass('n-small-1');
                        $(this).find('ul.slick-dots li').eq(nPointerMinusOne).addClass('n-small-1');
                    }
                }
            }
        }
    });

    FeaturedCarousel();
    FeaturedCategoriesSlider();
    BrandsSlider();
    LatestNewsSlider();
    ProductsGridCarousel();
    ProductDetailCarousel();
    ProductsGridSlider();
    ProductsGridAlternativeSlider();
    MainBannerSlider();
    MainBannerSecondarySlider();
    QuickviewCarousel();
});
