
function Students(coreLanguage) {
  this.coreLanguage = coreLanguage;
}

Students.prototype.pickLanguage = function (input) {
  this.coreLanguage = input;
  return this.coreLanguage;
}

$(document).ready(function() {
  $(".language-btn").click(function(event) {
    event.preventDefault();


    $("#row-2").fadeOut(400);
    $("#row-3").fadeIn(1600);
    $("#row-3").addClass("animated slideInUp");

    var input = $("#selection").val()
    console.log(input)
    if(input === "java") {
      $("#java").show();
    } else if (input === "javascript") {
      $("#javascript").show();
    } else if (input === "ruby") {
      $("#ruby").show();
    } else if (input === "php") {
      $("#php").show();
    } else if (input === "cSharp") {
      $("#cSharp").show();
    } else if (input === "css") {
      $("#css").show();
    };
  });
});
