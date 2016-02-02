function Company(companyName, industry, desires) {
  this.companyName = companyName;
  this.industry = industry;
  this.desires = desires;
}


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

function resetFields() {
  $("input#full-name").val("");
  $("input#new-education").val("");
  $("input#skill-one").val("");
  $("input#skill-two").val("");
  $("input#skill-three").val("");
}

$(document).ready(function() {
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


    $("#new-portfolio").submit(function(event) {
      event.preventDefault();
      var inputtedSkills = [];
      var inputtedFullName = $("input#full-name").val();
      var inputtedEducation = $("input#new-education").val();
      var newPortfolio = new Portfolio(inputtedFullName, inputtedSkills, inputtedEducation);
      var newEducation = new Portfolio(inputtedEducation);

    $("#skills").each(function() {
      var inputtedSkillOne = $("input#skill-one").val();
      var inputtedSkillTwo = $("input#skill-two").val();
      var inputtedSkillThree = $("input#skill-three").val();
      var newSkills = new Skills(inputtedSkillOne, inputtedSkillTwo, inputtedSkillThree);
      newPortfolio.Skills.push(newSkills);

    });

    $("ul#portfolios").append("<li><span class='clickName'>" + inputtedFullName + "</span></li>");

    $(".clickName").last().click(function(){
      $("#show-contact").show();
      $("#show-contact h2").text(newPortfolio.fullName);
      $(".full-name").text(newPortfolio.fullName);
      console.log(newPortfolio.Education);
      $(".education").text(newPortfolio.Education);
      $("ul#skillsOutput").text("");
      newPortfolio.Skills.forEach(function(skill) {
        $("ul#skillsOutput").append("<li>" + skill.allSkills() + "</li>");
      });
    });

    resetFields();

  });
});
