// init base functions
$(window).on('load', function () {
    classOnBody($('main').attr('id'));
    scrollDirection();
    initGettersAndSetters();
    changeTouchClickText();
});
$(window).on('hashchange', function () {
    initGettersAndSetters();
});

// init AOS
if (is.not.ie()) {
    AOS.init();
} else {
    $('*').removeAttr("data-aos");
}

// swipers
var swiper__mostDesired = new Swiper('.swiper__mostDesired', {
    slidesPerView: 4,
    pagination: {
        el: '.swiper__mostDesired .swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.mostDesiredArrow.swiper-button-next',
        prevEl: '.mostDesiredArrow.swiper-button-prev',
    },
    breakpoints: {
        640: {
            slidesPerView: 2,
        },
        1040: {
            slidesPerView: 3,
        }
    }
});
var swiper__mostDesiredWithCover = new Swiper('.swiper__mostDesiredWithCover', {
    slidesPerView: 2,
    spaceBetween: 20,
    pagination: {
        el: '.swiper__mostDesiredWithCover .swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.mostDesiredWithCoverArrow.swiper-button-next',
        prevEl: '.mostDesiredWithCoverArrow.swiper-button-prev',
    },
    breakpoints: {
    640: {
        slidesPerView: 2,
        spaceBetween: 5,
    },
    1200: {
        slidesPerView: 3,
    }
}
});
var swiper__mostDesiredGrid;
$(window).on('resize load', function() {
    // check exists
    if ($('.swiper__mostDesiredGrid').hasClass('swiper-container-horizontal')) {
        if ($(window).width() >= 1200) {
            swiper__mostDesiredGrid.destroy()
        }
    } else {
        if ($(window).width() < 1200) {
            swiper__mostDesiredGrid = new Swiper('.swiper__mostDesiredGrid', {
                slidesPerView: 4,
                pagination: {
                    el: '.swiper__mostDesiredGrid .swiper-pagination',
                    clickable: true,
                },
                navigation: {
                    nextEl: '.mostDesiredGridArrow.swiper-button-next',
                    prevEl: '.mostDesiredGridArrow.swiper-button-prev',
                },
                breakpoints: {
                    640: {
                        slidesPerView: 2,
                    },
                    1040: {
                        slidesPerView: 3,
                    }
                }
            });
        }
    }
})
$(window).on('load', function () {
    setTimeout(function(){
        swiper__mostDesiredWithCover.update();
        swiper__mostDesired.update();
        }, 1000);
});

// l-
if ($('.l-nav').length) {
    var propsNav = {
        active: 'is-active',
        scrollInit: 0,
        scrollClassScrolled: 99,
        scrollClassMiddle: 600,
        body: $('body'),
        nav: $('.l-nav'),
        hamburguer: $('.l-nav .c-hamburguer'),
        contentHero: $('.l-nav__contentOnlyInMobile'),
        mask: $('.l-nav__maskMenu'),
        maskAll: $('.l-nav__maskMenu.maskAll'),
    };

    function checkResponsiveMode() {
        var resultCheck;
        var displayCheck = propsNav.hamburguer.css('display');
        if (displayCheck !== 'none') {
            resultCheck = 'is-responsive';
            propsNav.nav.removeClass('is-desktop');
            propsNav.nav.addClass('is-responsive');
        } else {
            resultCheck = 'is-desktop';
            propsNav.nav.removeClass('is-responsive');
            propsNav.nav.addClass('is-desktop');
        }
        return resultCheck;
    }
    function closeAllSubMenus() {
        $('.c-subMenu').removeClass('is-active');
    }
    function closeResponsiveMenu() {
        propsNav.hamburguer.removeClass(propsNav.active);
        propsNav.contentHero.removeClass(propsNav.active);
        propsNav.mask.removeClass(propsNav.active);
    }
    function hideMaskMenu() {
        propsNav.mask.removeClass(propsNav.active);
    }
    function disableOverflow() {
        propsNav.body.addClass('u-overflowBlocked');
    }
    function enableOverflow() {
        propsNav.body.removeClass('u-overflowBlocked');
    }


    // RESPONSIVE MENU
    // - open / close
    propsNav.hamburguer.on('click', function() {
        if ($(this).hasClass(propsNav.active)) {
            // close menu
            enableOverflow();
            $(this).removeClass(propsNav.active);
            propsNav.mask.removeClass(propsNav.active);
            propsNav.contentHero.removeClass(propsNav.active);
        } else {
            // open menu
            disableOverflow();
            $(this).addClass(propsNav.active);
            propsNav.mask.addClass(propsNav.active);
            propsNav.contentHero.addClass(propsNav.active);
        }
    });
    // - close
    propsNav.mask.on('click', function(){
        closeResponsiveMenu();
        hideMaskMenu();
        closeAllSubMenus();
        enableOverflow();
    });


    // RESPONSIVE MODE
    $(window).on('resize', function() {
        if (checkResponsiveMode() === "is-desktop") {
            if (propsNav.contentHero.hasClass(propsNav.active)) {
                closeAllSubMenus();
                closeResponsiveMenu();
                hideMaskMenu();
            }
        }
    });


    // SCROLL CHANGES
    $(window).on('load', function(event) {
        checkResponsiveMode();
        var scrollBody = $(this).scrollTop();
        if (scrollBody > 1) {
            propsNav.nav.addClass('scrolled');
        } else {
            propsNav.nav.removeClass('scrolled');
        }
    });
    $(window).on('scroll', function() {
        var scrollBody = $(this).scrollTop();
        // scroll up to 99
        if (scrollBody > propsNav.scrollClassScrolled) {
            propsNav.nav.addClass('scrolled');
        } else {
            propsNav.nav.removeClass('scrolled');
        }
        // middle class
        if (scrollBody > propsNav.scrollClassMiddle) {
            propsNav.nav.addClass('hidden');
            propsNav.nav.addClass('scrolledMiddle');
        } else {
            propsNav.nav.removeClass('hidden');
            propsNav.nav.removeClass('scrolledMiddle');
        }
        // scroll up or down
        if (scrollBody < propsNav.scrollInit) {
            propsNav.nav.removeClass('hidden');
            propsNav.nav.addClass('scrolledUp');
            propsNav.nav.removeClass('scrolledDown');
        } else {
            propsNav.nav.removeClass('scrolledUp');
            propsNav.nav.addClass('scrolledDown');
        }
        // close menus on hidden nav
        if(propsNav.nav.hasClass('hidden')) {
            closeAllSubMenus();
            hideMaskMenu();
        }
        // reference var
        propsNav.scrollInit = scrollBody;
    });

}
if ($('.l-headerHome').length) {
    var splide__headerHome = new Splide('.splide__headerHome', {
        type: 'loop',
    }).mount();
    $(window).on('resize', function() {
        splide__headerHome.refresh();
    });
}
if ($('.l-cartWidget').length) {
    $('.js-openCart').on('click', function() {
        $('.l-cartWidget').addClass('is-active');
        $('.l-cartWidget__mask').addClass('is-active');
    });
    $('.js-closeCart').on('click', function() {
        $('.l-cartWidget').removeClass('is-active');
        $('.l-cartWidget__mask').removeClass('is-active');
    });
    $('.c-cardProductInCart__trash').on('click', function() {
        var confirmW = confirm("Deseja realmente remover este produto do carrinho?");
        var thisElement = $(this);
        if (confirmW == true) {
            thisElement.closest('li').addClass('is-removed');
            setTimeout(function(){
                thisElement.closest('li').remove();
            }, 330);
        }
    })
}
if ($('.l-asideFilters').length) {
    $('.l-asideFilters .list__filter a').on('click', function() {
        $(this).toggleClass('is-active')
    });
    $('.l-asideFilters .grid__sizes a').on('click', function() {
        $(this).toggleClass('is-active')
    });
    $('.js-toggleMoreFilters').on('click', function() {
        if ($(this).hasClass('--open')) {
            $(this).addClass('u-dnone');
            $(this).closest('.c-toggleList__content').find('.js-toggleMoreFilters.--close').removeClass('u-dnone');
            $(this).closest('.c-toggleList__content').find('.js-moreFilters').removeClass('u-dnone');
        } else {
            $(this).addClass('u-dnone');
            $(this).closest('.c-toggleList__content').find('.js-toggleMoreFilters.--open').removeClass('u-dnone');
            $(this).closest('.c-toggleList__content').find('.js-moreFilters').addClass('u-dnone');
        }
    });
}

// s-
if ($('.s-gridDpt').length) {
    $('.changeView__layout span').on('click', function() {
        $('.changeView__layout span').removeClass('is-active');
        $(this).addClass('is-active');
        var numberOfCol = $(this).attr('data-cols');
        var el = $('.s-gridDpt__content .grid__products > li');
        el.removeClass();
        switch(numberOfCol) {
            case '4':
                el.addClass('u-fw25');
                break;
            case '3':
                el.addClass('u-fw33');
                break;
            case '2':
                el.addClass('u-fw50');
                break;
            case '1':
                el.addClass('u-fw100');
                break;
            default:
                el.addClass('u-fw100');
        }
    })
}
if ($('.s-brands').length) {
    var splide__brands = new Splide('.splide__brands', {
        perPage: 7,
        drag: false,
        pagination: false,
        breakpoints: {
            1240: {
                perPage: 5,
                pagination: true,
            },
            760: {
                perPage: 4,
            },
            600: {
                perPage: 3,
            },
            420: {
                perPage: 2,
            },
        }
    }).mount();
    $(window).on('resize', function() {
        splide__brands.refresh();
    });
}
if ($('.s-occasion').length) {
    var splide__occasion = new Splide('.splide__occasion', {
        perPage: 6,
        drag: false,
        pagination: false,
        breakpoints: {
            1240: {
                perPage: 5,
                drag: true,
                pagination: true,
            },
            860: {
                perPage: 4,
                drag: true,
                pagination: true,
            },
            700: {
                perPage: 3,
                drag: true,
                pagination: true,
            },
            540: {
                perPage: 2,
                drag: true,
                pagination: true,
            },
        }
    }).mount();
    $(window).on('resize', function() {
        splide__occasion.refresh();
    });
}
if ($('.s-testimonials').length) {
    var splide__testmonials = new Splide('.splide__testmonials', {
        perPage: 3,
        pagination: true,
        breakpoints: {
            900: {
                perPage: 2,
            },
            600: {
                perPage: 1,
                padding: {
                    left : 0,
                    right: '80px',
                },
            },
        }
    }).mount();
    $(window).on('resize', function() {
        splide__testmonials.refresh();
    });
}
if ($('.s-blog').length) {
    var splide__blog = new Splide('.splide__blog', {
        perPage: 3,
        pagination: false,
        breakpoints: {
            900: {
                perPage: 2,
            },
            600: {
                perPage: 1,
                padding: {
                    left : 0,
                    right: '80px',
                },
            },
        }
    }).mount();
    $(window).on('resize', function() {
        splide__blog.refresh();
    });
}