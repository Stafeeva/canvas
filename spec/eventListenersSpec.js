describe("eventListener", function() {

  var dummyDrawingController;
  eventListener.listenForMouseDown();

  it("listens for a mousedown event", function() {
    var mouseDownSpy = spyOn(document, "addEventListener");
    eventListener.listenForMouseDown(dummyDrawingController);
    expect(mouseDownSpy).toHaveBeenCalled();
  });

  it("listens for a mouseup event", function() {
    var mouseUpSpy = spyOn(document, "addEventListener");
    eventListener.listenForMouseUp(dummyDrawingController);
    expect(mouseUpSpy).toHaveBeenCalled();
  });

  it("listens for a mousemove event", function() {
    var mouseMoveSpy = spyOn(document, "addEventListener");
    eventListener.listenForMouseMove(dummyDrawingController);
    expect(mouseMoveSpy).toHaveBeenCalled();
  });

  it('listens for a color change', function() {
    var dummyColor = document.createElement('button');
    dummyColor.id = '#ff0000';
    document.getElementsByClassName = function() {
      return [dummyColor];
    };
    var colorSpy = spyOn(dummyColor, "addEventListener");
    eventListener.listenForColorChange(dummyDrawingController);
    expect(colorSpy).toHaveBeenCalled();
  });

});
