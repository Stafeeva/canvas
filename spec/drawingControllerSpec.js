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

    drawing.returnLastCoordinates.and.returnValue([1,100])
    drawingController.addCoordinatesToDrawing(dummyEvent);
    expect(drawing.addCoordinates).toHaveBeenCalled();
    // drawing.returnLastCoordinates.and.callThrough();
  });

  describe('mouse events', function() {

    it("listens for a click event", function() {
      var clickSpy = spyOn(document, "addEventListener")
      drawingController.listenForMouseDown();
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
  })

  describe("colors", function() {
    it('listens for a color change', function() {
      var dummyColor = document.createElement('hex-colors');
      dummyColor.value = 'ff0000';
      document.getElementById = function() {
        return dummyColor;
      };

      var colorSpy = spyOn(dummyColor, "addEventListener")
      drawingController.listenForColorChange();
      expect(colorSpy).toHaveBeenCalled();
    });
  });

  describe("reset", function() {
    it("resets the drawing to a new Drawing", function() {
      drawingController.resetDrawing();
      expect(drawingController.drawingView.drawing).not.toEqual(drawing);
    });
  });
  
  describe("tool-sizes", function() {
    it('listens for a tool size change', function() {
    var dummySize = document.createElement('button')
    dummySize.id = '50'
    document.getElementsByClassName = function() {
      return [dummySize];
    };

    var sizeSpy = spyOn(dummySize, "addEventListener")
    drawingController.listenForToolSizeChange();
    expect(sizeSpy).toHaveBeenCalled();
  });
 };
});

// Should we be testing that addCoordinatesToDrawing is called when the click happens?
