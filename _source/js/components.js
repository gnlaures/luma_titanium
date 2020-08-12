// formsorm
if ($('.liSelect').length) {
    $('.liSelect select').on('focusin', function () {
        $(this).closest('.liSelect').addClass('is-active');
    });
    $('.liSelect select').on('focusout', function () {
        $(this).closest('.liSelect').removeClass('is-active');
    });
}
if ($('.liFile').length) {
    $('.inputAttach').on('change', function() {
        var t = $(this).val().split('fakepath');
        console.log(t);
        $(this).closest('.liFile').find('.inputText').val(t[1]);
    });
}
if (is.not.ie()) {
    $('.cepMask').mask("99999-999");
    $('.cpfMask').mask("999.999.999-99");
    $('.dataMask').mask("99/99/9999");
    $('.foneMask').focusout(function () {
        var phone, element;
        element = $(this);
        element.unmask();
        phone = element.val().replace(/\D/g, '');
        if (phone.length > 10) {
            element.mask("(99) 99999-999?9");
        } else {
            element.mask("(99) 9999-9999?9");
        }
    }).trigger('focusout');
}

// grids / tabs
if ($('.c-responsiveGrid').length) {

    function removeGridClass(el) {
        for (var i = 1; i <= 12; i++) {
            el.removeClass('--col' + i);
        }
        el.removeClass('--colNaN');
    }

    $(window).on('load resize', function() {
        $('.c-responsiveGrid').each(function( index ) {
            var propsGrid = {
                maxwBreaks: $(this).attr('data-maxw-breaks').split(', ').map(Number),
                maxwCols: $(this).attr('data-maxw-cols').split(', ').map(Number),
                initCols: parseInt($(this).attr('data-cols-init')),
                windowW: $(window).width(),
            };
            var qtfBreaks = propsGrid.maxwBreaks.length;
            if (propsGrid.maxwBreaks.length === propsGrid.maxwCols.length) {
                for (var i = 0; i <= qtfBreaks; i++) {
                    if (propsGrid.maxwBreaks[i] >= propsGrid.windowW) {
                        removeGridClass($(this));
                        $(this).addClass('--col' + propsGrid.maxwCols[i]);
                    }
                    if (propsGrid.windowW > propsGrid.maxwBreaks[0]) {
                        removeGridClass($(this));
                        $(this).addClass('--col' + propsGrid.initCols);
                    }
                }
            } else {
                console.log('Ta faltando media querie ou colunas, verifique seu componente');
            }
        });
    });
}
if ($('.c-tabHorizontal').length) {
    var propsTabH = {
        el: $('.c-tabHorizontal'),
        item: $('.c-tabHorizontal a'),
        header: $('.c-tabHorizontal__header'),
        content: $('.c-tabHorizontal__content'),
    };

    propsTabH.item.on('click', function(e) {
        e.preventDefault();
        // toggle active header
        $(this).closest('.c-tabHorizontal__header').find('a').removeClass('is-active');
        $(this).addClass('is-active');

        // scroll to active
        //console.log($(this).closest('.c-tabHorizontal__header ul').scrollLeft());

        // toggle active content
        var contentDestiny = $(this).attr('href');
        var thisElement = $(this);
        thisElement.closest(propsTabH.el).find(propsTabH.content).removeClass('is-active');
        setTimeout(function(){
            thisElement.closest(propsTabH.el).find(propsTabH.content).addClass('u-dnone');
            $(contentDestiny).removeClass('u-dnone');
            $(contentDestiny).addClass('is-active');
        }, 350);
    });
}
if ($('.c-toggleList').length) {
    $('.c-toggleList__header').on('click', function() {
        $(this).parent().toggleClass('is-active');
    });
}

// links
if ($('.c-subMenu').length) {
    var propsSubMenu = {
        toggle: $('.c-subMenu__call'),
        content: $('.c-subMenu__content'),
        el: $('.c-subMenu'),
        primary: $('.js-subMenuPrimary'),
        mask: $('.c-subMenu__mask')
    };

    function removeMask() {
        propsSubMenu.mask.removeClass('is-active');
    }

    // close
    propsSubMenu.mask.on('click', function() {
        propsSubMenu.el.removeClass('is-active');
        removeMask();
    });
    propsSubMenu.primary.parent().children('.c-subMenu__content').on('mouseleave', function() {
        propsSubMenu.el.removeClass('is-active');
        removeMask();
    });

    // open
    propsSubMenu.primary.on('click', function(e) {
        e.preventDefault();
        if ($(this).parent('.c-subMenu').hasClass('is-active')) {
            $(this).parent('.c-subMenu').removeClass('is-active');
        } else {
            // $('.c-subMenu').removeClass('is-active');
            // $(this).parent('.c-subMenu').addClass('is-active');
            if (($(this).parents('.l-nav').length) && ($('.l-nav').hasClass('is-responsive'))) {
                console.log('l-nav')
                $(this).parent('.c-subMenu').toggleClass('is-active');
            } else {
                console.log('not nav')
                $('.c-subMenu').removeClass('is-active');
                $(this).parent('.c-subMenu').addClass('is-active');
            }
        }
    });
    propsSubMenu.toggle.on('click', function(e) {
        e.preventDefault();
        if (!$(this).hasClass('js-subMenuPrimary')) {
            $(this).parent('.c-subMenu').toggleClass('is-active');
        }
    });
}

// search
if ($('.c-search').length) {
    $('.c-search input').on('focusin', function () {
        $('.c-search').addClass('is-active');
    });
    $('.c-search input').on('focusout', function () {
        $('.c-search').removeClass('is-active');
    });
    $('.c-search__suggestions').on('mouseleave', function(){
        $('.c-search').removeClass('is-active');
        $('.c-search input').blur();
    });
    $(window).on('scroll', function() {
        if ($('.l-nav').hasClass('hidden')) {
            $('.c-search').removeClass('is-active');
            $('.c-search input').blur();
        }
    });
}

// cards
if ($('.c-cardProduct').length) {
    $(window).on('load', function() {
        $('.slick__sizes').slick({
            dots: false,
            infinite: false,
            speed: 300,
            slidesToShow: 4,
            slidesToScroll: 2,
            responsive: [
                {
                    breakpoint: 780,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 1,
                    }
                }
            ]
        });
    });
    $(window).on('resize load', function () {
        var cardWidth = $('.c-cardProduct').width();
        $('.slick__sizes').css('width', cardWidth - 70);
        $('.slick__sizes *').css('max-width', cardWidth - 70);
    })
}
if ($('.c-cardBuy').length) {
    $('.c-cardBuy__ratings').on('click', function(e) {
        e.preventDefault();
        var finalDestiny = $(this).attr('href');
        goToSection__scroll(finalDestiny, 100, 50, 700, 10);
    });
}




