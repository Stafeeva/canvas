"strict mode";

describe("DrawingView", function() {

  var drawing;
  var drawingView;

  beforeEach(function() {
    console.log('this test');
    drawing = jasmine.createSpy('drawing');
    spyOn(drawingView.canvas, 'getContext');
    drawingView = new DrawingView(drawing);
    console.log(drawingView);

    // dummyCanvas = document.createElement('canvas');
    // dummyCanvas.id = 'draw';
    // dummyCanvas.context = '2d';
  });

  it("is instantiated with a drawing", function() {
    expect(drawingView.drawing).toEqual(drawing);
  });

});
