"strict mode";

(function(exports) {

function DrawingController(drawing) {
  this.drawing = drawing;
}

DrawingController.prototype.addCoordinatesToDrawing = function(e) {
  this.drawing.addCoordinates(e.clientX, e.clientY);
}

DrawingController.prototype.listenForMouseDown = function() {
    document.addEventListener('click', this.addCoordinatesToDrawing.bind(this));
}

  exports.DrawingController = DrawingController;
})(this);
