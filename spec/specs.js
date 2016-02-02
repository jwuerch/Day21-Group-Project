describe ("Students", function(){

  it("will create students object based on specific parameters", function(){
    var testStudents = new Students("java");
    expect(testStudents.coreLanguage).to.equal("java");
  });

  it("allow user to select their core language and will display links with job openings", function(){
    var testStudents = new Students("ruby");
    expect(testStudents.pickLanguage("ruby")).to.equal("ruby");
  });
});


describe("Portfolio", function (){
  it("will create student portfolio object with given properties", function () {
  var testPortfolio = new Portfolio("John Senn", "skills", "education");
  expect(testPortfolio.fullName).to.equal("John Senn");
  expect(testPortfolio.Skills).to.eql([]);
  expect(testPortfolio.Education).to.equal("education");
  });
});

describe("Skills", function (){
  it("will create skills object based on user input", function (){
    var testSkills = new Skills("skillOne", "skillTwo", "skillThree");
    expect(testSkills.firstSkill).to.equal("skillOne");
    expect(testSkills.secondSkill).to.equal("skillTwo");
    expect(testSkills.thirdSkill).to.equal("skillThree");
  });

  it("add the allSkills method to all skills entered by the user", function (){
    var testSkills = new Skills("skillOne", "skillTwo", "skillThree");
    expect(testSkills.allSkills()).to.equal("skillOne, skillTwo, skillThree");
  });
});
