"strict mode";

describe("DrawingController", function() {

  var drawing;
  var drawingController;

  beforeEach(function() {

    drawing = jasmine.createSpyObj('drawing', ['addCoordinates', 'returnLastCoordinates']);
    drawingController = new DrawingController(drawing);
  });

  it("adds coordinates to the drawing", function() {
    var dummyEvent = {
      clientX: 155,
      clientY: 45
    };
    drawing.returnLastCoordinates.and.returnValue([1,100]);
    drawingController.addCoordinatesToDrawing(dummyEvent);
    expect(drawing.addCoordinates).toHaveBeenCalled();
  });

  describe("reset", function() {
    it("resets the drawing to a new Drawing", function() {
      drawingController.resetDrawing();
      expect(drawingController.drawingView.drawing).not.toEqual(drawing);
    });
  });
});

// Should we be testing that addCoordinatesToDrawing is called when the click happens?

// var event = new MouseEvent('click', {
//   'clientX': 144,
//   'clientY': 240
// });

// click = jasmine.createSpy('click')
