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

  DrawingController.prototype.listenClick = function() {
    document.addEventListener('click', this.addCoordinatesToDrawing.bind(this));
  };

  DrawingController.prototype.listenForMouseDown = function() {
    var controller = this;
    document.addEventListener('mousedown', function(e) {
      controller.drawingView.isDrawing = true;
      controller.addCoordinatesToDrawing(e.offsetX, e.offsetY);
    });
  };

  DrawingController.prototype.listenForMouseUp = function () {
    var controller = this;
    document.addEventListener('mouseup', function(e) {
      controller.drawingView.isDrawing = false;
    });
  };

  DrawingController.prototype.listenForMouseMove= function () {
    var controller = this;
    document.addEventListener('mousemove', function(e) {
      controller.addCoordinatesToDrawing(e);
    });
  };

  DrawingController.prototype.addToCanvas = function() {
    x = this.drawing.returnLastCoordinates().x;
    y = this.drawing.returnLastCoordinates().y;
    this.drawingView.plotCoords(x, y);
  };

  DrawingController.prototype.listenForColorChange = function() {
    var controller = this;
    var colorOptions = document.getElementById('hex-colors').addEventListener('change', function(e) {
      var color = "#" + e.target.value;
      controller.updateColor(color);
    });
  }

  DrawingController.prototype.updateColor = function(colorId) {
    this.drawingView.setColor(colorId);
  }

  DrawingController.prototype.resetDrawing = function () {
    this.drawing = new Drawing();
    this.drawingView = new DrawingView(this.drawing);
    this.drawingView.clearCanvas();
  };

  DrawingController.prototype.listenForReset = function () {
    var reset = document.getElementById("reset")
    reset.addEventListener('click', this.resetDrawing.bind(this));
  };

   exports.DrawingController = DrawingController;

})(this);
