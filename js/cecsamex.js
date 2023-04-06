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
