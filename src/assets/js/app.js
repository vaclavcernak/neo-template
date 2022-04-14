import 'slick-carousel';
import 'magnific-popup';
//import { createPopper } from '@popperjs/core';
import { Tooltip, Accordion, Modal } from 'bootstrap';
import LazyLoad from 'vanilla-lazyload'; // https://github.com/verlok/vanilla-lazyload
import noUiSlider from 'nouislider';
//import 'sticky-kit/dist/sticky-kit.min';
import 'mmenu-light/dist/mmenu-light.js';

// import partial files
import './carousels';
//import './ulSelect';


// vanilla-lazyload
var lazyLoadInstance = new LazyLoad();
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


/*** DARK THEME ***/

// Wait for document to load
document.addEventListener("DOMContentLoaded", function(event) {
    const themeSwitcher = document.getElementById('theme-switcher-checkbox');
    let matched = window.matchMedia('(prefers-color-scheme: dark)').matches;

    if (matched && themeSwitcher) {
        document.documentElement.setAttribute("data-theme", "dark");
        themeSwitcher.checked = true;
    } else {
        document.documentElement.setAttribute("data-theme", "light");
    }

    if (themeSwitcher) {
        themeSwitcher.addEventListener('change', ()=>{
            // Get the current selected theme, on the first run
            // it should be `light`
            var currentTheme = document.documentElement.getAttribute("data-theme");

            // Switch between `dark` and `light`
            var switchToTheme = currentTheme === "dark" ? "light" : "dark"

            // Set our currenet theme to the new one
            document.documentElement.setAttribute("data-theme", switchToTheme);

            themeSwitcher.classList.toggle('dark');
        })
    }
});




$('.delivery-radio__item').click(function() {
    $(this).find('input[type="radio"]').prop("checked", true);
});


// News thumbnail hover effect
$('.news__item__image-wrapper').mouseenter(function() {
    $(this).find('.news__item__image').addClass('hover');
});

$('.news__item__image-wrapper').mouseleave(function() {
    $(this).find('.news__item__image').removeClass('hover');
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
    $('.header-fade-bg').show();
});
$('.has-whisperer').focusout(function() {
    $(this).nextAll('.search-whisperer').hide();
    $('.header-fade-bg').hide();
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
$('#searchMobile').click(function (e) {
    e.preventDefault();
    var searchInput = $('.input-with-btn--search-input');
    searchInput.addClass('on-mobile').appendTo( ".top-header" );
    $('.header-fade-bg').show();
})

$('#mobileBack').click(function (e) {
    e.preventDefault();
    $(this).parent('.on-mobile').toggleClass('on-mobile');
    $('.header-fade-bg').hide();
})

// check if element has vertical scrollbar
$(function() {

    const scrollbareds = document.querySelectorAll(".scrollbared");

    scrollbareds.forEach(function (scrollbared) {
        if (scrollbared.scrollHeight > scrollbared.clientHeight) {
            scrollbared.classList.add("has-scrollbar")
        }
    });
});


//product detail tabs
$(function() {
    $('.tab-title').click(function () {
        $(this).toggleClass('active');
    })
});

moveScroller();
//fixed to top when scrollto
function moveScroller() {
    if (!$('#scroller').length == 0) {
        var $anchor = $("#scroller-anchor");
        var $scroller = $('#scroller');

        var move = function() {
            var st = $(window).scrollTop();
            var ot = $anchor.offset().top;
            if(st > ot) {
                $scroller.addClass('fixedToTop');
            } else {
                $scroller.removeClass('fixedToTop');
            }
        };
        $(window).scroll(move);
        move();
    }

}

$(function() {
    $('.item__quick-action').hover(function() {
        $(this).toggleClass('active');
    });
});


//$(".product-detail__gallery").stick_in_parent();

//product detail tabs scrolling
$(function() {
    const sections = document.querySelectorAll(".product-detail__tab");
    const navLi = document.querySelectorAll(".product-detail__tabs .item");
    window.onscroll = () => {
        var current = "";

        sections.forEach((section) => {
            const sectionTop = section.offsetTop;
            if (pageYOffset >= sectionTop - 20) {
                current = section.getAttribute("id"); }
        });

        navLi.forEach((li) => {
            li.classList.remove("active");
            if (li.classList.contains(current)) {
                li.classList.add("active");
            }
        });
    };
});
