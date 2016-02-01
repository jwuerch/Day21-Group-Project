function Students(coreLanguage) {
  this.coreLanguage = coreLanguage;
}

Students.prototype.pickLanguage = function (input) {
  this.coreLanguage = input;
  return this.coreLanguage;
}

$(document).ready(function() {
  $("form#jobSearch").submit(function(event) {
    $(".ruby").hide();
    $(".cSharp").hide();
    $(".php").hide();
    $(".java").hide();
    $(".javascript").hide();
    $(".css").hide();

    var input = $("#language").val()
    if(input === "java") {
      $(".java").show();
    } else if (input === "javascript") {
      $(".javascript").show();
    } else if (input === "ruby") {
      $(".ruby").show();
    } else if (input === "php") {
      $(".php").show();
    } else if (input === "cSharp") {
      $(".cSharp").show();
    } else if (input === "css")
      $(".css").show();
        event.preventDefault();
    });
  });
