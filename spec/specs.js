<<<<<<< HEAD
describe("apiCall", function () {
it("will take in search querie and call indeed.com with that value", function () {
  expect(apiCall.status).to.equal(200);
});
=======
describe ('Students', function(){

  it("will create students object based on specific parameters", function(){
    var testStudents = new Students("java");
    expect(testStudents.coreLanguage).to.equal("java");
  });

  it("allow user to select their core language and will display links with job openings", function(){
    var testStudents = new Students("ruby");
    expect(testStudents.pickLanguage("ruby")).to.equal("ruby");
  });
>>>>>>> 185dc0efa7fe5838b86381825ddb932e95c8efdb
});
