$(document).ready(function () {
  $("#page-home").on("click", function () {
    $(".pagination__page").removeClass("active");
    $(this).addClass("active");
    $("html, body").animate(
      {
        scrollTo: $("#home").offset().left,
      },
      2000
    );
  });
  $("#page-about").on("click", function () {
    $(".pagination__page").removeClass("active");
    $(this).addClass("active");
    $("html, body").animate(
      {
        scrollTo: $("#about").offset().left,
      },
      2000
    );
  });
  $("#page-contact").on("click", function () {
    $(".pagination__page").removeClass("active");
    $(this).addClass("active");
    $("html, body").animate(
      {
        scrollLeft: $("#contact").offset().left,
      },
      2000
    );
  });

  $("#nav-home").on("click", function () {
    $(".pagination__page").removeClass("active");
    $("#page-home").addClass("active");
  });
  $("#nav-about").on("click", function () {
    $(".pagination__page").removeClass("active");
    $("#page-about").addClass("active");
  });
});
