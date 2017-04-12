"strict mode";

(function(exports) {

  function DrawingController(drawing) {
    this.drawing = drawing;
    this.drawingView = new DrawingView(drawing);
  }

  DrawingController.prototype.addCoordinatesToDrawing = function(e) {
    this.drawing.addCoordinates(e.clientX, e.clientY);
    console.log(this.drawing)
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
      controller.addToCanvas();
    });
  };

  DrawingController.prototype.addToCanvas = function() {
    x = this.drawing.returnLastCoordinates().x;
    y = this.drawing.returnLastCoordinates().y;
    this.drawingView.plotCoords(x, y);
  };

    exports.DrawingController = DrawingController;
    
})(this);
