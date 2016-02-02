
function Students(coreLanguage) {
  this.coreLanguage = coreLanguage;
}

Students.prototype.pickLanguage = function (input) {
  this.coreLanguage = input;
  return this.coreLanguage;
}

function Portfolio(fullName, Skills, Education) {
  this.fullName = fullName;
  this.Skills = [];
  this.Education = Education;
}

function Skills(firstSkill, secondSkill, thirdSkill) {
  this.firstSkill = firstSkill;
  this.secondSkill = secondSkill;
  this.thirdSkill = thirdSkill;
}

Skills.prototype.allSkills= function() {
  return this.firstSkill + ", " + this.secondSkill + ", " + this.thirdSkill;
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

  $(document).ready(function() {
    $("#portfolioBtn").submit(function(event) {
      event.preventDefault();
      alert("hello");
    //   var inputtedFullName = $("input#full-name").val();
    //   var inputtedEducation = $("input#new-education").val();
    //   var newPortfolio = new Portfolio(inputtedFullName);
    //
    // $("#skills").each(function() {
    //   var inputtedSkillOne = $("input#skill-one").val();
    //   var inputtedSkillTwo = $("input#skill-two").val();
    //   var inputtedSkillThree = $("input#skill-three").val();
    //   var newSkills = new Skills(inputtedSkillOne, inputtedSkillTwo, inputtedSkillThree);
    //   newPortfolio.skillsOutput.push(newSkills);

    // });

    // $("ul#portfolios").append("<li><span class='clickName'>" + newPortfolio + "</span></li>");

  });
});
