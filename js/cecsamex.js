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
    $(this).parent().toggleClass('collapse').siblings().removeClass('collapse');
});

//modal

$('.butNewlatter').click(function(){
    $('.boxModal').toggleClass('show');
    $('body').toggleClass('noScroll');
});

//Cambio de imagenes en el index
$('#liAgri').hover(function(){
    $(this).addClass('active').siblings().removeClass('active');
    $('#biiNum1').addClass('active').siblings().removeClass('active');
});
$('#liCon').hover(function(){
    $(this).addClass('active').siblings().removeClass('active');
    $('#biiNum2').addClass('active').siblings().removeClass('active');
});
$('#liGan').hover(function(){
    $(this).addClass('active').siblings().removeClass('active');
    $('#biiNum3').addClass('active').siblings().removeClass('active');
});
$('#liFer').hover(function(){
    $(this).addClass('active').siblings().removeClass('active');
    $('#biiNum4').addClass('active').siblings().removeClass('active');
});
$('#liSeg').hover(function(){
    $(this).addClass('active').siblings().removeClass('active');
    $('#biiNum5').addClass('active').siblings().removeClass('active');
});

//Tabs de segunda barra de navegacion dentro de Nuestra empresa
//alto principal
var alto = $('#secQui').height();
$('.tabContent').height(alto);

//tabs clicks
$('#tabQui').click(function(){
    $(this).addClass('active').siblings().removeClass('active');
    $('#secQui').addClass('active').siblings().removeClass('active');

    var alto = $('#secQui').height();

    $('.tabContent').height(alto);

});
$('#tabNue').click(function(){
    $(this).addClass('active').siblings().removeClass('active');
    $('#secNue').addClass('active').siblings().removeClass('active');

    var alto1 = $('#secNue').height();

    $('.tabContent').height(alto1);
});
$('#tabCro').click(function(){
    $(this).addClass('active').siblings().removeClass('active');
    $('#secCro').addClass('active').siblings().removeClass('active');

    var alto2= $('#secCro').height();

    $('.tabContent').height(alto2);
});
$('#tabVid').click(function(){
    $(this).addClass('active').siblings().removeClass('active');
    $('#secVid').addClass('active').siblings().removeClass('active');

    var alto3 = $('#secVid').height();

    $('.tabContent').height(alto3);
});

//Collapse
//if( $('.boxCollapse').hasClass('collapse') ){
//    $(this).siblings().removeClass('collapse');
//}


//Mostrar categorias
$('.buttonHideCat').click(function(){
    $('#boxCategorias').toggleClass('open');
});


//Collapse en menu de lado derecho
$('.cnOffCanvasR .dropdownHeader').click(function(){
    $('.listaMenuLateral').toggleClass('open');
});

//perro
//$('#tabCro').click(function () {
    //$('#sliderNuestra').load('nuestra.html');
//});

//$('#tabCro').load(location.href + " #secCro");

/*tippy JS*/
tippy('[data-tippy-content]');



