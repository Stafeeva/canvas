"strict mode";

describe("DrawingView", function() {

  var drawing;
  var drawingView;
  var dummyCanvas;

  beforeEach(function() {
    drawing = jasmine.createSpy('drawing');
    dummyCanvas = document.createElement('canvas');
    dummyCanvas.setAttribute('id', 'draw');
    dummyCanvas.setAttribute('context', '2d');
    document['getElementById'] = function(){return dummyCanvas;};
    drawingView = new DrawingView(drawing);
  });

  it("is instantiated with a drawing", function() {
    expect(drawingView.drawing).toEqual(drawing);
  });

});
