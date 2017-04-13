"strict mode";

(function(exports) {

  function DrawingController(drawing) {
    this.drawing = drawing;
    this.drawingView = new DrawingView(drawing);
  }

  DrawingController.prototype.addCoordinatesToDrawing = function(e, colour, toolSize) {
    this.drawing.addCoordinates(e.offsetX, e.offsetY, colour, toolSize);
    this.addToCanvas();
  };

  DrawingController.prototype.listen = function () {
    eventListener.listenForMouseDown(this, this.drawingView);
    eventListener.listenForMouseUp(this);
    eventListener.listenForMouseOut(this);
    eventListener.listenForMouseMove(this, this.drawingView);
    eventListener.listenForColorChange(this);
    eventListener.listenForReset(this);
    eventListener.listenForSave(this);
    eventListener.listenForToolSizeChange(this);
    eventListener.listenForEraser(this);
    eventListener.listenForUndo(this);

  };

  DrawingController.prototype.addToCanvas = function() {
    x = this.drawing.returnLastCoordinates().x;
    y = this.drawing.returnLastCoordinates().y;
    this.drawingView.draw(x, y);
  };

  DrawingController.prototype.updateSize = function(sizeId) {
    this.drawingView.updateSize(sizeId);
  };

  DrawingController.prototype.updateColor = function(colorId) {
    this.drawingView.updateColor(colorId);
  };

  DrawingController.prototype.resetDrawing = function () {
    this.drawing = new Drawing();
    this.drawingView = new DrawingView(this.drawing);
    this.drawingView.clearCanvas();
  };

  DrawingController.prototype.undoLast = function () {
    this.drawing.coordinates.pop();
    this.drawingView.redrawAll();
  };

  exports.DrawingController = DrawingController;

})(this);
