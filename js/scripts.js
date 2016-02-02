
function Students(coreLanguage) {
  this.coreLanguage = coreLanguage;
}

Students.prototype.pickLanguage = function (input) {
  this.coreLanguage = input;
  return this.coreLanguage;
}

// function contactForm(fullName, city, field) {
//   this.fullName = fullName;
//   this.city = city;
//   this.field = field;
// }
//
// contactForm.prototype.fullcontactForm = function () {
//   return this.fullName +", " + this.city + ", " + this.field;
// }

//
$(document).ready(function() {
  // $("#meetupForm").click(function() {


//  add form to display- use the address book example. update index as well




  $(".language-btn").click(function(event) {
    event.preventDefault();
    $(".language-links").hide();


    $("#row-2").fadeOut(400);
    $("#row-3").fadeIn(1600).addClass("animated slideInUp");

    var input = $("#selection").val()
    if(input === "java") {
      $(".java").fadeIn(500);
    } else if (input === "javascript") {
      $(".javascript").fadeIn(500);
    } else if (input === "ruby") {
      $(".ruby").fadeIn(500);
    } else if (input === "php") {
      $(".php").fadeIn(500);
    } else if (input === "cSharp") {
      $(".cSharp").fadeIn(500);
    } else if (input === "css") {
      $(".css").fadeIn(500);
    };
  });
});
