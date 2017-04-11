"strict mode";

describe("DrawingController", function() {

  var drawing;

  beforeEach(function() {
    drawing = jasmine.createSpyObj('drawing', ['addCoordinates'])
    drawingController = new DrawingController(drawing);
  });

  it("adds coordinates to the drawing", function() {
    var dummyEvent = {
      clientX: 155,
      clientY: 45
    };
    drawingController.addCoordinatesToDrawing(dummyEvent);
    expect(drawing.addCoordinates).toHaveBeenCalled()
  });

  it("listens for a click event", function() {
    var clickSpy = spyOn(document, "addEventListener")
    drawingController.listenForMouseDown();
    expect(clickSpy).toHaveBeenCalled();
  });
});

// Should we be testing that addCoordinatesToDrawing is called when the click happens?

// var event = new MouseEvent('click', {
//   'clientX': 144,
//   'clientY': 240
// });

// click = jasmine.createSpy('click')
