describe('trelloGrind app page', function() {

  var JSONwindow;

  beforeEach(function() {
    browser.get('http://localhost:3000/');
    JSONwindow = $('#JSONwindow');
  });

  it('should have a title', function() {
    expect(browser.getTitle()).toEqual("trelloGrind");
  });

  it('should not show the JSON window', function() {
    expect(JSONwindow.isDisplayed()).not.toBeTruthy();
  });

  it('clicking button should show the JSON window', function() {
    browser.findElement(by.buttonText('Submit')).click();
    expect(JSONwindow.isDisplayed()).toBeTruthy();
  });

});
