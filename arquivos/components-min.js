function removeGridClass(s){for(var e=1;e<=12;e++)s.removeClass("--col"+e);s.removeClass("--colNaN")}var propsTabH,propsSubMenu;function removeMask(){propsSubMenu.mask.removeClass("is-active")}$(".liSelect").length&&($(".liSelect select").on("focusin",function(){$(this).closest(".liSelect").addClass("is-active")}),$(".liSelect select").on("focusout",function(){$(this).closest(".liSelect").removeClass("is-active")})),$(".liFile").length&&$(".inputAttach").on("change",function(){var s=$(this).val().split("fakepath");console.log(s),$(this).closest(".liFile").find(".inputText").val(s[1])}),is.not.ie()&&($(".cepMask").mask("99999-999"),$(".cpfMask").mask("999.999.999-99"),$(".dataMask").mask("99/99/9999"),$(".foneMask").focusout(function(){var s=$(this);s.unmask(),10<s.val().replace(/\D/g,"").length?s.mask("(99) 99999-999?9"):s.mask("(99) 9999-9999?9")}).trigger("focusout")),$(".c-responsiveGrid").length&&$(window).on("load resize",function(){$(".c-responsiveGrid").each(function(s){var e={maxwBreaks:$(this).attr("data-maxw-breaks").split(", ").map(Number),maxwCols:$(this).attr("data-maxw-cols").split(", ").map(Number),initCols:parseInt($(this).attr("data-cols-init")),windowW:$(window).width()},a=e.maxwBreaks.length;if(e.maxwBreaks.length===e.maxwCols.length)for(var t=0;t<=a;t++)e.maxwBreaks[t]>=e.windowW&&(removeGridClass($(this)),$(this).addClass("--col"+e.maxwCols[t])),e.windowW>e.maxwBreaks[0]&&(removeGridClass($(this)),$(this).addClass("--col"+e.initCols));else console.log("Ta faltando media querie ou colunas, verifique seu componente")})}),$(".c-tabHorizontal").length&&(propsTabH={el:$(".c-tabHorizontal"),item:$(".c-tabHorizontal a"),header:$(".c-tabHorizontal__header"),content:$(".c-tabHorizontal__content")}).item.on("click",function(s){s.preventDefault(),$(this).closest(".c-tabHorizontal__header").find("a").removeClass("is-active"),$(this).addClass("is-active");var e=$(this).attr("href"),a=$(this);a.closest(propsTabH.el).find(propsTabH.content).removeClass("is-active"),setTimeout(function(){a.closest(propsTabH.el).find(propsTabH.content).addClass("u-dnone"),$(e).removeClass("u-dnone"),$(e).addClass("is-active")},350)}),$(".c-toggleList").length&&$(".c-toggleList__header").on("click",function(){$(this).parent().toggleClass("is-active")}),$(".c-subMenu").length&&((propsSubMenu={toggle:$(".c-subMenu__call"),content:$(".c-subMenu__content"),el:$(".c-subMenu"),primary:$(".js-subMenuPrimary"),mask:$(".c-subMenu__mask")}).mask.on("click",function(){propsSubMenu.el.removeClass("is-active"),removeMask()}),propsSubMenu.primary.parent().children(".c-subMenu__content").on("mouseleave",function(){propsSubMenu.el.removeClass("is-active"),removeMask()}),propsSubMenu.primary.on("click",function(s){s.preventDefault(),$(this).parent(".c-subMenu").hasClass("is-active")?$(this).parent(".c-subMenu").removeClass("is-active"):$(this).parents(".l-nav").length&&$(".l-nav").hasClass("is-responsive")?(console.log("l-nav"),$(this).parent(".c-subMenu").toggleClass("is-active")):(console.log("not nav"),$(".c-subMenu").removeClass("is-active"),$(this).parent(".c-subMenu").addClass("is-active"))}),propsSubMenu.toggle.on("click",function(s){s.preventDefault(),$(this).hasClass("js-subMenuPrimary")||$(this).parent(".c-subMenu").toggleClass("is-active")})),$(".c-search").length&&($(".c-search input").on("focusin",function(){$(".c-search").addClass("is-active")}),$(".c-search input").on("focusout",function(){$(".c-search").removeClass("is-active")}),$(".c-search__suggestions").on("mouseleave",function(){$(".c-search").removeClass("is-active"),$(".c-search input").blur()}),$(window).on("scroll",function(){$(".l-nav").hasClass("hidden")&&($(".c-search").removeClass("is-active"),$(".c-search input").blur())})),$(".c-cardProduct").length&&($(window).on("load",function(){$(".slick__sizes").slick({dots:!1,infinite:!1,speed:300,slidesToShow:4,slidesToScroll:2,responsive:[{breakpoint:780,settings:{slidesToShow:3,slidesToScroll:1}}]})}),$(window).on("resize load",function(){var s=$(".c-cardProduct").width();$(".slick__sizes").css("width",s-70),$(".slick__sizes *").css("max-width",s-70)})),$(".c-cardBuy").length&&$(".c-cardBuy__ratings").on("click",function(s){s.preventDefault();var e=$(this).attr("href");goToSection__scroll(e,100,50,700,10)});
//# sourceMappingURL=components-min.js.map
