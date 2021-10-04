$(document).ready(function () {

    $("#about-btn").on("click", function () {
        $(".about-wrapper").addClass('active');
        setTimeout(function () {
            $(".page").hide();
        }, 400);

    })

});
