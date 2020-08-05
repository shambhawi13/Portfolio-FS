$(document).ready(function () {
    $('.sidenav').sidenav();
    $(".dropdown-trigger").dropdown({ closeOnClick: true });
    $('.parallax').parallax();
    $('.tap-target').tapTarget({ isOpen:true });
    $('.tap-target').tapTarget('open');
    $('.tap-target').tapTarget('close');
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

    $('#contact-form').on("submit",function(event){
        event.preventDefault();
        console.log("form submitted");
        let formData = {
            name : $("#first_name").val().trim() + ' ' + $("#last_name").val().trim(),
            email : $("#email").val().trim(),
            phone : $("#phone").val().trim(),
            subject: $("#note").val().trim()
        };
        console.log(formData);
        $.post("/api/sendMail",formData).then(function(res){
            console.log("Done");
        });
        clearForm();
    });

    function clearForm(){
        window.location.reload();
    }
});