"strict mode";

describe("DrawingController", function() {

  var drawing;

  beforeEach(function() {
    drawing = jasmine.createSpyObj('drawing', ['addCoordinates'])
    drawingController = new DrawingController(drawing);
  });

  it("adds coordinates to the drawing", function() {
    drawingController.addCoordinatesToDrawing(155,45);
    expect(drawing.addCoordinates).toHaveBeenCalled()
  });
});
