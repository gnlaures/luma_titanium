$(window).on("load",function(){classOnBody($("main").attr("id")),scrollDirection(),initGettersAndSetters(),changeTouchClickText()}),$(window).on("hashchange",function(){initGettersAndSetters()}),is.not.ie()?AOS.init():$("*").removeAttr("data-aos");var swiper__mostDesiredGrid,propsNav,splide__headerHome,splide__brands,splide__occasion,splide__testmonials,splide__blog,swiper__mostDesired=new Swiper(".swiper__mostDesired",{slidesPerView:4,pagination:{el:".swiper__mostDesired .swiper-pagination",clickable:!0},navigation:{nextEl:".mostDesiredArrow.swiper-button-next",prevEl:".mostDesiredArrow.swiper-button-prev"},breakpoints:{640:{slidesPerView:2},1040:{slidesPerView:3}}}),swiper__mostDesiredWithCover=new Swiper(".swiper__mostDesiredWithCover",{slidesPerView:2,spaceBetween:20,pagination:{el:".swiper__mostDesiredWithCover .swiper-pagination",clickable:!0},navigation:{nextEl:".mostDesiredWithCoverArrow.swiper-button-next",prevEl:".mostDesiredWithCoverArrow.swiper-button-prev"},breakpoints:{640:{slidesPerView:2,spaceBetween:5},1200:{slidesPerView:3}}});function checkResponsiveMode(){var e;return"none"!==propsNav.hamburguer.css("display")?(e="is-responsive",propsNav.nav.removeClass("is-desktop"),propsNav.nav.addClass("is-responsive")):(e="is-desktop",propsNav.nav.removeClass("is-responsive"),propsNav.nav.addClass("is-desktop")),e}function closeAllSubMenus(){$(".c-subMenu").removeClass("is-active")}function closeResponsiveMenu(){propsNav.hamburguer.removeClass(propsNav.active),propsNav.contentHero.removeClass(propsNav.active),propsNav.mask.removeClass(propsNav.active)}function hideMaskMenu(){propsNav.mask.removeClass(propsNav.active)}function disableOverflow(){propsNav.body.addClass("u-overflowBlocked")}function enableOverflow(){propsNav.body.removeClass("u-overflowBlocked")}function openModal(e){$(".l-modalMobile__mask").addClass("is-active"),$(e).addClass("is-active")}function closeModal(){$(".l-modalMobile__mask").removeClass("is-active"),$(".l-modalMobile").removeClass("is-active")}$(window).on("resize load",function(){$(".swiper__mostDesiredGrid").hasClass("swiper-container-horizontal")?1200<=$(window).width()&&swiper__mostDesiredGrid.destroy():$(window).width()<1200&&(swiper__mostDesiredGrid=new Swiper(".swiper__mostDesiredGrid",{slidesPerView:4,pagination:{el:".swiper__mostDesiredGrid .swiper-pagination",clickable:!0},navigation:{nextEl:".mostDesiredGridArrow.swiper-button-next",prevEl:".mostDesiredGridArrow.swiper-button-prev"},breakpoints:{640:{slidesPerView:2},1040:{slidesPerView:3}}}))}),$(window).on("load",function(){setTimeout(function(){swiper__mostDesiredWithCover.update(),swiper__mostDesired.update()},1e3)}),$(".l-nav").length&&((propsNav={active:"is-active",scrollInit:0,scrollClassScrolled:99,scrollClassMiddle:600,body:$("body"),nav:$(".l-nav"),hamburguer:$(".l-nav .c-hamburguer"),contentHero:$(".l-nav__contentOnlyInMobile"),mask:$(".l-nav__maskMenu"),maskAll:$(".l-nav__maskMenu.maskAll")}).hamburguer.on("click",function(){$(this).hasClass(propsNav.active)?(enableOverflow(),$(this).removeClass(propsNav.active),propsNav.mask.removeClass(propsNav.active),propsNav.contentHero.removeClass(propsNav.active)):(disableOverflow(),$(this).addClass(propsNav.active),propsNav.mask.addClass(propsNav.active),propsNav.contentHero.addClass(propsNav.active))}),propsNav.mask.on("click",function(){closeResponsiveMenu(),hideMaskMenu(),closeAllSubMenus(),enableOverflow()}),$(window).on("resize",function(){"is-desktop"===checkResponsiveMode()&&propsNav.contentHero.hasClass(propsNav.active)&&(closeAllSubMenus(),closeResponsiveMenu(),hideMaskMenu())}),$(window).on("load",function(e){checkResponsiveMode(),1<$(this).scrollTop()?propsNav.nav.addClass("scrolled"):propsNav.nav.removeClass("scrolled")}),$(window).on("scroll",function(){var e=$(this).scrollTop();e>propsNav.scrollClassScrolled?propsNav.nav.addClass("scrolled"):propsNav.nav.removeClass("scrolled"),e>propsNav.scrollClassMiddle?(propsNav.nav.addClass("hidden"),propsNav.nav.addClass("scrolledMiddle")):(propsNav.nav.removeClass("hidden"),propsNav.nav.removeClass("scrolledMiddle")),e<propsNav.scrollInit?(propsNav.nav.removeClass("hidden"),propsNav.nav.addClass("scrolledUp"),propsNav.nav.removeClass("scrolledDown")):(propsNav.nav.removeClass("scrolledUp"),propsNav.nav.addClass("scrolledDown")),propsNav.nav.hasClass("hidden")&&(closeAllSubMenus(),hideMaskMenu()),propsNav.scrollInit=e})),$(".l-headerHome").length&&(splide__headerHome=new Splide(".splide__headerHome",{type:"loop"}).mount(),$(window).on("resize",function(){splide__headerHome.refresh()})),$(".l-cartWidget").length&&($(".js-openCart").on("click",function(){$(".l-cartWidget").addClass("is-active"),$(".l-cartWidget__mask").addClass("is-active")}),$(".js-closeCart").on("click",function(){$(".l-cartWidget").removeClass("is-active"),$(".l-cartWidget__mask").removeClass("is-active")}),$(".c-cardProductInCart__trash").on("click",function(){var e=confirm("Deseja realmente remover este produto do carrinho?"),s=$(this);1==e&&(s.closest("li").addClass("is-removed"),setTimeout(function(){s.closest("li").remove()},330))})),$(".l-asideFilters").length&&($(".l-asideFilters .list__filter a").on("click",function(){$(this).toggleClass("is-active")}),$(".l-asideFilters .grid__sizes a").on("click",function(){$(this).toggleClass("is-active")}),$(".js-toggleMoreFilters").on("click",function(){$(this).hasClass("--open")?($(this).addClass("u-dnone"),$(this).closest(".c-toggleList__content").find(".js-toggleMoreFilters.--close").removeClass("u-dnone"),$(this).closest(".c-toggleList__content").find(".js-moreFilters").removeClass("u-dnone")):($(this).addClass("u-dnone"),$(this).closest(".c-toggleList__content").find(".js-toggleMoreFilters.--open").removeClass("u-dnone"),$(this).closest(".c-toggleList__content").find(".js-moreFilters").addClass("u-dnone"))})),$(".l-contentWithAside").length&&($(".js-openModalMobile").on("click",function(e){e.preventDefault(),openModal($(this).attr("href"))}),$(".l-modalMobile__mask, .js-closeModalMobile").on("click",function(e){e.preventDefault(),closeModal()})),$(".s-gridDpt").length&&$(".changeView__layout span").on("click",function(){$(".changeView__layout span").removeClass("is-active"),$(this).addClass("is-active");var e=$(this).attr("data-cols"),s=$(".s-gridDpt__content .grid__products > li");switch(s.removeClass(),e){case"4":s.addClass("u-fw25");break;case"3":s.addClass("u-fw33");break;case"2":s.addClass("u-fw50");break;case"1":s.addClass("u-fw100");break;default:s.addClass("u-fw100")}}),$(".s-brands").length&&(splide__brands=new Splide(".splide__brands",{perPage:7,drag:!1,pagination:!1,breakpoints:{1240:{perPage:5,pagination:!0},760:{perPage:4},600:{perPage:3},420:{perPage:2}}}).mount(),$(window).on("resize",function(){splide__brands.refresh()})),$(".s-occasion").length&&(splide__occasion=new Splide(".splide__occasion",{perPage:6,drag:!1,pagination:!1,breakpoints:{1240:{perPage:5,drag:!0,pagination:!0},860:{perPage:4,drag:!0,pagination:!0},700:{perPage:3,drag:!0,pagination:!0},540:{perPage:2,drag:!0,pagination:!0}}}).mount(),$(window).on("resize",function(){splide__occasion.refresh()})),$(".s-testimonials").length&&(splide__testmonials=new Splide(".splide__testmonials",{perPage:3,pagination:!0,breakpoints:{900:{perPage:2},600:{perPage:1,padding:{left:0,right:"80px"}}}}).mount(),$(window).on("resize",function(){splide__testmonials.refresh()})),$(".s-blog").length&&(splide__blog=new Splide(".splide__blog",{perPage:3,pagination:!1,breakpoints:{900:{perPage:2},600:{perPage:1,padding:{left:0,right:"80px"}}}}).mount(),$(window).on("resize",function(){splide__blog.refresh()}));
//# sourceMappingURL=allPages-min.js.map
