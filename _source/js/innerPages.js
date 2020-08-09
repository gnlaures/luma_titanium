// scripts to innerpages
// if ($('#page__x').length) {}
if ($('#page_contato').length) {
    $("#formContato").validate({
        submitHandler: function (form) {
            //SUBMIT form
            $(form).ajaxSubmit({
                //target: 'status-envio',
                beforeSubmit: function () {
                    $('#formContato .c-stsSend').removeClass('u-dnone');
                    $('#formContato .c-stsSend__feedback--load').removeClass('u-dnone');
                    $('#formContato  #btnContato').attr('disabled', true);
                },
                success: function (result) {
                    result = result.split('|');
                    if(parseInt(result[1]) == 1){
                        $('#formContato .c-stsSend__feedback').addClass('u-dnone');
                        $('#formContato .c-stsSend__feedback--success').removeClass('u-dnone');
                        setTimeout(function(){
                            $('#formContato #btnContato').attr('disabled',false);
                            $("#formContato .field").val('');
                            $("#formContato textarea").val('').html('');
                            $("#formContato .field").removeClass('error');
                            $('#formContato .c-stsSend').addClass('u-dnone');
                            $('#formContato .c-stsSend__feedback').addClass('u-dnone');
                        },2000);
                    }else{
                        $('#formContato .c-stsSend__feedback').addClass('u-dnone');
                        $('#formContato .c-stsSend__feedback--error').removeClass('u-dnone');
                        $('#formContato .c-stsSend__feedback--error span').html(result[2]);
                        setTimeout(function () {
                            $('#formContato .c-stsSend').addClass('u-dnone');
                            $('#formContato .c-stsSend__feedback').addClass('u-dnone');
                            $('#formContato #btnContato').attr('disabled', false);
                        }, 3000);
                    }
                }
            });
        }
    });
    $(document).on('change','#formContato_estado',function(){
        var uf = $(this).val();
        $("#formContato_cidade").html('<option>Carregando cidades...</option>');
        $.ajax({
            type: "POST",
            data: {uf: uf},
            url: "ajax-cidades.php",
            success: function (result) {
                $("#formContato_cidade").html(result);
            }
        });
    });
}
if ($('#page__carreiras').length) {
    var classActive = 'is-active';
    var elRh = {
        hero: $('.job__hero'),
        head: $('.job__head'),
        head__check: $('.head__check > input'),
        head__cod: $('.head__cod'),
        head__title: $('.head__title'),
        head__readMore: $('.head__readMore'),
        head__share: $('.head__share'),
        head__share__call: $('.share__call'),
        head__share__options: $('.share__options'),
        head__share__close: $('.js-options__close'),
        head__share__copyLink: $('.js-copyLink'),
        head__share__whatsapp: $('.js-whatsLink'),

        infos: $('.job__infos'),
        infos__select: $('.select__check'),
    };
    var whatsappOptions = {
        address: 'https://www.ecofitus.com.br/carreiras',
        company: 'Neuro Digital',
        link_mobile: 'https://api.whatsapp.com/send?text=',
        link_web: 'https://web.whatsapp.com/send?text=',
    }

    // share options - open
    elRh.head__share__call.on('click', function() {
        $(this).closest('.head__share').children('.share__options').addClass(classActive);
    });
    // share options - close
    elRh.head__share__close.on('click', function(event) {
        event.preventDefault();
        $(this).closest('.head__share').children('.share__options').removeClass(classActive);
    });
    // share options - copy link
    elRh.head__share__copyLink.on('click', function(event) {
        event.preventDefault();
        var inputElement = $(this).children('.inputLinkHero').children('input');
        var jobCode = $(this).closest('.job__head').children('.head__cod').text();
        var fullUrl = window.location.href;
        var hashOfPage = window.location.hash;

        if ((hashOfPage == 'undefined') || (hashOfPage == '')) {
            inputElement.val(fullUrl + jobCode);
        } else {
            var urlInicial = fullUrl.split(hashOfPage, 1);
            var urlPage = urlInicial + jobCode;
            inputElement.val(urlPage);
        }

        inputElement.select();
        document.execCommand("copy");
        $(this).children('.inputLinkHero').children('span').addClass('is-active');
        setTimeout(function(){
            $('.inputLinkHero span').removeClass('is-active');
        }, 1500);
    });
    // share options - whatsapp
    elRh.head__share__whatsapp.on('click', function(event) {
        event.preventDefault();
        // make link vaga
        var selectedJobCode = $(this).closest('.job__head').children('.head__cod').html();
        var finalLink = whatsappOptions.address + selectedJobCode;
        //make msg vaga
        var selectedJobName = $(this).closest('.job__head').children('.head__title').children('h4').text();
        var textLink = 'Olá, gostaria de compartilhar com você essa vaga de *' + selectedJobName + '*, na empresa *' + whatsappOptions.company + '* - ' + finalLink;
        // open whats share and modify text
        if(is.mobile() || is.tablet()) {
            window.open(whatsappOptions.link_mobile + textLink);
        } else {
            window.open(whatsappOptions.link_web + textLink);
        }
    });

    // open/close job content
    function openCloseJobs(element) {
        element.closest('.job__hero').toggleClass(classActive);
    }
    elRh.head__title.on('click', function(){openCloseJobs($(this))});
    elRh.head__readMore.on('click', function(){openCloseJobs($(this))});

    // select jobs
    // create array with selected jobs
    function createArrayWithSelectedJobs() {
        var selectedJobs = [];
        elRh.head__check.each(function(index) {
            if ($(this).is(':checked')) {
                var nameJob = $(this).closest('.job__head').find('h4').html();
                var codeJob = $(this).closest('.job__head').find('.head__cod').html();
                var code = $(this).closest('.job__head').find('.head__cod').attr('data-codigo');
                selectedJobs.push('<span data-codeJob="js-code_'+codeJob+'"><input type="hidden" name="vagas[]" value="'+code+'">' + codeJob + ': ' + nameJob + '<div class="js-deleteSelectedJob"></div></span>');
            }
            $('.listOfSelectedJobs').html(selectedJobs);
        });
        if(selectedJobs.length === 0) {
            $('.listOfSelectedJobs').html('<span>Nenhuma vaga selecionada</span>');
        }
        return selectedJobs;
    }
    elRh.infos__select.on('click', function() {
        if($(this).hasClass(classActive)) {
            $(this).removeClass(classActive);
            $(this).children('span').html('Selecionar esta vaga');
            $(this).closest('.job__hero').children('.job__head').find('.head__check > input').prop('checked', false);
        } else {
            $(this).addClass(classActive);
            $(this).children('span').html('Vaga selecionada');
            $(this).closest('.job__hero').children('.job__head').find('.head__check > input').prop('checked', true);
        }
        createArrayWithSelectedJobs();
    });
    elRh.head__cod.on('click', function() {
        if($(this).closest('.job__hero').children('.job__head').find('.head__check > input').is(':checked')) {
            $(this).closest('.job__hero').children('.job__head').find('.head__check > input').prop('checked', false);
            $(this).closest('.job__hero').children('.job__infos').find('.select__check').removeClass(classActive).children('span').html('Selecionar esta vaga');
        } else {
            $(this).closest('.job__hero').children('.job__head').find('.head__check > input').prop('checked', true);
            $(this).closest('.job__hero').children('.job__infos').find('.select__check').addClass(classActive).children('span').html('Vaga selecionada');
        }

        createArrayWithSelectedJobs()
    });
    elRh.head__check.on('click', function() {
        if($(this).is(':checked')) {
            $(this).closest('.job__hero').find('.select__check').addClass(classActive);
            $(this).closest('.job__hero').children('.job__infos').find('.select__check').addClass(classActive).children('span').html('Vaga selecionada');
            //elRh.infos__select.addClass(classActive);
        } else {
            $(this).closest('.job__hero').find('.select__check').removeClass(classActive);
            $(this).closest('.job__hero').children('.job__infos').find('.select__check').removeClass(classActive).children('span').html('Selecionar esta vaga');
            //elRh.infos__select.removeClass(classActive);
        }
        createArrayWithSelectedJobs();
    });

    // unselect jobs in list of selected jobs
    $(document).on('click', '.js-deleteSelectedJob', function() {
        var clickedJobCode = $(this).parent('span').attr('data-codeJob').replace('js-code_', '');
        elRh.head__cod.each(function() {
            if($(this).html() === clickedJobCode) {
                $(this).closest('.job__head').find('.head__check > input').prop('checked', false);
                $(this).closest('.job__head').next('.job__infos').find('.select__check').removeClass(classActive);
            }
        });
        $(this).parent('span').remove();
        createArrayWithSelectedJobs();
    });

    // load with hash
    $(window).on('load hashchange', function() {
        var hashPage = window.location.hash;
        if ((hashPage == '') || (hashPage == 'undefined')) {
        } else if (hashPage === '#envio-curriculo') {
            goToSection__scroll($('.stepCarrer--2'), 100);
        } else {
            elRh.head__cod.each(function() {
                if(hashPage == $(this).text()) {
                    $(this).closest('.job__hero').addClass(classActive);
                    goToSection__scroll($('.job__hero.is-active'), 100);
                    return false
                }
            });
        }
    });

    // attach cv
    $('#formCarrers_anexo--hidden').on('change', function() {
        var t = $(this).val().split('fakepath');
        console.log(t);
        $('#formCarrers_anexo').val(t[1]);
    });

    // check number of jobs and if == 0 hide the list
    if(!elRh.hero.length) {
        $('.stepCarrer--1').remove();
        $('.stepCarrer h3 span').remove();
        $('#formCarrers .liJobs').remove();
    }
}
if ($('#formCarrers').length) {
    $(document).on('blur', '#formCarrers_cpf', function () {
        var cpf = $(this).val();
        $.ajax({
            type: "POST",
            data: {cpf: cpf},
            url: "ajax-cpfCurriculos.php",
            success: function (result) {
                var res = result.split('|');
                if(res[1] == 'S'){
                    $("#formCarrers_nome").val(res[2]);
                    $("#formCarrers_email").val(res[3]);
                    $("#formCarrers_telefone").val(res[4]);
                    $("#formContato_estado").val(res[5]);
                    $("#formCarrers_endereco").val(res[6]);
                    $("#formCarrers_mensagem").text(res[7]).val(res[7]);
                    $("#formContato_cidade").html(res[8]);
                    $("#formCarrers_anexo--hidden").removeAttr('required');
                    $("#formCarrers_anexo--hidden").removeAttr('aria-required');
                }else{
                    $("#formCarrers_anexo--hidden").attr('required','required');
                    $("#formCarrers_anexo--hidden").attr('aria-required', 'true');
                }
            }
        });
    });
    $("#formCarrers").validate({
        submitHandler: function (form) {
            //SUBMIT form
            $(form).ajaxSubmit({
                //target: 'status-envio',
                beforeSubmit: function () {
                    $('#formCarrers .c-stsSend').removeClass('u-dnone');
                    $('#formCarrers .c-stsSend__feedback--load').removeClass('u-dnone');
                    $('#formCarrers #btnCarrers').attr('disabled', true);
                },
                success: function (result) {
                    result = result.split('|');
                    if(parseInt(result[1]) == 1){
                        $('#formCarrers .c-stsSend__feedback').addClass('u-dnone');
                        $('#formCarrers .c-stsSend__feedback--success').removeClass('u-dnone');
                        setTimeout(function(){
                            $('#formCarrers #btnCarrers').attr('disabled',false);
                            $("#formCarrers .field").val('');
                            $("#formCarrers textarea").val('').html('');
                            $("#formCarrers_anexo").attr('placeholder','Selecione seu currículo');
                            $("#formCarrers .field").removeClass('error');
                            $('#formCarrers .listOfSelectedJobs').html('<span>Nenhuma vaga selecionada</span>');
                            $('#formCarrers .c-stsSend').addClass('u-dnone');
                            $('#formCarrers .c-stsSend__feedback').addClass('u-dnone');
                        },2000);
                    }else{
                        $('#formCarrers .c-stsSend__feedback').addClass('u-dnone');
                        $('#formCarrers .c-stsSend__feedback--error').removeClass('u-dnone');
                        $('#formCarrers .c-stsSend__feedback--error span').html(result[2]);
                        setTimeout(function () {
                            $('#formCarrers .c-stsSend').addClass('u-dnone');
                            $('#formCarrers .c-stsSend__feedback').addClass('u-dnone');
                            $('#formCarrers #btnCarrers').attr('disabled', false);
                        }, 3000);
                    }
                }
            });
        }
    });
}