"strict mode";

(function(exports) {

  function DrawingView(drawing) {
    this.drawing = drawing;
    this.canvas = document.getElementById('draw');
    this.context = this.canvas.getContext('2d');
    this.colors = '#000';
    this.isDrawing = false;
  }

  DrawingView.prototype.setColor = function(colorId) {
    this.colors = colorId;
  }

  DrawingView.prototype.plotCoords = function(x, y) {
    if (!this.isDrawing) return; // break out if false
      this.context.beginPath();
      this.context.moveTo(x, y); //start from
      // this.context.lineTo(e.offsetX, e.offsetY); //go to
      this.context.stroke();

      // [lastX, lastY] = [e.offsetX, e.offsetY];

      this.context.fillStyle = this.colors;
      this.context.fillRect(x,y,-5,-5);
  };

  DrawingView.prototype.clearCanvas = function () {
    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height)
  };

  exports.DrawingView = DrawingView;

})(this);
