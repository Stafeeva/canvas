"strict mode";

(function(exports) {

function DrawingController(drawing) {
  this.drawing = drawing;
  this.drawingView = new DrawingView(drawing);

}

DrawingController.prototype.addCoordinatesToDrawing = function(e) {
  this.drawing.addCoordinates(e.clientX, e.clientY);
  this.addToCanvas(e.clientX, e.clientY);
}

DrawingController.prototype.listenForMouseDown = function() {
  document.addEventListener('click', this.addCoordinatesToDrawing.bind(this));
}

DrawingController.prototype.addToCanvas = function(x, y) {
  this.drawingView.plotCoords(x, y);
}

DrawingController.prototype.listenForColorChange = function() {
  document.getElementById('colors').addEventListener('change', this.updateColor.bind(this));
  }

DrawingController.prototype.updateColor = function() {
  this.drawingView.setColor();
}

  exports.DrawingController = DrawingController;
})(this);
