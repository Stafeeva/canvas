"strict mode";

describe("DrawingController", function() {

  var drawing;

  beforeEach(function() {
    drawing = jasmine.createSpyObj('drawing', ['addCoordinates']);
    drawingController = new DrawingController(drawing);
  });

  it("adds coordinates to the drawing", function() {
    var dummyEvent = {
      clientX: 155,
      clientY: 45
    };
    drawingController.addCoordinatesToDrawing(dummyEvent);
    expect(drawing.addCoordinates).toHaveBeenCalled();
  });

  var dummyCanvas = document.createElement("canvas");
  document.getElementById = function() {
    return dummyCanvas;
  };

  it("listens for a click event", function() {
    var clickSpy = spyOn(document, "addEventListener");
    drawingController.listenClick();
    expect(clickSpy).toHaveBeenCalled();
  });

  it("listens for a mousedown event", function() {
    var mouseDownSpy = spyOn(document, "addEventListener");
    drawingController.listenForMouseDown();
    expect(mouseDownSpy).toHaveBeenCalled();
  });

  it("listens for a mouseup event", function() {
    var mouseUpSpy = spyOn(document, "addEventListener");
    drawingController.listenForMouseUp();
    expect(mouseUpSpy).toHaveBeenCalled();
  });
});

// Should we be testing that addCoordinatesToDrawing is called when the click happens?

// var event = new MouseEvent('click', {
//   'clientX': 144,
//   'clientY': 240
// });

// click = jasmine.createSpy('click')
