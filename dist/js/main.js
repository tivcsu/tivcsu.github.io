$(document).ready(function () {


  $("#nav-home").on("click", function () {
    $(".pagination__page").removeClass("active");
    $("#page-home").addClass("active");
  });
  $("#nav-about").on("click", function () {
    $(".pagination__page").removeClass("active");
    $("#page-about").addClass("active");
  });
});
