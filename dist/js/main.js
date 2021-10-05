$(document).ready(function () {

    $("#about-btn").on("click", function () {
        $(".about-wrapper").addClass('active');
        setTimeout(function () {
            $(".page").hide();
        }, 400);
    })

    $("#back-to-home").on("click", function () {
        $(".about-wrapper").removeClass('active');
        $(".page").show();
    })
});
