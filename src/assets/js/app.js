import 'owl.carousel';
import 'magnific-popup';
//import { createPopper } from '@popperjs/core';
import { Tooltip, Accordion } from 'bootstrap';


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
            dots: false,
            lazyLoad: false,
            responsive:{
                0:{
                    items:1
                },
                /*768:{
                    items:2,
                    margin:20,
                },*/
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
