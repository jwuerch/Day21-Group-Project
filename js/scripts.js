function Company(companyName, industry, desires) {
  this.companyName = companyName;
  this.industry = industry;
  this.desires = desires;
  this.matchedSkills = []
}

Company.prototype.listDesires = function(desires) {
  return this.desires.join(", ")
}

Company.prototype.skillMatch= function(studentSkills) {
for (var i = 0; i < this.desires.length; i++) {
  // debugger;

  for(var x = 0; x < studentSkills.length; x++) {
    if(this.desires[i] === studentSkills[x]) {
      this.matchedSkills.push(studentSkills[x]);
    };
  };
  };
  return this.matchedSkills;

};

function Student(languageList, fullName, skills, education) {
  this.languageList = languageList
  this.fullName = fullName;
  this.skills = skills;
  this.education = education;
};

Student.prototype.allSkills= function() {
  return this.languageList.join(", ");
};

function resetFields() {
  $("input#full-name").val("");
  $("input#new-education").val("");
  $("input#skill-one").val("");
  $("input#skill-two").val("");
  $("input#skill-three").val("");
};



/******************************* JQUERY **************************/


$(document).ready(function() {
    var Jason = new Student(["PHP", "Javascript", "CSS", "HTML"], "Jason W", ["Wordpress", "SEO", "Content Writing"], "Epicodus")
    var Nike = new Company("Nike", "Sports", ["C#", "Javascript", "CSS"])
    var Intel = new Company("Intel", "Tech", ["PHP", "Javascript", "Java"])


  /******* HOMEPAGE ********/
  $(".language-btn").click(function(event) {
    $(".col-sm-4").fadeIn(500);
    event.preventDefault();
    $(".language-links").hide();
    $("#row-2").fadeOut(400);
    $("#row-3").fadeIn(1600).addClass("animated slideInUp");
    $(".sidebar").fadeIn(1600).addClass("animated slideInUp")
    var input = $("#selection").val();

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


    /***** STUDENT PAGE *****/
    $("#new-portfolio").submit(function(event) {
      event.preventDefault();
      $("#portfolios").fadeIn(1600);
      var inputtedFullName = $("input#full-name").val();
      var inputtedEducation = $("input#new-education").val();
      var languageList = []
      var skills = []
      var testStudent = new Student (languageList, inputtedFullName, skills, inputtedEducation);

      /** PUSHES INTO LANGUAGE LIST ARRAY **/
      var inputtedSkillThree = $("input#skill-three").val();
      var inputtedSkillTwo = $("input#skill-two").val();
      var inputtedSkillOne = $("input#skill-one").val();
      languageList.push(inputtedSkillOne);
      languageList.push(inputtedSkillTwo);
      languageList.push(inputtedSkillThree);

      $("ul#portfolios").append("<li><span class='clickName'>" + inputtedFullName + "</span></li>");

      $(".clickName").last().click(function(){
        $("#show-contact").fadeIn(1600);
        $("#show-contact h2").text(testStudent.fullName);
        $(".full-name").text(testStudent.fullName);
        $(".education").text(testStudent.education);
        $("ul#skillsOutput").text(languageList.join(", "));
      });

    resetFields();
  });

  /***** COMPANY PAGE *****/

  $("#new-company").submit(function(event) {
    var companyName = $("#company-name").val();
    var industry = $("#industry").val();
    var skill1 = $("#needed-one").val();
    var skill2 = $("#needed-two").val();
    var skill3 = $("#needed-three").val();
    var testCompany = new Company(companyName, industry, [skill1, skill2, skill3])
    console.log(testCompany)
    $("#new-company").fadeOut(2000);
    $("#match-col").fadeIn(4000);
    $(".cName").text(testCompany.companyName);
    $(".cIndustry").text("Industry :" + testCompany.industry);
    $(".desired-skills").text("Requested Skills: " + testCompany.listDesires())

    $(".sName").text("Student Name: " + Jason.fullName)
    $(".sMatched").text("This student has the following requested skills: ")
    $(".skillListed").text(testCompany.skillMatch(Jason.languageList).join(", "));
    $(".otherSkills").text("Other skills this student has: " + Jason.skills)
    console.log(testCompany.skillMatch(Jason.languageList).join(", "))

    event.preventDefault();
  })
});
