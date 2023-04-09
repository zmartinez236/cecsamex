//Boton del menu izquierdo
$('.cnHambur').click(function(){
    $('.cnOffCanvasR').toggleClass('show');

    if($('.cnOffCanvasL').hasClass("show")){
        $('.cnOffCanvasL').removeClass('show');
    }

});

//boton menu responsivo
$('.cnButtonRespon').click(function(){
    $('.cnOffCanvasL').toggleClass('show');

    if($('.cnOffCanvasR').hasClass("show")){
        $('.cnOffCanvasR').removeClass('show');
    }
});


//----------------GENERALES--------------//
//dropdown en menu
$('.ddButton').click(function(){
    $('.dropdownHeader').toggleClass('open');
});

//Buscador
$('.cnsButton').click(function () {
    $('.cnSearch').toggleClass('open');
    $('.cnMenu').toggleClass('hide');
});

//mandar contenido del navbar al offcanvas izquierdo para el responsivo
var menu1 = $('#menuNav').html();
$('#menuCanvas').html(menu1);


//Dropdown gen
$('.ddText').click(function(){
    $(this).parent().toggleClass('open');
});

//Collapse 
$('.bcTitle').click(function(){
    $(this).parent().toggleClass('collapse');
});

//modal

$('.butNewlatter').click(function(){
    $('.boxModal').toggleClass('show');
    $('body').css('overflow','hidden');
});

//Cambio de imagenes en el index
$('#liAgri').click(function(){
    $(this).addClass('active').siblings().removeClass('active');
    $('#biiNum1').addClass('active').siblings().removeClass('active');
});
$('#liCon').click(function(){
    $(this).addClass('active').siblings().removeClass('active');
    $('#biiNum2').addClass('active').siblings().removeClass('active');
});
$('#liGan').click(function(){
    $(this).addClass('active').siblings().removeClass('active');
    $('#biiNum3').addClass('active').siblings().removeClass('active');
});
$('#liFer').click(function(){
    $(this).addClass('active').siblings().removeClass('active');
    $('#biiNum4').addClass('active').siblings().removeClass('active');
});
$('#liSeg').click(function(){
    $(this).addClass('active').siblings().removeClass('active');
    $('#biiNum5').addClass('active').siblings().removeClass('active');
});

//Tabs de segunda barra de navegacion dentro de Nuestra empresa
$('#tabQui').click(function(){
    $(this).addClass('active').siblings().removeClass('active');
    $('#secQui').addClass('active').siblings().removeClass('active');
});
$('#tabNue').click(function(){
    $(this).addClass('active').siblings().removeClass('active');
    $('#secNue').addClass('active').siblings().removeClass('active');
});
$('#tabCro').click(function(){
    $(this).addClass('active').siblings().removeClass('active');
    $('#secCro').addClass('active').siblings().removeClass('active');
});
$('#tabVid').click(function(){
    $(this).addClass('active').siblings().removeClass('active');
    $('#secVid').addClass('active').siblings().removeClass('active');
});