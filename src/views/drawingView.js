"strict mode";

(function(exports) {

  function DrawingView(drawing) {
    this.drawing = drawing;
    this.canvas = document.getElementById('draw');
    this.context = this.canvas.getContext('2d');
    this.isDrawing = false;
  }

  DrawingView.prototype.plotCoords = function(x, y) {
    // if (!isDrawing) return; // break out if false

    this.context.beginPath();
    this.context.moveTo(x, y); //start from
    // this.context.lineTo(e.offsetX, e.offsetY); //go to
    this.context.stroke();

    this.context.fillStyle = '#FF0000';
    this.context.fillRect(x,y,-5,-5);
  };

  DrawingView.prototype.methodName = function () {
    this.context
  };

  exports.DrawingView = DrawingView;

})(this);
