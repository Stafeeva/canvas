"strict mode";

describe("DrawingController", function() {

  var drawing;
  var drawingController;

  beforeEach(function() {
    drawing = jasmine.createSpyObj('drawing', ['addCoordinates']);
    drawingController = new DrawingController(drawing);
  });

  it("adds coordinates to the drawing", function() {
    var dummyEvent = {
      clientX: 155,
      clientY: 45
    };
    drawingController.addCoordinatesToDrawing(dummyEvent);
    expect(drawing.addCoordinates).toHaveBeenCalled();
  });


  it("listens for a click event", function() {
    var dummyCanvas = document.createElement("canvas");
    document.getElementById = function() {
      return dummyCanvas;
    }

    var clickSpy = spyOn(document, "addEventListener")
    drawingController.listenForMouseDown();
    expect(clickSpy).toHaveBeenCalled();
  });

  it('listens for a color change', function() {
    var dummyColor = document.createElement('button')
    dummyColor.id = '#ff0000'
    document.getElementsByClassName = function() {
      return [dummyColor];
    }

    var colorSpy = spyOn(dummyColor, "addEventListener")
    drawingController.listenForColorChange();
    expect(colorSpy).toHaveBeenCalled();
  })

  var dummyCanvas = document.createElement("canvas");
  document.getElementById = function() {
    return dummyCanvas;
  };

  it("listens for a click event", function() {
    var clickSpy = spyOn(document, "addEventListener");
    drawingController.listenClick();
    expect(clickSpy).toHaveBeenCalled();
  });

  it("listens for a mousedown event", function() {
    var mouseDownSpy = spyOn(document, "addEventListener");
    drawingController.listenForMouseDown();
    expect(mouseDownSpy).toHaveBeenCalled();
  });

  it("listens for a mouseup event", function() {
    var mouseUpSpy = spyOn(document, "addEventListener");
    drawingController.listenForMouseUp();
    expect(mouseUpSpy).toHaveBeenCalled();
  });

});

// Should we be testing that addCoordinatesToDrawing is called when the click happens?

// var event = new MouseEvent('click', {
//   'clientX': 144,
//   'clientY': 240
// });

// click = jasmine.createSpy('click')
