

describe("Student", function (){
  var testSkills = new Student(["CSS", "Javascript"], "Alex", ["Marketing", "Accounting"], "Epicodus");

  it("will create a student with the following properties", function (){
    expect(testSkills.languageList).to.eql(["CSS", "Javascript"]);
    expect(testSkills.fullName).to.equal("Alex");
    expect(testSkills.skills).to.eql(["Marketing", "Accounting"]);
    expect(testSkills.education).to.equal("Epicodus")
  });

  it("add the allSkills method to all skills entered by the user", function (){
    expect(testSkills.allSkills()).to.equal("CSS, Javascript");
  });
});

describe("Company", function () {
  var company = new Company("intel", "computers", ["Javascript", "CSS"]);
  var company2 = new Company("intel", "computers", ["Javascript", "Ruby", "CSS"]);

  it("will allow company to input desired candidates skills", function () {
    expect(company.companyName).to.equal('intel');
    expect(company.industry).to.equal('computers');
    expect(company.desires).to.eql(["Javascript", "CSS"]);
  });

  it("will match company needs with student abilities", function () {
    expect(company.skillMatch(["Javascript", "HTML"])).to.eql(["Javascript"]);
  });

  it("will match more than 1 company need with more than 1 student ability", function() {
    expect(company2.skillMatch(["Javascript", "Ruby", "HTML"])).to.eql(["Javascript", "Ruby"]);

  });
});
