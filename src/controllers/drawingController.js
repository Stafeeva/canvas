"strict mode";

(function(exports) {

  function DrawingController(drawing) {
    this.drawing = drawing;
    this.drawingView = new DrawingView(drawing);
  }

  DrawingController.prototype.addCoordinatesToDrawing = function(e) {
    this.drawing.addCoordinates(e.offsetX, e.offsetY);
    this.addToCanvas();
  };

  DrawingController.prototype.listen = function () {
    eventListener.listenForMouseDown(this);
    eventListener.listenForMouseUp(this);
    eventListener.listenForMouseMove(this);
    eventListener.listenForColorChange(this);
    eventListener.listenForReset(this);
  };

  DrawingController.prototype.addToCanvas = function() {
    x = this.drawing.returnLastCoordinates().x;
    y = this.drawing.returnLastCoordinates().y;
    this.drawingView.plotCoords(x, y);
  };

  DrawingController.prototype.updateSize = function(sizeId) {
    this.drawingView.setSize(sizeId);
  }

  DrawingController.prototype.updateColor = function(colorId) {
    this.drawingView.setColor(colorId);
  }

  DrawingController.prototype.resetDrawing = function () {
    this.drawing = new Drawing();
    this.drawingView = new DrawingView(this.drawing);
    this.drawingView.clearCanvas();
  };

   exports.DrawingController = DrawingController;

})(this);
