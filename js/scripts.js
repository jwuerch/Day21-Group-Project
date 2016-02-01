

$(function () {
  $("button").click(function () {
    $("#row-2").fadeOut(400);
    $("#row-3").fadeIn(1600);
    $("#row-3").addClass("animated slideInUp");
  });
});
