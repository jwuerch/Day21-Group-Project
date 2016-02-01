describe ('Students', function(){
  it("will create students object based on specific parameters", function(){
    var testStudents = new Students("java");
    expect(testStudents.coreLanguage).to.equal("java");
  });

  it("allow user to select their core language and will display links with job openings", function(){
    var testStudents = new Students("java");
    expect(testStudents.languageSelect).to.equal("java");
  });
});
