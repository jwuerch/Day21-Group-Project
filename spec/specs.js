// describe("apiCall", function () {
// it("will take in search querie and call indeed.com with that value", function () {
//   expect(apiCall.status).to.equal(200);
//   });
// });

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

describe("contactForm", function (){
  it("will create contactForm object given specific properties", function () {
    var testcontactForm = new contactForm ("John Taylor", "Test City", "Test Field Interest");
    expect(testcontactForm.fullName).to.equal("John Taylor");
    expect(testcontactForm.city).to.equal("Test City");
    expect(testcontactForm.field).to.equal("Test Field Interest");
  });
    it("adds the fullcontactForm method to all specifications above", function() {
    var testcontactForm = new contactForm("John Taylor", "Test City","Test Field Interest");
    expect(testcontactForm.fullcontactForm()).to.equal("John Taylor, Test City, Test Field Interest");
  });
});
