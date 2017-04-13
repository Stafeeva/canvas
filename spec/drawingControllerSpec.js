"strict mode";

describe("DrawingController", function() {

  var drawing;
  var drawingController;
  var originalDocument;

  beforeEach(function() {
    originalDocument = document.getElementById;
    drawing = jasmine.createSpyObj('drawing', ['addCoordinates', 'returnLastCoordinates', 'coordinates']);
    dummyCanvas = document.createElement('canvas');
    dummyCanvas.setAttribute('id', 'draw');
    dummyCanvas.setAttribute('context', '2d');
    document['getElementById'] = function() {
      return dummyCanvas;
    };
    drawingController = new DrawingController(drawing);
  });

  afterEach(function() {
    document.getElementById = originalDocument;
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

  describe("undo", function() {
    it("removes the last coordinates being stored in the drawing model", function() {
      var dummyCoordinates =  {
          x: 155,
          y: 45
        };
      drawingController.drawing.coordinates = [dummyCoordinates]
      drawingController.undoLast();
      expect(drawingController.drawing.coordinates.length).toEqual(0)
    });
  });
});
