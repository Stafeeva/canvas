"strict mode";

describe("DrawingController", function() {

  var drawing;
  var drawingController;
  var originalDocument;

  beforeEach(function() {
    originalDocument = document.getElementById;
    drawing = jasmine.createSpyObj('drawing', ['addCoordinates', 'returnLastCoordinates']);
    dummyCanvas = document.createElement('canvas');
    dummyCanvas.setAttribute('id', 'draw');
    dummyCanvas.setAttribute('context', '2d');
    document['getElementById'] = function(){return dummyCanvas;};
    drawingController = new DrawingController(drawing);
  });

  afterEach(function() {
    document.getElementById = originalDocument;
  })

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
