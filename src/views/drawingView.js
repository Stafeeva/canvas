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
    console.log("x")
      console.log(x)
      console.log("y")
      console.log(y)

      this.context.beginPath();
      this.context.moveTo(x, y); //start from
      // this.context.lineTo(e.offsetX, e.offsetY); //go to
      this.context.stroke();

      // [lastX, lastY] = [e.offsetX, e.offsetY];

      this.context.fillStyle = '#FF0000';
      this.context.fillRect(x,y,-5,-5);
  };



  exports.DrawingView = DrawingView;

})(this);
