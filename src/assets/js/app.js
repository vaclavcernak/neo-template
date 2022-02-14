import 'owl.carousel';
import 'magnific-popup';
//import { createPopper } from '@popperjs/core';
import { Tooltip, Accordion } from 'bootstrap';
import LazyLoad from 'vanilla-lazyload'; // https://github.com/verlok/vanilla-lazyload
import noUiSlider from 'nouislider';


// vanilla-lazyload
var lazyLoadInstance = new LazyLoad({
    // Your custom settings go here
});

lazyLoadInstance.update();


$(document).ready(function() {

    // Lightbox ukázka
    let lightbox = $('.lightbox-image');
    if (lightbox.length) {
        lightbox.magnificPopup({type:'image'});
    }

    // popup modal/dialog login ukázka
    let popup = $('.popup-modal');
    if (popup.length) {
        popup.magnificPopup({type:'inline'});
    }


    //error hlášky ukázka - po přečtení spalte
    $('#showErrorsBtn').click(function(e) {
        e.preventDefault();
        $('.errors').addClass('errors--active');
        setTimeout(function () {
            $(".errors").removeClass('errors--active');
        }, 10000)
    });

    // tooltips
    var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
    var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
        return new Tooltip(tooltipTriggerEl)
    })

    $('.error__close-icon').click(function() {
        $(this).parents('.error').fadeOut();
    });

    $('.info-strip__close-icon').click(function() {
        $(this).parents('.info-strip').fadeOut();
    });
});


$(function() {
    var owl = $('.featured-carousel'),
        owlOptions = {
            loop:false,
            margin:15,
            items:1,
            nav: true,
            navText: ['<i class="neo-back"></i>','<i class="neo-forward"></i>'],
            dots: true,
            lazyLoad: false,
            responsive:{
                0:{
                    items:1
                },
                576:{
                    items:2,
                    margin:20,
                },
            }
        };

    if ( $(window).width() < 991.5 ) {
        owl.owlCarousel(owlOptions);
    } else {
        owl.addClass('off');
    }

    $(window).resize(function() {
        if ( $(window).width() < 991.5 ) {
            if ( $('.owl-carousel').hasClass('off') ) {
                owl.owlCarousel(owlOptions);
                owl.removeClass('off');
            }
        } else {
            if ( !$('.owl-carousel').hasClass('off') ) {
                owl.addClass('off').trigger('destroy.owl.carousel');
                owl.find('.owl-stage-outer').children(':eq(0)').unwrap();
            }
        }
    });
});

// Footer collapsed widgets

$(function() {
    var windowWidth = 575.5,
        widgetHeading = $('.footer__columns .widget__heading'),
        widgetContent = $('.footer__columns .widget__content')

    if ( $(window).width() < windowWidth ) {
        widgetHeading.addClass('widget__heading--collapsed');
        widgetContent.addClass('widget__content--collapsed');
    }

    $(window).resize(function() {
        if ( $(window).width() < windowWidth ) {
            if (widgetHeading.not('widget__heading--collapsed') ) {
                widgetHeading.addClass('widget__heading--collapsed');
            }
            if (widgetContent.not('widget__content--collapsed') ) {
                widgetContent.addClass('widget__content--collapsed');
            }
        } else {
            if (widgetHeading.hasClass('widget__heading--collapsed') ) {
                widgetHeading.removeClass('widget__heading--collapsed');
            }
            if (widgetContent.hasClass('widget__content--collapsed') ) {
                widgetContent.removeClass('widget__content--collapsed');
            }
        }
    });

    widgetHeading.click(function() {
        if ($(this).hasClass('widget__heading--collapsed')) {
            $(this).toggleClass('opened');
            $(this).next().toggleClass('opened');;
        }
    });
});


/***/

$(function() {
    var x, i, j, l, ll, selElmnt, a, b, c;
    /* Look for any elements with the class "custom-select": */
    x = document.getElementsByClassName("select-wrap");
    l = x.length;
    for (i = 0; i < l; i++) {
        selElmnt = x[i].getElementsByTagName("select")[0];
        ll = selElmnt.length;
        /* For each element, create a new DIV that will act as the selected item: */
        a = document.createElement("DIV");
        a.setAttribute("class", "select-selected");
        a.innerHTML = selElmnt.options[selElmnt.selectedIndex].innerHTML;
        x[i].appendChild(a);
        /* For each element, create a new DIV that will contain the option list: */
        b = document.createElement("DIV");
        b.setAttribute("class", "select-items select-hide");
        for (j = 1; j < ll; j++) {
            /* For each option in the original select element,
            create a new DIV that will act as an option item: */
            c = document.createElement("DIV");
            c.innerHTML = selElmnt.options[j].innerHTML;
            c.addEventListener("click", function(e) {
                /* When an item is clicked, update the original select box,
                and the selected item: */
                var y, i, k, s, h, sl, yl;
                s = this.parentNode.parentNode.getElementsByTagName("select")[0];
                sl = s.length;
                h = this.parentNode.previousSibling;
                for (i = 0; i < sl; i++) {
                    if (s.options[i].innerHTML == this.innerHTML) {
                        s.selectedIndex = i;
                        h.innerHTML = this.innerHTML;
                        y = this.parentNode.getElementsByClassName("same-as-selected");
                        yl = y.length;
                        for (k = 0; k < yl; k++) {
                            y[k].removeAttribute("class");
                        }
                        this.setAttribute("class", "same-as-selected");
                        break;
                    }
                }
                h.click();
            });
            b.appendChild(c);
        }
        x[i].appendChild(b);
        a.addEventListener("click", function(e) {
            /* When the select box is clicked, close any other select boxes,
            and open/close the current select box: */
            e.stopPropagation();
            closeAllSelect(this);
            this.nextSibling.classList.toggle("select-hide");
            this.classList.toggle("select-arrow-active");
        });
    }
});

function closeAllSelect(elmnt) {
    /* A function that will close all select boxes in the document,
    except the current select box: */
    var x, y, i, xl, yl, arrNo = [];
    x = document.getElementsByClassName("select-items");
    y = document.getElementsByClassName("select-selected");
    xl = x.length;
    yl = y.length;
    for (i = 0; i < yl; i++) {
        if (elmnt == y[i]) {
            arrNo.push(i)
        } else {
            y[i].classList.remove("select-arrow-active");
        }
    }
    for (i = 0; i < xl; i++) {
        if (arrNo.indexOf(i)) {
            x[i].classList.add("select-hide");
        }
    }
}

/* If the user clicks anywhere outside the select box,
then close all select boxes: */
document.addEventListener("click", closeAllSelect);


/***** CAROUSEL WITH THUMBNAILS *****/

$(document).ready(function() {

    var main = $("#carousel__main-image");
    var thumbnails = $("#carousel__thumbnails");
    var slidesPerPage = 3; //globaly define number of elements per page
    var syncedSecondary = true;

    main.owlCarousel({
        items: 1,
        slideSpeed: 2000,
        lazyLoad: true,
        nav: false,
        autoplay: false,
        dots: false,
        loop: false,
        responsiveRefreshRate: 200,
    }).on('changed.owl.carousel', syncPosition);

    thumbnails
        .on('initialized.owl.carousel', function() {
            thumbnails.find(".owl-item").eq(0).addClass("current");
        })
        .owlCarousel({
            items: slidesPerPage,
            dots: false,
            nav: true,
            margin: 5,
            lazyLoad: true,
            navText: ['<i class="neo-back-2"></i>','<i class="neo-forward-2"></i>'],
            smartSpeed: 200,
            slideSpeed: 500,
            slideBy: slidesPerPage, //alternatively you can slide by 1, this way the active slide will stick to the first item in the second carousel
            responsiveRefreshRate: 100
        }).on('changed.owl.carousel', syncPosition2);

    function syncPosition(el) {
        //if you set loop to false, you have to restore this next line
        var current = el.item.index;

        //if you disable loop you have to comment this block
        /*var count = el.item.count - 1;
        var current = Math.round(el.item.index - (el.item.count / 2) - .5);

        if (current < 0) {
            current = count;
        }
        if (current > count) {
            current = 0;
        }*/

        //end block

        thumbnails
            .find(".owl-item")
            .removeClass("current")
            .eq(current)
            .addClass("current");
        var onscreen = thumbnails.find('.owl-item.active').length - 1;
        var start = thumbnails.find('.owl-item.active').first().index();
        var end = thumbnails.find('.owl-item.active').last().index();

        if (current > end) {
            thumbnails.data('owl.carousel').to(current, 500, true);
        }
        if (current < start) {
            thumbnails.data('owl.carousel').to(current - onscreen, 500, true);
        }
    }

    function syncPosition2(el) {
        if (syncedSecondary) {
            var number = el.item.index;
            main.data('owl.carousel').to(number, 500, true);
        }
    }

    thumbnails.on("click", ".owl-item", function(e) {
        e.preventDefault();
        var number = $(this).index();
        main.data('owl.carousel').to(number, 300, true);
    });
});


/*** DARK THEME ***/

// Wait for document to load
document.addEventListener("DOMContentLoaded", function(event) {
    document.documentElement.setAttribute("data-theme", "dark");
});

// Wait for document to load
document.addEventListener("DOMContentLoaded", function(event) {
    document.documentElement.setAttribute("data-theme", "light");

    // Get our button switcher
    var themeSwitcher = document.getElementById("theme-switcher");

    // When our button gets clicked
    themeSwitcher.onclick = function() {
        // Get the current selected theme, on the first run
        // it should be `light`
        var currentTheme = document.documentElement.getAttribute("data-theme");

        // Switch between `dark` and `light`
        var switchToTheme = currentTheme === "dark" ? "light" : "dark"

        // Set our currenet theme to the new one
        document.documentElement.setAttribute("data-theme", switchToTheme);
    }
});


$('.delivery-radio__item').click(function() {
    $(this).find('input[type="radio"]').prop("checked", true);
});

BannerSlider()

function BannerSlider() {

    var mainBanner = $("#mainBanner");

    mainBanner.owlCarousel({
        items             : 1,
        margin            : 0,
        nav               : true,
        autoplay          : true,
        autoplayTimeout   : 5000,
        dots              : true,
        lazyLoad          : true,
        lazyLoadEager     : 1,
        navText           : ['<i class="neo-back-2"></i>','<i class="neo-forward-2"></i>'],
        loop              : true
    });
}

FeaturedCategoriesSlider()

function FeaturedCategoriesSlider() {

    var featuredCategories = $(".featured-categories--images");

    featuredCategories.owlCarousel({
        items             : 5,
        margin            : 10,
        nav               : true,
        dots              : true,
        lazyLoad          : true,
        lazyLoadEager     : 1,
        navContainerClass : "owl-nav owl-nav--general",
        navText           : ['<i class="neo-back"></i>','<i class="neo-forward"></i>'],
        loop              : false,
        autoHeight        : true,
        responsive:{
            0:{
                items:1,
                margin:0,
            },
            576:{
                items:2,
            },
            768:{
                items:3,
            },
            992:{
                items:4,
            },
            1200:{
                items:5,
            },
        }
    });
}

$('.item__quick-action').hover(function() {
    $(this).toggleClass('active');
});

BrandsSlider()

function BrandsSlider() {

    var brandsSlider = $(".brands--slider");

    brandsSlider.owlCarousel({
        items             : 7,
        margin            : 0,
        nav               : true,
        dots              : true,
        lazyLoad          : true,
        lazyLoadEager     : 1,
        navContainerClass : "owl-nav owl-nav--general",
        navText           : ['<i class="neo-back"></i>','<i class="neo-forward"></i>'],
        loop              : false,
        responsive:{
            0:{
                items:2,
            },
            576:{
                items:2,
            },
            768:{
                items:3,
            },
            992:{
                items:5,
            },
            1200:{
                items:7
            },
        }
    });
}

LatestNewsSlider()

function LatestNewsSlider() {

    var latestNews = $(".latest-news");

    latestNews.owlCarousel({
        items             : 4,
        margin            : 0,
        nav               : true,
        dots              : true,
        lazyLoad          : true,
        lazyLoadEager     : 1,
        navContainerClass : "owl-nav owl-nav--general",
        navText           : ['<i class="neo-back"></i>','<i class="neo-forward"></i>'],
        loop              : false,
        autoHeight        : true,
        responsive:{
            0:{
                items:1,
            },
            576:{
                items:2,
                margin: 10,
            },
            768:{
                items:2,
            },
            992:{
                items:3,
            },
            1200:{
                items:4,
            },
        }
    });
}

ProductsGridSlider()

function ProductsGridSlider() {

    var productsGridSlider = $(".pruducts-grid--slider");

    productsGridSlider.owlCarousel({
        items             : 4,
        margin            : 10,
        nav               : true,
        dots              : true,
        lazyLoad          : true,
        lazyLoadEager     : 1,
        navContainerClass : "owl-nav owl-nav--general",
        navText           : ['<i class="neo-back"></i>','<i class="neo-forward"></i>'],
        loop              : false,
        autoHeight        : true,
        responsive:{
            0:{
                items:1,
            },
            576:{
                items:2,
            },
            768:{
                items:2,
            },
            992:{
                items:3,
            },
            1200:{
                items:3,
            },
            1400:{
                items:4,
            },
        }
    });
}


$(function() {
    var owl = $('.pruducts-grid--grid'),
        owlOptions = {
            items             : 4,
            margin            : 0,
            nav               : true,
            dots              : true,
            lazyLoad          : true,
            lazyLoadEager     : 1,
            navContainerClass : "owl-nav owl-nav--general",
            navText           : ['<i class="neo-back"></i>','<i class="neo-forward"></i>'],
            loop              : false,
            autoHeight        :true,
            responsive:{
                0:{
                    items:1,
                },
                576:{
                    items:2,
                    margin: 15,
                },
                768:{
                    items:2,
                    margin: 15,
                },
            }
        };

    if ( $(window).width() < 991.5 ) {
        owl.addClass('owl-carousel');
        owl.owlCarousel(owlOptions);
    } else {
        owl.addClass('off');
    }

    $(window).resize(function() {
        if ( $(window).width() < 991.5 ) {
            if ( $('.owl-carousel-ready').hasClass('off') ) {
                owl.addClass('owl-carousel');
                owl.owlCarousel(owlOptions);
                owl.removeClass('off');
            }
        } else {
            if ( !$('.owl-carousel-ready').hasClass('off') ) {
                owl.removeClass('owl-carousel');
                owl.addClass('off').trigger('destroy.owl.carousel');
                owl.find('.owl-stage-outer').children(':eq(0)').unwrap();
            }
        }
    });
});


// News thumbnail hover effect
$('.news__item__image-wrapper').mouseenter(function() {
    $(this).find('.news__item__image').addClass('hover');
});

$('.news__item__image-wrapper').mouseleave(function() {
    $(this).find('.news__item__image').removeClass('hover');
});

$(function() {
    var owl = $('.main-banner--secondary'),
        owlOptions = {
            items             : 1,
            margin            : 0,
            nav               : true,
            autoplay          : true,
            autoplayTimeout   : 5000,
            dots              : true,
            lazyLoad          : true,
            lazyLoadEager     : 1,
            navText           : ['<i class="neo-back-2"></i>','<i class="neo-forward-2"></i>'],
            loop              : true
        };

    if ( $(window).width() < 991.5 ) {
        owl.owlCarousel(owlOptions);
    } else {
        owl.addClass('off');
    }

    $(window).resize(function() {
        if ( $(window).width() < 991.5 ) {
            if ( $('.owl-carousel').hasClass('off') ) {
                owl.owlCarousel(owlOptions);
                owl.removeClass('off');
            }
        } else {
            if ( !$('.owl-carousel').hasClass('off') ) {
                owl.addClass('off').trigger('destroy.owl.carousel');
                owl.find('.owl-stage-outer').children(':eq(0)').unwrap();
            }
        }
    });
});

$('.quantity-input__btn--plus').click(function () {
    $(this).prev().val(+$(this).prev().val() + 1);
});
$('.quantity-input__btn--minus').click(function () {
    if ($(this).next().val() > 1) $(this).next().val(+$(this).next().val() - 1);
});



$('.cart__bonus__checkbox input').click(function () {
    var price = $(this).parent().siblings();
    if (this.checked) {
        price.css('opacity','1');
    } else {
        price.css('opacity','0');
    }

})

$('.code-toggle').click(function () {
    var codeInput = $(this).next('.cart-bottom__code__input-wrapper');
    codeInput.toggle();
})


// MENU

$('.has-submenu--wide-menu, .all-categories').mouseenter(function() {
    $('.menu-fade-bg').show();
});
$('.user__cart').mouseenter(function() {
    $('.header-fade-bg').show();
});

$('.has-submenu--wide-menu, .all-categories').mouseleave(function() {
    $('.menu-fade-bg').hide();
});
$('.user__cart').mouseleave(function() {
    $('.header-fade-bg').hide();
});

$('.all-categories').mouseenter(function() {
    var mainMenuWidth = $('.main-menu').innerWidth();
    var menuWidth = $('.all-categories-menu').innerWidth();
    var widthDiff =  mainMenuWidth - menuWidth;
    $('.all-categories-menu > li .wide-menu').css('left', menuWidth).css('width', widthDiff);
});

// search whisperer

$('.has-whisperer').focus(function() {
    $(this).nextAll('.search-whisperer').show();
});
$('.has-whisperer').focusout(function() {
    $(this).nextAll('.search-whisperer').hide();
});

// range slider

const rangeSliders = document.querySelectorAll(".range-slider");

rangeSliders.forEach(function (rangeSlider) {
    noUiSlider.create(rangeSlider, {
        start: [20, 80],
        connect: true,
        range: {
            'min': 0,
            'max': 100
        }
    });
});

// search mobile
$('#search-mobile').click(function (e) {
    e.preventDefault();
    var searchInput = $(this).next('.input-with-btn--search-input');
    searchInput.clone().addClass('on-mobile').appendTo( ".top-header" );
    searchInput.remove();

    $('.has-whisperer').focus(function() {
        $(this).nextAll('.search-whisperer').show();
    });
    $('.has-whisperer').focusout(function() {
        $(this).nextAll('.search-whisperer').hide();
    });
})
