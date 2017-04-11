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

  it('listens for a click event', function() {
    fake = document.elementFromPoint(155, 45).click();
    console.log(document.elementFromPoint(155, 45));
    expect(fake).toEqual(155,45);
  });

  });
