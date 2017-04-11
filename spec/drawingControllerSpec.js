"strict mode";

describe("DrawingController", function() {

  var drawing;

  beforeEach(function() {
    drawing = jasmine.createSpyObj('drawing', ['addCoordinates'])
    drawingController = new DrawingController(drawing);
  });

  it("adds coordinates to the drawing", function() {
    drawingController.addCoordinatesToDrawing(155, 45);
    expect(drawing.addCoordinates).toHaveBeenCalled()
  });

  it("listens for a click event", function() {
    var clickSpy = spyOn(document, "addEventListener").and.callThrough();
    drawingController.listenForMouseDown();
    expect(clickSpy).toHaveBeenCalled();
  });
});

// var event = {
//   type: 'click'
// }
// var clickSpy = spyOn(event, 'type');

// var event = new MouseEvent('click', {
//   'clientX': 144,
//   'clientY': 240
// });

// click = jasmine.createSpy('click')
