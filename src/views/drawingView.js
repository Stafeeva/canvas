"strict mode";

(function(exports) {

  function DrawingView(drawing) {
    this.drawing = drawing;
    this.canvas = document.getElementById('draw');
    this.context = this.canvas.getContext('2d');
  }

  DrawingView.prototype.plotCoords = function(x,y) {
    this.context.fillStyle = '#FF0000';
    this.context.fillRect(x,y,-5,-5);
  };

  exports.DrawingView = DrawingView;

})(this);
