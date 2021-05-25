$(document).ready(function () {
    // ------- Funcionalidad de mostrar el elemento seleccionado en el campo input 
    $(".dropdown-menu li a").click(function () {
        var selText = $(this).text();
        $(this).closest('.form-group').find('#campo').val(selText);
    });
});