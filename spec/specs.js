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

describe("Company", function () {
  var company = new Company("intel", "computers", ["Javascript", "CSS"]);
  it("will allow company to input desired candidates skills", function () {
    expect(company.companyName).to.equal('intel');
    expect(company.industry).to.equal('computers');
    expect(company.desires).to.eql(["Javascript", "CSS"]);
  });

  it("will match company needs with student abilities", function () {
    expect(company.skillMatch(["Javascript", "HTML"])).to.eql(["Javascript"]);
  });

  var company2 = new Company("intel", "computers", ["Javascript", "Ruby", "CSS"])
  it("will match more than 1 company need with more than 1 student ability", function() {
    expect(company2.skillMatch(["Javascript", "Ruby", "HTML"])).to.eql(["Javascript", "Ruby"]);

  });
});
