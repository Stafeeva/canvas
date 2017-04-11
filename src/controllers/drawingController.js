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

DrawingController.prototype.listenClick = function() {
  document.addEventListener('click', this.addCoordinatesToDrawing.bind(this));
}

DrawingController.prototype.listenForMouseDown = function() {
  var controller = this;
  document.addEventListener('mousedown', function(e) {
    controller.addCoordinatesToDrawing
    controller.drawingView.isDrawing = true;
    [lastX, lastY] = [e.offsetX, e.offsetY];
  });
}

DrawingController.prototype.addToCanvas = function(x, y) {
  this.drawingView.plotCoords(x, y);
}

  exports.DrawingController = DrawingController;
})(this);
