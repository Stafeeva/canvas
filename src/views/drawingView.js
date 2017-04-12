"strict mode";

(function(exports) {

  function DrawingView(drawing) {
    this.drawing = drawing;
    this.canvas = document.getElementById('draw');
    this.context = this.canvas.getContext('2d');
    this.isDrawing = false;
  }

  DrawingView.prototype.plotCoords = function(x, y) {
    if (!this.isDrawing) return; // break out if false
      this.context.strokeStyle = '#BADA55';
      this.context.lineJoin = 'round';
      this.context.lineCap = 'round';
      this.context.lineWidth = 10;
      this.context.beginPath();
      this.context.moveTo(this.lastX, this.lastY); //start from
      this.context.lineTo(x, y); //go to
      this.context.stroke();

      [this.lastX, this.lastY] = [x, y];

  };

  exports.DrawingView = DrawingView;

})(this);
