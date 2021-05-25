$(document).ready(function(){
    /* ------------------ Efecto Hover en Navbar -------------------- */
    // ----------------------- Home item -------------------------
    $('#_home').hover(function(){
        $('#_home .icon-container.nav').css("color", "black");
        $('#_home .nav-link').removeClass('white-link');
        $('#_home .nav-link').addClass('jquery_nav-link-BlackColor');
    },
        function(){
            $("#_home .icon-container.nav").css("color", "white");
            $('#_home .nav-link').removeClass('jquery_nav-link-BlackColor');
            $('#_home .nav-link').addClass('white-link');
        }
    );

    // ----------------------- About item -------------------------
    $('#_about').hover(function(){
        $('#_about .icon-container.nav').css("color", "black");
        $('#_about .nav-link').removeClass('white-link');
        $('#_about .nav-link').addClass('jquery_nav-link-BlackColor');
    },
        function(){
            $("#_about .icon-container.nav").css("color", "white");
            $('#_about .nav-link').removeClass('jquery_nav-link-BlackColor');
            $('#_about .nav-link').addClass('white-link');
        }
    );

    // ----------------------- Services item -------------------------
    $('#_services').hover(function(){
        $('#_services .icon-container.nav').css("color", "black");
        $('#_services .nav-link').removeClass('white-link');
        $('#_services .nav-link').addClass('jquery_nav-link-BlackColor');
        
    },
        function(){
            $("#_services .icon-container.nav").css("color", "white");
            $('#_services .nav-link').removeClass('jquery_nav-link-BlackColor');
            $('#_services .nav-link').addClass('white-link');
        }
    );

    // ------------------ Submenu Listening to music item ------------------
    $('.dropdown-submenu.secondary a.test, .dropdown-submenu.secondary ul').hover(function () {
        // Muestra el menú <ul> más próximo
        $('.dropdown-submenu.secondary a.test').next('ul').delay(1000).stop(true, true).fadeIn(50);
        // Oculta el 3er menú pequeño 
        $('.dropdown-submenu.third a.test').next('ul').stop(true, true).fadeOut(50);
    }, 
        function () {
            $('.dropdown-submenu.secondary a.test').next('ul').delay(1000).stop(true, true).fadeOut(50);
        }
    );

    // ------------------ Submenu subitem 05 ------------------
    $('.dropdown-submenu.third a.test, .dropdown-submenu.third ul').hover(function () {
        $('.dropdown-submenu.third a.test').next('ul').stop(true, true).fadeIn(50);
    }, 
        function () {
            $('.dropdown-submenu.third a.test').next('ul').stop(true, true).fadeOut(50);
            // $('.dropdown-submenu.secondary a.test').next('ul').delay(1000).stop(true, true).fadeIn(50);
        }
    );

    // ----------------------- Portfolio item -------------------------
    $('#_portfolio').hover(function(){
        $('#_portfolio .icon-container.nav').css("color", "black");
        $('#_portfolio .nav-link').removeClass('white-link');
        $('#_portfolio .nav-link').addClass('jquery_nav-link-BlackColor');
    },
        function(){
            $("#_portfolio .icon-container.nav").css("color", "white");
            $('#_portfolio .nav-link').removeClass('jquery_nav-link-BlackColor');
            $('#_portfolio .nav-link').addClass('white-link');
        }
    );

    // ----------------------- Contact item -------------------------
    $('#_contact').hover(function(){
        $('#_contact .icon-container.nav').css("color", "black");
        $('#_contact .nav-link').removeClass('white-link');
        $('#_contact .nav-link').addClass('jquery_nav-link-BlackColor');
    },
        function(){
            $("#_contact .icon-container.nav").css("color", "white");
            $('#_contact .nav-link').removeClass('jquery_nav-link-BlackColor');
            $('#_contact .nav-link').addClass('white-link');
        }
    );

    // ----------------------- Mega item -------------------------
    $('#_mega').hover(function(){
        $('#_mega .nav-link').removeClass('white-link');
        $('#_mega .nav-link').addClass('jquery_nav-link-BlackColor');
    },
        function(){
            $('#_mega .nav-link').removeClass('jquery_nav-link-BlackColor');
            $('#_mega .nav-link').addClass('white-link');
        }
    );
});

