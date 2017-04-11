"strict mode";

describe("DrawingView", function() {

  var drawing;
  var drawingView;

  beforeEach(function() {
    drawing = jasmine.createSpy('drawing');
    drawingView = new DrawingView(drawing);
  });

  it("is instantiated with a drawing", function() {
    expect(drawingView.drawing).toEqual(drawing);
  });
});
