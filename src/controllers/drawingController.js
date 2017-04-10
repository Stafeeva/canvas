"strict mode";

(function(exports) {

function DrawingController(drawing) {
  this.drawing = drawing;
}

DrawingController.prototype.addCoordinatesToDrawing = function(x, y) {
  this.drawing.addCoordinates(x, y);
}

  exports.DrawingController = DrawingController;
})(this);
