$(document).ready(function () {
    $('.sidenav').sidenav();
    $(".dropdown-trigger").dropdown({ closeOnClick: true });
    $('.parallax').parallax();
    $('.carousel').carousel({
        padding: 100
    });
    autoplay();
    function autoplay() {
        $('.carousel').carousel('next');
        setTimeout(autoplay, 1500);
    }

    $('.front-end').on('click',function(){
        window.location.href = '/frontend';
    });
});