"strict mode";

(function(exports) {

  function DrawingView(drawing) {
    this.drawing = drawing;
    this.canvas = document.getElementById('draw');
    this.context = this.canvas.getContext('2d');
    this.colors = '#AB2567';
    this.isDrawing = false;
    this.lineWidth = 10;
  }

  DrawingView.prototype.draw = function(x, y) {
    if (!this.isDrawing) return; // break out if false
      this.defineColor();
      this.defineLineStyle();
      this.addLineBeginPosition();
      this.addLineStroke();
  };

  DrawingView.prototype.addLineBeginPosition = function () {
    this.context.beginPath();
    this.context.moveTo(this.lastX, this.lastY); //start from
  };

  DrawingView.prototype.defineColor = function () {
    this.context.strokeStyle = this.colors;
  };

  DrawingView.prototype.defineLineStyle = function () {
    this.context.lineJoin = 'round';
    this.context.lineCap = 'round';
    this.context.lineWidth = this.lineWidth;
  };

  DrawingView.prototype.addLineStroke = function () {
    this.context.lineTo(x, y); //go to
    this.context.stroke();
    [this.lastX, this.lastY] = [x, y];
  };

  DrawingView.prototype.clearCanvas = function () {
    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height)
  };

  DrawingView.prototype.updateColor = function(colorId) {
    this.colors = colorId;
  }

  DrawingView.prototype.updateSize = function(sizeId) {
    this.lineWidth = sizeId;
  }

  exports.DrawingView = DrawingView;
})(this);
